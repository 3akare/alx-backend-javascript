export function uploadphoto() {
  return Promise.resolve({ status: 200, body: 'photo-profile-1' });
}

export function createUser() {
  return Promise.resolve({ firstName: 'Guillaume', lastName: 'Salva' });
}
