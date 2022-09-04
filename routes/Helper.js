
import { client } from "../index.js";
import { ObjectId } from "mongodb";


export async function getAllHomes(request) {
 return await client.db("users")
 .collection("users")
 .find(request.query)
}


export async function getUserByName(UserName) {
    //db.users.findOne({username: username });
  return await client.db("users").collection("users").findOne({ UserName: UserName });
}
export async function getUserById(id) {
  //db.users.findOne({_id: id });
  return await client.db("users").collection("users").findOne({ _id:ObjectId(id)});
}

export async function createUser(data) {
    //db.users.insertOne(data);
  return await client.db("users").collection("users").insertOne(data);
}

export async function getUserByEmail(Email) {
    //db.users.findOne({username: username });
  return await client.db("users").collection("users").findOne({Email: Email});
}



export async function createNewproducts(data) {
    return await client
    .db("products")
    .collection("products").
    insertMany([data]);
}
export async function updateproductById(id, data) {
    return await client
    .db("products")
    .collection("products")
    .updateOne({_id: ObjectId(id )}, { $set: data });
}
export async function deleteProductById(id) {
    return await client.db("products")
    .collection("products")
    .deleteOne({_id: ObjectId(id ) });
}
export async function getproductById(id) {
    return await client.db("products")
    .collection("products")
    .findOne({ _id: ObjectId(id )});
}
export async function getAllProducts(request) {
    return await client.db("products")
    .collection("products")
    .find(request.query).toArray();
}

export async function searchproducts(request) {
  return await client.db("products")
  .collection("products")
  .find(request.query).toArray();
}