const Models = require('../models/');
module.exports = async (request, h) => {
	const notes = await Models.Note.findAll({
		order: [['date', 'DESC']],
	});
	return { notes };
};
