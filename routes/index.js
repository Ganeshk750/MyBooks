const express = require('express');
const router = express.Router();

/* All Authors Route */
router.get('/', (req,res) =>{
   res.render('authors/new')
});
/* New Authors Route */
router.get('/', (req,res) =>{
   res.render('authors/new')
});
/* Create Authors Route */
router.post('/', (req,res) =>{
   res.render('Create')
});

module.exports = router;