const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const {
	Profile,
	validateProfile,
	Experience,
	validateExperience,
} = require("../models/Profile");

//Add new profile
router.post("/", auth, async (req, res) => {
	const { errors } = validateProfile(req.body);
	if (errors) return res.status(400).send(errors.details[0].message);

	let profile = new Profile({
		user_id: req.user.id,
		name: req.user.name,
		company: req.body.company,
		location: req.body.location,
		website: req.body.website,
		bio: req.body.bio,
		skills: Array.isArray(req.body.skills)
			? req.body.skills
			: req.body.skills.split(",").map((skill) => " " + skill.trim()),
		status: req.body.status,
		image: req.body.image && req.body.image,
	});

	profile = await profile.save();
	res.json(profile);
});

//Update Profile
router.put("/:id", auth, async (req, res) => {
	const { error } = validateProfile(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const { company, website, location, status, skills, bio } = req.body;

	const profileFields = {
		user: req.user.id,
		name: req.user.name,
		company,
		location,
		website,
		bio,
		skills: Array.isArray(skills)
			? skills
			: skills.split(",").map((skill) => " " + skill.trim()),
		status,
	};

	let profile = await Profile.findOneAndUpdate(
		{ _id: req.params.id, user_id: req.user.id },
		{ $set: profileFields },
		{ new: true }
	);
	if (!profile) return res.status(404).send("Invalid credentials");

	res.json(profile);
});

//Fetch LoggedIn User Profile
router.get("/", auth, async (req, res) => {
	const profile = await Profile.findOne({
		user_id: req.user.id,
	});

	if (!profile) return res.status(404).send("Invalid Profile Id");
	res.send(profile);
});

//Delete Profile
router.delete("/:id", auth, async (req, res) => {
	const profile = await Profile.findOneAndRemove({
		_id: req.params.id,
		user_id: req.user.id,
	});
	if (!profile) return res.status(404).send("Invalid Credentials");
	res.json({});
});

//Add new Experience
router.post("/experience", auth, async (req, res) => {
	const { error } = validateExperience(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	let profile = await Profile.findOneAndUpdate(
		{ user_id: req.user.id },
		{ $push: { experience: req.body } },
		{ new: true }
	);
	if (!profile) return res.status(400).send("This user has no profile");

	res.status(201).json(profile);
});

//Get Experience By Id
router.get("/experience/:id", auth, async (req, res) => {
	const experience = await Experience.findOne({
		user_id: req.user.id,
		_id: req.params.id,
	});

	if (!experience) return res.status(400).send("Invalid Experience ID");
	res.status(200).json(experience);
});

//Update Experience
router.put("/experience/edit/:id", auth, async (req, res) => {
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

router.delete("/experience/:id", auth, async (req, res) => {
	const experience = await Experience.findOneAndRemove({
		_id: req.params.id,
		user_id: req.user.id,
	});

	if (!experience)
		return res
			.status(400)
			.send("The experience with the given ID was not found.");

	res.json(experience);
});

module.exports = router;
