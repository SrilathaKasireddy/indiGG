import { tournamentsRouter } from "./routes/tournamentRouter.js";
import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from "dotenv";
import cors from "cors";
import { ObjectId } from "mongodb";


dotenv.config();
const app = express()
app.use(cors());
const PORT = process.env.PORT;
app.use(express.json())
const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("mongo is connected");
  return client;
}
export const client = await createConnection();

app.use("/tournaments", tournamentsRouter)
app.listen(PORT, () => console.log(`App started in ${PORT}`));