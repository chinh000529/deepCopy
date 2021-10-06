function deepCopy(a){
    if(a instanceof Object) {
        let b = {};
        const keys = Object.keys(a);
        const values = Object.values(a);
        for(let i = 0; i < values.length; i++) {
            if(values[i] instanceof Array) {
                let arr = [];
                for(let j=0; j < values[i].length; j++){
                    arr[j] = deepCopy(values[i][j])
                }
                b[keys[i]] = arr;
            } else if(typeof values[i] === "function") {
                b[keys[i]] = values[i];
            } else if(values[i] instanceof Object) {
                b[keys[i]] = deepCopy(values[i]);
            }
            else {
                b[keys[i]] = values[i];
            }
        }
        return b;
    }
    else {
        return a;
    }
}

let obj1 = {
    name: 'chinh',
    age: 18,
    run: function() {
        console.log('running...');
    },
    pet: [
        {
            name: 'cun',
            width: 5,
        },
        {
            name: 'bin',
            width: 3,
        }
    ],
    phone: ['09854234', '03425634',],
    mom: {
        name: 'tam',
        age: 40,
        phone: ['0964736', '98257232'],
        run: function() {
            console.log('running...');
        }
    }
}

let obj2 =  deepCopy(obj1);

console.log(obj1);
console.log(obj2);

console.log(obj1.run());
console.log(obj2.run());

console.log(obj1 === obj2);
