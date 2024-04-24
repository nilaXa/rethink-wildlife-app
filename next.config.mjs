/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    API_URL:
      "/choreo-apis/psmc/rethinkwildlife-hac-incidents-service/rethinkwildlife-rest-endpoint-2a3/v1.0",
    API_ACCESS_TOKEN: process.env.API_ACCESS_TOKEN || "",
  },
};

export default nextConfig;
