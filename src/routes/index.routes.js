const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.render('main', {layout : 'index'});
});


module.exports = router;