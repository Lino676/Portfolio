import { useEffect, useRef } from 'react';
import { Renderer, Camera, Transform, Plane, Program, Mesh, Texture } from 'ogl';
import { image } from 'framer-motion/client';

// Funções utilitárias
function lerp(a, b, t) {
  return a + (b - a) * t;
}

function createTexture(gl, src) {
  const img = new Image();
  img.src = src;
  const texture = new Texture(gl, { generateMipmaps: false });
  img.onload = () => {
    texture.image = img;
  };
  return texture;
}

// Componente principal
export default function SimpleGallery3D() {
  const containerRef = useRef(null);
  const scroll = useRef({ current: 0, target: 0, last: 0 });
  const isDragging = useRef(false);
  const startX = useRef(0);

useEffect(() => {
  const container = containerRef.current;

  const renderer = new Renderer({ alpha: true, antialias: true });
  const gl = renderer.gl;
  container.appendChild(gl.canvas);

  const camera = new Camera(gl);
  camera.position.z = 5;

  const scene = new Transform();
  const geometry = new Plane(gl, { width: 2, height: 1.3 });

  const images = [
    '/imagens/IMG_0006.JPG',
    '/imagens/IMG_0013.JPG',
  ];

  const medias = [];

  const loadTexture = (src, index) => {
    const texture = new Texture(gl);
    const img = new Image();
    img.crossOrigin = "anonymous"; // 🔥 evita bloqueio de leitura local
    img.src = src;

    img.onload = () => {
      texture.image = img;

      const program = new Program(gl, {
        vertex: `
          attribute vec3 position;
          attribute vec2 uv;
          uniform mat4 modelViewMatrix;
          uniform mat4 projectionMatrix;
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragment: `
          precision highp float;
          uniform sampler2D tMap;
          varying vec2 vUv;
          void main() {
            vec4 color = texture2D(tMap, vUv);
            if(color.a < 0.1) discard;
            gl_FragColor = color;
          }
        `,
        uniforms: { tMap: { value: texture } },
        transparent: true
      });

      const mesh = new Mesh(gl, { geometry, program });
      mesh.position.x = index * 2.2;
      mesh.setParent(scene);

      medias.push(mesh);

      // força um render assim que a imagem carregar
      renderer.render({ scene, camera });
    };
  };

  images.forEach((src, i) => loadTexture(src, i));

  const scroll = { current: 0 };
  const isDragging = { current: false };
  const startX = { current: 0 };

  const updateMeshes = () => {
    const H = 0.8;
    medias.forEach(mesh => {
      const x = mesh.position.x - scroll.current;
      mesh.position.y = -Math.sin((x / 3) * Math.PI) * H;
      mesh.rotation.z = Math.sin((x / 3) * Math.PI) * 0.2;
    });
    renderer.render({ scene, camera });
  };

  const onMouseDown = e => {
    isDragging.current = true;
    startX.current = e.clientX;
  };
  const onMouseMove = e => {
    if (!isDragging.current) return;
    const delta = (startX.current - e.clientX) * 0.01;
    scroll.current += delta;
    startX.current = e.clientX;
    updateMeshes();
  };
  const onMouseUp = () => (isDragging.current = false);

  container.addEventListener('mousedown', onMouseDown);
  container.addEventListener('mousemove', onMouseMove);
  container.addEventListener('mouseup', onMouseUp);
  container.addEventListener('mouseleave', onMouseUp);

  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.render({ scene, camera });

  return () => {
    container.removeEventListener('mousedown', onMouseDown);
    container.removeEventListener('mousemove', onMouseMove);
    container.removeEventListener('mouseup', onMouseUp);
    container.removeEventListener('mouseleave', onMouseUp);
    gl.canvas.remove();
  };
}, []);


  return (
    <div
      ref={containerRef}
      className="w-[600px] h-[400px] mx-auto mt-10 overflow-hidden cursor-grab active:cursor-grabbing"
    />
  );
}
