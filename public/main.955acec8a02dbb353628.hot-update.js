/*! For license information please see main.955acec8a02dbb353628.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatestarter("main",{"./app/components/Canvas/Home/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var i=s("./node_modules/ogl/src/core/Program.js"),h=s("./node_modules/ogl/src/core/Mesh.js"),a=s("./app/shaders/home-fragment.glsl"),r=s("./app/shaders/home-vertex.glsl"),o=s("./node_modules/gsap/index.js");class d{constructor({element:e,geometry:t,gl:s,index:i,scene:h,sizes:a}){this.element=e,this.geometry=t,this.gl=s,this.scene=h,this.index=i,this.sizes=a,this.createTexture(),this.createProgram(),this.createMesh(),this.extra={x:0,y:0},this.opacity={current:0,target:0,multiplier:0,lerp:.1}}createTexture(){const e=this.element.querySelector(".home__gallery__media__image");this.texture=window.TEXTURES[e.getAttribute("data-src")]}createProgram(){this.program=new i.Program(this.gl,{fragment:a.default,vertex:r.default,uniforms:{uAlpha:{value:0},uSpeed:{value:0},uViewportSizes:{value:[this.sizes.width,this.sizes.height]},tMap:{value:this.texture}}})}createMesh(){this.mesh=new h.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene),this.mesh.scale.x=2}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX(),this.updateY()}show(){o.default.fromTo(this.opacity,{multiplier:0},{multiplier:1})}hide(){o.default.to(this.opacity,{multiplier:0})}onResize(e,t){this.extra={x:0,y:0},this.createBounds(e),this.updateX(t&&t.x),this.updateY(t&&t.y)}updateScale(){this.width=this.bounds.width/window.innerWidth,this.height=this.bounds.height/window.innerHeight,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(e=0){this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}updateY(e=0){this.y=(this.bounds.top+e)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height+this.extra.y}update(e,t,s){this.bounds&&(this.updateX(e),this.updateY(),this.program.uniforms.uSpeed.value=t,this.program.uniforms.uAlpha.value=this.opacity.multiplier)}}}},(function(e){e.h=()=>"16fca79aab71f1a9d0ae"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S04sS0FBS21DLE9BQU9jLElBQU0zQyxHQUFLUyxPQUFPK0IsWUFDeEM5QyxLQUFLOEIsS0FBS2tCLFNBQVMxQyxFQUFLTixLQUFLRCxNQUFNNkIsT0FBUyxFQUFNNUIsS0FBSzhCLEtBQUtHLE1BQU0zQixFQUFJLEVBQU1OLEtBQUtNLEVBQUlOLEtBQUtELE1BQU02QixPQUFVNUIsS0FBS0ksTUFBTUUsQ0FDeEgsQ0FFRDRDLE9BQU9OLEVBQVFPLEVBQU90RCxHQUNiRyxLQUFLbUMsU0FDVm5DLEtBQUtzQyxRQUFRTSxHQUNiNUMsS0FBS3VDLFVBRUx2QyxLQUFLa0IsUUFBUUksU0FBU0csT0FBT0QsTUFBUTJCLEVBQ3JDbkQsS0FBS2tCLFFBQVFJLFNBQVNDLE9BQU9DLE1BQVN4QixLQUFLTyxRQUFRRyxXQUN0RCxrQkNySUwwQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcnRlci8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lL01lZGlhLmpzIiwid2VicGFjazovL3N0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lc2gsIFByb2dyYW0sIFRleHR1cmUgfSBmcm9tICdvZ2wnXHJcblxyXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnc2hhZGVycy9ob21lLWZyYWdtZW50Lmdsc2wnXHJcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9ob21lLXZlcnRleC5nbHNsJ1xyXG5cclxuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGdsLCBpbmRleCwgc2NlbmUsIHNpemVzIH0pIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XHJcbiAgICAgICAgdGhpcy5nbCA9IGdsXHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lXHJcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4XHJcbiAgICAgICAgdGhpcy5zaXplcyA9IHNpemVzXHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlVGV4dHVyZSgpXHJcbiAgICAgICAgdGhpcy5jcmVhdGVQcm9ncmFtKClcclxuICAgICAgICB0aGlzLmNyZWF0ZU1lc2goKVxyXG5cclxuICAgICAgICB0aGlzLmV4dHJhID0ge1xyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9wYWNpdHkgPSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQ6IDAsXHJcbiAgICAgICAgICAgIHRhcmdldDogMCxcclxuICAgICAgICAgICAgbXVsdGlwbGllcjogMCxcclxuICAgICAgICAgICAgbGVycDogMC4xXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY3JlYXRlVGV4dHVyZSgpIHtcclxuICAgICAgICBjb25zdCBpbWFnZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fZ2FsbGVyeV9fbWVkaWFfX2ltYWdlJylcclxuICAgICAgICB0aGlzLnRleHR1cmUgPSB3aW5kb3cuVEVYVFVSRVNbaW1hZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVByb2dyYW0oKSB7XHJcblxyXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcclxuICAgICAgICAgICAgZnJhZ21lbnQsXHJcbiAgICAgICAgICAgIHZlcnRleCxcclxuICAgICAgICAgICAgdW5pZm9ybXM6IHtcclxuICAgICAgICAgICAgICAgIHVBbHBoYTogeyB2YWx1ZTogMCB9LFxyXG4gICAgICAgICAgICAgICAgdVNwZWVkOiB7IHZhbHVlOiAwIH0sXHJcbiAgICAgICAgICAgICAgICB1Vmlld3BvcnRTaXplczogeyB2YWx1ZTogW3RoaXMuc2l6ZXMud2lkdGgsIHRoaXMuc2l6ZXMuaGVpZ2h0XSB9LFxyXG4gICAgICAgICAgICAgICAgdE1hcDogeyB2YWx1ZTogdGhpcy50ZXh0dXJlIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU1lc2goKSB7XHJcbiAgICAgICAgdGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xyXG4gICAgICAgICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcclxuICAgICAgICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxyXG5cclxuICAgICAgICB0aGlzLm1lc2guc2NhbGUueCA9IDJcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVCb3VuZHMoeyBzaXplcyB9KSB7XHJcbiAgICAgICAgdGhpcy5zaXplcyA9IHNpemVzXHJcblxyXG4gICAgICAgIHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlU2NhbGUoKVxyXG4gICAgICAgIHRoaXMudXBkYXRlWCgpXHJcbiAgICAgICAgdGhpcy51cGRhdGVZKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQW5pbWF0aW9uc1xyXG4gICAgICovXHJcblxyXG5cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgR1NBUC5mcm9tVG8odGhpcy5vcGFjaXR5LCB7XHJcbiAgICAgICAgICAgIG11bHRpcGxpZXI6IDBcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG11bHRpcGxpZXI6IDFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgR1NBUC50byh0aGlzLm9wYWNpdHksIHtcclxuICAgICAgICAgICAgbXVsdGlwbGllcjogMFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAgKiBFdmVudHNcclxuICAgICAgKi9cclxuICAgIG9uUmVzaXplKHNpemVzLCBzY3JvbGwpIHtcclxuICAgICAgICB0aGlzLmV4dHJhID0ge1xyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3JlYXRlQm91bmRzKHNpemVzKVxyXG4gICAgICAgIHRoaXMudXBkYXRlWChzY3JvbGwgJiYgc2Nyb2xsLngpXHJcbiAgICAgICAgdGhpcy51cGRhdGVZKHNjcm9sbCAmJiBzY3JvbGwueSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExPT1BcclxuICAgICAqL1xyXG4gICAgdXBkYXRlU2NhbGUoKSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGhcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuYm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodFxyXG5cclxuICAgICAgICB0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoXHJcbiAgICAgICAgdGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLnNpemVzLmhlaWdodCAqIHRoaXMuaGVpZ2h0XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlWCh4ID0gMCkge1xyXG4gICAgICAgIHRoaXMueCA9ICh0aGlzLmJvdW5kcy5sZWZ0ICsgeCkgLyB3aW5kb3cuaW5uZXJXaWR0aFxyXG4gICAgICAgIHRoaXMubWVzaC5wb3NpdGlvbi54ID0gKC10aGlzLnNpemVzLndpZHRoIC8gMikgKyAodGhpcy5tZXNoLnNjYWxlLnggLyAyKSArICh0aGlzLnggKiB0aGlzLnNpemVzLndpZHRoKSArIHRoaXMuZXh0cmEueFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVkoeSA9IDApIHtcclxuICAgICAgICB0aGlzLnkgPSAodGhpcy5ib3VuZHMudG9wICsgeSkgLyB3aW5kb3cuaW5uZXJIZWlnaHRcclxuICAgICAgICB0aGlzLm1lc2gucG9zaXRpb24ueSA9ICh0aGlzLnNpemVzLmhlaWdodCAvIDIpIC0gKHRoaXMubWVzaC5zY2FsZS55IC8gMikgLSAodGhpcy55ICogdGhpcy5zaXplcy5oZWlnaHQpICsgdGhpcy5leHRyYS55XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHNjcm9sbCwgc3BlZWQsIGluZGV4KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXHJcbiAgICAgICAgdGhpcy51cGRhdGVYKHNjcm9sbClcclxuICAgICAgICB0aGlzLnVwZGF0ZVkoKVxyXG5cclxuICAgICAgICB0aGlzLnByb2dyYW0udW5pZm9ybXMudVNwZWVkLnZhbHVlID0gc3BlZWRcclxuICAgICAgICB0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLnZhbHVlID0gIHRoaXMub3BhY2l0eS5tdWx0aXBsaWVyXHJcbiAgICB9XHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxNmZjYTc5YWFiNzFmMWE5ZDBhZVwiKSJdLCJuYW1lcyI6WyJNZWRpYSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiZ2wiLCJpbmRleCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwiZXh0cmEiLCJ4IiwieSIsIm9wYWNpdHkiLCJjdXJyZW50IiwidGFyZ2V0IiwibXVsdGlwbGllciIsImxlcnAiLCJpbWFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0dXJlIiwid2luZG93IiwiVEVYVFVSRVMiLCJnZXRBdHRyaWJ1dGUiLCJwcm9ncmFtIiwiUHJvZ3JhbSIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJ1QWxwaGEiLCJ2YWx1ZSIsInVTcGVlZCIsInVWaWV3cG9ydFNpemVzIiwid2lkdGgiLCJoZWlnaHQiLCJ0TWFwIiwibWVzaCIsIk1lc2giLCJzZXRQYXJlbnQiLCJzY2FsZSIsImNyZWF0ZUJvdW5kcyIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwZGF0ZVNjYWxlIiwidXBkYXRlWCIsInVwZGF0ZVkiLCJzaG93IiwiR1NBUCIsImhpZGUiLCJvblJlc2l6ZSIsInNjcm9sbCIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImxlZnQiLCJwb3NpdGlvbiIsInRvcCIsInVwZGF0ZSIsInNwZWVkIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9