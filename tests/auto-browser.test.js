/* global test expect beforeAll page */

require('core-js/stable');
require('regenerator-runtime/runtime');

const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
let Affiliate = '';

beforeAll(async () => {
    const opts = require('../config/webpack.config');
    opts.mode = 'development';
    await new Promise((res, rej) => webpack(opts, (err, stats) => {
        if (err || stats.hasErrors()) rej(new Error('Could not compile Affiliate'));

        Affiliate += fs.readFileSync(path.join(__dirname, '../node_modules/affiliate/dist/affiliate.js')).toString('utf8');
        Affiliate += fs.readFileSync(path.join(__dirname, '../dist/plugin.js')).toString('utf8');
        res();
    }));
}, 10000);

const LANDING_PAGE = 'https://example.com/';
const UTILITIES = `
window.optionOne = {
    tags: {
        us: 't-us',
        gb: 't-gb',
        de: 't-de',
        fr: 't-fr',
        jp: 't-jp',
        ca: 't-ca',
        cn: 't-cn',
        it: 't-it',
        es: 't-es',
        in: 't-in',
        br: 't-br',
        mx: 't-mx'
    },
    debug: true,
    modifyDomain: true,
    locale: 'it'
};

window.optionTwo = {
    tags: {
        us: 't-us',
        gb: 't-gb',
        de: 't-de',
        fr: 't-fr',
        // jp: 't-jp',
        ca: 't-ca',
        cn: 't-cn',
        it: 't-it',
        es: 't-es',
        in: 't-in',
        br: 't-br',
        mx: 't-mx'
    },
    debug: true,
    modifyDomain: false
};

window.optionThree = {
    tags: {
        us: 't-us',
        gb: 't-gb',
        de: 't-de',
        fr: 't-fr',
        //jp: 't-jp',
        ca: 't-ca',
        cn: 't-cn',
        it: 't-it',
        es: 't-es',
        in: 't-in',
        br: 't-br',
        mx: 't-mx'
    },
    debug: true
};

window.createLink = function (href) {
    var a = document.createElement('a');
    a.setAttribute('href', href);
    document.body.appendChild(a);
    return a;
};

window.setLang = function (languages) {
    var prop = { get: function () { return languages; } };
    try {
        Object.defineProperty(window.navigator, 'languages', prop);
    } catch (e) {
        window.navigator = Object.create(navigator, {
            languages: prop
        });
    }
};

window.setLang(['es-mx', 'pt-BR', 'en-US']);

window.links = {
    jp: 'https://www.amazon.co.jp/Honor-6X-Unlocked-Smartphone-Gray/dp/B01MRZFBBH',
    us: 'https://www.amazon.com/Honor-6X-Unlocked-Smartphone-Gray/dp/B01MRZFBBH',
    de: 'https://www.amazon.de/Honor-6X-Unlocked-Smartphone-Gray/dp/B01MRZFBBH',
    gb: 'https://www.amazon.co.uk/Honor-6X-Unlocked-Smartphone-Gray/dp/B01MRZFBBH'
};
`;

const linksTagged = {
    it: 'https://www.amazon.it/Honor-6X-Unlocked-Smartphone-Gray/dp/B01MRZFBBH?tag=t-it',
    us: 'https://www.amazon.com/Honor-6X-Unlocked-Smartphone-Gray/dp/B01MRZFBBH?tag=t-us',
    gb: 'https://www.amazon.co.uk/Honor-6X-Unlocked-Smartphone-Gray/dp/B01MRZFBBH?tag=t-gb',
    mx: 'https://www.amazon.com.mx/Honor-6X-Unlocked-Smartphone-Gray/dp/B01MRZFBBH?tag=t-mx'
};

test("Generator has correct types", async () => {
    await page.goto(LANDING_PAGE);
    await page.addScriptTag({content: Affiliate});
    expect(await page.evaluate(`typeof window.AffiliatePluginAmazon`)).toBe('function');
});

test("Instance can mutate links", async () => {
    await page.goto(LANDING_PAGE);
    await page.addScriptTag({content: Affiliate});
    await page.evaluate(UTILITIES);

    expect(await page.evaluate(`typeof Affiliate`)).toBe('object');

    await page.evaluate(`window.aff = AffiliatePluginAmazon(Affiliate, optionOne);`);

    expect(await page.evaluate(`typeof aff.attach`)).toEqual('function');
    expect(await page.evaluate(`typeof aff.detach`)).toEqual('function');

    await page.evaluate(`
    Affiliate.revert();

    window.link = createLink(links.us);
    window.linkTwo = createLink(links.de);
    window.aff = AffiliatePluginAmazon(Affiliate, window.optionOne);
    window.aff.attach();
    `);

    expect(await page.evaluate(`window.link.getAttribute('href')`)).toEqual(linksTagged.it);
    expect(await page.evaluate(`window.linkTwo.getAttribute('href')`)).toEqual(linksTagged.it);
        
    await page.evaluate(`
    Affiliate.revert();
    
    window.link = createLink(links.jp);
    window.linkTwo = createLink(links.gb);
    window.aff = AffiliatePluginAmazon(Affiliate, window.optionTwo);
    window.aff.attach();
    `);

    expect(await page.evaluate(`window.link.getAttribute('href')`)).toEqual(`https://www.amazon.co.jp/Honor-6X-Unlocked-Smartphone-Gray/dp/B01MRZFBBH`);
    expect(await page.evaluate(`window.linkTwo.getAttribute('href')`)).toEqual(linksTagged.gb);

    await page.evaluate(`
    Affiliate.revert();
    
    window.link = createLink(window.links.us);
    window.linkTwo = createLink(window.links.jp);
    window.aff = AffiliatePluginAmazon(Affiliate, window.optionThree);
    window.aff.attach();
    `);

    expect(await page.evaluate(`window.link.getAttribute('href')`)).toEqual(linksTagged.mx);
    expect(await page.evaluate(`window.linkTwo.getAttribute('href')`)).toEqual(linksTagged.mx);
});