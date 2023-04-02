import { uploadphoto, createUser } from './utils';

export default function handelProfileSignup() {
  const photo = uploadphoto();
  const user = createUser();
  const all = Promise.all([photo, user]);
  all.then((message) => {
    console.log(`${message[0].body} ${message[1].firstName} ${message[1].lastName}`);
  });
  all.catch(() => {
    throw Error('Signup system offline');
  });
}
