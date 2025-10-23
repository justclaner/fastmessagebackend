import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();

router.get("/f", async (req, res) => {
    return res.status(200).json("hi");
})

export default router;