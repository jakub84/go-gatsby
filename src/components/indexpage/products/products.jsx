import React, { Component } from "react";
import "./products.scss";
import { Link } from "gatsby"
import Button from "../button/button";
import ProductBox from "../product-box/productBox"


class Products extends Component {
    render() {
        return (
            <div className="products">
                <div className="container">
                    <h2>NASZE PRODUKTY</h2>
                    <div className="separator"></div>
                    <p>
                        Galeria Obrazu jest producentem wszelakich gadżetów reklamowych, które pozwolą stać się rozpoznawalnym Państwa firmie jak i również uświetnią każdą imprezę.
                        <strong> Gwarantujemy konkurencyjne ceny.</strong>
                    </p>
                </div>
                <div className="call-to-action">
                    <div className="container">
                        <h3>Zapraszamy również do obejrzenia naszych aukcji na allegro:</h3>
                        <Button />

                    </div>
                </div>
                <div className="container">
                    <div className="product-box-container">
                        <ProductBox />
                        <ProductBox />
                        <ProductBox />
                        <ProductBox />
                        <ProductBox />
                        <ProductBox />
                    </div>


                </div>
            </div>

        );
    }
}

export default Products;
