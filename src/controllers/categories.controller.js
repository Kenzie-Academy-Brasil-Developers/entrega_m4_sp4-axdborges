import {
	createCategoryService,
	deleteCategoryService,
	listCategoriesService,
	updateCategoryService,
} from '../services/categories.service.js';

export const listCategoriesController = async (request, response) => {
	const { id } = request.params;

	try {
		if (!id) {
			const list = await listCategoriesService();
			return response.status(200).json(list);
		}
		const list = await listCategoriesService(id);
		return response.status(200).json(list);
	} catch (error) {
		throw new Error(error);
	}
};

export const createCategoryController = async (request, response) => {
	const { name } = request.body;

	try {
		const createdCategory = await createCategoryService(name);
		return response.status(201).json(createdCategory);
	} catch (error) {
		return response.status(400).json(error);
	}
};

export const updateCategoryController = async (request, response) => {
	const updatedCategory = await updateCategoryService();
};

export const deleteCategoryController = async (request, response) => {
	const { id } = request.params;

	try {
		const deletedCategory = await deleteCategoryService(id);
		return response.status(200).json(deletedCategory)
	} catch (error) {
		throw new Error(response.status(403).json("not deleted"))
	}
};
