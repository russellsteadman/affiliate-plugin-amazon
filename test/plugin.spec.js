/* global it, describe, Affiliate, AffiliatePluginAmazon, expect */

var setLang = function (languages) {
    var prop = { get: function () { return languages; } };
    try {
        Object.defineProperty(window.navigator, 'languages', prop);
    } catch (e) {
        window.navigator = Object.create(navigator, {
            languages: prop
        });
    }
};

setLang(['es-mx', 'pt-BR', 'en-US']);

/*
var plugin = AffiliatePluginAmazon(Affiliate, {
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
            modifyDomain: false,
            locale: 'it'
        });
*/

var optionOne = {
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

var optionTwo = {
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

var optionThree = {
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

var createLink = function (href) {
    var a = document.createElement('a');
    a.setAttribute('href', href);
    a.setAttribute('style', 'display: none;');
    document.body.appendChild(a);
    return a;
};

var links = {
    jp: 'https://www.amazon.co.jp/Honor-6X-Unlocked-Smartphone-Gray/dp/B01MRZFBBH',
    us: 'https://www.amazon.com/Honor-6X-Unlocked-Smartphone-Gray/dp/B01MRZFBBH',
    de: 'https://www.amazon.de/Honor-6X-Unlocked-Smartphone-Gray/dp/B01MRZFBBH',
    gb: 'https://www.amazon.co.uk/Honor-6X-Unlocked-Smartphone-Gray/dp/B01MRZFBBH'
};

var linksTagged = {
    it: 'https://www.amazon.it/Honor-6X-Unlocked-Smartphone-Gray/dp/B01MRZFBBH?tag=t-it',
    us: 'https://www.amazon.com/Honor-6X-Unlocked-Smartphone-Gray/dp/B01MRZFBBH?tag=t-us',
    gb: 'https://www.amazon.co.uk/Honor-6X-Unlocked-Smartphone-Gray/dp/B01MRZFBBH?tag=t-gb',
    mx: 'https://www.amazon.com.mx/Honor-6X-Unlocked-Smartphone-Gray/dp/B01MRZFBBH?tag=t-mx'
};

describe('AffiliatePluginAmazon global', function () {
    it('is a function', function () {
        expect(typeof AffiliatePluginAmazon).toEqual('function');
    });
});

describe('AffiliatePluginAmazon instances', function () {
    it('have all attributes', function () {
        var aff = AffiliatePluginAmazon(Affiliate, optionOne);
        expect(typeof aff.attach).toEqual('function');
        expect(typeof aff.detach).toEqual('function');
    });
    it('can attach and detach', function () {
        var aff = AffiliatePluginAmazon(Affiliate, optionOne);
        aff.attach();
        aff.detach();
        Affiliate.revert();
        expect(true).toEqual(true);
    });
    it('can properly change links', function () {
        var link = createLink(links.us);
        var linkTwo = createLink(links.de);
        var aff = AffiliatePluginAmazon(Affiliate, optionOne);
        aff.attach();
        expect(link.getAttribute('href')).toEqual(linksTagged.it);
        expect(linkTwo.getAttribute('href')).toEqual(linksTagged.it);
        Affiliate.revert();

        link = createLink(links.jp);
        linkTwo = createLink(links.gb);
        aff = AffiliatePluginAmazon(Affiliate, optionTwo);
        aff.attach();
        expect(link.getAttribute('href')).toEqual(links.jp);
        expect(linkTwo.getAttribute('href')).toEqual(linksTagged.gb);
        Affiliate.revert();

        link = createLink(links.us);
        linkTwo = createLink(links.jp);
        aff = AffiliatePluginAmazon(Affiliate, optionThree);
        aff.attach();
        expect(link.getAttribute('href')).toEqual(linksTagged.mx);
        expect(linkTwo.getAttribute('href')).toEqual(linksTagged.mx);
        Affiliate.revert();
    });
});

window.jasmine.getEnv().addReporter(new window.jasmine.JSReporter2());