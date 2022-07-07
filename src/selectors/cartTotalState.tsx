import { selector } from "recoil";
import cartState from "../atoms/CartState";
import { ITotalProducts } from '../interfaces/ITotalProducts';

const cartTotalState = selector({
    key: "cartTotalState",
    get: ({ get }) => {
        const cart = get(cartState)
        const total = cart.reduce((previous, current: ITotalProducts) => previous + current.price, 0);

        return { total }
    }
});

export default cartTotalState;