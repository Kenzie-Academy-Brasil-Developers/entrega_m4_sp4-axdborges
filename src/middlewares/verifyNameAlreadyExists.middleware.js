import database from '../database/index.js';


export const verifyNameAlreadyExistsMiddleware = async (
	request,
	response,
	next,
) => {
	const { name } = request.body;

    const res = await database.query(
        `SELECT 
            *
        FROM 
            categories
        ;`
    )

    if(res.rows[0].name === name) {
        return response.status(400).json('This category already exists')
    }

	next();
};
