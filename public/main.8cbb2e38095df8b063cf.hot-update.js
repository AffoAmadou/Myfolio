/*! For license information please see main.8cbb2e38095df8b063cf.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatestarter("main",{"./app/shaders/home-vertex.glsl":(n,i,e)=>{e.r(i),e.d(i,{default:()=>o});const o="#define GLSLIFY 1\n#define PI 3.1415926535897932384626433832795\n\nattribute vec2 uv;\nattribute vec3 position;\n\nuniform float uSpeed;\nuniform vec2 uViewportSizes;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying vec2 vUv;\n\nvarying vec4 vPosition;\n\nvoid main() {\n    vUv = uv;\n\n    vec4 newPosition = modelViewMatrix * vec4(position, 1.0);\n\n    vPosition = newPosition;\n    // newPosition.z += cos(position.x * PI);\n\n    // newPosition.z += sin(newPosition.y / uViewportSizes.y * PI + PI / 2.0) * abs(uSpeed);\n    // newPosition.z += sin(newPosition.x / uViewportSizes.y * PI + PI / 4.0);\n    // newPosition.z -= sin((newPosition.x / uViewportSizes.y) + (newPosition.y / uViewportSizes.x) * PI + PI / 2.0);\n    newPosition.z -= sin((newPosition.x / uViewportSizes.y) * PI + PI / 2.0) * abs(1.0 + uSpeed);\n\n    gl_Position = projectionMatrix * newPosition;\n}"}},(function(n){n.h=()=>"08cabbe2af34e5bd350f"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44Y2JiMmUzODA5NWRmOGIwNjNjZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7MkhBQUEsbTZCQ0FBQSxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcnRlci8uL2FwcC9zaGFkZXJzL2hvbWUtdmVydGV4Lmdsc2wiLCJ3ZWJwYWNrOi8vc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIjZGVmaW5lIEdMU0xJRlkgMVxcbiNkZWZpbmUgUEkgMy4xNDE1OTI2NTM1ODk3OTMyMzg0NjI2NDMzODMyNzk1XFxuXFxuYXR0cmlidXRlIHZlYzIgdXY7XFxuYXR0cmlidXRlIHZlYzMgcG9zaXRpb247XFxuXFxudW5pZm9ybSBmbG9hdCB1U3BlZWQ7XFxudW5pZm9ybSB2ZWMyIHVWaWV3cG9ydFNpemVzO1xcblxcbnVuaWZvcm0gbWF0NCBtb2RlbFZpZXdNYXRyaXg7XFxudW5pZm9ybSBtYXQ0IHByb2plY3Rpb25NYXRyaXg7XFxuXFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG52YXJ5aW5nIHZlYzQgdlBvc2l0aW9uO1xcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgdlV2ID0gdXY7XFxuXFxuICAgIHZlYzQgbmV3UG9zaXRpb24gPSBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1xcblxcbiAgICB2UG9zaXRpb24gPSBuZXdQb3NpdGlvbjtcXG4gICAgLy8gbmV3UG9zaXRpb24ueiArPSBjb3MocG9zaXRpb24ueCAqIFBJKTtcXG5cXG4gICAgLy8gbmV3UG9zaXRpb24ueiArPSBzaW4obmV3UG9zaXRpb24ueSAvIHVWaWV3cG9ydFNpemVzLnkgKiBQSSArIFBJIC8gMi4wKSAqIGFicyh1U3BlZWQpO1xcbiAgICAvLyBuZXdQb3NpdGlvbi56ICs9IHNpbihuZXdQb3NpdGlvbi54IC8gdVZpZXdwb3J0U2l6ZXMueSAqIFBJICsgUEkgLyA0LjApO1xcbiAgICAvLyBuZXdQb3NpdGlvbi56IC09IHNpbigobmV3UG9zaXRpb24ueCAvIHVWaWV3cG9ydFNpemVzLnkpICsgKG5ld1Bvc2l0aW9uLnkgLyB1Vmlld3BvcnRTaXplcy54KSAqIFBJICsgUEkgLyAyLjApO1xcbiAgICBuZXdQb3NpdGlvbi56IC09IHNpbigobmV3UG9zaXRpb24ueCAvIHVWaWV3cG9ydFNpemVzLnkpICogUEkgKyBQSSAvIDIuMCkgKiBhYnMoMS4wICsgdVNwZWVkKTtcXG5cXG4gICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbmV3UG9zaXRpb247XFxufVwiOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjA4Y2FiYmUyYWYzNGU1YmQzNTBmXCIpIl0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==