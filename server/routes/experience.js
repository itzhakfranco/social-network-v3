const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const { Profile } = require("../models/Profile");
const { Experience, validateExperience } = require("../models/Experience");

//Add new Experience
router.post("/", auth, async (req, res) => {
	const { error } = validateExperience(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	let profile = await Profile.findOne({ user_id: req.user.id });
	if (!profile) return res.status(400).send("This user has no profile");

	let newExp = new Experience({
		user_id: req.user.id,
		profile_id: profile._id,
		title: req.body.title,
		company: req.body.company,
		location: req.body.location,
		from: req.body.from,
		to: req.body.to,
		current: req.body.current,
		description: req.body.description,
	});

	newExp = await newExp.save((err) => {
		if (err) return console.error(err);
	});
	return res.status(201).json(newExp);
});

//Get loggedIn User Experiences
router.get("/", auth, async (req, res) => {
	const profile = await Profile.findOne({
		user_id: req.user.id,
	});

	const experiences = await Experience.find({ profile_id: profile._id });
	res.status(200).json(experiences);
});

//Get Experience By Id
router.get("/:id", auth, async (req, res) => {
	const experience = await Experience.findOne({
		user_id: req.user.id,
		_id: req.params.id,
	});

	if (!experience) return res.status(400).send("Invalid Experience ID");
	res.status(200).json(experience);
});

//Update Experience
router.put("/edit/:id", auth, async (req, res) => {
	const { error } = validateExperience(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const experience = {
		title: req.body.title,
		company: req.body.company,
		location: req.body.location,
		from: req.body.from,
		to: req.body.to,
		current: req.body.current,
		description: req.body.description,
	};

	const filter = {
		user_id: req.user.id,
		_id: req.params.id,
	};

	const updatedExperience = await Experience.findOneAndUpdate(
		filter,
		experience,
		{ new: true }
	);
	res.send(updatedExperience);
});

router.delete("/experience/:exp_id", auth, async (req, res) => {
	const profile = await Profile.findOne({ user: req.user.id });

	const removeIndex = profile.experience
		.map((item) => item.id)
		.indexOf(req.params.exp_id);

	profile.experience.splice(removeIndex, 1);

	await profile.save();
	res.json(profile);
});

module.exports = router;
