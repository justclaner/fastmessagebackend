import express from 'express';
import mongoose from 'mongoose';
//import flashcardsRouter from '../routes/flashcards.js';
import testRouter from "../routes/testing.js";
import 'dotenv/config'
import cors from 'cors';
import auth from '../auth.js';

const app = express();
app.use(express.json());

app.use('/test', testRouter);

app.get('/t', async (req, res) => {
    res.send("hi");
});

export default app;