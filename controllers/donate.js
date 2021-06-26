const donateController = {}

donateController.getDonate = (req , res , next) => {
    res.render('donate')
}


module.exports = donateController