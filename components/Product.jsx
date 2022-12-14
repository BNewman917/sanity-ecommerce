import React from "react";
import Link from "next/link";
import Tilt from "react-tilt";

import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price } }) => {
    return (
        <div className="product-z">
            <Tilt>
                <Link href={`/product/${slug.current}`}>
                    <div className="product-card">
                        <img
                            src={urlFor(image && image[0])}
                            width={250}
                            height={250}
                            className="product-image"
                        />
                        <p className="product-name">{name}</p>
                        <p className="product-price">${price}</p>
                    </div>
                </Link>
            </Tilt>
        </div>
    );
};

export default Product;
