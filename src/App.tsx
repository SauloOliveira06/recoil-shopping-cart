import React from 'react';
import FakeProducts from './components/FakeProducts'
import cartState from './atoms/CartState';
import { useRecoilState } from 'recoil';
import './App.scss';
import { IProducts } from './interfaces/IProducts';
import Basket from './components/Basket';

const App = () => {
  const [cart, setCart] = useRecoilState(cartState);

  const AddCartItem = (products: IProducts) => {
    setCart((cart: any) => {
      return cart.find((item: any) => item.id !== products.id) ? cart : [...cart, products];
    })
  }

  const removeCartItem = (products: IProducts) => {
    setCart((cart: any) => {
      return cart.filter((item: any) => item.id !== products.id)
    })
  }

  return (
    <>
      <React.Suspense fallback={<div>Carregando...</div>}>
        <FakeProducts onAddCartItem={AddCartItem}></FakeProducts>
      </React.Suspense>
      <div className='floatcart'>
        <Basket products={cart} onRemoveCartItem={removeCartItem} />
      </div>
    </>
  );
}

export default App;
