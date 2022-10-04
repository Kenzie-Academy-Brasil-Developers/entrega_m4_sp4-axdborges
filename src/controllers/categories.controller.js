import listCategoriesService from '../services/categories.service.js';

const listCategoriesController = async (request, response) => {

    // const { id } = request.params;

    try {
       
            const list = await listCategoriesService()
            return response.status(200).json(list)
        
    } catch (error) {
        console.log("erro controller")
    }
}

export default listCategoriesController;
