// #version 300 es

// #ifdef GL_ES
// precision highp float;
// #endif

// vec2 v_texcoord;

// out vec4 fragColor;

// void main(void)
// {
//     vec2 uv = -1. + 2. * v_texcoord;
    
//     vec4 color1 = vec4(1.0, 0.0, 0.0, 1.0);
    
//     fragColor = color1;
// }


#version 300 es

#ifdef GL_ES
precision highp float;
#endif

uniform vec2 resolution;
uniform vec2 u_mouse;
uniform float u_time;

out vec4 fragColor;

void main() {
	vec2 st = gl_FragCoord.xy/resolution;
	fragColor = vec4(st,0.0,1.0);
}
