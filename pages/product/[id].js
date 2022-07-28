import React from "react";
import Head from "next/head";
import { Header } from "../../componant";

const Details = ({ products }) => {
  return (
    <div>
      <Head>
        <title>{products.title}</title>
        <meta name="description" content={`${products.description}`} />{" "}
        <meta name="category" content={`${products.category}`} />
        <link rel="icon" href={`${products.image}`} />
      </Head>
      <Header />
      <div
        className="card h-100 text-center p-4"
        key={products.id}
        style={{ width: "400px" }}
      >
        <img
          src={products.image}
          className="card-img-top"
          alt={products.title}
          height="250px"
        />
        <div className="card-body">
          <h5 className="card-title mb-0">{products.title}</h5>
          <p className="card-text lead fw-bold">${products.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
export async function getStaticPaths() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  const paths = data.map((i, index) => {
    return {
      params: {
        id: i.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const products = await response.json();

  return {
    props: {
      products,
    },
  };
}
