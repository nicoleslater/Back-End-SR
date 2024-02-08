const checkName = (req, res, next) => {
    if(req.body.title){
        console.log("Title is Okay")
        next()
    } else {
        res.status(400).json({ error: "Title is required!" })
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