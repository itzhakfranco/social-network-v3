const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const { Experience, validateExperience } = require("../models/Experience");
const User = require("../models/User");

router.post("/experience", auth, async (req, res) => {
	const { error } = validateExperience(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	let profile = await Profile.findOne({ user_id: req.body.id });
	if (!profile) return res.status(400).send("This user has no profile");

	let newExp = new Experience({
		profile_id: profile._id,
		title: req.body.title,
		company: req.body.company,
		location: req.body.location,
		from: req.body.from,
		to: req.body.to,
		current: req.body.current,
		description: req.body.description,
	});

	newExp = await newExp.save();
	return res.status(201).json(newExp);
});

router.get("/experience/:id", auth, async (req, res) => {
	const profile = await Profile.findOne({
		user: req.user.id,
	});
	if (!profile) res.status(400).send("Invalid experince Id");
	return res.json(
		profile.experience.filter((exp) => exp._id == req.params.id)[0]
	);
});

router.put("/experience/edit/:id", auth, async (req, res) => {
	const { error } = validateExperience(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const profile = await Profile.findOne({ user: req.user.id });

	const experiencePosition = profile.experience.findIndex(
		(exp) => exp._id.toString() === req.params.id
	);

	const updatedExperince = {
		_id: profile.experience[experiencePosition]._id,
		title: req.body.title,
		company: req.body.company,
		location: req.body.location,
		from: req.body.from,
		to: req.body.to,
		current: req.body.current,
		description: req.body.description,
	};

	profile.experience[experiencePosition] = updatedExperince;

	await profile.save();

	return res.json(profile);
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
