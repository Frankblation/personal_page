import * as THREE from "three"

export class Drawer {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  texture: THREE.Texture
  aspect: number
  text1: string
  text2: string

  constructor(text1: string, text2: string) {
    this.canvas = document.createElement("canvas")
    const ctx = this.canvas.getContext("2d")
    if (!ctx) throw new Error("Could not get canvas context")
    this.ctx = ctx

    this.text1 = text1
    this.text2 = text2

    this.canvas.width = 1024
    this.canvas.height = 512
    this.aspect = this.canvas.width / this.canvas.height

    this.texture = new THREE.Texture(this.canvas)
  }

  draw() {
    const { ctx, canvas, text1, text2 } = this

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Set font styles
    ctx.fillStyle = "#ffffff"
    ctx.font = "700 120px sans-serif"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"

    // Draw first text
    ctx.fillText(text1, canvas.width / 2, canvas.height / 3)

    // Draw second text
    ctx.fillText(text2, canvas.width / 2, (canvas.height / 3) * 2)

    // Update texture
    this.texture.needsUpdate = true

    return this.texture
  }
}
