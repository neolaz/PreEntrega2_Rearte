const Item = ({product}) => {
    return (
        <div className="col-xl-3 itemCardContainer">
            <div className="itemCard">
                <figure>
                    <img className="imgResponsive" src={`../img/${product.img}`} alt={product.title} />
                    <div className="cardDescription">
                        <a href={`/product/${product.id}`}>
                            <h2 className="subTitle">{product.title}</h2>
                        </a>  
                    </div>
                </figure>
            </div>
        </div>
        
    );
}

export default Item;
