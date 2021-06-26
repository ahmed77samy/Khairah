const contactController = {}

contactController.getContact = (req , res , next) => {
    res.render('contact')
}


module.exports = contactController