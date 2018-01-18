/* MIT (c) The jQuery Foundation */

var isPlainObject = function (obj) {
    var proto, Ctor;
    if (!obj || ({}).toString.call(obj) !== "[object Object]") {
        return false;
    }
    proto = Object.getPrototypeOf(obj);
    if (!proto) {
        return true;
    }
    Ctor = ({}).hasOwnProperty.call(proto, "constructor") && proto.constructor;
    return typeof Ctor === "function" && ({}).hasOwnProperty.toString.call(Ctor) === ({}).hasOwnProperty.toString.call(Object);
};

var Extend = function () {
    var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false;

    if (typeof target === "boolean") {
        deep = target;

        target = arguments[i] || {};
        i++;
    }

    if (typeof target !== "object" && !(typeof target === "function" && typeof target.nodeType !== "number")) {
        target = {};
    }

    if (i === length) {
        target = this;
        i--;
    }

    for (; i < length; i++) {

        if ((options = arguments[i]) != null) {

            for (name in options) {
                src = target[name];
                copy = options[name];

                if (target === copy) {
                    continue;
                }

                if (deep && copy && (isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {

                    if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && Array.isArray(src) ? src : [];
                    } else {
                        clone = src && isPlainObject(src) ? src : {};
                    }

                    target[name] = Extend(deep, clone, copy);

                } else if (copy !== undefined) {
                    target[name] = copy;
                }
            }
        }
    }

    return target;
};

module.exports = Extend;