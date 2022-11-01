/*! For license information please see main.c0364f1d8af8fcc95da6.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatestarter("main",{"./app/components/Canvas/Home/index.js":(s,e,t)=>{t.r(e),t.d(e,{default:()=>a});var i=t("./node_modules/lodash/lodash.js"),l=t("./node_modules/ogl/src/core/Transform.js"),r=t("./node_modules/ogl/src/extras/Plane.js"),o=t("./app/components/Canvas/Home/Media.js"),h=t("./node_modules/gsap/index.js");const a=class{constructor({gl:s,scene:e,sizes:t}){this.gl=s,this.sizes=t,this.scene=e,this.group=new l.Transform,this.galleryElement=document.querySelector(".home__gallery__wrapper"),this.mediasElements=document.querySelectorAll(".home__gallery__media"),this.scroll={current:0,target:0,start:0,lerp:.1,last:0,velocity:1},this.createGeometry(),this.createGallery(),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new r.Plane(this.gl)}createGallery(){this.medias=(0,i.map)(this.mediasElements,((s,e)=>new o.default({element:s,geometry:this.geometry,index:e,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){(0,i.map)(this.medias,(s=>s.show()))}hide(){(0,i.map)(this.medias,(s=>s.hide()))}onResize(s){this.sizes=s.sizes,this.bounds=this.galleryElement.getBoundingClientRect(),this.scroll.last=this.scroll.target=0,(0,i.map)(this.medias,(e=>e.onResize(s,this.scroll)))}onTouchDown({x:s,y:e}){this.scroll.last=this.scroll.current}onTouchMove({x:s,y:e}){const t=s.start-s.end;this.scroll.target=this.scroll.last-t}onTouchUp({x:s,y:e}){}onWheel({pixelY:s}){this.scroll.target+=s}update(){this.bounds&&(this.scroll.current=h.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.scroll.last<this.scroll.current?this.scroll.direction="right":this.scroll.last>this.scroll.current&&(this.scroll.direction="left"),this.scroll.last=this.scroll.current,(0,i.map)(this.medias,((s,e)=>{const t=s.mesh.scale.x/2;if("left"===this.scroll.direction){s.mesh.position.x+t<-this.sizes.width/2&&(s.extra.x+=this.sizes.width)}else if("right"===this.scroll.direction){s.mesh.position.x-t>this.sizes.width/2&&(s.extra.x-=this.sizes.width)}s.update(this.scroll.current)})))}destroy(){this.scene.removeChild(this.group)}}}},(function(s){s.h=()=>"9f9ea60e45edb41a7aa1"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixVQUExQmhELEtBQUtRLE9BQU9tQyxVQUF1QixDQUM5QmpCLEVBQU1tQixLQUFLRSxTQUFTZCxFQUFJVyxFQUUxQjVDLEtBQUtELE1BQU1pRCxNQUFRLElBQ3ZCdEIsRUFBTXVCLE1BQU1oQixHQUFLakMsS0FBS0QsTUFBTWlELE1BRW5DLENBQ0R0QixFQUFNZSxPQUFPekMsS0FBS1EsT0FBT0MsUUFBekIsSUFFUCxDQU1EeUMsVUFDSWxELEtBQUtGLE1BQU1xRCxZQUFZbkQsS0FBS0MsTUFDL0Isa0JDeklMbUQsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0ZXIvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvSG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdGFydGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYXAgfSBmcm9tIFwibG9kYXNoXCJcclxuaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gXCJvZ2xcIlxyXG5pbXBvcnQgTWVkaWEgZnJvbSBcIi4vTWVkaWFcIlxyXG5cclxuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcyB9KSB7XHJcbiAgICAgICAgdGhpcy5nbCA9IGdsXHJcbiAgICAgICAgdGhpcy5zaXplcyA9IHNpemVzXHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lXHJcblxyXG4gICAgICAgIHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcclxuXHJcbiAgICAgICAgdGhpcy5nYWxsZXJ5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX19nYWxsZXJ5X193cmFwcGVyJylcclxuICAgICAgICB0aGlzLm1lZGlhc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvbWVfX2dhbGxlcnlfX21lZGlhJylcclxuXHJcbiAgICAgICAgdGhpcy5zY3JvbGwgPSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQ6IDAsXHJcbiAgICAgICAgICAgIHRhcmdldDogMCxcclxuICAgICAgICAgICAgc3RhcnQ6IDAsXHJcbiAgICAgICAgICAgIGxlcnA6IDAuMSxcclxuICAgICAgICAgICAgbGFzdDogMCxcclxuICAgICAgICAgICAgdmVsb2NpdHk6IDFcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlR2VvbWV0cnkoKVxyXG4gICAgICAgIHRoaXMuY3JlYXRlR2FsbGVyeSgpXHJcblxyXG4gICAgICAgIHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXHJcblxyXG4gICAgICAgIHRoaXMuc2hvdygpXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlR2VvbWV0cnkoKSB7XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxyXG4gICAgfVxyXG4gICAgY3JlYXRlR2FsbGVyeSgpIHtcclxuICAgICAgICB0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNZWRpYSh7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXHJcbiAgICAgICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgICAgIGdsOiB0aGlzLmdsLFxyXG4gICAgICAgICAgICAgICAgc2NlbmU6IHRoaXMuZ3JvdXAsXHJcbiAgICAgICAgICAgICAgICBzaXplczogdGhpcy5zaXplc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICogQW5pbWF0aW9uc1xyXG4gICAqL1xyXG5cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5zaG93KCkpXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLmhpZGUoKSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFdmVudHNcclxuICAgICAqL1xyXG4gICAgb25SZXNpemUoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcclxuICAgICAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZ2FsbGVyeUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuXHJcbiAgICAgICAgdGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IDBcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCwgdGhpcy5zY3JvbGwpKVxyXG4gICAgICAgIC8vIHRoaXMuc2Nyb2xsLmxpbWl0ID0gdGhpcy5ib3VuZHMud2lkdGggLSB0aGlzLm1lZGlhc1swXS5lbGVtZW50LmNsaWVudFdpZHRoXHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaERvd24oeyB4LCB5IH0pIHtcclxuICAgICAgICB0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxyXG4gICAgfVxyXG4gICAgb25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcclxuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxyXG5cclxuICAgICAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5sYXN0IC0gZGlzdGFuY2VcclxuICAgIH1cclxuICAgIG9uVG91Y2hVcCh7IHgsIHkgfSkgeyB9XHJcblxyXG4gICAgb25XaGVlbCh7IHBpeGVsWSB9KSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IHBpeGVsWVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVQREFURVxyXG4gICAgICovXHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxyXG5cclxuICAgICAgICAvLyB0aGlzLnNjcm9sbC50YXJnZXQgPSBHU0FQLnV0aWxzLmNsYW1wKC10aGlzLnNjcm9sbC5saW1pdCwgMCwgdGhpcy5zY3JvbGwudGFyZ2V0KVxyXG4gICAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuc2Nyb2xsLnRhcmdldCwgdGhpcy5zY3JvbGwubGVycClcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsLmxhc3QgPCB0aGlzLnNjcm9sbC5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsLmRpcmVjdGlvbiA9ICdyaWdodCdcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLmxhc3QgPiB0aGlzLnNjcm9sbC5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsLmRpcmVjdGlvbiA9ICdsZWZ0J1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcclxuXHJcbiAgICAgICAgbWFwKHRoaXMubWVkaWFzLCAobWVkaWEsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlWCA9IG1lZGlhLm1lc2guc2NhbGUueCAvIDJcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbC5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IG1lZGlhLm1lc2gucG9zaXRpb24ueCArIHNjYWxlWFxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh4IDwgLXRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVkaWEuZXh0cmEueCArPSB0aGlzLnNpemVzLndpZHRoXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zY3JvbGwuZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54IC0gc2NhbGVYXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHggPiB0aGlzLnNpemVzLndpZHRoIC8gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lZGlhLmV4dHJhLnggLT0gdGhpcy5zaXplcy53aWR0aFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWRzdHJveVxyXG4gICAgICovXHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnNjZW5lLnJlbW92ZUNoaWxkKHRoaXMuZ3JvdXApXHJcbiAgICB9XHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5ZjllYTYwZTQ1ZWRiNDFhN2FhMVwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJncm91cCIsIlRyYW5zZm9ybSIsImdhbGxlcnlFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVkaWFzRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsInN0YXJ0IiwibGVycCIsImxhc3QiLCJ2ZWxvY2l0eSIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyeSIsInNldFBhcmVudCIsInNob3ciLCJnZW9tZXRyeSIsIlBsYW5lIiwibWVkaWFzIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiTWVkaWEiLCJtZWRpYSIsImhpZGUiLCJvblJlc2l6ZSIsImV2ZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwib25Ub3VjaERvd24iLCJ4IiwieSIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJlbmQiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwicGl4ZWxZIiwidXBkYXRlIiwiR1NBUCIsImRpcmVjdGlvbiIsInNjYWxlWCIsIm1lc2giLCJzY2FsZSIsInBvc2l0aW9uIiwid2lkdGgiLCJleHRyYSIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==