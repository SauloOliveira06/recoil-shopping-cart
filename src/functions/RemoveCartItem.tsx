import { useRecoilState } from 'recoil';
import cartState from '../atoms/CartState';
import { IProducts } from '../interfaces/IProducts';

const RemoveCartItem = (products: IProducts) => {
    const [, setCart] = useRecoilState(cartState)
    setCart((cart: any) => {
        return cart.filter((item: any) => item.id !== products.id)
    })
}

export {
    RemoveCartItem,
}