import React from "react"
import { useLocale } from "next-intl"

export default function Footer() {
  const activeLocale = useLocale()
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Yujie(Joy). All rights reserved.
      </small>
      <p className="text-xs">
        {activeLocale === "en" ? (
          <>
            <span className="font-semibold">About this website:</span> built
            with React & Next.js (App Router & Server Actions), TypeScript,
            Tailwind CSS, Framer Motion, Vercel hosting.
          </>
        ) : (
          <>
            本站由 <span className="font-semibold">React & Next.js</span>
            （App Router & Server Actions）、TypeScript、Tailwind CSS、Framer
            Motion 构建并托管于 Vercel。
          </>
        )}
      </p>
    </footer>
  )
}
