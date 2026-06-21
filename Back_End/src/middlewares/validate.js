const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        res.status(400).json({ message: "The Input data is false", details: error.errors });
    }
};

module.exports = { validate };