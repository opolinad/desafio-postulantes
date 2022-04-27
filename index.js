import express from "express";
import { convertCSVToJSON } from "./utils/ConvertCSVToJSON.js";
const app = express();

app.get("/api", async (req, res) => {
    const { page, resultsPerPage } = req.query;
    let maxNumberOfRecords = 156;
    if(page > Math.ceil(maxNumberOfRecords / resultsPerPage)) return res.status(401).send("La información solicitada no existe");
    let response = await convertCSVToJSON(page, resultsPerPage, maxNumberOfRecords);
    res.json(response);
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})