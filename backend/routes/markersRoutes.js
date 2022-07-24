const express = require('express')
const router = express.Router();
const Marker = require("../models/markerModel")
const {createMarker, getMarkers} = require('../controllers/markersController')

router.post("/", createMarker);
router.get("/", getMarkers)

module.exports = router
