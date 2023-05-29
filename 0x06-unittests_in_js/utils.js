const Utils = {
    calculateNumber(type, a, b){
        const a1 = Math.round(a)
        const b2 = Math.round(b)
        let c = 0;
        switch (type) {
            case 'SUM':
                c = a1 + b2;  
                break;
            case 'SUBTRACT':
                c = a1 - b2;
                break;
            case 'DIVIDE':
                if (b2 === 0)
                    return 'Error'
                c = a1 / b2;
                break;
            default:
                c = 'Error'
                break;
        }
        return (c);
    }
}

module.exports = Utils;
