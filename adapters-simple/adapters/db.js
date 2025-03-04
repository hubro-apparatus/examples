export default class {
    constructor({ log } = {}) {
        this.name = 'db';
        this.log = log;
        this.registry = new Map();

        this.log.info('Adapter: DB instantiated');
    }

    async ready() {
        this.log.info('Adapter: DB ready');
    }

    async close() {
        this.log.info('Adapter: DB close');
    }

    set(key, value) {
        this.registry.set(key, value);
    }

    get(key) {
        return this.registry.get(key);
    }
}