const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const { Profile, validateProfile } = require("../models/Profile");

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

//Update profile
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
		{ _id: req.params.id },
		{ $set: profileFields },
		{ new: true }
	);

	res.json(profile);
});

//Fetch profile by id
router.get("/view/:id", auth, async (req, res) => {
	const profile = await Profile.findOne({
		user_id: req.user.id,
		_id: req.params.id,
	});

	if (!profile) return res.status(404).send("Invalid Profile Id");
	res.send(profile);
});

/* router.get("/", async (req, res) => {
	try {
		const profiles = await Profile.find();
		res.json(profiles);
	} catch (err) {
		console.error(err.message);
		return res.status(500).send("Server Error");
	}
});

router.get("/me", auth, async (req, res) => {
	const profile = await Profile.findOne({
		user: req.user.id,
	});

	if (!profile) return res.status(401).send("There's no profile for this user");

	return res.json(profile);
});

router.get("/user/:user_id", async (req, res) => {
	try {
		const profile = await Profile.findOne({
			user: req.params.user_id,
		});
		if (!profile) res.status(400).send("There's no profile for this user");
		res.json(profile);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
}); */

//must add id as param. Profile.findOneAndRemove({_id:req.params.id, user_id:req.user._id})
//delete try/catch. if (!profile) return res.status(404).send('The Profile with the given ID not found')

router.delete("/", auth, async (req, res) => {
	try {
		await Profile.findOneAndRemove({ user: req.user.id });
		return res.json({});
	} catch (err) {
		console.error(err.message);
		return res.status(500).send("Server Error");
	}
});

router.post("/education", auth, async (req, res) => {
	const { error } = validateEducation(req.body);

	if (error) return res.status(400).send(error.details[0].message);

	const newEdu = {
		school: req.body.school,
		degree: req.body.degree,
		fieldofstudy: req.body.fieldofstudy,
		from: req.body.from,
		to: req.body.to,
		current: req.body.current,
		description: req.body.description,
	};

	try {
		const profile = await Profile.findOne({ user: req.user.id });
		profile.education.unshift(newEdu);
		await profile.save();

		return res.json(profile);
	} catch (err) {
		console.error(err.message);
		return res.status(500).send("Server Error");
	}
});

router.put("/education/edit/:id", auth, async (req, res) => {
	const { error } = validateEducation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const profile = await Profile.findOne({ user: req.user.id });

	const educationPosition = profile.education.findIndex(
		(edu) => edu._id.toString() === req.params.id
	);

	const updatedEducation = {
		_id: profile.education[educationPosition]._id,
		school: req.body.school,
		degree: req.body.degree,
		fieldofstudy: req.body.fieldofstudy,
		from: req.body.from,
		to: req.body.to,
		current: req.body.current,
		description: req.body.description,
	};

	profile.education[educationPosition] = updatedEducation;

	await profile.save();

	return res.json(profile);
});

router.delete("/education/:edu_id", auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({ user: req.user.id });

		const removeIndex = profile.education
			.map((item) => item.id)
			.indexOf(req.params.edu_id);

		profile.education.splice(removeIndex, 1);

		await profile.save();

		return res.json(profile);
	} catch (err) {
		console.error(err.message);
		return res.status(500).send("Server Error");
	}
});

router.get("/education/:eduId", auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({
			user: req.user.id,
		});
		if (!profile) res.status(400).send("Invalid Education Id");
		return res.json(
			profile.education.filter((edu) => edu._id == req.params.eduId)[0]
		);
	} catch (err) {
		console.error(err.message);
		return res.status(500).send("Server Error");
	}
});

module.exports = router;
