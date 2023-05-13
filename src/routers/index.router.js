const Router = require('express');
const router = Router();

router.use((req, res) => {
	res.status(404).json({ success: false, message: 'Page no found' });
});

module.exports = router;
