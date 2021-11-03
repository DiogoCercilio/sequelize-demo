const Service = require('../services/service');
const PostModel = require('../models/PostModel');

class PostService extends Service {
    constructor() {
        super();
    }
    
    async create(post) {
        try {
            return await PostModel.create(post); 
        } catch(err) {
            this.errorHandler(err);
        }
    }

    async getAll() {
        try {
            return await PostModel
                .findAll({ attributes: { exclude: ['createdAt', 'updatedAt'] } })
                .then(res=> res.map(item => item.dataValues));
        } catch(err) {
            this.errorHandler(err);
        }
    }
}

module.exports = new PostService();