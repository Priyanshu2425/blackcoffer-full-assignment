const express = require('express');
const DataRouter = express.Router();

// Import the Mongoose model
const { JSONDATA } = require('../../db');

DataRouter.get('/intensity', async(req, res)=>{
    try {
        const filters = {
            country: req.query.country,
            region: req.query.region,
            pestle: req.query.pestle,
            source: req.query.source,
            topic: req.query.topic,
            region: req.query.region,
            sector: req.query.sector,
            end_year: req.query.end_year
        };

        const pipeline = [];

        for (const [key, value] of Object.entries(filters)) {
            if (value) { // Check if the filter value is provided
                pipeline.push({ $match: { [key]: value } });
            }
        }

        pipeline.push({
            $group: {
                _id: "$intensity",
                count: { $sum: 1 }
            }
        });

        const response = await JSONDATA.aggregate(pipeline);

        res.status(200).json({ intensity: response });
    } catch (error) {
        console.error("Error fetching intensity:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

DataRouter.get('/likelihood', async (req, res) => {
    try {
        const filters = {
            country: req.query.country,
            region: req.query.region,
            pestle: req.query.pestle,
            source: req.query.source,
            topic: req.query.topic,
            region: req.query.region,
            sector: req.query.sector,
            end_year: req.query.end_year
        };

        const pipeline = [];

        for (const [key, value] of Object.entries(filters)) {
            if (value) { // Check if the filter value is provided
                pipeline.push({ $match: { [key]: value } });
            }
        }

        pipeline.push({
            $group: {
                _id: "$likelihood",
                count: { $sum: 1 }
            }
        });

        const response = await JSONDATA.aggregate(pipeline);

        res.status(200).json({ likelihood: response });
    } catch (error) {
        console.error("Error fetching likelihood:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

DataRouter.get('/country', async (req, res) => {
    try {
        const filters = {
            country: req.query.country,
            region: req.query.region,
            pestle: req.query.pestle,
            source: req.query.source,
            topic: req.query.topic,
            region: req.query.region,
            sector: req.query.sector,
            end_year: req.query.end_year
        };

        const pipeline = [];

        for (const [key, value] of Object.entries(filters)) {
            if (value) {
                pipeline.push({ $match: { [key]: value } });
            }
        }

        pipeline.push({
            $group: {
                _id: "$country",
                count: { $sum: 1 }
            }
        });

        const response = await JSONDATA.aggregate(pipeline);

        res.status(200).json({ country: response });
    } catch (error) {
        console.error("Error fetching frequency of country:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

DataRouter.get('/region', async (req, res) => {
    try {
        const filters = {
            country  :   req.query.country,
            region   :   req.query.region,
            pestle   :   req.query.pestle,
            source   :   req.query.source,
            topic    :   req.query.topic,
            region   :   req.query.region,
            sector   :   req.query.sector,
            end_year :   req.query.end_year
        };

        const pipeline = [];

        for (const [key, value] of Object.entries(filters)) {
            if (value) {
                pipeline.push({ $match: { [key]: value } });
            }
        }

        pipeline.push({
            $group: {
                _id: "$region",
                count: { $sum: 1 }
            }
        });

        const response = await JSONDATA.aggregate(pipeline);

        res.status(200).json({ region: response });
    } catch (error) {
        console.error("Error fetching frequency of region:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

DataRouter.get('/topic', async (req, res) => {
    try {
        const filters = {
            country: req.query.country,
            region: req.query.region,
            pestle: req.query.pestle,
            source: req.query.source,
            topic: req.query.topic,
            region: req.query.region,
            sector: req.query.sector,
            end_year: req.query.end_year
        };

        const pipeline = [];

        for (const [key, value] of Object.entries(filters)) {
            if (value) {
                pipeline.push({ $match: { [key]: value } });
            }
        }

        pipeline.push({
            $group: {
                _id: "$topic",
                count: { $sum: 1 }
            }
        });

        const response = await JSONDATA.aggregate(pipeline);

        res.status(200).json({ topic: response });
    } catch (error) {
        console.error("Error fetching frequency of topic:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = {
    DataRouter
};
