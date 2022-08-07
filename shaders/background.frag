#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec2 v_texcoord;

void main(void) {
	vec2 st = gl_FragCoord.st/u_resolution;
	gl_FragColor = vec4(st,0.0,1.0);
}
