import database from '../database/index.js';

export const readProductsService = async () => {
	try {
		const res = await database.query(
			`SELECT 
                *
            FROM products
        ;`,
		);
    
		return res.rows;
	} catch (error) {
		throw new Error(error);
	}
};

export const readProductsServiceById = async (id) => {
	try {
		const res = await database.query(
			`SELECT 
                *
            FROM products
            WHERE products.id = $1
        ;`,
			[id],
		);
		return res.rows[0];
	} catch (error) {
		throw new Error(error);
	}
};

export const createProductService = async (nome, price, categoryId) => {
	try {
		const res = await database.query(
		`INSERT INTO 
            products (name, price, category_id)
        VALUES 
            ($1, $2, $3)  
        RETURNING *
        ;`,
			[nome, price, categoryId],
		);
		return res.rows[0];
	} catch (error) {
		throw new Error(error);
	}
};

export const updateProductService = async (product, id) => {
	try {
		if (!product.price) {
			const res = await database.query(
				`UPDATE
                    products
                SET 
                    name = $1
                WHERE 
                    products.id = $2 
                RETURNING *
            ;`,
				[product.name, id],
			);

			const updated = {
				message: 'product updated',
				product: res.rows[0],
			};
			return updated;
		}
		if (!product.name) {
			const res = await database.query(
				`UPDATE
                    products
                SET 
                    price = $1
                WHERE 
                    products.id = $2 
                RETURNING *
            ;`,
				[product.price, id],
			);

			const updated = {
				message: 'product updated',
				product: res.rows[0],
			};
			return updated;
		}
		const res = await database.query(
			`UPDATE
                products
            SET 
                name = $1, price = $2
            WHERE 
                products.id = $3  
            RETURNING *
        ;`,
			[product.name, product.price, id],
		);

		const updated = {
			message: 'product updated',
			product: res.rows[0],
		};
		return updated;
	} catch (error) {
		throw new Error(error);
	}
};

export const deleteProductService = async (id) => {
	try {
		const res = await database.query(
			`DELETE FROM  
                products 
            WHERE
                products.id = $1
            RETURNING *
        ;`,
			[id],
		);
		const deleted = {
			message: 'product deleted',
			product: res.rows[0],
		};
		return deleted;
	} catch (error) {
		throw new Error(error);
	}
};

export const readProductsByCategoryService = async (reqId) => {
	try {
		const res = await database.query(
			`SELECT 
                    *
                FROM 
                    products
                JOIN 
                    categories
                ON 
                    products.category_id = categories.id
                WHERE 
                    categories.id = $1
            ;`,
			[reqId],
		);
		return [{category: res.rows[0]}];
	} catch (error) {
		throw new Error(error);
	}
};
