import axios from "axios";

//  TO CALL THE APIS
//to add an image in category --> we use axios and post method with the following url
export const addCategory = async (category) => {
  return await axios.post('http://localhost:8080/api/v1.0/categories', category);
}

//to delete an image in category --> we use axios and delete method with url
export const deleteCategory = async(categoryId)=>{
    return await axios.delete(`http://localhost:8080/api/v1.0/categories/${categoryId}`);
}

//to get all items in category --> we use axios get method with the url
export const fetchCategories = async()=>{
    return await axios.get('http://localhost:8080/api/v1.0/categories');
} 