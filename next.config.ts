import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const githubPagesBasePath = "/tochka-prityazheniya";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath: "",
  trailingSlash: isGitHubPages,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? githubPagesBasePath : "",
  },
};

export default nextConfig;
