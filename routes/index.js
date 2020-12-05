const express = require('express')
const router = express.Router()

// @desc        Login/Landing page
// @router      GET /

router.get('/', (req, res) => {
    res.render('login', {
        layout: 'login',
    })
})

// @desc        Dashboard
// @router      GET /dashboard

router.get('/dashboard', (req, res) => {
    res.render('Dashboard')
})

module.exports = router
