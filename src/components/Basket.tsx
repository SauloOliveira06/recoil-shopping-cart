const Basket = ({ products, onRemoveCartItem }: any) => {
    return (
        <>
            <div className="title">Seu carrinho</div>
            <div className="basket">
                {!products.length
                    ? 'Vazio'
                    : products.map((product: any) => {
                        return (
                            <p key={product.id}>
                                {product.title} (${product.price})
                                <button onClick={() => onRemoveCartItem(product)}>Remover</button>
                            </p>
                        )
                    })
                }
            </div>
            <div className="total">
                TOTAL:
            </div>
        </>
    )
}

export default Basket;