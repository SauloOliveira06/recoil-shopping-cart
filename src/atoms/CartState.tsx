import { atom } from "recoil";

const cartState = atom({
    key: "cartState", // deve ser unico
    default: [] // valor padrao do carrinho de array vazio
});

export default cartState;