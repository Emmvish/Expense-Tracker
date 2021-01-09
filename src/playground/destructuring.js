const person = {
    name: 'Manish',
    age: 22,
    location: {
        city: 'Delhi',
        temp: 1.1
    }
}

const {name: firstName = "Anonymous", age} = person;
console.log(`${firstName} is ${age} years old.`);

const {city, temp: temperature} = person.location;
console.log(`It's ${temperature} degree celsius in ${city}.`)

const address = ['100-A Sant Nagar', 'New Delhi', 'Delhi', '110065'];
const [, ,state="UP"] = address;
console.log(state);