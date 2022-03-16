/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  ignoredRouteFiles: [".*"],
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  serverBuildPath: "build/app",
  serverBuildDirectory: "build/app",
  publicPath: "/build/",
  devServerPort: 8002,
};
