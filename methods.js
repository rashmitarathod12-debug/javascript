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

let str =" Hello JavaScript world ";
console.log(str)
console.log("length():",str.length)

let trimText = str.trim();
console.log("trim():",trimText.length)

console.log("toUpperCase():",str.toUpperCase())

console.log("toLowerCase():",str.toLowerCase())

console.log("includes():",str.includes("test"))

console.log("indexOf():",str.indexOf("JavaScript"))

console.log("slice():",str.slice(2,7))//- allow

console.log("substring():",str.substring(2,7))//-  not allow 

console.log("replace():",str.replace("JavaScript","React"))

let extraRext =" -HELLO JS";
console.log ("Concat :",str.concat(extraRext))

console.log("Split:",str.split(" "));

