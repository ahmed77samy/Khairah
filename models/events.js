const mongoose = require('mongoose')

const DB_URL = "mongodb+srv://admin:PASSword@cluster0.sityi.mongodb.net/cancercharity?retryWrites=true&w=majority"

mongoose.set("useCreateIndex", true);

const Schema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    }, 
    image: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    sh_description: {
        type: String,
        required: true,
    }, 
    fl_description: {
        type: String,
        required: true,
    },
    s_title: {
        type: String,
        required: true,
    },
    s_description: {
        type: String,
        required: true,
    },
    date: {
        type: Array,
        validate: (v) => Array.isArray(v) && v.length === 2,
    },
    features: {
        type: Array,
        validate: (v) => Array.isArray(v) && v.length === 4,
    }
})

const Event = mongoose.model('event' ,Schema )

////////////getEvents////////////
exports.getEvents = () => {
    return new Promise((resolve , reject) => {
        mongoose.connect(DB_URL).then(() => {
            return Event.find().sort([["_id", -1]])
        }).then(events => {
            mongoose.disconnect()
            resolve(events)
        }).catch(err => reject(err))
    })
}

////////////getLatstEvents////////////
exports.getLatstEvents = () => {
    return new Promise((resolve , reject) => {
        mongoose.connect(DB_URL).then(() => {
            return Event.find().limit(2).sort([["_id", -1]])
        }).then(events => {
            mongoose.disconnect()
            resolve(events)
        }).catch(err => reject(err))
    })
}

////////////getSingleEvent////////////
exports.getSingleEvent = (id) => {
    return new Promise((resolve , reject) => {
        mongoose.connect(DB_URL).then(() => {
            return Event.findById(id)
        }).then(event => {
            mongoose.disconnect()
            resolve(event)
        }).catch(err => reject(err))
    })
}