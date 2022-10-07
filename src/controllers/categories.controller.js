import {
	createCategoryService,
	deleteCategoryService,
	readCategoriesService,
	readCategoriesServiceById,
	updateCategoryService,
} from '../services/categories.service.js';

export const readCategoriesController = async (request, response) => {
	const { id } = request.params;

	try {
		if (!id) {
			const readCategory = await readCategoriesService();
			return response.status(200).json(readCategory);
		}
		const readCategory = await readCategoriesServiceById(id);
		return response.status(200).json(readCategory);
	} catch (error) {
		return response.status(400).json({ message: error.message });
	}
};

export const createCategoryController = async (request, response) => {
	const { name } = request.body;

	try {
		const createdCategory = await createCategoryService(name);
		return response.status(201).json({ message: 'category created', category: createdCategory});
	} catch (error) {
		return response.status(400).json({ message: error.message });
	}
};

export const updateCategoryController = async (request, response) => {
	const { name } = request.body;
	const { id } = request.params;
	try {
		const updatedCategory = await updateCategoryService(name, id);
		return response.status(200).json(updatedCategory);
	} catch (error) {
		return response.status(400).json({ message: error.message });
	}
};

export const deleteCategoryController = async (request, response) => {
	const { id } = request.params;

	try {
		const deletedCategory = await deleteCategoryService(id);
		return response.status(204).json(deletedCategory);
	} catch (error) {
		return response.status(400).json({ message: error.message });
	}
};
