export function uploadphoto() {
  return new Promise((resolve, reject) => {
    try {
      resolve({ status: 200, body: 'photo-profile-1' });
    } catch (error) {
      reject(console.log(error));
    }
  });
}

export function createUser() {
  return new Promise((resolve, reject) => {
    try {
      resolve({ firstName: 'Guillaume', lastName: 'Salva' });
    } catch (error) {
      reject(console.log(error));
    }
  });
}
