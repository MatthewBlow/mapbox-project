const Marker = require('../models/markerModel')

const createMarker = (async (req, res) => {
    const newMarker = new Marker(req.body)
    try{
      const savedMarker = await newMarker.save();
      res.status(200).json(savedMarker)
    }catch(err){
        res.status(500).json(err)
    }
})

const getMarkers = (async (req, res) => {
    try {
        const markers = await Marker.find()
        res.status(200).json(markers)
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = {
    createMarker,
    getMarkers
}