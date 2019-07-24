# AffiliatePluginAmazon

This plugin for the open source [Affiliate package](https://github.com/teamtofu/affiliate) automatically affiliates Amazon URLs based upon locality.

## Installation

```bash
$ npm i -S affiliate affiliate-plugin-amazon
$ yarn add affiliate affiliate-plugin-amazon
```

## What It Can Do

Affiliate can modify the following link into any of the others.
```html
<a href="https://www.amazon.co.jp/dp/B01MRZFBBH">Japan</a>
<a href="https://www.amazon.com/dp/B01MRZFBBH">USA</a>
<a href="https://www.amazon.de/dp/B01MRZFBBH">Germany</a>
<a href="https://www.amazon.co.uk/dp/B01MRZFBBH">UK</a>
```

If the user's primary language is Italian, all links would become:
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

## License

MIT (C) [Russell Steadman](https://www.russellsteadman.com/?utm_source=aff_amz_repo&utm_medium=readme_copy). Learn more in the [LICENSE](https://github.com/teamtofu/affiliate-plugin-amazon/blob/master/LICENSE) file.