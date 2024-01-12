import axios from "axios";

const api = axios.create({
    baseURL: 'https://fakestoreapi.com'
});

class Api {
    static getProductList = () => {
        console.log('getProductList');
        return api.get('/products');
    }

    static getProduct = (id) => {
        console.log('getProduct');
        return api.get(`/products/${id}`);
    }
}

export default Api;