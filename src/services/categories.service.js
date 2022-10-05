import database from '../database/index.js';

export const readCategoriesService = async () => {

    try {
        const res = await database.query(
            `SELECT 
                *
            FROM categories
        ;`,
        );
        return res.rows;
    } catch (error) {
        throw new Error(error);
    }
};

export const readCategoriesServiceById = async (id) => {

    try {
        const res = await database.query(
            `SELECT 
                *
            FROM categories
            WHERE categories.id = $1
        ;`,
            [id],
        );
        return res.rows[0];
    } catch (error) {
        throw new Error(error);
    }

};

export const createCategoryService = async (name) => {
    try {
        const res = await database.query(
            `INSERT INTO 
                categories (name)
            VALUES 
                ($1)
            RETURNING *
        ;`,
        [name]
        );
        const created = {
            message: 'category created',
            category: res.rows[0]
        }
        return created;
    } catch (error) {
        throw new Error(error);
    }
}

export const updateCategoryService = async (name, id) => {
    try {
        const res = await database.query(
            `UPDATE
                categories
            SET 
                name = $1
            WHERE 
                categories.id = $2  
            RETURNING *
        ;`,
        [name, id]
        );

        const updated = {
            message: 'category updated',
            category: res.rows[0]
        }
        return updated;
    } catch (error) {
        throw new Error(error);
    }
}

export const deleteCategoryService = async (id) => {
    try {
        const res = await database.query(
            `DELETE FROM  
                categories 
            WHERE
                categories.id = $1
            RETURNING *
        ;`,
        [id]
        );
        const deleted = {
            message: 'category deleted'  
        }
        return deleted;
    } catch (error) {
        throw new Error(error);
    }
}