const { z } = require("zod");
const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        res.status(400).json({ message: "The Input data is false", details: error.errors });
    }
};
const urlSchema =  z.object({
    Project_One_Url: z.string().url("Project One URL is invalid"),
    Project_Two_Url: z.string().url("Project Two URL is invalid"),
});

module.exports = { validate, urlSchema };