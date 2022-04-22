const authMiddleware = require('../middlewares/auth.middleware')
const express = require('express')
const serviceRoute = require('../controller/service_controller')
const loginRoute = require('../controller/login_controller')
const router = express.Router()

const { adduservalidation } = require('../validation/users/user.validation');

router.get('/', (req, res) => {
    res.json({ message: 'Hello Im Ready' })
})

router.post('/login', loginRoute.LoginUser);
// router.get('/dashboard/:id', authMiddleware.isAuthenticate,loginRoute.GetUser)
router.post('/register', serviceRoute.CreateUser)

router.post('/make-event', serviceRoute.AddEvent)
router.get('/list-event', serviceRoute.listEvent)
router.get('/list-event/:id', serviceRoute.listEventId)
router.delete('/delete-event/:id', serviceRoute.DeleteEvent)



router.delete('/delete_User/:id', authMiddleware.isAuthenticate, serviceRoute.DeleteUser)
router.post('/add_Event', authMiddleware.isAuthenticate, serviceRoute.AddEvent)

router.put('/update_Event/:id', authMiddleware.isAuthenticate, serviceRoute.updateEvent)


module.exports = router;