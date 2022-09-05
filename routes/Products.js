import express from "express";
import { client } from "../index.js";
import { getAllProducts, getproductById, 
    deleteProductById, updateproductById, createNewproducts } from "../routes/helper.js";
import Auth from "../middleware/auth.js"
    const router =express.Router();


router.get('/'  , async function (request, response) {
    
    
    const products= await getAllProducts(request);
    response.send(products);
    })
  
  router.get('/:id', Auth,async function (req, res) {
  const {id} = req.params;
  
        
  const product= await getproductById(id);
  console.log(product);
  product?res.send(product):res.status(404).send({msg:"product not found"});
    })
  
    router.delete('/:id', Auth,async function (req, res) {
      const {id} = req.params;
            
      const result= await deleteProductById(id);
      result.deletedCount>0?res.send({msg:"product deleted successfully"}):
      res.status(404).send({msg:"product not found"});
        })
  
  router.put('/:id', Auth,async function (req, res) {
    const {id} = req.params;
    const data=req.body;
          
    const result= await updateproductById(id, data);
    res.send(result);
      })
  
  // express.json() is a inbuilt middleware to convert data inside body to json format.
  router.post('/', Auth,async function (req, res) {
    const data=req.body;
    console.log(data)
    
    //db.products.insertMany(data);
    const result=await createNewproducts(data);
      res.send(result);
      console.log(result)
    })


  
    


  
    
    

    export  const productRouter=router;
  