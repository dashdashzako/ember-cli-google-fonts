# Ember-cli-google-fonts

Lazily add Google Fonts to your Ember application.

This addon will add the fonts declaration to the `content-for: head` hook to avoid including these inside the css files.

## Installation

### Install addon

`ember install ember-cli-google-fonts`

### Declare fonts

```javascript
// config/environment.js

module.exports = function(environment) {
  var ENV = {
    /* your config */

    googleFonts: [
      'Open+Sans:600',
      'Roboto'
    ],

    // Set or update content security policies
    contentSecurityPolicy: {
      'font-src': "'self' fonts.gstatic.com",
      'style-src': "'self' fonts.googleapis.com"
    }
  }

  return ENV;
}
```
