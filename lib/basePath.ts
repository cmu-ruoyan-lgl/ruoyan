export function getBasePath(): string {
  // At build time, Next.js replaces process.env.* in client code.
  // For local dev (user site), this will be empty string.
  // In CI for project site, we inject "/<repo>" via NEXT_PUBLIC_BASE_PATH.
  return process.env.NEXT_PUBLIC_BASE_PATH || ""
}


