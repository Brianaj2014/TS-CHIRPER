const express = require('express');
const chirpstore = require('../chirpstore.js');
const router = express.Router();

router.get("/", (req, res) => {
    const chirps = chirpstore.GetChirps();
    delete chirps.nextid
    const tempArr = Object.entries(chirps);
    const chirpArr = tempArr.map(chirp => {
        const newChirp = {
            return newChirp
            
        }
    });
    chirpArr.reverse();
    res.send(chirpArr);
});
// I have to create and delete new chirps

router.post("/", (req, res) => {
    chirpstore.CreateChirp(req.body);
    res.sendStatus();
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const chirp = req.body;
    chirpstore.UpdateChirp(id, chirp);
    res.sendStatus();
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    chirpstore.DeleteChirp(id);
    res.sendStatus();
});

module.exports = router;