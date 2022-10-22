/*! For license information please see main.dda6af7d65cf25bf8346.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatestarter("main",{"./app/components/Canvas/Home.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});var r=s("./node_modules/lodash/lodash.js"),i=s("./node_modules/ogl/src/core/Transform.js"),l=s("./node_modules/ogl/src/extras/Plane.js"),o=s("./app/components/Canvas/Media.js"),a=s("./node_modules/gsap/index.js");class n{constructor({gl:e,scene:t,sizes:s}){this.gl=e,this.sizes=s,this.group=new i.Transform,this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.createGeometry(),this.createGallery(),this.group.setParent(t),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scrollCurrent={x:0,y:0},this.scroll={x:0,y:0}}createGeometry(){this.geometry=new l.Plane(this.gl)}createGallery(){this.medias=(0,r.map)(this.mediasElements,((e,t)=>new o.default({element:e,geometry:this.geometry,index:t,gl:this.gl,scene:this.group,sizes:this.sizes})))}onResize(e){(0,r.map)(this.medias,(t=>t.onResize(e)))}onTouchDown({x:e,y:t}){this.scrollCurrent.x=this.scroll.x,this.scrollCurrent.y=this.scroll.y}onTouchMove({x:e,y:t}){const s=e.start-e.end,r=t.start-t.end;this.x.target=this.scrollCurrent.x-s,this.y.target=this.scrollCurrent.y-r}onTouchUp({x:e,y:t}){}update(){this.x.current=a.default.utils.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=a.default.utils.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x=this.x.current,this.scroll.y=this.y.current,(0,r.map)(this.medias,(e=>{e.update(this.scroll)}))}}}},(function(e){e.h=()=>"0c3a8390257380d9cbd3"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kZGE2YWY3ZDY1Y2YyNWJmODM0Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aVZBTWUsTUFBTUEsRUFDakJDLGFBQVksR0FBRUMsRUFBRixNQUFNQyxFQUFOLE1BQWFDLElBQ3JCQyxLQUFLSCxHQUFLQSxFQUNWRyxLQUFLRCxNQUFRQSxFQUViQyxLQUFLQyxNQUFRLElBQUlDLEVBQUFBLFVBRWpCRixLQUFLRyxlQUFpQkMsU0FBU0MsaUJBQWlCLGdDQUVoREwsS0FBS00saUJBQ0xOLEtBQUtPLGdCQUVMUCxLQUFLQyxNQUFNTyxVQUFVVixHQUVyQkUsS0FBS1MsRUFBSSxDQUNMQyxRQUFTLEVBQ1RDLE9BQVEsRUFDUkMsS0FBTSxJQUdWWixLQUFLYSxFQUFJLENBQ0xILFFBQVMsRUFDVEMsT0FBUSxFQUNSQyxLQUFNLElBSVZaLEtBQUtjLGNBQWdCLENBQ2pCTCxFQUFHLEVBQ0hJLEVBQUcsR0FHUGIsS0FBS2UsT0FBUyxDQUNWTixFQUFHLEVBQ0hJLEVBQUcsRUFFVixDQUVEUCxpQkFDSU4sS0FBS2dCLFNBQVcsSUFBSUMsRUFBQUEsTUFBTWpCLEtBQUtILEdBQ2xDLENBQ0RVLGdCQUNJUCxLQUFLa0IsUUFBU0MsRUFBQUEsRUFBQUEsS0FBSW5CLEtBQUtHLGdCQUFnQixDQUFDaUIsRUFBU0MsSUFDdEMsSUFBSUMsRUFBQUEsUUFBTSxDQUNiRixVQUNBSixTQUFVaEIsS0FBS2dCLFNBQ2ZLLFFBQ0F4QixHQUFJRyxLQUFLSCxHQUNUQyxNQUFPRSxLQUFLQyxNQUNaRixNQUFPQyxLQUFLRCxTQUd2QixDQUtEd0IsU0FBU0MsSUFDTEwsRUFBQUEsRUFBQUEsS0FBSW5CLEtBQUtrQixRQUFRTyxHQUFTQSxFQUFNRixTQUFTQyxJQUM1QyxDQUVERSxhQUFZLEVBQUVqQixFQUFGLEVBQUtJLElBQ2JiLEtBQUtjLGNBQWNMLEVBQUlULEtBQUtlLE9BQU9OLEVBQ25DVCxLQUFLYyxjQUFjRCxFQUFJYixLQUFLZSxPQUFPRixDQUN0QyxDQUNEYyxhQUFZLEVBQUVsQixFQUFGLEVBQUtJLElBQ2IsTUFBTWUsRUFBWW5CLEVBQUVvQixNQUFRcEIsRUFBRXFCLElBQ3hCQyxFQUFZbEIsRUFBRWdCLE1BQVFoQixFQUFFaUIsSUFFOUI5QixLQUFLUyxFQUFFRSxPQUFTWCxLQUFLYyxjQUFjTCxFQUFJbUIsRUFDdkM1QixLQUFLYSxFQUFFRixPQUFTWCxLQUFLYyxjQUFjRCxFQUFJa0IsQ0FFMUMsQ0FDREMsV0FBVSxFQUFFdkIsRUFBRixFQUFLSSxJQUFRLENBTXZCb0IsU0FDSWpDLEtBQUtTLEVBQUVDLFFBQVV3QixFQUFBQSxRQUFBQSxNQUFBQSxZQUF1QmxDLEtBQUtTLEVBQUVDLFFBQVNWLEtBQUtTLEVBQUVFLE9BQVFYLEtBQUtTLEVBQUVHLE1BQzlFWixLQUFLYSxFQUFFSCxRQUFVd0IsRUFBQUEsUUFBQUEsTUFBQUEsWUFBdUJsQyxLQUFLYSxFQUFFSCxRQUFTVixLQUFLYSxFQUFFRixPQUFRWCxLQUFLYSxFQUFFRCxNQUc5RVosS0FBS2UsT0FBT04sRUFBSVQsS0FBS1MsRUFBRUMsUUFDdkJWLEtBQUtlLE9BQU9GLEVBQUliLEtBQUthLEVBQUVILFNBRXZCUyxFQUFBQSxFQUFBQSxLQUFJbkIsS0FBS2tCLFFBQVFPLElBQ2JBLEVBQU1RLE9BQU9qQyxLQUFLZSxPQUFsQixHQUVQLGtCQ2hHTG9CLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFydGVyLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFwIH0gZnJvbSBcImxvZGFzaFwiXHJcbmltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tIFwib2dsXCJcclxuaW1wb3J0IE1lZGlhIGZyb20gXCIuL01lZGlhXCJcclxuXHJcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcyB9KSB7XHJcbiAgICAgICAgdGhpcy5nbCA9IGdsXHJcbiAgICAgICAgdGhpcy5zaXplcyA9IHNpemVzXHJcblxyXG4gICAgICAgIHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcclxuXHJcbiAgICAgICAgdGhpcy5tZWRpYXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lX19nYWxsZXJ5X19tZWRpYV9faW1hZ2UnKVxyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZUdlb21ldHJ5KClcclxuICAgICAgICB0aGlzLmNyZWF0ZUdhbGxlcnkoKVxyXG5cclxuICAgICAgICB0aGlzLmdyb3VwLnNldFBhcmVudChzY2VuZSlcclxuXHJcbiAgICAgICAgdGhpcy54ID0ge1xyXG4gICAgICAgICAgICBjdXJyZW50OiAwLFxyXG4gICAgICAgICAgICB0YXJnZXQ6IDAsXHJcbiAgICAgICAgICAgIGxlcnA6IDAuMVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy55ID0ge1xyXG4gICAgICAgICAgICBjdXJyZW50OiAwLFxyXG4gICAgICAgICAgICB0YXJnZXQ6IDAsXHJcbiAgICAgICAgICAgIGxlcnA6IDAuMVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMuc2Nyb2xsQ3VycmVudCA9IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY3JvbGwgPSB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlR2VvbWV0cnkoKSB7XHJcbiAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxyXG4gICAgfVxyXG4gICAgY3JlYXRlR2FsbGVyeSgpIHtcclxuICAgICAgICB0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNZWRpYSh7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXHJcbiAgICAgICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgICAgIGdsOiB0aGlzLmdsLFxyXG4gICAgICAgICAgICAgICAgc2NlbmU6IHRoaXMuZ3JvdXAsXHJcbiAgICAgICAgICAgICAgICBzaXplczogdGhpcy5zaXplc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFdmVudHNcclxuICAgICAqL1xyXG4gICAgb25SZXNpemUoZXZlbnQpIHtcclxuICAgICAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50KSlcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoRG93bih7IHgsIHkgfSkge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQ3VycmVudC54ID0gdGhpcy5zY3JvbGwueFxyXG4gICAgICAgIHRoaXMuc2Nyb2xsQ3VycmVudC55ID0gdGhpcy5zY3JvbGwueVxyXG4gICAgfVxyXG4gICAgb25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcclxuICAgICAgICBjb25zdCB4RGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcclxuICAgICAgICBjb25zdCB5RGlzdGFuY2UgPSB5LnN0YXJ0IC0geS5lbmRcclxuXHJcbiAgICAgICAgdGhpcy54LnRhcmdldCA9IHRoaXMuc2Nyb2xsQ3VycmVudC54IC0geERpc3RhbmNlXHJcbiAgICAgICAgdGhpcy55LnRhcmdldCA9IHRoaXMuc2Nyb2xsQ3VycmVudC55IC0geURpc3RhbmNlXHJcblxyXG4gICAgfVxyXG4gICAgb25Ub3VjaFVwKHsgeCwgeSB9KSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVQREFURVxyXG4gICAgICovXHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMueC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnguY3VycmVudCwgdGhpcy54LnRhcmdldCwgdGhpcy54LmxlcnApXHJcbiAgICAgICAgdGhpcy55LmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMueS5jdXJyZW50LCB0aGlzLnkudGFyZ2V0LCB0aGlzLnkubGVycClcclxuXHJcblxyXG4gICAgICAgIHRoaXMuc2Nyb2xsLnggPSB0aGlzLnguY3VycmVudFxyXG4gICAgICAgIHRoaXMuc2Nyb2xsLnkgPSB0aGlzLnkuY3VycmVudFxyXG5cclxuICAgICAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IHtcclxuICAgICAgICAgICAgbWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwYzNhODM5MDI1NzM4MGQ5Y2JkM1wiKSJdLCJuYW1lcyI6WyJIb21lIiwiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJtZWRpYXNFbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyeSIsInNldFBhcmVudCIsIngiLCJjdXJyZW50IiwidGFyZ2V0IiwibGVycCIsInkiLCJzY3JvbGxDdXJyZW50Iiwic2Nyb2xsIiwiZ2VvbWV0cnkiLCJQbGFuZSIsIm1lZGlhcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIk1lZGlhIiwib25SZXNpemUiLCJldmVudCIsIm1lZGlhIiwib25Ub3VjaERvd24iLCJvblRvdWNoTW92ZSIsInhEaXN0YW5jZSIsInN0YXJ0IiwiZW5kIiwieURpc3RhbmNlIiwib25Ub3VjaFVwIiwidXBkYXRlIiwiR1NBUCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==