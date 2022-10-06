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

    res.rows.forEach(element => {
        if(element.name === name) {
            return response.status(400).json({ message: 'This category already exists'});
        }
    });

	next();
};
