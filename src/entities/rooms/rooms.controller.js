import { Room } from '../../database';

export const getRooms = () => {
  return new Promise((resolve, reject) => {
    Room.find({}).sort({ updated: 1 }).exec((err, rooms) => {
      if (err) {
        console.log(err);
        return reject(500)
      }

      return resolve(rooms);
    })
  });
}

export const addRoom = ({ color, name }) => {
  return new Promise((resolve, reject) => {
    const chatroom = new Room({ color, name });

    chatroom.save((err, room) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(room);
    })
  });
}