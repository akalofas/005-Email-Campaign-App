const express = require('express');
const { trackOpen } = require('../../controllers/trackingController/trackOpen');
const { trackClick } = require('../../controllers/trackingController/trackClick');
const router = express.Router();

router.get('/track-open/:campaignId/:contactId', trackOpen);
router.get('/track-click/:campaignId/:contactId', trackClick);

module.exports = router;
