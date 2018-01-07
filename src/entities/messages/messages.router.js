import { Router } from 'express';
import * as Ctrl from './messages.controller';

const router = Router();

router.get('/messages/:id', async (req, res) => {
  try {
    await Ctrl.findRoom(req.params.id);
    const messages = await Ctrl.getMessages(req.params.id);

    res.status(200).json({
      status: 200,
      message: 'Successfully fetched messages',
      data: messages
    });
  } catch (status) {
    let message = '';
    
    switch (status) {
      case 404:
        message = 'Chat room does not exist';
        break;
      case 500:
        message = 'Internal server error while fetching messages';
        break;
    }
    
    res.status(status).json({ status, message });
  }
});

router.post('/messages/:id', async (req, res) => {
  try {
    const message = await Ctrl.sendMessage(req.params.id, req.body);

    res.status(200).json({
      status: 200,
      message: 'Successfully sent message',
      data: message
    });
  } catch (status) {
    res.status(status).json({ status, message: 'Internal server error while sending message' });
  }
});

export default router;