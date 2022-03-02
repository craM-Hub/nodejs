const Path = require('path');
//Home es el nombre usado después en el handler de la ruta
const Home = require('./controllers/home');

module.exports = [
	// Aquí definiremos las rutas
	{
		method: 'GET',
		path: '/',
		handler: (request, h) => {
			return 'All the notes will appear here';
		},
		config: {
			description: 'Gets all the notes available',
		},
	},
	{
		method: 'POST',
		path: '/note',
		handler: (request, h) => {
			return 'New note';
		},
		config: {
			description: 'Adds a new note',
		},
	},
	{
		method: 'GET',
		path: '/note/{slug}',
		handler: (request, h) => {
			return 'This is a note';
		},
		config: {
			description: 'Gets the content of a note',
		},
	},
	{
		method: 'PUT',
		path: '/note/{slug}',
		handler: (request, h) => {
			return 'Edit a note';
		},
		config: {
			description: 'Updates the selected note',
		},
	},
	{
		method: 'DELETE',
		path: '/note/{slug}',
		handler: (request, h) => {
			return 'This note no longer exists';
		},
		config: {
			description: 'Deletes the selected note',
		},
	},
	{
		method: 'GET',
		path: '/',
		handler: Home,
		config: {
			description: 'Gets all the notes available',
		},
	},
];
