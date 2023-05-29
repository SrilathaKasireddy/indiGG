import { client } from "../index.js";
import { ObjectId } from "mongodb";

export async function createNewTournaments(data) {
    return await client
        .db("Tournaments")
        .collection("Tournaments").
        insertMany([data]);
}
export async function updateTournamentById(id, data) {
    return await client
        .db("Tournaments")
        .collection("Tournaments")
        .updateOne({ _id: ObjectId(id) }, { $set: data });
}
export async function deleteTournamentById(id) {
    return await client.db("Tournaments")
        .collection("Tournaments")
        .deleteOne({ _id: ObjectId(id) });
}
export async function getTournamentById(id) {
    return await client.db("Tournaments")
        .collection("Tournaments")
        .findOne({ _id: ObjectId(id) });
}
export async function getAllTournaments(request) {
    return await client.db("Tournaments")
        .collection("Tournaments")
        .find(request.query).toArray();
}



