import {isFunction} from '../'

const DEFAULT_OPTIONS = {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
    allowMultiLoading: true,
    parse: JSON.parse,
    crossDomain: false
};

class I18nBackend {
    static type = 'backend';

    init(services, options = {}) {
        this.services = services;
        this.options = Object.assign(options, DEFAULT_OPTIONS);
    }

    read(language, namespace, callback) {
        let loadPath = this.options.loadPath;
        if (isFunction(loadPath)) {
            loadPath = loadPath.call([language], [namespace]);
        }
        let url = this.services.interpolator.interpolate(loadPath, {lng: language, ns: namespace}, language, {});
        fetch(url).then((resource) => resource.json()).then(translation => callback(null, translation))
    }
}

export default I18nBackend;