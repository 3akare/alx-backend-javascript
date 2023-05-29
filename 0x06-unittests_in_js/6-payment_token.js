function getPaymentTokkenFromAPI(success){
    if(success)
        return Promise.resolve({data: 'Successful response from the API'})
    return
}

module.exports = getPaymentTokkenFromAPI;