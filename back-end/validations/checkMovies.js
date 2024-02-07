const checkName = (req, res, next) => {
    if(req.body.name){
        console.log("Name is Okay")
        next()
    } else {
        res.status(400).json({ error: "Name is required!" })
    }
};

const checkBoolean = (req, res, next) => {
    if(req.body.dvd === true || req.body.dvd === false){
        next()
    } else {
        res.status(400).json({ error: "dvd must be a boolean value" })
    }
}

module.exports = {
    checkName, 
    checkBoolean
}