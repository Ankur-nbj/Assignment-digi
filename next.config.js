const withPWA = require('next-pwa')({
    dest: 'public',
});

module.exports = withPWA({
    reactStrictMode: true,
    // other Next.js config options here
});