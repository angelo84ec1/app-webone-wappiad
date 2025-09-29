module.exports = {
  apps: [
    {
      name: "nuxt wappiad-web",
      script: './.output/server/index.mjs',
      env_production: {
        NODE_ENV: "production"
      },
      env_development: {
        NODE_ENV: "development"
      }
    }
  ]
}
