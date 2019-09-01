import React, { Component } from "react";
import "./products.scss";
import { Link } from "gatsby"
import Button from "../button/button";
import ProductBox from "../product-box/productBox"
import icon1 from "../../../../static/product-icons/kokardy-narodowe-icon.svg"
import icon2 from "../../../../static/product-icons/choragiewki-icon.svg"
import icon3 from "../../../../static/product-icons/czapeczki-icon.svg"
import icon4 from "../../../../static/product-icons/daszki-icon.svg"
import icon5 from "../../../../static/product-icons/wiatraczki-icon.svg"
import icon6 from "../../../../static/product-icons/balony-icon.svg"
import icon7 from "../../../../static/product-icons/flagi-wsz-icon.svg"
import icon8 from "../../../../static/product-icons/torby-icon.svg"


function Products(props) {

    return (
        <div className="products" id="nasze-produkty">
            <div className="container">
                <h2>NASZE PRODUKTY</h2>
                <div className="separator"></div>
                <p>
                Bacon ipsum dolor amet frankfurter cow meatloaf pork belly, salami drumstick ball tip pastrami pork. Jerky porchetta meatball, leberkas short loin burgdoggen chuck jowl buffalo pancetta sirloin brisket cupim bresaola landjaeger. Turkey tri-tip ball tip jowl, capicola salami drumstick. 
                        <strong> Tail meatball fatback landjaeger andouille beef ribs..</strong>
                </p>
            </div>
            <div className="call-to-action">
                <div className="container">
                    <h3>Bacon ipsum dolor amet frankfurter cow meatloaf pork bell:</h3>
                    <Button
                        linkContent="call to action"
                        linkTo="#"
                    />

                </div>
            </div>
            <div className="container">
                <div className="product-box-container">
                    <ProductBox
                    icon = {icon1}
                    title = "This is headline"
                    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                    >
                        <Button
                            type="white smaller"
                            linkContent="wejdź"
                            linkTo="#"
                        />
                    </ProductBox>
                    <ProductBox 
                    icon = {icon2}
                    title = "This is headline"
                    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                    >
                        <Button
                            type="white smaller"
                            linkContent="wejdź"
                            linkTo="#"
                        />
                    </ProductBox>
                    <ProductBox 
                    icon = {icon3}
                    title = "This is headline"
                    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                    >
                        <Button
                            type="white smaller"
                            linkContent="wejdź"
                            linkTo="#"
                        />
                    </ProductBox>
                    <ProductBox 
                    icon = {icon4}
                    title = "This is headline"
                    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                    >
                        <Button
                            type="white smaller"
                            linkContent="wejdź"
                            linkTo="#"
                        />
                    </ProductBox>
                    <ProductBox 
                    icon = {icon5}
                    title = "This is headline"
                    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                    >
                        <Button
                            type="white smaller"
                            linkContent="wejdź"
                            linkTo="#"
                        />
                    </ProductBox>
                    <ProductBox 
                    icon = {icon6}
                    title = "This is headline"
                    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                    >
                        <Button
                            type="white smaller"
                            linkContent="wejdź"
                            linkTo="#"
                        />
                    </ProductBox>
                    <ProductBox 
                    icon = {icon7}
                    title = "This is headline"
                    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                    >
                        <Button
                            type="white smaller"
                            linkContent="wejdź"
                            linkTo="#"
                        />
                    </ProductBox>
                    <ProductBox 
                    icon = {icon8}
                    title = "This is headline"
                    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                    >
                        <Button
                            type="white smaller"
                            linkContent="wejdź"
                            linkTo="#"
                        />
                    </ProductBox>
                   

                   
                </div>


            </div>
        </div>

    );
}


export default Products;
