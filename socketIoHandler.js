import { Server } from 'socket.io';
export default function injectSocketIO(server) {
	const io = new Server(server);
	io.on('connection', (socket) => {
		let username = 'Anonymous';
		// Emit the default username to the client
		socket.emit('name', username);
		socket.on('message', (message) => {
			io.emit('message', {
				from: username,
				message: message,
				time: new Date().toLocaleString()
			});
		});
		// Listen for a 'username' event from the client
		socket.on('username', (newUsername) => {
			username = newUsername;
		});
	});
	console.log('SocketIO injected');
}
