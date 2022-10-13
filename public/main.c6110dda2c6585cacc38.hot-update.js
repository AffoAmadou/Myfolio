/*! For license information please see main.c6110dda2c6585cacc38.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatestarter("main",{"./app/index.js":(e,t,s)=>{s.r(t);var a=s("./app/pages/About/index.js"),n=s("./app/pages/Projects/index.js"),i=s("./node_modules/lodash/each.js"),o=s.n(i),r=s("./app/pages/Home/index.js"),h=s("./app/components/Preloader.js");s("./app/classes/Detection.js");Object(function(){var e=new Error("Cannot find module 'components/Canvas'");throw e.code="MODULE_NOT_FOUND",e}());new class{constructor(){this.createContent(),this.createPreloader(),this.createPages(),this.createCanvas(),this.addEventListeners(),this.addLinkListeners(),this.update()}createPreloader(){this.preloader=new h.default,this.preloader.once("complete",this.onPreloaded.bind(this))}createCanvas(){this.canvas=new Object(function(){var e=new Error("Cannot find module 'components/Canvas'");throw e.code="MODULE_NOT_FOUND",e}())()}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new a.default,home:new r.default,project:new n.default},this.page=this.pages[this.template],this.page.create()}onPreloaded(){this.preloader.destroy(),this.onResize(),this.page.show()}onPopState(){this.onChange({url:window.location.pathname,push:!1})}async onChange({url:e,push:t=!0}){await this.page.hide();const s=await window.fetch(e);if(200===s.status){const a=await s.text(),n=document.createElement("div");t&&window.history.pushState({},"",e),n.innerHTML=a;const i=n.querySelector(".content");this.template=i.getAttribute("data-template"),this.content.setAttribute("data-template",this.template),this.content.innerHTML=i.innerHTML,this.page=this.pages[this.template],this.page.create(),this.onResize(),this.page.show(),this.addLinkListeners()}else console.log("error")}onResize(){this.canvas&&this.canvas.onResize&&this.canvas.onResize(),this.page&&this.page.onResize&&this.page.onResize()}update(){this.canvas&&this.canvas.update&&this.canvas.update(),this.page&&this.page.update&&this.page.update(),this.frame=window.requestAnimationFrame(this.update.bind(this))}addEventListeners(){window.addEventListener("popstate",this.onPopState.bind(this)),window.addEventListener("resize",this.onResize.bind(this))}addLinkListeners(){const e=document.querySelectorAll("a");o()(e,(e=>{e.onclick=t=>{const{href:s}=e;t.preventDefault(),this.onChange({url:s})}}))}}}},(function(e){e.h=()=>"0bc4eb77126cb1779f57"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFFTmhFLEtBQUtpQyxTQUFTLENBQUVDLElBQUs2QixHQUFyQixDQUpKLEdBUVAsa0JDaktMRSxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcnRlci8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdGFydGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgSW1wb3J0byBsZSBkaXZlcnNlIHBhZ2luZSBzYXBlbmRvIGNoZSBhbGwnaW50ZXJubyBjaSBzb25vIGRlZ2xpIGluZGV4IHF1aW5kaVxyXG4vLyEgTmVzc3VuIGJpc29nbm8gZGkgY2hpYW1hcmUgaWwgZmlsZSBpbnRlcm9cclxuXHJcbmltcG9ydCBBYm91dCBmcm9tICdwYWdlcy9BYm91dCdcclxuaW1wb3J0IFByb2plY3QgZnJvbSAncGFnZXMvUHJvamVjdHMnXHJcbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xyXG5pbXBvcnQgSG9tZSBmcm9tICdwYWdlcy9Ib21lJ1xyXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJ2NvbXBvbmVudHMvUHJlbG9hZGVyJ1xyXG5pbXBvcnQgRGV0ZWN0aW9uIGZyb20gJ2NsYXNzZXMvRGV0ZWN0aW9uJ1xyXG5cclxuXHJcbmltcG9ydCBDYW52YXMgZnJvbSAnY29tcG9uZW50cy9DYW52YXMnXHJcbi8vKiBJTVBPUlRPIEdMSSBJTkRFWCBQUkVTRU5USSBORUxMRSBDQVJURUxMRVxyXG5cclxuY2xhc3MgQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQ29udGVudCgpIC8vISBRdWVzdG8gbWV0b2RvIG1pIHBlcm1ldHRlIGRpIGNyZWFyZSBpbCBjb250ZW50IGUgY29zaSBkYSByZWN1cGVyYXJlIGlsIGRhdGEtdGVtcGxhdGUgXHJcbiAgICAgICAgLy8hIEUgcGVyY2lvIHNhcGVyZSBpbiBjaGUgcGFnaW5hIG1pIHRyb3ZvXHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlUHJlbG9hZGVyKClcclxuICAgICAgICAvLyB0aGlzLmNyZWF0ZU5hdmlnYXRpb24oKVxyXG4gICAgICAgIHRoaXMuY3JlYXRlUGFnZXMoKVxyXG4gICAgICAgIHRoaXMuY3JlYXRlQ2FudmFzKClcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcclxuICAgICAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAvLypFdmVudHNcclxuICAgICAqL1xyXG4gICAgY3JlYXRlUHJlbG9hZGVyKCkge1xyXG4gICAgICAgIHRoaXMucHJlbG9hZGVyID0gbmV3IFByZWxvYWRlcigpXHJcblxyXG4gICAgICAgIC8vKkV2ZW50IEVtaXR0ZXIgcXVhbmRvIGlsIHByZWxvYWRlciBoYSBjYXJpY2F0byBsZSBpbW1hZ2luaSBjaGlhbW8gaWwgbWV0b2RvIGNoZSBzdGEgcXVpIHNvdHRvXHJcbiAgICAgICAgdGhpcy5wcmVsb2FkZXIub25jZSgnY29tcGxldGUnLCB0aGlzLm9uUHJlbG9hZGVkLmJpbmQodGhpcykpXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQ2FudmFzKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gbmV3IENhbnZhcygpXHJcbiAgICB9XHJcbiAgICBjcmVhdGVDb250ZW50KCkge1xyXG4gICAgICAgIC8vP1F1aSBlc2VndW8gaWwgY3JlYXRlIGNvbnRlbnQgcGVyIHNhcGVyZSBpbiBxdWFsZSBwYWdpbmEgbWkgdHJvdm8gYXR0dWFsbWVudGVcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudGVtcGxhdGUpXHJcbiAgICB9XHJcblxyXG4gICAgLy8/IEkgcXVlc3RvIG1vZG8gY3JlbyBsJ29nZ2V0dG8gUEFHSU5BXHJcbiAgICBjcmVhdGVQYWdlcygpIHtcclxuICAgICAgICB0aGlzLnBhZ2VzID0ge1xyXG4gICAgICAgICAgICBhYm91dDogbmV3IEFib3V0KCksXHJcbiAgICAgICAgICAgIGhvbWU6IG5ldyBIb21lKCksXHJcbiAgICAgICAgICAgIHByb2plY3Q6IG5ldyBQcm9qZWN0KCksIC8vIUlsIG5vbWUgY29sb3JhdG8gZGV2ZSBlc3NlcmUgdWd1YWxlIGEgbm9tZSBkYXRvIG5lbCB0ZW1wbGF0ZSBcclxuICAgICAgICAgICAgLy8gZGV0YWlsOiBuZXcgRGV0YWlsKCksXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdIC8vP0lOU0VSSVNDTyBMQSBQQUdJTkEgSU4gQ1VJIFNPTk8gQVRUVUFMTUVOVEVcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBhZ2UpXHJcbiAgICAgICAgdGhpcy5wYWdlLmNyZWF0ZSgpIC8vPyBDaGlhbW8gaWwgY3JlYXRlIG5lbGxhIGNsYXNzZSBwYWdlIGNoZSDDqSBsZWdhdGEgYWQgb2dudW5hIGRlbGxlIHBhZ2luZVxyXG5cclxuICAgICAgICAvLyB0aGlzLnBhZ2UuaGlkZSgpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uUHJlbG9hZGVkKCkge1xyXG4gICAgICAgIHRoaXMucHJlbG9hZGVyLmRlc3Ryb3koKVxyXG4gICAgICAgIHRoaXMub25SZXNpemUoKVxyXG4gICAgICAgIHRoaXMucGFnZS5zaG93KClcclxuICAgIH1cclxuXHJcbiAgICBvblBvcFN0YXRlKCkge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2Uoe1xyXG4gICAgICAgICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcclxuICAgICAgICAgICAgcHVzaDogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uQ2hhbmdlKHsgdXJsLCBwdXNoID0gdHJ1ZSB9KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codXJsKVxyXG4gICAgICAgIGF3YWl0IHRoaXMucGFnZS5oaWRlKClcclxuXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IHdpbmRvdy5mZXRjaCh1cmwpXHJcblxyXG4gICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7IC8vITIwMCA9IHBhZ2luYSBiZW4gY2FyaWNhdGFcclxuICAgICAgICAgICAgY29uc3QgaHRtbCA9IGF3YWl0IHJlcXVlc3QudGV4dCgpIC8vIXJlY3VwZXJvIGlsIGNvbnRlbnV0byBkZWxsYSBwYWdpbmFcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIC8vIUNyZW8gdW5hIGRpdiBwZXIgbWV0dGVyY2kgbGEgcGFydGUgZGVsIFwiaHRtbFwiIGNoZSB2b2dsaW9cclxuICAgICAgICAgICAgLy8hY29zaSBkYSBub24gbWV0dGVyZSBhbmNoZSBpIGRvY3R5cGUgZXRjIFxyXG5cclxuICAgICAgICAgICAgaWYgKHB1c2gpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIHVybClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IGh0bWxcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkaXYucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS8vISBSZWN1cGVybyBzb2xvIGlsIC5jb250ZW50IGNoZSBjb250aWVuZSBsYSBwYXJ0ZSBkaSBkaXZzIGNoZSBjYW1iaWEgaW4gb2duaSBwYWdpbmFcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGUgPSBkaXZDb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpXHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnLCB0aGlzLnRlbXBsYXRlKTsvLypDYW1iaW8gaWwgZGF0YS10ZW1wbGF0ZSBwZXIgZmFyIHNhcGVyZSBjaGUgc29ubyBpbiBxdWVzdGEgcGFnaW5hIGF0dHVhbG1lbnRlXHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MID0gZGl2Q29udGVudC5pbm5lckhUTUwgLy8hIEUgbG8gaW5zZXJpc2NvIG5lbCBjb250ZW50IGRlbGxhIHBhZ2luYSBpbiBjdWkgc29ubyBvcmFcclxuICAgICAgICAgICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXSAvLyFSaWFzc2Vnbm8gbGEgcGFnaW5hXHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5wYWdlLmNyZWF0ZSgpIC8vPyBDaGlhbW8gaWwgY3JlYXRlIG5lbGxhIGNsYXNzZSBwYWdlIGNoZSDDqSBsZWdhdGEgYWQgb2dudW5hIGRlbGxlIHBhZ2luZVxyXG5cclxuICAgICAgICAgICAgdGhpcy5vblJlc2l6ZSgpXHJcblxyXG4gICAgICAgICAgICB0aGlzLnBhZ2Uuc2hvdygpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25SZXNpemUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uUmVzaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLm9uUmVzaXplKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLm9uUmVzaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZS5vblJlc2l6ZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMudXBkYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnVwZGF0ZSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS51cGRhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlLnVwZGF0ZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAvLypMSVNURU5FUlNcclxuICAgICAqL1xyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlLmJpbmQodGhpcykpXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSlcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaW5rTGlzdGVuZXJzKCkge1xyXG4gICAgICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpIC8vISBSZWN1cGVybyB0dXR0aSBpIGxpbmsgZGVsbGEgcGFnaW5hIFxyXG5cclxuICAgICAgICBlYWNoKGxpbmtzLCBsaW5rID0+IHtcclxuICAgICAgICAgICAgbGluay5vbmNsaWNrID0gZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBocmVmIH0gPSBsaW5rXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpIC8vIWFsbCBjbGljayBub24gZXNlZ3VvIGlsIGNhbWJpbyBkaSBwYWdpbmEgY29tZSBkb3ZyZWJiZSBlc3NlcmVyXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSh7IHVybDogaHJlZiB9KS8vKkZ1bnppb25lIGNoZSBzaSB0cm92YSBzb3ByYSBQZXIgZ2VzdGlyZSBpbCBjYW1iaW8gZGkgcGFnaW5hXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudCwgaHJlZilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbm5ldyBBcHAoKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjBiYzRlYjc3MTI2Y2IxNzc5ZjU3XCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwidGhpcyIsImNyZWF0ZUNvbnRlbnQiLCJjcmVhdGVQcmVsb2FkZXIiLCJjcmVhdGVQYWdlcyIsImNyZWF0ZUNhbnZhcyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiYWRkTGlua0xpc3RlbmVycyIsInVwZGF0ZSIsInByZWxvYWRlciIsIlByZWxvYWRlciIsIm9uY2UiLCJvblByZWxvYWRlZCIsImJpbmQiLCJjYW52YXMiLCJDYW52YXMiLCJjb250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGVtcGxhdGUiLCJnZXRBdHRyaWJ1dGUiLCJwYWdlcyIsImFib3V0IiwiQWJvdXQiLCJob21lIiwiSG9tZSIsInByb2plY3QiLCJQcm9qZWN0IiwicGFnZSIsImNyZWF0ZSIsImRlc3Ryb3kiLCJvblJlc2l6ZSIsInNob3ciLCJvblBvcFN0YXRlIiwib25DaGFuZ2UiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicHVzaCIsImhpZGUiLCJyZXF1ZXN0IiwiZmV0Y2giLCJzdGF0dXMiLCJodG1sIiwidGV4dCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiaW5uZXJIVE1MIiwiZGl2Q29udGVudCIsInNldEF0dHJpYnV0ZSIsImNvbnNvbGUiLCJsb2ciLCJmcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlYWNoIiwibGluayIsIm9uY2xpY2siLCJldmVudCIsImhyZWYiLCJwcmV2ZW50RGVmYXVsdCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==