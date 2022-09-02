import express from "express";
import { getAllProducts,getproductById } from "./helper.js";
const router =express.Router();

router.get('/products', async function (request, response) {
    
    if(request.query.rating){
      request.query.rating = +request.query.rating;
    }
    const products= await getAllProducts(request);
    response.send(products);
    })
  
  router.get('products/:id', async function (req, res) {
  const {id} = req.params;
  const product= await getproductById(id);
  console.log(product);
  product?res.send(product):res.status(404).send({msg:"product not found"});
    })
  
   
  
  
  
    
    

    export const productRouter=router;
  