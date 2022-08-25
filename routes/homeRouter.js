import express from "express";
import  {getAllHomes} from "./helper.js";

const router =express.Router();

router.get('/', async function (request, response) {
    
    
    const Home= await getAllHomes(request);
    response.send(Home);
    })
  

    export const homeRouter=router;