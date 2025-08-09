"use client"

import { useEffect } from "react"

function getBaseFromLocation(): string {
  if (typeof window === "undefined") return ""
  const parts = window.location.pathname.split("/").filter(Boolean)
  // 如果是 GitHub Pages 项目站点，第一段就是 repo 名
  return parts.length > 0 ? `/${parts[0]}` : ""
}

export default function RootRedirectPage() {
  useEffect(() => {
    const base = getBaseFromLocation()
    const target = `${base}/cn/`
    if (window.location.pathname !== `${base}/`) return
    window.location.replace(target)
  }, [])
  return null
}


