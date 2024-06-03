const express = require('express');
const { createCampaign } = require('../../controllers/campaignController/createCampaign');
const { getCampaigns } = require('../../controllers/campaignController/getCampaigns');
const { getCampaignStatistics } = require('../../controllers/campaignController/getCampaignStatistics');
const { duplicateCampaign } = require('../../controllers/campaignController/duplicateCampaign');
const { deleteCampaign } = require('../../controllers/campaignController/deleteCampaign');
const router = express.Router();

router.post('/', createCampaign);
router.get('/', getCampaigns);
router.get('/:campaignId/statistics', getCampaignStatistics);
router.post('/duplicate', duplicateCampaign);
router.delete('/:id', deleteCampaign);

module.exports = router;
