const user = {
    id : 1, name : 'Amir hossain', job : 'actor'
}
 const stringified = JSON.stringify(user)
console.log(stringified)
//console.log(user)

const shop = {
    owner : 'alia',

    address : {
        flat:45,
        area : 'kochukaht',
        county : 'bangladesh'
    },

    product: ['laptop' , 'phone', 'mobile'],

    newlyOpen : false,

    isopen : true,
}

const jsonShop = JSON.stringify(shop);
console.log(jsonShop);
const type = typeof(jsonShop);
console.log(type)