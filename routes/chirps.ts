import * as express from "express";
import db from "../db";

const router = express.Router();

// create the chirps as previous

router.get("/", async (req, res) => {
    try {
        const chirps = await db.chirps.all();
        res.json(chirps);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});


router.post("/", async (req, res) => {
    const chirp = req.body.content;
    const userid = req.body.userid;

    try {
        const dbRes = await db.chirps.post(chirp, userid);
        res.status().send(dbRes);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});


router.put("/:id", async (req, res) => {
    const chirpid = req.params.id;
    const chirp = req.body.content;

    try {
        await db.chirps.put(chirpid, chirp);
        res.sendStatus();
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});


router.delete("/:id", async (req, res) => {
    const chirpid = req.params.id;

    try {
        await db.chirps.destroy(chirpid);
        res.sendStatus();
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});

export default router;