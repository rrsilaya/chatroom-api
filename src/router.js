import { Router } from 'express';

import roomRouter from './entities/rooms/rooms.router';
import messageRouter from './entities/messages/messages.router';

const router = Router();

router.use(roomRouter);
router.use(messageRouter);

export default router;