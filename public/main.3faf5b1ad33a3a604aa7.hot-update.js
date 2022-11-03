/*! For license information please see main.3faf5b1ad33a3a604aa7.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatestarter("main",{"./app/components/Canvas/Home/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var i=s("./node_modules/ogl/src/core/Program.js"),r=s("./node_modules/ogl/src/core/Mesh.js"),o=s("./app/shaders/home-fragment.glsl"),n=s("./app/shaders/home-vertex.glsl"),h=s("./node_modules/gsap/index.js");class l{constructor({element:e,geometry:t,gl:s,index:i,scene:r,sizes:o}){this.element=e,this.geometry=t,this.gl=s,this.scene=r,this.index=i,this.sizes=o,this.createTexture(),this.createProgram(),this.createMesh(),this.extra={x:0,y:0}}createTexture(){const e=this.element.querySelector(".home__gallery__media__image");this.texture=window.TEXTURES[e.getAttribute("data-src")]}createProgram(){this.program=new i.Program(this.gl,{fragment:o.default,vertex:n.default,uniforms:{uAlpha:{value:0},uSpeed:{value:0},uViewportSizes:{value:[this.sizes.width,this.sizes.height]},tMap:{value:this.texture}}})}createMesh(){this.mesh=new r.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene),this.mesh.scale.x=2}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX(),this.updateY()}show(){h.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:1})}hide(){h.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(e,t){this.extra={x:0,y:0},this.createBounds(e),this.updateX(t&&t.x),this.updateY(t&&t.y)}updateScale(){this.width=this.bounds.width/window.innerWidth,this.height=this.bounds.height/window.innerHeight,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(e=0){this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}updateY(e=0){this.y=(this.bounds.top+e)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height+this.extra.y}update(e,t){this.bounds&&(this.updateX(e),this.updateY(),this.program.uniforms.uSpeed.value=t)}}},"./app/components/Canvas/Home/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var i=s("./node_modules/lodash/lodash.js"),r=s("./node_modules/ogl/src/core/Transform.js"),o=s("./node_modules/ogl/src/extras/Plane.js"),n=s("./app/components/Canvas/Home/Media.js"),h=s("./node_modules/prefix/index.js"),l=s.n(h),a=s("./node_modules/gsap/index.js");const d=class{constructor({gl:e,scene:t,sizes:s}){this.gl=e,this.sizes=s,this.scene=t,this.group=new r.Transform,this.galleryElement=document.querySelector(".home__gallery"),this.galleryElementWrapper=document.querySelector(".home__gallery__wrapper"),this.mediasElements=document.querySelectorAll(".home__gallery__media"),this.projectsElementsActive="home__article--active",this.projectsElements=document.querySelectorAll(".home__article"),this.projectsTitle=document.querySelectorAll(".home__title__article"),this.projectsTitleActive="home__title__article--active",this.transformPrefix=l()("transform"),this.scroll={current:0,target:0,start:0,lerp:.1,last:0,velocity:1},this.speed={target:0,current:0,lerp:.1},this.createGeometry(),this.createGallery(),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new o.Plane(this.gl,{widthSegments:20,heightSegments:20})}createGallery(){this.medias=(0,i.map)(this.mediasElements,((e,t)=>new n.default({element:e,geometry:this.geometry,index:t,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){(0,i.map)(this.medias,(e=>e.show()))}hide(){(0,i.map)(this.medias,(e=>e.hide()))}onResize(e){this.sizes=e.sizes,this.bounds=this.galleryElementWrapper.getBoundingClientRect(),this.scroll.last=this.scroll.target=0,(0,i.map)(this.medias,(t=>t.onResize(e,this.scroll))),this.scroll.limit=this.bounds.width-this.medias[0].element.clientWidth}onTouchDown({x:e,y:t}){this.speed.target=1,this.scroll.last=this.scroll.current}onTouchMove({x:e,y:t}){const s=e.start-e.end;this.scroll.target=this.scroll.last-s}onTouchUp({x:e,y:t}){this.speed.target=0}onWheel({pixelY:e}){this.scroll.target+=e}onChange(e){this.index=e,console.log(this.mediasElements.length),this.index===this.mediasElements.length&&(this.index=this.index-1);const t=parseInt(this.mediasElements[this.index].getAttribute("data-index"));(0,i.map)(this.projectsElements,((e,s)=>{s===t?e.classList.add(this.projectsElementsActive):e.classList.remove(this.projectsElementsActive)})),(0,i.map)(this.projectsTitle,((e,s)=>{console.log(s,t),s===t?e.classList.add(this.projectsTitleActive):e.classList.remove(this.projectsTitleActive)}))}update(){if(!this.bounds)return;this.speed.current=a.default.utils.interpolate(this.speed.current,this.speed.target,this.speed.lerp),this.scroll.target=a.default.utils.clamp(-this.scroll.limit,0,this.scroll.target),this.scroll.current=a.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.galleryElement.style[this.transformPrefix]=`translateX(${this.scroll.current}px)`,this.scroll.last=this.scroll.current,(0,i.map)(this.medias,((e,t)=>{e.update(this.scroll.current,this.speed.current)}));const e=Math.floor(Math.abs(this.scroll.current/this.scroll.limit)*this.medias.length);this.index!==e&&this.onChange(e)}destroy(){this.scene.removeChild(this.group)}}},"./app/shaders/home-fragment.glsl":(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});const i="precision highp float;\n#define GLSLIFY 1\n\nuniform float uAlpha;\nuniform sampler2D tMap;\n\nvarying vec2 vUv;\nvoid main() {\n    vec4 texture = texture2D(tMap, vUv);\n    gl_FragColor = texture;\n    gl_FragColor.a = uAlpha;\n}"},"./app/shaders/home-vertex.glsl":(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});const i="#define GLSLIFY 1\n#define PI 3.1415926535897932384626433832795\n\nattribute vec2 uv;\nattribute vec3 position;\n\nuniform float uSpeed;\nuniform vec2 uViewportSizes;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying vec2 vUv;\n\nvoid main() {\n    vUv = uv;\n\n    vec4 newPosition = modelViewMatrix * vec4(position, 1.0);\n\n    // newPosition.z += cos(position.x * PI);\n\n    // newPosition.z += sin(newPosition.y / uViewportSizes.y * PI + PI / 2.0) * abs(uSpeed);\n    // newPosition.z += sin(newPosition.x / uViewportSizes.y * PI + PI / 4.0);\n    // newPosition.z -= sin((newPosition.x / uViewportSizes.y) + (newPosition.y / uViewportSizes.x) * PI + PI / 2.0);\n    newPosition.z -= sin((newPosition.x / uViewportSizes.y) * PI + PI / 2.0) * abs(1.0 + uSpeed);\n\n    gl_Position = projectionMatrix * newPosition;\n}"}},(function(e){e.h=()=>"45727f1d5a911f69f7b2"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU9zQixPQUFRN0QsS0FBS3VDLE9BQU93QixNQUVsRy9ELEtBQUtpRCxlQUFlNkMsTUFBTTlGLEtBQUswRCxpQkFBb0IsY0FBYTFELEtBQUt1QyxPQUFPcUIsYUFHNUU1RCxLQUFLdUMsT0FBT3lCLEtBQU9oRSxLQUFLdUMsT0FBT3FCLFNBRy9CWSxFQUFBQSxFQUFBQSxLQUFJeEUsS0FBS3VFLFFBQVEsQ0FBQ0UsRUFBTzVFLEtBQ3JCNEUsRUFBTTVCLE9BQU83QyxLQUFLdUMsT0FBT3FCLFFBQVM1RCxLQUFLOEMsTUFBTWMsUUFBN0MsSUFHSixNQUFNL0QsRUFBUWtHLEtBQUtDLE1BQU1ELEtBQUtFLElBQUlqRyxLQUFLdUMsT0FBT3FCLFFBQVU1RCxLQUFLdUMsT0FBT29DLE9BQVMzRSxLQUFLdUUsT0FBT2dCLFFBR3JGdkYsS0FBS0gsUUFBVUEsR0FDZkcsS0FBS29GLFNBQVN2RixFQUVyQixDQUtEcUcsVUFDSWxHLEtBQUtGLE1BQU1xRyxZQUFZbkcsS0FBSytDLE1BQy9CLCtFQ2pNTCw0VENBQSwwMkJDQUFxRCxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcnRlci8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lL01lZGlhLmpzIiwid2VicGFjazovL3N0YXJ0ZXIvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvSG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdGFydGVyLy4vYXBwL3NoYWRlcnMvaG9tZS1mcmFnbWVudC5nbHNsIiwid2VicGFjazovL3N0YXJ0ZXIvLi9hcHAvc2hhZGVycy9ob21lLXZlcnRleC5nbHNsIiwid2VicGFjazovL3N0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lc2gsIFByb2dyYW0sIFRleHR1cmUgfSBmcm9tICdvZ2wnXHJcblxyXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnc2hhZGVycy9ob21lLWZyYWdtZW50Lmdsc2wnXHJcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9ob21lLXZlcnRleC5nbHNsJ1xyXG5cclxuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGdsLCBpbmRleCwgc2NlbmUsIHNpemVzIH0pIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XHJcbiAgICAgICAgdGhpcy5nbCA9IGdsXHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lXHJcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4XHJcbiAgICAgICAgdGhpcy5zaXplcyA9IHNpemVzXHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlVGV4dHVyZSgpXHJcbiAgICAgICAgdGhpcy5jcmVhdGVQcm9ncmFtKClcclxuICAgICAgICB0aGlzLmNyZWF0ZU1lc2goKVxyXG5cclxuICAgICAgICB0aGlzLmV4dHJhID0ge1xyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY3JlYXRlVGV4dHVyZSgpIHtcclxuICAgICAgICBjb25zdCBpbWFnZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fZ2FsbGVyeV9fbWVkaWFfX2ltYWdlJylcclxuICAgICAgICB0aGlzLnRleHR1cmUgPSB3aW5kb3cuVEVYVFVSRVNbaW1hZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVByb2dyYW0oKSB7XHJcblxyXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcclxuICAgICAgICAgICAgZnJhZ21lbnQsXHJcbiAgICAgICAgICAgIHZlcnRleCxcclxuICAgICAgICAgICAgdW5pZm9ybXM6IHtcclxuICAgICAgICAgICAgICAgIHVBbHBoYTogeyB2YWx1ZTogMCB9LFxyXG4gICAgICAgICAgICAgICAgdVNwZWVkOiB7IHZhbHVlOiAwIH0sXHJcbiAgICAgICAgICAgICAgICB1Vmlld3BvcnRTaXplczogeyB2YWx1ZTogW3RoaXMuc2l6ZXMud2lkdGgsIHRoaXMuc2l6ZXMuaGVpZ2h0XSB9LFxyXG4gICAgICAgICAgICAgICAgdE1hcDogeyB2YWx1ZTogdGhpcy50ZXh0dXJlIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU1lc2goKSB7XHJcbiAgICAgICAgdGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xyXG4gICAgICAgICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcclxuICAgICAgICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxyXG5cclxuICAgICAgICB0aGlzLm1lc2guc2NhbGUueCA9IDJcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVCb3VuZHMoeyBzaXplcyB9KSB7XHJcbiAgICAgICAgdGhpcy5zaXplcyA9IHNpemVzXHJcblxyXG4gICAgICAgIHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlU2NhbGUoKVxyXG4gICAgICAgIHRoaXMudXBkYXRlWCgpXHJcbiAgICAgICAgdGhpcy51cGRhdGVZKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQW5pbWF0aW9uc1xyXG4gICAgICovXHJcblxyXG5cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgR1NBUC5mcm9tVG8odGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSwge1xyXG4gICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdmFsdWU6IDFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgR1NBUC50byh0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLCB7XHJcbiAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICAqIEV2ZW50c1xyXG4gICAgICAqL1xyXG4gICAgb25SZXNpemUoc2l6ZXMsIHNjcm9sbCkge1xyXG4gICAgICAgIHRoaXMuZXh0cmEgPSB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jcmVhdGVCb3VuZHMoc2l6ZXMpXHJcbiAgICAgICAgdGhpcy51cGRhdGVYKHNjcm9sbCAmJiBzY3JvbGwueClcclxuICAgICAgICB0aGlzLnVwZGF0ZVkoc2Nyb2xsICYmIHNjcm9sbC55KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTE9PUFxyXG4gICAgICovXHJcbiAgICB1cGRhdGVTY2FsZSgpIHtcclxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XHJcblxyXG4gICAgICAgIHRoaXMubWVzaC5zY2FsZS54ID0gdGhpcy5zaXplcy53aWR0aCAqIHRoaXMud2lkdGhcclxuICAgICAgICB0aGlzLm1lc2guc2NhbGUueSA9IHRoaXMuc2l6ZXMuaGVpZ2h0ICogdGhpcy5oZWlnaHRcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVYKHggPSAwKSB7XHJcbiAgICAgICAgdGhpcy54ID0gKHRoaXMuYm91bmRzLmxlZnQgKyB4KSAvIHdpbmRvdy5pbm5lcldpZHRoXHJcbiAgICAgICAgdGhpcy5tZXNoLnBvc2l0aW9uLnggPSAoLXRoaXMuc2l6ZXMud2lkdGggLyAyKSArICh0aGlzLm1lc2guc2NhbGUueCAvIDIpICsgKHRoaXMueCAqIHRoaXMuc2l6ZXMud2lkdGgpICsgdGhpcy5leHRyYS54XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlWSh5ID0gMCkge1xyXG4gICAgICAgIHRoaXMueSA9ICh0aGlzLmJvdW5kcy50b3AgKyB5KSAvIHdpbmRvdy5pbm5lckhlaWdodFxyXG4gICAgICAgIHRoaXMubWVzaC5wb3NpdGlvbi55ID0gKHRoaXMuc2l6ZXMuaGVpZ2h0IC8gMikgLSAodGhpcy5tZXNoLnNjYWxlLnkgLyAyKSAtICh0aGlzLnkgKiB0aGlzLnNpemVzLmhlaWdodCkgKyB0aGlzLmV4dHJhLnlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoc2Nyb2xsLCBzcGVlZCkge1xyXG4gICAgICAgIGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxyXG4gICAgICAgIHRoaXMudXBkYXRlWChzY3JvbGwpXHJcbiAgICAgICAgdGhpcy51cGRhdGVZKClcclxuXHJcbiAgICAgICAgdGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVTcGVlZC52YWx1ZSA9IHNwZWVkXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBtYXAgfSBmcm9tIFwibG9kYXNoXCJcclxuaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gXCJvZ2xcIlxyXG5pbXBvcnQgTWVkaWEgZnJvbSBcIi4vTWVkaWFcIlxyXG5pbXBvcnQgUHJlZml4IGZyb20gXCJwcmVmaXhcIlxyXG5cclxuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcyB9KSB7XHJcbiAgICAgICAgdGhpcy5nbCA9IGdsXHJcbiAgICAgICAgdGhpcy5zaXplcyA9IHNpemVzXHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lXHJcblxyXG4gICAgICAgIHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcclxuXHJcbiAgICAgICAgdGhpcy5nYWxsZXJ5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX19nYWxsZXJ5JylcclxuXHJcbiAgICAgICAgdGhpcy5nYWxsZXJ5RWxlbWVudFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fZ2FsbGVyeV9fd3JhcHBlcicpXHJcblxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5tZWRpYXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lX19nYWxsZXJ5X19tZWRpYScpXHJcblxyXG5cclxuICAgICAgICB0aGlzLnByb2plY3RzRWxlbWVudHNBY3RpdmUgPSAnaG9tZV9fYXJ0aWNsZS0tYWN0aXZlJ1xyXG4gICAgICAgIHRoaXMucHJvamVjdHNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lX19hcnRpY2xlJylcclxuXHJcbiAgICAgICAgdGhpcy5wcm9qZWN0c1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvbWVfX3RpdGxlX19hcnRpY2xlJylcclxuICAgICAgICB0aGlzLnByb2plY3RzVGl0bGVBY3RpdmUgPSAnaG9tZV9fdGl0bGVfX2FydGljbGUtLWFjdGl2ZSdcclxuXHJcblxyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KCd0cmFuc2Zvcm0nKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY3JvbGwgPSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQ6IDAsXHJcbiAgICAgICAgICAgIHRhcmdldDogMCxcclxuICAgICAgICAgICAgc3RhcnQ6IDAsXHJcbiAgICAgICAgICAgIGxlcnA6IDAuMSxcclxuICAgICAgICAgICAgbGFzdDogMCxcclxuICAgICAgICAgICAgdmVsb2NpdHk6IDFcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3BlZWQgPSB7XHJcbiAgICAgICAgICAgIHRhcmdldDogMCxcclxuICAgICAgICAgICAgY3VycmVudDogMCxcclxuICAgICAgICAgICAgbGVycDogMC4xXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3JlYXRlR2VvbWV0cnkoKVxyXG4gICAgICAgIHRoaXMuY3JlYXRlR2FsbGVyeSgpXHJcblxyXG4gICAgICAgIHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXHJcblxyXG4gICAgICAgIHRoaXMuc2hvdygpXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlR2VvbWV0cnkoKSB7XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsLCB7XHJcbiAgICAgICAgICAgIHdpZHRoU2VnbWVudHM6IDIwLFxyXG4gICAgICAgICAgICBoZWlnaHRTZWdtZW50czogMjBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY3JlYXRlR2FsbGVyeSgpIHtcclxuICAgICAgICB0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNZWRpYSh7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXHJcbiAgICAgICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgICAgIGdsOiB0aGlzLmdsLFxyXG4gICAgICAgICAgICAgICAgc2NlbmU6IHRoaXMuZ3JvdXAsXHJcbiAgICAgICAgICAgICAgICBzaXplczogdGhpcy5zaXplc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICogQW5pbWF0aW9uc1xyXG4gICAqL1xyXG5cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5zaG93KCkpXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLmhpZGUoKSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFdmVudHNcclxuICAgICAqL1xyXG4gICAgb25SZXNpemUoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcclxuICAgICAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZ2FsbGVyeUVsZW1lbnRXcmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcblxyXG4gICAgICAgIHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC50YXJnZXQgPSAwXHJcblxyXG5cclxuICAgICAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbCkpXHJcbiAgICAgICAgdGhpcy5zY3JvbGwubGltaXQgPSB0aGlzLmJvdW5kcy53aWR0aCAtIHRoaXMubWVkaWFzWzBdLmVsZW1lbnQuY2xpZW50V2lkdGhcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoRG93bih7IHgsIHkgfSkge1xyXG4gICAgICAgIHRoaXMuc3BlZWQudGFyZ2V0ID0gMVxyXG4gICAgICAgIHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XHJcbiAgICB9XHJcbiAgICBvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXHJcblxyXG4gICAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLmxhc3QgLSBkaXN0YW5jZVxyXG4gICAgfVxyXG4gICAgb25Ub3VjaFVwKHsgeCwgeSB9KSB7XHJcbiAgICAgICAgdGhpcy5zcGVlZC50YXJnZXQgPSAwXHJcbiAgICB9XHJcblxyXG4gICAgb25XaGVlbCh7IHBpeGVsWSB9KSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IHBpeGVsWVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqICpDaGFuZ2luZ1xyXG4gICAgICovXHJcblxyXG4gICAgb25DaGFuZ2UoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXhcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmluZGV4KVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1lZGlhc0VsZW1lbnRzLmxlbmd0aClcclxuICAgICAgICBpZiAodGhpcy5pbmRleCA9PT0gdGhpcy5tZWRpYXNFbGVtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5pbmRleCA9IHRoaXMuaW5kZXggLSAxXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHBhcnNlSW50KHRoaXMubWVkaWFzRWxlbWVudHNbdGhpcy5pbmRleF0uZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpXHJcblxyXG4gICAgICAgIG1hcCh0aGlzLnByb2plY3RzRWxlbWVudHMsIChlbGVtZW50LCBlbGVtZW50SW5kZXgpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudEluZGV4LCBzZWxlY3RlZFByb2plY3QpXHJcblxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudEluZGV4ID09PSBzZWxlY3RlZFByb2plY3QpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLnByb2plY3RzRWxlbWVudHNBY3RpdmUpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5wcm9qZWN0c0VsZW1lbnRzQWN0aXZlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG5cclxuICAgICAgICBtYXAodGhpcy5wcm9qZWN0c1RpdGxlLCAoZWxlbWVudCwgZWxlbWVudEluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnRJbmRleCwgc2VsZWN0ZWRQcm9qZWN0KVxyXG5cclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRJbmRleCA9PT0gc2VsZWN0ZWRQcm9qZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5wcm9qZWN0c1RpdGxlQWN0aXZlKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMucHJvamVjdHNUaXRsZUFjdGl2ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBVUERBVEVcclxuICAgICAqL1xyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cclxuXHJcblxyXG5cclxuICAgICAgICB0aGlzLnNwZWVkLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMuc3BlZWQuY3VycmVudCwgdGhpcy5zcGVlZC50YXJnZXQsIHRoaXMuc3BlZWQubGVycClcclxuXHJcbiAgICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gR1NBUC51dGlscy5jbGFtcCgtdGhpcy5zY3JvbGwubGltaXQsIDAsIHRoaXMuc2Nyb2xsLnRhcmdldClcclxuICAgICAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLnNjcm9sbC50YXJnZXQsIHRoaXMuc2Nyb2xsLmxlcnApXHJcblxyXG4gICAgICAgIHRoaXMuZ2FsbGVyeUVsZW1lbnQuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVgoJHt0aGlzLnNjcm9sbC5jdXJyZW50fXB4KWBcclxuXHJcblxyXG4gICAgICAgIHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XHJcblxyXG5cclxuICAgICAgICBtYXAodGhpcy5tZWRpYXMsIChtZWRpYSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgbWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuc3BlZWQuY3VycmVudClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5hYnModGhpcy5zY3JvbGwuY3VycmVudCAvIHRoaXMuc2Nyb2xsLmxpbWl0KSAqIHRoaXMubWVkaWFzLmxlbmd0aClcclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmluZGV4ICE9PSBpbmRleCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKGluZGV4KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRGVkc3Ryb3lcclxuICAgICAqL1xyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5yZW1vdmVDaGlsZCh0aGlzLmdyb3VwKVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgXCJwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG51bmlmb3JtIGZsb2F0IHVBbHBoYTtcXG51bmlmb3JtIHNhbXBsZXIyRCB0TWFwO1xcblxcbnZhcnlpbmcgdmVjMiB2VXY7XFxudm9pZCBtYWluKCkge1xcbiAgICB2ZWM0IHRleHR1cmUgPSB0ZXh0dXJlMkQodE1hcCwgdlV2KTtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTtcXG4gICAgZ2xfRnJhZ0NvbG9yLmEgPSB1QWxwaGE7XFxufVwiOyIsImV4cG9ydCBkZWZhdWx0IFwiI2RlZmluZSBHTFNMSUZZIDFcXG4jZGVmaW5lIFBJIDMuMTQxNTkyNjUzNTg5NzkzMjM4NDYyNjQzMzgzMjc5NVxcblxcbmF0dHJpYnV0ZSB2ZWMyIHV2O1xcbmF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uO1xcblxcbnVuaWZvcm0gZmxvYXQgdVNwZWVkO1xcbnVuaWZvcm0gdmVjMiB1Vmlld3BvcnRTaXplcztcXG5cXG51bmlmb3JtIG1hdDQgbW9kZWxWaWV3TWF0cml4O1xcbnVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uTWF0cml4O1xcblxcbnZhcnlpbmcgdmVjMiB2VXY7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICB2VXYgPSB1djtcXG5cXG4gICAgdmVjNCBuZXdQb3NpdGlvbiA9IG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XFxuXFxuICAgIC8vIG5ld1Bvc2l0aW9uLnogKz0gY29zKHBvc2l0aW9uLnggKiBQSSk7XFxuXFxuICAgIC8vIG5ld1Bvc2l0aW9uLnogKz0gc2luKG5ld1Bvc2l0aW9uLnkgLyB1Vmlld3BvcnRTaXplcy55ICogUEkgKyBQSSAvIDIuMCkgKiBhYnModVNwZWVkKTtcXG4gICAgLy8gbmV3UG9zaXRpb24ueiArPSBzaW4obmV3UG9zaXRpb24ueCAvIHVWaWV3cG9ydFNpemVzLnkgKiBQSSArIFBJIC8gNC4wKTtcXG4gICAgLy8gbmV3UG9zaXRpb24ueiAtPSBzaW4oKG5ld1Bvc2l0aW9uLnggLyB1Vmlld3BvcnRTaXplcy55KSArIChuZXdQb3NpdGlvbi55IC8gdVZpZXdwb3J0U2l6ZXMueCkgKiBQSSArIFBJIC8gMi4wKTtcXG4gICAgbmV3UG9zaXRpb24ueiAtPSBzaW4oKG5ld1Bvc2l0aW9uLnggLyB1Vmlld3BvcnRTaXplcy55KSAqIFBJICsgUEkgLyAyLjApICogYWJzKDEuMCArIHVTcGVlZCk7XFxuXFxuICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG5ld1Bvc2l0aW9uO1xcbn1cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0NTcyN2YxZDVhOTExZjY5ZjdiMlwiKSJdLCJuYW1lcyI6WyJNZWRpYSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiZ2wiLCJpbmRleCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwiZXh0cmEiLCJ4IiwieSIsImltYWdlIiwicXVlcnlTZWxlY3RvciIsInRleHR1cmUiLCJ3aW5kb3ciLCJURVhUVVJFUyIsImdldEF0dHJpYnV0ZSIsInByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsInVBbHBoYSIsInZhbHVlIiwidVNwZWVkIiwidVZpZXdwb3J0U2l6ZXMiLCJ3aWR0aCIsImhlaWdodCIsInRNYXAiLCJtZXNoIiwiTWVzaCIsInNldFBhcmVudCIsInNjYWxlIiwiY3JlYXRlQm91bmRzIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBkYXRlU2NhbGUiLCJ1cGRhdGVYIiwidXBkYXRlWSIsInNob3ciLCJHU0FQIiwiaGlkZSIsIm9uUmVzaXplIiwic2Nyb2xsIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwibGVmdCIsInBvc2l0aW9uIiwidG9wIiwidXBkYXRlIiwic3BlZWQiLCJncm91cCIsIlRyYW5zZm9ybSIsImdhbGxlcnlFbGVtZW50IiwiZG9jdW1lbnQiLCJnYWxsZXJ5RWxlbWVudFdyYXBwZXIiLCJtZWRpYXNFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwcm9qZWN0c0VsZW1lbnRzQWN0aXZlIiwicHJvamVjdHNFbGVtZW50cyIsInByb2plY3RzVGl0bGUiLCJwcm9qZWN0c1RpdGxlQWN0aXZlIiwidHJhbnNmb3JtUHJlZml4IiwiUHJlZml4IiwiY3VycmVudCIsInRhcmdldCIsInN0YXJ0IiwibGVycCIsImxhc3QiLCJ2ZWxvY2l0eSIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyeSIsIlBsYW5lIiwid2lkdGhTZWdtZW50cyIsImhlaWdodFNlZ21lbnRzIiwibWVkaWFzIiwibWFwIiwibWVkaWEiLCJldmVudCIsImxpbWl0IiwiY2xpZW50V2lkdGgiLCJvblRvdWNoRG93biIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJlbmQiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwicGl4ZWxZIiwib25DaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwic2VsZWN0ZWRQcm9qZWN0IiwicGFyc2VJbnQiLCJlbGVtZW50SW5kZXgiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzdHlsZSIsIk1hdGgiLCJmbG9vciIsImFicyIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==