import { useRecoilValue } from "recoil";
import productQuery from '../api/getQueryAPI';
import { IProducts } from "../interfaces/IProducts";

const FakeProducts = ({ onAddCartItem }: any) => {
    // get da lista de produtos do estado com recoil
    const dummyProducts = useRecoilValue(productQuery);
    return (
        <>
            <div className="container-flex">
                <div className="content-flex">
                    {dummyProducts.map((products: IProducts) => {
                        return (
                            <div className="card" key={products.id}>
                                <img src={products.image} alt={products.title} />
                                <div className="card-body">
                                    <h2>{products.title}</h2>
                                    <h5>{products.category}</h5>
                                    <p>{products.description}</p>
                                    <h5>(${products.price}) <button onClick={() => onAddCartItem(products)}>Add</button></h5>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default FakeProducts;