const express = require('express');
const { addAsset, getAssets, getAssetById, updateAsset, deleteAsset } = require('../controller/assetController');

const router = express.Router();

router.post('/assets', addAsset);
router.get('/assets', getAssets);
router.get('/assets/:id', getAssetById);
router.put('/assets/:id', updateAsset);
router.delete('/assets/:id', deleteAsset);

module.exports = router;
