const express = require('express');
const router = express.Router();
const chirpsRouter = require('./chirps');

router.use("/chirps", chirpsRouter);


import * as express from "express";
import chirpsRouter from "./chirps";
import usersRouter from "./users";
import mentionsRouter from './mentions';

const router = express.Router();

router.use("/chirps", chirpsRouter);
router.use("/users", usersRouter);
router.use("/mentions", mentionsRouter);

export default router;
