const projectSite = 'https://affiliate.js.org/plugins/amazon';

const log = function (isError) {
    if (typeof console === 'object') {
        var args = Array.prototype.slice.call(arguments, 1);
        var logFunc = isError ? console.error : console.log;
        logFunc = Function.prototype.bind.call(logFunc, console);
        logFunc.apply(console, ['[AMZNPlugin] '].concat(args));
    }
};

const Plugin = (Affiliate, config) => {
    let basic = {
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

    if (config && config.tags) config.tags = {...basic.tags, ...config.tags};
    config = {...basic, ...config};

    if (config.debug) log(false, 'Read the docs at ' + projectSite);
    if (!config.tags.us) return log(true, 'Config must contain a US tag.');

    let tagList = {
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

    for (let i in tagList) {
        let domain = 'amazon.' + tagList[i].tld;
        tagList[i].hosts = [domain, 'www.' + domain, 'smile.' + domain];
    }

    if (!config.locale) {
        let languages = window.navigator.languages.map((a) => (a.toLowerCase()));
        for (let i in languages) {
            let cc = languages[i].split('-')[1];
            for (let o in tagList) {
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
    if (config.debug) log(false, 'Locale set to "' + config.locale + '".');

    let hosts = [];
    for (let i in tagList) {
        hosts = hosts.concat(tagList[i].hosts);
    }

    let affSettings = {
        tags: [
            {
                hosts: hosts,
                query: {
                    tag: config.tags[config.locale]
                },
                modify: (url) => {
                    let hasWWW = 0;
                    if (url.hostname.substr(0, 3) === 'www') hasWWW = 1;
                    url.set('hostname', tagList[config.locale].hosts[hasWWW]);
                    return url;
                }
            }
        ],
        log: config.debug
    };

    if (config.modifyDomain === false) {
        affSettings.tags = [];
        for (let i in config.tags) {
            if (tagList[i] && config.tags[i]) {
                affSettings.tags.push({
                    hosts: tagList[i].hosts,
                    query: {
                        tag: config.tags[i]
                    }
                });
            }
        }
    }

    return Affiliate.create(affSettings);
};

module.exports = Plugin;