const errController = {}

errController.getErr = (req , res , next) => {
    res.render('error')
}


module.exports = errController