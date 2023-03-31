const express = require('express');
const teamRouter = express.Router();


teamRouter.route("/").get((req, res) => {
    res.render('team');
})

module.exports = teamRouter;