const Router = require('express');
const { login } = require('../controllers/index.controller');
const router = Router();

router.post('/', login);

router.use((req, res) => {
	res.status(404).json({ success: false, message: 'Page no found' });
});

module.exports = router;
