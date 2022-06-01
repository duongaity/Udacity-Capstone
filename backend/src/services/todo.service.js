const db = require('../helpers/db.helper');

async function getAll() {
    return await db.Todo.findAll({
        where: {
            status: true
        }
    });
}

async function getById(id) {
    return await db.Todo.findByPk(id);
}

module.exports = {
    getAll,
    getById,
};
