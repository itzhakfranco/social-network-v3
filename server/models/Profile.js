const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const profileSchema = new mongoose.Schema({
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	name: {
		type: String,
	},

	company: {
		type: String,
		minlength: 4,
		maxlength: 255,
	},
	website: {
		type: String,
		minlength: 5,
		maxlength: 255,
	},
	location: {
		type: String,
		minlength: 5,
		maxlength: 255,
	},
	status: {
		type: String,
		required: true,
	},
	skills: {
		type: [String],
		required: true,
		minlength: 5,
		maxlength: 500,
	},
	bio: {
		type: String,
		minlength: 2,
		maxlength: 500,
	},
	image: {
		type: String,
		minlength: 11,
		maxlength: 1024,
		default:
			"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
	},

	date: {
		type: Date,
		default: Date.now,
	},
});

function validateProfile(user) {
	const schema = Joi.object({
		company: Joi.string().min(4).max(255).required(),
		website: Joi.string().min(5).max(255).required(),
		location: Joi.string().min(5).max(255).required(),
		status: Joi.string().required().required(),
		skills: Joi.string().min(1).max(255).required(),
		bio: Joi.string().min(2).max(500).required(),
		image: Joi.string().min(11).max(1024),
	});

	return schema.validate(user);
}

const Profile = mongoose.model("Profile", profileSchema);
exports.Profile = Profile;
exports.validateProfile = validateProfile;
