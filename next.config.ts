import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    // Serve the static thank-you page at a clean /thankyou URL.
    return [{ source: "/thankyou", destination: "/thankyou.html" }];
  },
};

export default nextConfig;
