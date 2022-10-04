import database from '../database/index.js';

export const listCategoriesService = async (id) => {
	if (!id) {
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
	} else {
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
    console.log( name, id)
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