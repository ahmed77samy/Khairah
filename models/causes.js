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
    goal: {
        type: Number,
        required: true,
    },
    value: {
        type: Number,
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
    features: {
        type: Array,
        validate: (v) => Array.isArray(v) && v.length === 4,
    }
})

const Cause = mongoose.model('cause' ,Schema )

////////////getCauses////////////

exports.getCauses = () => {
    return new Promise((resolve , reject) => {
        mongoose.connect(DB_URL).then(() => {
            return Cause.find().sort([["_id", -1]])
        }).then(causes => {
            mongoose.disconnect()
            resolve(causes)
        }).catch(err => reject(err))
    })
}

////////////getLatstCauses////////////

exports.getLatstCauses = () => {
    return new Promise((resolve , reject) => {
        mongoose.connect(DB_URL).then(() => {
            return Cause.find().limit(3).sort([["_id", -1]])
        }).then(causes => {
            mongoose.disconnect()
            resolve(causes)
        }).catch(err => reject(err))
    })
}

////////////getSingleCause////////////

exports.getsingleCause = (id) => {
    return new Promise((resolve , reject) => {
        mongoose.connect(DB_URL).then(() => {
            return Cause.findById(id)
        }).then(cause => {
            mongoose.disconnect()
            resolve(cause)
        }).catch(err => reject(err))
    })
}