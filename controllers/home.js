const Causes = require("../models/causes")
const Events = require("../models/events")

const homeController = {}

homeController.getHome = (req , res , next) => {

    Events.getLatstEvents().then(events => {
        Causes.getLatstCauses().then(causes => {
            res.render('index' , {
                causes: causes,
                events: events,
            })
        })
    })

}


module.exports = homeController