import ItemCount from "./ItemCount/ItemCount.jsx";

const ItemDetail = ({item}) => {
    const onAdd = (contador) => {
        console.log(contador)
    }  

    return (
        <div className="containerCustom containerFlex containerItemDetail">
            <div className="containerItemDetailImage">
                <img className="imgResponsive" src={`../img/${item.img}`} alt={item.title} />
            </div>
            <div className="containerItemDetailData">
                <h1 className="title">{item.title}</h1>
                <p className="textGeneric">Serie: <span>{item.serie}</span></p>
                <p className="textGeneric">Autor: <span>{item.author}</span></p>
                <p className="textGeneric">Fecha de publicación: <span>{item.releaseDate}</span></p>
                <p className="textGeneric">Descripción: <span>{item.description}</span></p>
                <p className="textGeneric">Precio: <span>${item.price}</span></p>
                <p className="textGeneric">Cantidad disponible: <span>{item.stock}</span></p>
                <ItemCount initial = {1} stock= {item.stock} onAdd={onAdd}/>
                <a href='/cart'>Finalizar compra</a>
            </div>
        </div>
    );
}

export default ItemDetail;
