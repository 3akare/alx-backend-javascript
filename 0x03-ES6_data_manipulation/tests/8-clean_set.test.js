import cleanSet from "../8-clean_set";

test('cleanset', ()=>{
    expect(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon')).toEqual('jovi-aparte-appetit');
    expect(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), '')).toEqual('');
})