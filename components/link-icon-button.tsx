"use client"

import { useState } from "react"

type LinkIconButtonProps = {
  /**
   * Resource path directly under the public folder.
   * @example '/assets/icons/github.svg'
   */
  imagePath: string
  /**
   * @example 'https://github.com'
   */
  linkPath: string
  /**
   * @default 'bottom-right'
   */
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  /**
   * @default [50, 50] - width:50px, height:50px
   */
  size?: [number, number]
}

export function LinkIconButton({
  imagePath,
  linkPath,
  position = "bottom-right",
  size = [50, 50],
}: LinkIconButtonProps) {
  const [hover, setHover] = useState(false)

  // Position classes
  const positionClasses = {
    "top-left": "fixed top-[10px] left-[10px]",
    "top-right": "fixed top-[10px] right-[10px]",
    "bottom-left": "fixed bottom-[10px] left-[10px]",
    "bottom-right": "fixed bottom-[10px] right-[10px]",
  }

  return (
    <a
      className={positionClasses[position]}
      href={linkPath}
      target="_blank"
      rel="noreferrer noopener"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        className={`object-cover transition-all duration-300 ${hover ? "opacity-100 rotate-[360deg]" : "opacity-50 rotate-0"}`}
        src={imagePath || "/placeholder.svg"}
        alt=""
        width={size[0]}
        height={size[1]}
      />
    </a>
  )
}
