import { primeNumber,oddNumber as raqam } from "./main.js";

// 1-masala
const first_matter = function (arg){
      
  if (typeof arg != "object") {
    throw new TypeError("Bu massiv emas yoki obekt bo'lishi mumkin")
  }
  arg.forEach(element => {
      if (typeof element != "number") {
    throw new Error ("Bu massivda sonlardan boshqa elementlardan foydalanilgan !!!")

      }    
  });
  let sum = 0
  arg.forEach(element => {
    if (element % 2 == 0) { 
      sum+= element **2
    }
  });
  return sum
}
// let arr = [1,2,3,4,5,6]
// try {
// console.log(first_matter(arr));
// } catch (error) {
//   console.log(error.message);
// }

// 2-masala
const secondMatter = function (arg){
      
  if (typeof arg != "object") {
    throw new TypeError("Bu massiv emas yoki obekt bo'lishi mumkin")
  }
  arg.forEach(element => {
      if (typeof element != "string") {
    throw new Error ("Bu massivda so'zlardan boshqa elementlardan foydalanilgan !!!")

      }    
  });
  let sum = []
  arg.forEach(element => {
    sum.push(element.charAt(0))
  });
  return sum
}
// let arr = ["Salohiddin","Asilbek","Lazizbek","Otabek","Masudbek"]
// try {
// console.log(secondMatter(arr));
// } catch (error) {
//   console.log(error.message);
// }

// 3-masala
const ThirdMatter = function (obj){
  let sum = 0;
  if (typeof obj != "object") {
    throw new TypeError("Bu obekt emas yoki massiv bo'lishi mumkin")
  }
  let array = Object.values(obj)
  for (const item of array) {
    if (typeof item == "number") {
      sum += item
    }
  }
  return sum
}
const user = {
  name:"John",
  username:"black_star",
  "home number":35,
  age:65,
}
// try {
//   console.log(ThirdMatter("salom"));
// } catch (error) {
//   console.log(error.message);
  
// }


// 4-masala
const fourthMatter = function (arg){
      
  if (typeof arg != "object") {
    throw new TypeError("Bu massiv emas yoki obekt bo'lishi mumkin")
  }
  arg.forEach(element => {
      if (typeof element != "number") {
    throw new Error ("Bu massivda sonlardan boshqa elementlardan foydalanilgan !!!")

      }    
  });
  let sum = 0
  arg.forEach(element => {
    if (primeNumber(element)) { 
      sum+= element 
    }
  });
  return sum
}
// let arr =[1,2,3,4,5,6,7]
// try {
// console.log(fourthMatter(arr));
// } catch (error) {
//   console.log(error.message);
// }

// 5-masala
const fivethy_matter = function (arg){
  if (typeof arg != "number") {
    throw new Error("Bu son emas iltimos tekshirib qaytadan kiriting")
  }
  return  raqam(arg)
}

// try {
//   console.log(fivethy_matter(123));
// } catch (error) {
//   console.log(error);
// }
 
