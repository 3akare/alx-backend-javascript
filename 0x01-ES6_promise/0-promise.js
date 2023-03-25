export default function getResponseFromAPI() {
  return new Promise(((response, reject) => {
    // code
  }));
}

const response = getResponseFromAPI();
console.log(response instanceof Promise);
