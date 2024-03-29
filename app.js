

// //*Creazione del backend che gestisce l'indirizzamento delle pagine



/* eslint-disable no-unused-vars */
require('dotenv').config();

const fetch = require('node-fetch');
const logger = require('morgan');
const path = require('path');
const express = require('express');
const errorHandler = require('errorhandler');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
const port = process.env.PORT || 3000;

const Prismic = require('@prismicio/client');
const PrismicH = require('@prismicio/helpers');
const { application } = require('express');
const UAParser = require('ua-parser-js');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(errorHandler());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

// Initialize the prismic.io api
const initApi = (req) => {
  return Prismic.createClient(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    req,
    fetch,
  });
};

// Link Resolver
const HandleLinkResolver = (doc) => {
  if (doc.type === 'project') {
    return `/project/${doc.slug}`;
  }

  if (doc.type === 'about') {
    return `/about`;
  }

  // Default to homepage
  return '/';
};

// Middleware to inject prismic context
app.use((req, res, next) => {
  const ua = UAParser(req.headers['user-agent']);

  res.locals.isDesktop = ua.device.type === undefined;
  res.locals.isPhone = ua.device.type === 'mobile';
  res.locals.isTablet = ua.device.type === 'tablet';


  console.log(res.locals.isDesktop, res.locals.isPhone, res.locals.isTablet)

  res.locals.Link = HandleLinkResolver;
  res.locals.PrismicH = PrismicH;
  res.locals.Numbers = (index) => {
    return index === 0
      ? 'One'
      : index === 1
        ? 'Two'
        : index === 2
          ? 'Three'
          : index === 3
            ? 'Four'
            : '';
  };

  next();
});

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.locals.basedir = app.get('views');

const handleRequest = async (api) => {
  const [preloader, navigation, about, home, project, { results: projects }] =
    await Promise.all([
      // api.getSingle('meta'),
      api.getSingle('preloader'),
      api.getSingle('navigation'),
      api.getSingle('about'),
      api.getSingle('home'),
      api.getSingle('project'),
      api.query(Prismic.Predicates.at('document.type', 'project'), {
        fetchLinks: 'project.image',
      }),
    ]);


  const assets = [];

  

  projects.forEach((project) => {
    assets.push(project.data.image.url);
    project.data.body.forEach((section) => {
      if (section.slice_type === 'content') {
        assets.push(section.primary.content_image.url)
      }
    })

    project.data.body.forEach((section) => {
      if (section.slice_type === 'design') {
        section.items.forEach((item) => {
          assets.push(item.media.url)
        })
      }
    })

    project.data.body.forEach((section) => {
      if (section.slice_type === 'mobile') {
        section.items.forEach((item) => {
          assets.push(item.picture.url)
        })
      }
    })

  })

  assets.push(about.data.image.url)

 

  return {
    assets,
    // meta,
    preloader,
    navigation,
    home,
    about,
    project,
    projects,
  };
};

app.get('/', async (req, res) => {
  const api = await initApi(req);
  const defaults = await handleRequest(api);

  res.render('pages/home', {
    ...defaults,
  });
});

app.get('/about', async (req, res) => {
  const api = await initApi(req);
  const defaults = await handleRequest(api);
 


  res.render('pages/about', {
    ...defaults,
  });
});

app.get('/project/:uid', async (req, res) => {
  const api = await initApi(req);
  const defaults = await handleRequest(api);

  const project = await api.getByUID('project', req.params.uid, {

  });
  res.render('pages/project', {
    ...defaults,
    project,
  });
});

app.listen(port,'0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


