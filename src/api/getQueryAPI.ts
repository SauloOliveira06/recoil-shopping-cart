import axios from "axios";
import { selector } from "recoil";

// fetch API usando o metodo selector do recoil
const productQuery = selector({
    key: "Produtos", //deve ser unico
    get: async () => {
        try {
            const response = await axios("https://fakestoreapi.com/products");
            return response.data || [];
        } catch (error) {
            console.log(`Erro: ${error}`);
            return []
        }
    }
});

export default productQuery;