const Asset = require('../models/assetModel');

const addAsset = async (req, res) => {
    const { assetId, serialNumber } = req.body;

    try {
        // Check if asset with given assetId or serialNumber already exists
        const existingAsset = await Asset.findOne({ $or: [{ assetId }, { serialNumber }] });
        if (existingAsset) {
            return res.status(400).json({ message: 'Asset with the same Asset ID or Serial Number already exists.' });
        }

        // If no duplicate, create new asset
        const newAsset = new Asset(req.body);
        await newAsset.save();
        res.status(201).json(newAsset);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAssets = async (req, res) => {
    try {
        const assets = await Asset.find();
        res.status(200).json(assets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAssetById = async (req, res) => {
    const { id } = req.params;

    try {
        const asset = await Asset.findOne(assetId);
        if (!asset) {
            return res.status(404).json({ message: 'Asset not found' });
        }
        res.status(200).json(asset);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAsset = async (req, res) => {
    const { assetId } = req.params;
    const { assetName, assetType, model, purchaseDate, warranty, location } = req.body;

    try {
        const asset = await Asset.findOneAndUpdate(assetId);
        if (!asset) {
            return res.status(404).json({ message: 'Asset not found' });
        }

        // Ensure assetId and serialNumber remain unchanged
        asset.assetName = assetName;
        asset.assetType = assetType;
        asset.model = model;
        // asset.assetId = assetId; // Remove this line to keep assetId unchanged
        // asset.serialNumber = serialNumber; // Remove this line to keep serialNumber unchanged
        asset.purchaseDate = purchaseDate;
        asset.warranty = warranty;
        asset.location = location;

        await asset.save();
        res.status(200).json(asset);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};






// router.put("/courses/:id", async (req, res) => {
//     const data = req.body;
//     const courseId = data.courseId;
//     try {
//       const result = await courses.findOneAndUpdate(
//         { courseId: courseId },
//         req.body,
//         { new: true, runValidators: true }
//       );
//       if (!result) {
//         return res.status(404).send("Course not found");
//       }
//       res.send("Course updated successfully");
//     } catch (error) {
//       res.status(500).send("Server error");
//     }
//   });


const deleteAsset = async (req, res) => {
    const { assetId } = req.params;

    try {
        const asset = await Asset.findOneAndDelete(assetId);
        if (!asset) {
            return res.status(404).json({ message: 'Asset not found' });
        }

        await asset.remove();
        res.status(200).json({ message: 'Asset deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    addAsset,
    getAssets,
    getAssetById,
    updateAsset,
    deleteAsset
};
