export function uploadphoto() {
  return new Promise((resolve) => resolve({ status: 200, body: 'photo-profile-1' }));
}

export function createUser() {
  return new Promise((resolve) => {
    resolve({ firstName: 'Guillaume', lastName: 'Salva' });
  });
}
