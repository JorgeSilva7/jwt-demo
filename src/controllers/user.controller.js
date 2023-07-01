function getUser(req, res) {
	return res.status(200).json([{ id: 1 }, { id: 2 }]); // ONLY FOR DEMO PURPOSE
}

function addUser(req, res) {
	return res.status(201).json({ success: true }); // ONLY FOR DEMO PURPOSE
}

function deleteUser(req, res) {
	return res.status(204).json({}); // ONLY FOR DEMO PURPOSE
}

export default { getUser, addUser, deleteUser };
