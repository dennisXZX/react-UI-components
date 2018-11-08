const React = require('react')

let Logo

const APP_VARIANT = process.env.APP_VARIANT

if (APP_VARIANT === 'WL') {
  Logo = require('./LogoWL')
} else {
  Logo = require('./LogoJL')
}

module.exports = Logo
