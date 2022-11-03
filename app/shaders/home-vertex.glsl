#define PI 3.1415926535897932384626433832795

attribute vec2 uv;
attribute vec3 position;

uniform float uSpeed;
uniform vec2 uViewportSizes;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

varying vec2 vUv;

void main() {
    vUv = uv;

    vec4 newPosition = modelViewMatrix * vec4(position, 1.0);

    // newPosition.z += cos(position.x * PI);

    // newPosition.z += sin(newPosition.y / uViewportSizes.y * PI + PI / 2.0) * abs(uSpeed);
    // newPosition.z += sin(newPosition.x / uViewportSizes.y * PI + PI / 4.0);
    // newPosition.z -= sin((newPosition.x / uViewportSizes.y) + (newPosition.y / uViewportSizes.x) * PI + PI / 2.0);
    newPosition.z -= sin((newPosition.x / uViewportSizes.y) * PI + PI / 2.0) * abs(1.0 + uSpeed);

    gl_Position = projectionMatrix * newPosition;
}