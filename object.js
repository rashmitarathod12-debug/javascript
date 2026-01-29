//object is collection of any type of data
const person ={
    name :'testing',
    age :24,
    hobbies :['travelling','reading'],
    greet :function(){
        console.log("Hello")
    }
}

//acess values from object
console.log(person.name)
console.log(person['name'])

//adding or modifying the data of object
person.job ="react developer"
person.salary =50000
console.log(person)

delete person.salary
console.log(person)

//nested object
const person1 ={
    name:'rashmi',
    age:20,
    address:{
        city:"keshod",
        zipcode:'362220',
        street:"veraval road"
    }
}
console.log(person1)
console.log(person1?.address?.city)
console.log(Object.keys(person1))
console.log(Object.values(person1))
console.log(Object.entries(person1))
