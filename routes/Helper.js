import {client } from "../index.js";

export async function getAllHomes(request) {
 return await client.db("chartData")
 .collection("chartData")
 .find(request.query).toArray();
}

