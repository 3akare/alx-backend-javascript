import { uploadphoto, createUser } from './utils';

export default function handelProfileSignup() {
  return Promise
    .all([uploadphoto(), createUser()])
    .then((message) => {
      console.log(`${message[0].body} ${message[1].firstName} ${message[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
