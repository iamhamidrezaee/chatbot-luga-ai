"use client"

import Link from "next/link"
import { FC } from "react"
interface BrandProps {
  theme?: "dark" | "light"
}

export const Brand: FC<BrandProps> = ({ theme = "dark" }) => {
  return (
    <div
      className="flex cursor-pointer flex-col items-center"
      rel="noopener noreferrer"
    >

      <div className="text-6xl tracking-wide opacity-20">Luga AI</div>
    </div>
  )
}
