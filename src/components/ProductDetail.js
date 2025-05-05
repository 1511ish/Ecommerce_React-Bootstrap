import { useParams } from "react-router-dom";
import { Button } from 'react-bootstrap';


const ProductDetail = ({ products }) => {
    const params = useParams();
    let product = products[params.productId];
    return (
        <div style={{width:'40%', margin: 'auto'}}>
            <h1>Product detail page</h1>
            <div>
                <p>{product.title}</p>
                <img src={product.imageUrl} alt="product Image" />
                <p>{product.price}</p>
            </div>
            <div>
                <Button>Add to Cart</Button>
            </div>
        </div>
    )
}

export default ProductDetail;