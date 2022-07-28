const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude: ["/404"],
};
