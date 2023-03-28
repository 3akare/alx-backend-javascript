export default function cleanSet(set, startString){
    let newString = ""
    if(newString === startString){
        return newString;
    }

    for (let x of set){
        if (x.includes(startString)){
            newString != "" ? newString += '-' : null
            newString += x.slice(startString.length);
        }
    }
    return newString;
}

