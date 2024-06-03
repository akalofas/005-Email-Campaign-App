const express = require('express');
const { createContact } = require('../../controllers/contactController/createContact');
const { getContacts } = require('../../controllers/contactController/getContacts');
const { updateContact } = require('../../controllers/contactController/updateContact');
const { deleteContact } = require('../../controllers/contactController/deleteContact');
const router = express.Router();

router.post('/', createContact);
router.get('/', getContacts);
router.put('/:contactId', updateContact);
router.delete('/:contactId', deleteContact);

module.exports = router;
