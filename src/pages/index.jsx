import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Header from "../components/indexpage/header/header";
import OurProducts from "../components/indexpage/products/products";
import ContentSection from "../components/indexpage/content-section/ContentSection";
import Button from "../components/indexpage/button/button";

function Index (props) {
  
    // const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          {/* <PostListing postEdges={postEdges} /> */}
          <Header />
          <OurProducts />
          <ContentSection
          type="dark"
          title = "oferta specjalna"
          content= "Wszystkie nasze produkty, takie jak balony, kokardy narodowe, torby papierowe, czy daszki i czapeczki kartonowe są wykonywane z bardzo dużą dokładnością. Mamy doświadczenie w tworzeniu gadżetów dzięki czemu naszą produkcję potrafimy dostosować do wymagań czasowych oraz ilościowych naszych klientów. Np. chorągiewki papierowe, czy kokardy narodowe wykonujemy w bardzo dużych ilościach nawet w ciągu kilku dni roboczych. Tak samo podchodzimy do produkcji gadżetów takich jak balony, czy czapeczki i daszki kartonowe.Dodatkowym plusem są także nasze ceny, które swoją atrakcyjność zawdzięczają temu, że bezpośrednio sprzedajemy swoje produkty, a więc zamawiając u nas towar nie płacą Państwo pośrednikom."
          
          >
          <Button 
                    type= "white"
                    linkContent = "Allegro"
                    linkTo = "#"
                    />
          </ContentSection>
          <ContentSection 
          title = "o nas"
          content = "Jesteśmy ludźmi z pasją, którzy produkcję gadżetów traktują zarówno jako pracę, jak i wspaniałą zabawę. Uważamy, że trzeba łączyć przyjemne z pożytecznym bo wtedy nasze wysiłki na prawdę mają sens i przekładają się na zadowolenie naszych Klientów. Wszystkie nasze produkty, takie jak balony, kokardy narodowe, torby papierowe, czy daszki i czapeczki kartonowe są wykonywane z bardzo dużą dokładnością. Mamy doświadczenie w tworzeniu gadżetów dzięki czemu naszą produkcję potrafimy dostosować do wymagań czasowych oraz ilościowych naszych klientów. Np. chorągiewki papierowe, czy kokardy narodowe wykonujemy w bardzo dużych ilościach nawet w ciągu kilku dni roboczych. Tak samo podchodzimy do produkcji gadżetów takich jak balony, czy czapeczki i daszki kartonowe. Dodatkowym plusem są także nasze ceny, które swoją atrakcyjność zawdzięczają temu, że bezpośrednio sprzedajemy swoje produkty, a więc zamawiając u nas towar nie płacą Państwo pośrednikom. Dziękujemy za odwiedzenie strony naszej firmy. Zapraszamy do zapoznania się z pełną ofertą Galerii Obrazu."
          >
          <Button 
                    type= "hide"
                    />
          </ContentSection>




        </div>
      </Layout>
    );
  }


export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
