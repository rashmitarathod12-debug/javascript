//string methods
//length()
//trim()
//touppercase()
//to lowercase()
//includes()
//indexOf()
//slice()
//substring()
//replace()
//concat()
//split()

// let str =" Hello JavaScript world ";
// console.log(str)
// console.log("length():",str.length)

// let trimText = str.trim();
// console.log("trim():",trimText.length)

// console.log("toUpperCase():",str.toUpperCase())

// console.log("toLowerCase():",str.toLowerCase())

// console.log("includes():",str.includes("test"))

// console.log("indexOf():",str.indexOf("JavaScript"))

// console.log("slice():",str.slice(2,7))//- allow

// console.log("substring():",str.substring(2,7))//-  not allow 

// console.log("replace():",str.replace("JavaScript","React"))

// let extraRext =" -HELLO JS";
// console.log ("Concat :",str.concat(extraRext))

// console.log("Split:",str.split(" "));

//array methods()
//length()
//concat()
//push()
//pop()
//unshift()
//shift()
//includes()
//indexof()
//splice()
//join()
//delete()
//slice()
//map()
//filter()
//find()
//forEach()
//sort()
//reverse()
//flat()

// let arr = ['one','two','three',1,{name:'name'}];
// console.log("Default Array:",arr);

// console.log("length():",arr.length)
// //console.log("push() :",arr.push("new add element"))
// arr.push("new add element")
// console.log("array after push :",arr)

// arr.pop();
// console.log('array after pop :',arr)

// arr.unshift("first element")
// console.log('array after unshift : ',arr)

// arr.shift()
// console.log('array after shift : ',arr)

// let newArr=["str 1","str 2"];
// let mixedArr=arr.concat(newArr)
// console.log("default Array after concat :",arr)
// console.log("array after concat :",mixedArr)

// console.log("include():",arr.includes("three"))


// console.log("indexOf():",arr.indexOf("three"))
// console.log("slice():",arr.slice(2,4))
// console.log("splice():",arr.splice(2,4))
// console.log("old array():",arr)
// console.log("join():",arr.join(", "))
// delete arr[4]
// console.log(arr)

console.log("Array iteration method :")
let numbers =[1,2,3,4,5]
console.log("map :",numbers.map(num =>num * 2))
console.log("after map old array:",numbers)


console.log("filter :",numbers.filter(num => num >2))
console.log("after filter old array:",numbers)

console.log("forEach : ")
numbers.forEach(num => console.log(num))

let num = [3,,5,2,4,1]
//console.log("sort() :",num.sort())
console.log("reverse() :",num.reverse())

let nestedArray = [1,2,[3,4],[5,6]]
console.log("deafult nested array:",nestedArray)
let flatArray = nestedArray.flat()
console.log("flatArray",flatArray)
