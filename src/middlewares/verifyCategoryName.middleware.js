export const verifyCategoryNameMiddleware = (
	request,
	response,
	next,
) => {
	const { name } = request.body;
	if (!name) {
		return response.status(400).json({ message: 'Request without name'});
	}
	next();
};