import React, { useEffect, useState } from "react";
import Product from "./Product";
function About() {
 const api_url = "https://fakestoreapi.com/products/20";
 const [product, setProduct] = useState(null); 

    useEffect(() => {
        fetch(api_url).then((res) => res.json()).then((data) => setProduct(data)) .catch(error => console.error('Error fetching product:', error));
    }, []);

    return (
<div style={{ textAlign: "center" }}>
     <h1><del style={{ color: "black" }}>Sales of today</del></h1>

{product && <Product product={product} />}
        </div>
    );
}

export default About;