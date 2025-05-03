"use client"

import { Suspense } from "react"
import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { Background } from "./background"
import { Lense } from "./lense"
import { TextPlane } from "./text-plane"
import { enFragmentShader, enVertexShader, jpFragmentShader, jpVertexShader } from "@/lib/glsl/shader"

export function TCanvas() {
  const OrthographicCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, -10, 10)

  return (
    <div className="w-full h-full">
      <Canvas camera={OrthographicCamera} dpr={window.devicePixelRatio}>
        <Suspense fallback={null}>
          <Background />
          <Lense />
          <TextPlane text={["Frank", "Blation"]} vertexShader={enVertexShader} fragmentShader={enFragmentShader} />
          <TextPlane text={["Software", "Engineer"]} vertexShader={jpVertexShader} fragmentShader={jpFragmentShader} />
        </Suspense>
      </Canvas>
    </div>
  )
}
