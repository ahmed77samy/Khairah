const Events = require("../models/events")

const eventsController = {}

eventsController.getEvents = (req , res , next) => {
    Events.getEvents().then(events => {
        res.render('event' , {
            events: events,
        })
    })

}


module.exports = eventsController