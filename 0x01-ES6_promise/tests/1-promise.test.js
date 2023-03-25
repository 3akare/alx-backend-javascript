import getFullResponseFromAPI from '../1-promise';

describe('getFullResponseFromAPI', () => {
  it('returns a successful response when the success parameter is true', async () => {
    const response = await getFullResponseFromAPI(true);
    expect(response).toEqual({ status: 200, body: 'Success' });
  });

  it('throws an error when the success parameter is false', async () => {
    await expect(getFullResponseFromAPI(false)).rejects.toThrow('The fake API is not working currently');
  });
});
