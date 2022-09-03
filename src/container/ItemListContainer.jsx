import ItemCount from '../component/ItemCountW';

export const ItemListContainer = () => {
    const onadd = (quantity) => {
        alert(`Usted eligio ${quantity} productos`)
    }
    return ( 
        <div>
            <ItemCount initial={1} stock={5} onadd={onadd} />
        </div>
        
    )
}

export default ItemListContainer;