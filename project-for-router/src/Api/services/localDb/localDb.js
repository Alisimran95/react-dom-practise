import { HttpClient } from "../../HttpClient";

class LocalDbService extends HttpClient{
    constructor() {
        super("http://localhost:3000");
    }

    getAllProducts(){
    return this.get("products");    
    }
    getProduct(id){
    return this.getProductById("products",id)
    }
}

export const localDbService = new LocalDbService();