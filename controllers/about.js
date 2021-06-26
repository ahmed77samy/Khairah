const aboutController = {}

aboutController.getAbout = (req , res , next) => {
    res.render('about')
}


module.exports = aboutController