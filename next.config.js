const withImages = require('next-images');
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([withCSS, withSass, withFonts, withImages]);