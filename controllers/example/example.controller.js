const example = require('../../models/example.model');

module.exports = class ExampleController {
    get() {
        return `This is an example`
    }

    list(req, res, next) {
        example.findAll()
            .then(all => res.send(all));
    }
};
