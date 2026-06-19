import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // next/image is used in 9 files; the default optimizer needs a server,
  // which static export does not have.
  images: { unoptimized: true },
  // Emit /route/index.html so clean URLs resolve as static files on Pages.
  trailingSlash: true,
};

export default nextConfig;
