export default function getFullResponseFromAPI(success) {
  function err() {
    throw Error('The fake API is not working currently');
  }

  return new Promise(((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(err());
    }
  }));
}
