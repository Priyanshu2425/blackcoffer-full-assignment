const express = require('express');
const FilterRouter = express.Router();

//db model
const { JSONDATA } = require('../../db');

FilterRouter.get('/country', async (req, res) => {
    try {
        const uniqueCountries = await JSONDATA.distinct('country');
        res.status(200).json({ countries: uniqueCountries });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

FilterRouter.get('/pestle', async (req, res) => {
    try {
        const uniquePestles = await JSONDATA.distinct('pestle');
        res.status(200).json({ pestles: uniquePestles });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

FilterRouter.get('/source', async (req, res) => {
    try {
        const uniqueSources = await JSONDATA.distinct('source');
        res.status(200).json({ sources: uniqueSources });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

FilterRouter.get('/topic', async (req, res) => {
    try {
        const uniqueTopics = await JSONDATA.distinct('topic');
        res.status(200).json({ topics: uniqueTopics });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

FilterRouter.get('/region', async (req, res) => {
    try {
        const uniqueRegions = await JSONDATA.distinct('region');
        res.status(200).json({ regions: uniqueRegions });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

FilterRouter.get('/sector', async (req, res) => {
    try {
        const uniqueSectors = await JSONDATA.distinct('sector');
        res.status(200).json({ sectors: uniqueSectors });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = {
    FilterRouter
}
