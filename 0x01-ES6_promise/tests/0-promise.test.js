import getResponseFromAPI from "../0-promise";

test('getResponseFromAPI', ()=>{
    const response = getResponseFromAPI()
    expect(response instanceof Promise).toEqual(true);
})