const repository = require('../repository/MysqlRepository');

class Service {
    constructor() {
        repository.sync();
    }

    getAll() {
        try {
            return new Promise.resolve('ok from Service');
        } catch(err) {
            console.log(err);
            debugger;
        }
    }

    errorHandler(err) {
        console.error(err);
    }
}

module.exports = Service;