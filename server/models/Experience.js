const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const experienceSchema = new mongoose.Schema({
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	profile_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Profile",
	},

	title: {
		type: String,
		minlength: 2,
		maxlength: 30,
	},
	company: {
		type: String,
		minlength: 2,
		maxlength: 255,
	},
	location: {
		type: String,
		minlength: 2,
		maxlength: 50,
	},
	from: {
		type: Date,
	},
	to: {
		type: Date,
	},
	current: {
		type: Boolean,
		default: false,
	},
	description: {
		type: String,
		minlength: 2,
		maxlength: 500,
	},

	date: {
		type: Date,
		default: Date.now,
	},
});

function validateExperience(experience) {
	const schema = Joi.object({
		title: Joi.string().min(2).max(30),
		company: Joi.string().min(2).max(255),
		location: Joi.string().min(2).max(50),
		from: Joi.string(),
		to: Joi.any(),
		current: Joi.bool(),
		description: Joi.string().min(2).max(500),
	});

	return schema.validate(experience);
}

const Experience = mongoose.model("Experience", experienceSchema);

exports.Experience = Experience;
exports.validateExperience = validateExperience;
