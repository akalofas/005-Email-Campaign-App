const express = require('express');
const { createContactGroup } = require('../../controllers/contactGroupController/createContactGroup');
const { getContactGroups } = require('../../controllers/contactGroupController/getContactGroups');
const { updateContactGroup } = require('../../controllers/contactGroupController/updateContactGroup');
const { deleteContactGroup } = require('../../controllers/contactGroupController/deleteContactGroup');
const router = express.Router();

router.post('/', createContactGroup);
router.get('/', getContactGroups);
router.put('/:groupId', updateContactGroup);
router.delete('/:groupId', deleteContactGroup);

module.exports = router;
