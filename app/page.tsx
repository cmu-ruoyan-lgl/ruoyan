"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { getBasePath } from "@/lib/basePath"

export default function RootRedirectPage() {
  const router = useRouter()

  useEffect(() => {
    const base = getBasePath()
    router.replace(`${base}/en`)
  }, [router])

  return (
    <main className="p-6">
      <a href={`${getBasePath()}/en`}>Continue to English</a>
    </main>
  )
}


