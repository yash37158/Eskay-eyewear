import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat,filters,sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Get products
  useEffect(() => {
    const getProducts = async () => {
      try{
        const res = await axios.get(cat ? `http://localhost:3800/api/products/all?category=${cat}` 
        : "http://localhost:3800/api/products/all");


        setProducts(res.data)
      }catch(e){
        console.log(e);
      }
    };
    getProducts();
  }, [cat]);
 
  // Filtered products
  useEffect(() => {
    cat && setFilteredProducts(
      products.filter(item=> 
        Object.entries(filters).every(([key,value]) => 
        item[key].includes(value)
      
      ) 
    )
    );

  },[products,cat,filters]);

  // Sort Products
  useEffect(() => {
    if((sort === "newest")) {
      setFilteredProducts(prev=> 
        [...prev].sort((a ,b)=> a.createdAt - b.createdAt)
        );
    }else if((sort === "asc")){
      setFilteredProducts(prev=> 
        [...prev].sort((a ,b)=> a.price - b.price)
        );
      }else if((sort === "desc")){
        setFilteredProducts(prev=> 
          [...prev].sort((a,b)=> a.price - b.price)
          );
      }else {
        setFilteredProducts(prev=> 
          [...prev].sort((a,b)=> a.createdAt - b.createdAt)
          );
      }
  }, [sort]);

  return (
    <div>
    <Container>
      {cat ? filteredProducts.map((item) => (<Product item={item} key={item.id} />)) 
      : products.slice(0, 8).map((item)=> <Product item={item} key={item.id} /> )}
    </Container>
    </div>
  );
};

export default Products;