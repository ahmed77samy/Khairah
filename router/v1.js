const router = require('express').Router()

const homeController = require('../controllers/home')
const aboutController = require('../controllers/about')
const causesController = require('../controllers/causes')
const eventsController = require('../controllers/events')
const causes_singleController = require('../controllers/causes-single')
const events_singleController = require('../controllers/events-single')
const donateController = require('../controllers/donate')
const volunteerController = require('../controllers/volunteer')
const contactController = require('../controllers/contact')
const errController = require('../controllers/error')

router.get('/', homeController.getHome)
router.get('/about', aboutController.getAbout)
router.get('/causes', causesController.getCauses)
router.get('/causes-single/:id', causes_singleController.getItem)
router.get('/event', eventsController.getEvents)
router.get('/event-single/:id', events_singleController.getItem)
router.get('/donate', donateController.getDonate)
router.get('/volunteer', volunteerController.getVolunteer)
router.get('/contact', contactController.getContact)
router.use(errController.getErr)

module.exports = router