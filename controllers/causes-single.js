const Causes = require("../models/causes")

const causes_singleController = {}

causes_singleController.getItem = (req , res , next) => {
    let id = req.params.id
    Causes.getLatstCauses().then((causes) => {
        Causes.getsingleCause(id).then(cause => {
            res.render('causes-single' , {
                item: cause,
                causes: causes
            })
        })
    })

}


module.exports = causes_singleController