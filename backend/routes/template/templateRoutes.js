const express = require('express');
const { createTemplate } = require('../../controllers/templateController/createTemplate');
const { getTemplates } = require('../../controllers/templateController/getTemplates');
const router = express.Router();

router.post('/', createTemplate);
router.get('/', getTemplates);

module.exports = router;
