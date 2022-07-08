import { useRecoilState } from 'recoil';
import cartState from '../atoms/CartState';
import { IProducts } from '../interfaces/IProducts';

const AddCartItem = (products: IProducts) => {
    const [, setCart] = useRecoilState(cartState);
    setCart((cart: any) => {
        return cart.find((item: any) => item.id !== products.id) ? cart : [...cart, products];
    })
}

export {
    AddCartItem,
}