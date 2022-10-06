export const verifyNameAndPriceMiddleware = (
	request,
	response,
	next,
) => {
	const { name, price } = request.body;

   console.log(request.body)

	if (!name) {
		return response.status(400).json('Request without name');
	}
	if (!price) {
		return response.status(400).json('Request without price');
	}

	next();
};
