const express = require('express')
const { auth } = require('../middleware/auth.js')
const router = express.Router()
const projectController = require('../controllers/projectController');

router.get('/project', auth, projectController.getProject);
router.post('/project', auth, projectController.create);
router.get('/project/:id', auth, projectController.details);
router.put('/project/:id', auth, projectController.updateProject);
router.delete('/project/:id', auth, projectController.deleteProject);

module.exports = router;