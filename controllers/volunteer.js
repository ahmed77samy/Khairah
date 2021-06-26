const volunteerController = {}

volunteerController.getVolunteer = (req , res , next) => {
    res.render('volunteer')
}


module.exports = volunteerController