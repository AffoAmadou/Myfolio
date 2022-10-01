

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
// { results: collections }
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

  //   console.log(about, home, collections);

  const assets = [];

  // home.data.gallery.forEach((item) => {
  //   assets.push(item.image.url);
  // });

  // about.data.gallery.forEach((item) => {
  //   assets.push(item.image.url);
  // });

  // about.data.body.forEach((section) => {
  //   if (section.slice_type === 'gallery') {
  //     section.items.forEach((item) => {
  //       assets.push(item.image.url);
  //     });
  //   }
  // });

  // collections.forEach((collection) => {
  //   collection.data.products.forEach((item) => {
  //     assets.push(item.products_product.data.image.url);
  //   });
  // });

  // console.log(assets);

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
  console.log(defaults.about.data)

  //   const about =defaults.about
  //  console.log(about)
  res.render('pages/about', {
    ...defaults,
  });
});

// app.get('/collections', async (req, res) => {
//   const api = await initApi(req);
//   const defaults = await handleRequest(api);
//   // console.log(defaults.collections)

// // defaults.collections.forEach(collection=>{
// //   console.log(collection.data.products[0].products_product)
// //   console.log("riopoipopopoppmmuzuzuznnnnnnavFEWFWEFWEFEWFEWFEW")
// // })

// // console.log(collections)
//   res.render('pages/collections', {
//     ...defaults,
//   });
// });



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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// "start": "concurrently --kill-others \"npm run backend:development\" \"npm run frontend:development\""
