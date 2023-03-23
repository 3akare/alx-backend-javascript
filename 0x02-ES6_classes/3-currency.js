export default class Currency{
    constructor(code, name){
        if (typeof code !== 'string')
        {
            throw TypeError('Code must be a string');
        }
        if (typeof name != 'string')
        {
            throw TypeError('Name must be a string');
        }
        this._code = code;
        this._name = name;
    }
    get name(){
        return this._name;
    }
    get code(){
        return this._code;
    }
    set name(name){
        this._name = name;
    }
    set code(code){
        this._code = code;
    }

    displayFullCurrency(){
        return `${this._name} (${this._code})`
    }
}
