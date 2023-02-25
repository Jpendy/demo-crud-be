const client = require("../utils/connect");

module.exports = class Plant {

    static async getAll() {
        const queryResult = await client.query('SELECT * FROM plants;')
        const rows = queryResult.rows;
        return rows;
    }

    static async create({ name, imgUrl, isHerb, isPerennial }) {
        const queryResult = await client.query(`
        INSERT INTO plants (name, img_url, is_herb, is_perennial)
        values ($1, $2, $3, $4)
        RETURNING *;
    `, [name, imgUrl, isHerb, isPerennial])

        return queryResult.rows;
    }

    static async deleteById(id) {
        const queryResult = await client.query(`
        DELETE FROM plants 
        WHERE id = $1
        RETURNING *;
        `, [id])

        return queryResult.rows;
    }

}

