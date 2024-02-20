let nums = [1, 2, 3, 4];

//Insertion of the Array

//insert at the  end
nums.push(9);
console.log(nums);

//insert at the beginning
nums.unshift(10);
console.log(nums);

// insert  at the middle
nums.splice(3, 0, "a", "b");
console.log(nums);

let index = nums.indexOf(4);
console.log(index);

let includes = nums.includes(11);
console.log(includes);

let courses = [
  { id: 1, fname: "Akhil" },
  { id: 2, fname: "Smru" },
];
console.log(courses);

//you can not apply the index of and includes function in courses object bcuse these values are passed by refernce so the values are differnet .

let course = courses.find(function (course) {
  return course.fname == "Akhil";
});
console.log(course);

//Deletion of the Array
let nums2 = [10, 20, 30, 40];

//Deletion at the  end
nums2.pop();
console.log(nums2); //remove 40

//Deletion at the beginning
nums2.shift();
console.log(nums2); //remove 10

// Deletion  at the middle
nums2.splice(1, 1); //(which index,how many count u want to remove)
console.log(nums2);

//how to empty an array>?>?
let number = [2, 3, 4, 5, 6];
number.length = 0;
console.log(number);
number.splice(0, number.length);
console.log(number);

// Combination and slicing Arrays

let first = [1, 2, 3, 4];
let second = [5, 6, 7];
let combine = first.concat(second);
console.log(combine);

//spread operator
let first1 = [1, 2, 3, 4];
let second2 = [5, 6, 7];
let combinee = [...first1, ...second2];
console.log(combinee);

// iteration through Array:+++
//only applicable on Array
let arr = [1, 2, 3, 4, 5, 6];
for (let value of arr) {
  console.log(value);
}

// for each loop
let arr2 = [1, 2, 3, 4, 5, 6];
arr2.forEach((number) => {
  console.log(number);
});

//spliting message
let message = "this is my first message";
let spliting = message.split(" ");
console.log(spliting);

//sorting the Array
let num3 = [5, 4, 3, 2, 1];
num3.sort();
console.log(num3);

//flterig an array

let numbers = [1, 2, 3, -1, -2, -34];
let filtering = numbers.filter((e) => {
  return e >= 0;
});
console.log(filtering);

//Mapping the array
let id = [1, 2, 3, 4, 5];
let mapping = id.map((value) => {
  return `student _id ` + value;
});
console.log(mapping);


//mapping with Objects

let array1= [1, 2, 3, -1, -2, -34];
let filterd=array1.filter((value)=>{
    return value>=0;
})
let mapping2=filterd.map((num)=>{
return {ans:num}
})
console.log(mapping2);
