const express = require('express');
const router = express.Router();

router.use('/users', require('./users/userRoutes'));
router.use('/campaigns', require('./campaigns/campaignRoutes'));
router.use('/tracking', require('./campaigns/trackingRoutes'));
router.use('/templates', require('./template/templateRoutes'));
router.use('/contacts', require('./contacts/contactRoutes'));
router.use('/contact-groups', require('./contacts/contactGroupRoutes'));


module.exports = router;
