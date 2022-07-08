import React from 'react';
import FakeProducts from './components/FakeProducts'
import cartState from './atoms/CartState';
import { useRecoilState } from 'recoil';
import './App.scss';
import Basket from './components/Basket';
import { AddCartItem } from './functions/AddCartItem';
import { RemoveCartItem } from './functions/RemoveCartItem';

const App = () => {
  const [cart,] = useRecoilState(cartState);

  return (
    <>
      <React.Suspense fallback={<div>Carregando...</div>}>
        <FakeProducts onAddCartItem={AddCartItem}></FakeProducts>
      </React.Suspense>
      <div className='floatcart'>
        <Basket products={cart} onRemoveCartItem={RemoveCartItem} />
      </div>
    </>
  );
}

export default App;
