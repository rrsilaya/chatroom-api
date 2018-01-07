import { Router } from 'express';
import * as Ctrl from './rooms.controller';

const router = Router();

router.get('/rooms', async (req, res) => {
  try {
    const rooms = await Ctrl.getRooms();

    res.status(200).json({
      status: 200,
      message: 'Successfully fetched chat rooms',
      data: rooms
    });
  } catch (status) {
    res.status(status).json({ status, message: 'Internal server error while fetching chat rooms' });
  }
});

router.post('/room', async (req, res) => {
  try {
    const room = await Ctrl.addRoom(req.body);

    res.status(200).json({
      status: 200,
      message: 'Successfully added new chat room',
      data: room
    });
  } catch (status) {
    res.status(status).json({ status, message: 'Internal server error while adding new chat room' });
  }
});

export default router;