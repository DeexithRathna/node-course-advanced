const persons = [{
    name:'Deexith',
    age: 22,
},{
    name: 'Rufus',
    age: 28,
},{
    name: 'Raj',
    age: 22
}]

const hasAge22 = () => persons.filter((person) => person.age >= 22)
console.log(hasAge22())