import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const array = [];
  [19, 20, 34].forEach((x) => {
    array.push(new ClassRoom(x));
  });
  return array;
}
