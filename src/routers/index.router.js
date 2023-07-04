const Router = require('express');
const router = Router();

router.post('/', (req, res) => {
	const { user, pass } = req.body;

	if (!user || !pass) {
		return res.status(200).json({ success: false, message: 'Data not found' });
	}

	return res.status(200).json({ success: true, message: 'Logged in session' });
});

router.use((req, res) => {
	res.status(404).json({ success: false, message: 'Page no found' });
});

module.exports = router;
