# AffiliatePluginAmazon
This plugin for the open source [Affiliate package](https://github.com/teamtofu/affiliate) automatically affiliates Amazon URLs based upon locality.

## Installation

```bash
$ npm i -S affiliate affiliate-plugin-amazon
$ yarn add affiliate affiliate-plugin-amazon
$ bower install -S affiliate affiliate-plugin-amazon
```

Or use a CDN
```html
<script src="https://cdn.jsdelivr.net/npm/affiliate/dist/affiliate.js"></script>
<script src="https://cdn.jsdelivr.net/npm/affiliate-plugin-amazon/dist/plugin.js"></script>
```

## What It Can Do

Affiliate can modify the following link into any of the others.
```html
<a href="https://www.amazon.co.jp/dp/B01MRZFBBH">Japan</a>
<a href="https://www.amazon.com/dp/B01MRZFBBH">USA</a>
<a href="https://www.amazon.de/dp/B01MRZFBBH">Germany</a>
<a href="https://www.amazon.co.uk/dp/B01MRZFBBH">UK</a>
```

All links would become (if the user's primary language is Italian):
```html
<a href="https://www.amazon.it/dp/B01MRZFBBH?tag=italian-tag">My Locality</a>
```

Or url modification can be disabled:
```html
<a href="https://www.amazon.co.jp/dp/B01MRZFBBH?tag=jp-tag">Japan</a>
<a href="https://www.amazon.com/dp/B01MRZFBBH?tag=us-tag">USA</a>
<a href="https://www.amazon.de/dp/B01MRZFBBH?tag=de-tag">Germany</a>
<a href="https://www.amazon.co.uk/dp/B01MRZFBBH?tag=gb-tag">UK</a>
```

## Documentation

Plugin documentation available here: [affiliate.js.org/plugins/amazon](https://affiliate.js.org/plugins/amazon).

Affiliate is simple and quick to set up, even for more complex usage. Read the docs at: [affiliate.js.org](https://affiliate.js.org/).

### Big Thanks

[![Sauce Labs](https://affiliate.js.org/test/sauce/saucelabs.png)](https://saucelabs.com/)

Cross-browser Testing Platform and Open Source <3 Provided by [Sauce Labs](https://saucelabs.com/)!

## License

MIT (C) [Russell Steadman](https://teamtofu.github.io/contact). Learn more in the [LICENSE](https://github.com/teamtofu/affiliate-plugin-amazon/blob/master/LICENSE) file.

## Support Me

Like this project? Buy me a [cup of coffee](https://www.paypal.me/RussellSteadman/3). &#x2615; Here are more of my [projects](https://teamtofu.github.io/).