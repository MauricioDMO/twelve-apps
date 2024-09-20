"use client"

import { useEffect, useRef, useState } from "react"

type KeyProps = {
  text: string | number
  className?: string
  fontClassName?: string
  fontWeight?: number
  fontSize?: number
  textMargin?: number
  keyTrigger?: string
}

export function Key ({ text, className = "", keyTrigger, fontClassName = "", fontWeight = 400, fontSize = 50, textMargin = 10 }: KeyProps) {
  const keyRef = useRef(Math.random().toString(36).substring(7))
  const [width, setWidth] = useState(80)
  const sideWidth = 10

  const $SVG = useRef<SVGSVGElement>(null)


  useEffect(() => {
    const $span = document.createElement("span")
    $span.innerHTML = text.toString()

    $span.style.fontWeight = fontWeight.toString()
    $span.style.position = "absolute"
    $span.style.top = "-1000px"
    $span.style.visibility = "hidden"
    $span.style.whiteSpace = "nowrap"
    $span.style.fontSize = `${fontSize}px`
    if (fontClassName) $span.classList.add(fontClassName)

    document.body.appendChild($span)
    const currentWidth = Math.max($span.offsetWidth + textMargin * 2, 100 - sideWidth * 2)
    setWidth(currentWidth)
    document.body.removeChild($span)

  }, [text, fontClassName, fontWeight, fontSize, textMargin])

  useEffect(() => {
    function handleKeyDown (e: KeyboardEvent) {
      if (e.key === keyTrigger) {
        $SVG.current?.classList.add("translate-y-2")
      }
    }

    function handleKeyUp (e: KeyboardEvent) {
      if (e.key === keyTrigger) {
        $SVG.current?.classList.remove("translate-y-2")
      }
    }

    if (keyTrigger) {
      window.addEventListener("keydown", handleKeyDown)
      window.addEventListener("keyup", handleKeyUp)

      return () => {
        window.removeEventListener("keydown", handleKeyDown)
        window.removeEventListener("keyup", handleKeyUp)
      }
    }

  }, [keyTrigger])



  return (
    <svg
      ref={$SVG}
      className={`transition hover:translate-y-1 active:translate-y-2 ${className} ${fontClassName}`}
      width={width + sideWidth * 2} height={100}
      viewBox={`0 0 ${width + sideWidth * 2} 100`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <mask id={`mask-${keyRef.current}`}>
          <rect width="100%" height="100%" fill="white" />
          <text
            x="50%" y="35%"
            fontSize={fontSize}
            fontWeight={fontWeight}
            textAnchor="middle"
            dominantBaseline="middle"
            className={`select-none ${fontClassName}`}
            fill="black"
          >
            {text.toString()}
          </text>
        </mask>
      </defs>
      {/* KeyCap top */}
      <rect x={sideWidth} y={0} width={width} height="70" rx={6} fill="currentcolor" mask={`url(#mask-${keyRef.current})`} />

      {/* KeyCap sides */}
      <polygon points={`0,35 ${sideWidth - 2},6 ${sideWidth - 2},70 0,99`} fill="currentcolor" />
      <polygon points={`${sideWidth + width + 2},6 ${width + sideWidth * 2},35 ${width + sideWidth * 2},99 ${sideWidth + width + 2},70`} fill="currentcolor" />


      {/* KeyCap bottom */}
      <polygon points={`2,100 ${sideWidth},72 ${sideWidth + width},72 ${sideWidth * 2 + width - 2},100`} fill="currentcolor" />
    </svg>
  )
}