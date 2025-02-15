import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://vitorRSouza:vrds10022@cluster0.hph0f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);
export const db = client.db("spotfy");

// const artistsColection = await db.collection("artists").find({}).toArray();
// const songsColection = await db.collection("songs").find({}).toArray();

// console.log(artistsColection);
