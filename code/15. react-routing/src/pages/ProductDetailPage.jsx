// useParams to access URL parameters, Link for navigation
import { useParams, Link } from 'react-router-dom';

function ProductDetailPage() {
    const params = useParams();

    return (
        <>
            <h1>Product Details!</h1>
            <p>{params.productId}</p>
            {/* to=".." Navigates one level up (to /products) */}
            <p><Link to=".." relative='path'>Back</Link></p>
        </>
    );
}

export default ProductDetailPage;
