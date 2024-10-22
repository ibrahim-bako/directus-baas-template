module.exports = {
  debug: false,
  directusUrl: process.env.DIRECTUS_BASE_URL,
  directusToken: process.env.DIRECTUS_ADMIN_TOKEN,
  directusEmail: process.env.DIRECTUS_ADMIN_EMAIL,
  directusPassword: process.env.DIRECTUS_ADMIN_PASSWORD,
  dumpPath: "./directus-config",
  collectionsPath: "collections",
  onlyCollections: [
    "roles",
    "permissions",
    "settings",
    "flows",
    "operations",
    "dashboards",
    "folders",
    "panels",
    "presets",
    "translations",
    "webhooks",
  ],
  excludeCollections: [],
  snapshotPath: "snapshot",
  snapshot: true,
  split: true,
  specsPath: "specs",
  specs: true,
  force: true,
};
