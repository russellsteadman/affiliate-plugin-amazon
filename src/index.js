var extend = require('./extend');

var projectSite = 'https://affiliate.js.org/plugins/amazon';

var log = console.log.bind(window, 'AMZNPlugin: ');
var error = console.error.bind(window, 'AMZNPlugin: ');

var Plugin = function (Affiliate, config) {

    var basic = {
        tags: {
            us: '',
            gb: '',
            de: '',
            fr: '',
            jp: '',
            ca: '',
            cn: '',
            it: '',
            es: '',
            in: '',
            br: '',
            mx: ''
        },
        debug: false,
        locale: null,
        modifyDomain: true
    };

    config = extend(basic, config);
    if (config.debug) log('Read the docs at ' + projectSite);
    if (!config.tags.us) return error('Config must contain a US tag.');

    var tagList = {
        us: {
            tld: 'com',
            la: ['en']
        },
        gb: {
            tld: 'co.uk',
            la: ['gd', 'cy-ie', 'en-ie']
        },
        de: {
            tld: 'de',
            la: ['de']
        },
        fr: {
            tld: 'fr',
            la: ['fr']
        },
        jp: {
            tld: 'co.jp',
            la: ['jp']
        },
        ca: {
            tld: 'ca',
            la: []
        },
        cn: {
            tld: 'cn',
            la: ['zh', 'zh-hk', 'zh-tw']
        },
        it: {
            tld: 'it',
            la: ['it']
        },
        es: {
            tld: 'es',
            la: ['es']
        },
        in: {
            tld: 'in',
            la: ['hi']
        },
        br: {
            tld: 'com.br',
            la: []
        }, // issues?
        mx: {
            tld: 'com.mx',
            la: []
        }
    };

    for (var i in tagList) {
        var domain = 'amazon.' + tagList[i].tld;
        tagList[i].hosts = [domain, 'www.' + domain];
    }

    if (!config.locale) {
        var languages = window.navigator.languages.reduce(function (a, b) {
            a.push(b.toLowerCase());
            return a;
        }, []);
        for (var i in languages) {
            var cc = languages[i].split('-')[1];
            for (var o in tagList) {
                if (o === cc || tagList[o].la.indexOf(languages[i]) !== -1) {
                    config.locale = o;
                    break;
                }
            }
            if (config.locale) break;
        }
    } else {
        config.locale = config.locale.toLowerCase();
    }
    
    if (!config.tags[config.locale]) config.locale = 'us';
    if (config.debug) log('Locale set to "' + config.locale + '".');

    var hosts = [];
    for (var i in tagList) {
        hosts = hosts.concat(tagList[i].hosts);
    }

    var affSettings = {
        tags: [
            {
                hosts: hosts,
                query: {
                    tag: config.tags[config.locale]
                },
                modifyHost: function (host) {
                    var hasWWW = 0;
                    if (host.substr(0, 3) === 'www') hasWWW = 1;
                    return tagList[config.locale].hosts[hasWWW];
                }
            }
        ],
        log: config.debug
    };

    if (config.modifyDomain === false) {
        affSettings.tags = [];
        for (var i in config.tags) {
            if (tagList[i]) {
                affSettings.tags.push({
                    hosts: tagList[i].hosts,
                    query: {
                        tag: config.tags[i]
                    }
                });
            }
        }
    }

    var instance = Affiliate(affSettings);
    return instance;
};

module.exports = Plugin;