export const enVertexShader = `
uniform vec2 u_mouse;
uniform float u_aspect;
uniform bool u_enable;
varying vec2 v_uv;

void main() {
  v_uv = uv;
  
  vec3 pos = position;
  
  if (u_enable) {
    float dist = distance(v_uv, u_mouse);
    float strength = 0.1 / (dist + 0.05);
    strength = min(strength, 1.0);
    
    vec2 dir = normalize(v_uv - u_mouse);
    pos.xy += dir * strength * 0.05;
  }
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`

export const enFragmentShader = `
uniform sampler2D u_texture;
uniform vec2 u_mouse;
uniform float u_aspect;
uniform bool u_enable;
varying vec2 v_uv;

void main() {
  vec2 uv = v_uv;
  
  if (u_enable) {
    float dist = distance(v_uv, u_mouse);
    float strength = 0.1 / (dist + 0.05);
    strength = min(strength, 1.0);
    
    vec2 dir = normalize(v_uv - u_mouse);
    uv -= dir * strength * 0.05;
  }
  
  vec4 color = texture2D(u_texture, uv);
  gl_FragColor = color;
}
`

export const jpVertexShader = `
uniform vec2 u_mouse;
uniform float u_aspect;
uniform bool u_enable;
varying vec2 v_uv;

void main() {
  v_uv = uv;
  
  vec3 pos = position;
  
  if (u_enable) {
    float dist = distance(v_uv, u_mouse);
    float strength = 0.1 / (dist + 0.05);
    strength = min(strength, 1.0);
    
    vec2 dir = normalize(v_uv - u_mouse);
    pos.xy += dir * strength * 0.05;
  }
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`

export const jpFragmentShader = `
uniform sampler2D u_texture;
uniform vec2 u_mouse;
uniform float u_aspect;
uniform bool u_enable;
varying vec2 v_uv;

void main() {
  vec2 uv = v_uv;
  
  if (u_enable) {
    float dist = distance(v_uv, u_mouse);
    float strength = 0.1 / (dist + 0.05);
    strength = min(strength, 1.0);
    
    vec2 dir = normalize(v_uv - u_mouse);
    uv -= dir * strength * 0.05;
  }
  
  vec4 color = texture2D(u_texture, uv);
  gl_FragColor = color;
}
`
