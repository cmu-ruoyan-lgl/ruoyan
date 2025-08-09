import { getBasePath } from "@/lib/basePath"

export default function Head() {
  const base = getBasePath()
  // 让 GitHub Pages 根路径在静态环境下重定向到 /cn/
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${base}/cn/`} />
      <link rel="canonical" href={`${base}/cn/`} />
    </>
  )
}


