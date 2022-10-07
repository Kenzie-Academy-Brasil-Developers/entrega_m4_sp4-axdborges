export const verifyNameAndPriceMiddleware = (
	request,
	response,
	next,
) => {
    
	const { name, price } = request.body;
	if (!name) {
		return response.status(400).json({ message: 'Request without name'});
	}
	if (!price) {
		return response.status(400).json({ message: 'Request without price'});
	}

	next();

};
