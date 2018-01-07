import { Message, Room } from '../../database';

export const findRoom = room => {
  return new Promise((resolve, reject) => {
    Room.findById(room, (err, room) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      if (!room) return reject(404);

      return resolve();
    })
  });
}

export const getMessages = room => {
  return new Promise((resolve, reject) => {
    Message.find({ room })
      .sort({ timestmap: -1 })
      .limit(150)
      .exec((err, messages) => {
        if (err) {
          console.log(err);
          return reject(500);
        }

        return resolve(messages);
      })
  });
}

export const sendMessage = (room, { sender, message, senderID }) => {
  return new Promise((resolve, reject) => {
    const msg = new Message({
      room, sender, message, senderID
    });

    msg.save((err, msg) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(msg);
    });
  });
}