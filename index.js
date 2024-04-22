const router = new Bun.FileSystemRouter({
  dir: "public",
  style: "nextjs",
  fileExtensions: [
    ".html",
    ".css",
    ".js",
    ".ico",
    ".svg"
  ]
})

Bun.serve({
  hostname: "0.0.0.0",
  async fetch(request) {
    return new Response(Bun.file(router.match(request).filePath))
  }
})