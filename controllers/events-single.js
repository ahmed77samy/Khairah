const Events = require("../models/events")

const events_singleController = {}

events_singleController.getItem = (req , res , next) => {
    let id = req.params.id
    Events.getLatstEvents().then((events) => {
        Events.getSingleEvent(id).then(event => {
            res.render('event-single' , {
                item: event,
                events: events
            })
        })
    })

}


module.exports = events_singleController