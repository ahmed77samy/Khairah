const Causes = require("../models/causes")

const causesController = {}

causesController.getCauses = (req , res , next) => {

    Causes.getCauses().then(causes => {
        res.render('causes' , {
            causes: causes,
        })
    })

}


module.exports = causesController