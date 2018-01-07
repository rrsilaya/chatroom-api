import SocketIO from 'socket.io';
import server from './server';

const io = SocketIO(server);

io.on('connection', socket => {
  console.log('User connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});
