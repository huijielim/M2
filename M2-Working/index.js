// console.log("Hi, this is my js file");

// const myString = "this is myString";
// const myBool = true;
// const myNum = 100;
// const myObj = {
//     name: "Lim",
//     lastName: "Genius",
//     age: "1000",
// };

// console.log(myString);
// console.log(myObj);
// console.log(typeof myString);

// const myArray = ["Lisbon", 200, false, {
//     isLearningJs: true, isLearningHtml: true }];
   
//     console.log(myArray); //object
//     console.log(typeof myArray); //object
//     console.log(myArray[1]) //200

// const foodArray = ["pizza", "salad", "soup",
// "spaghetti" ];
// // add item to the end of array
// foodArray. push("kebab");
// console.log(foodArray);
// //[ 'pizza', 'salad', 'soup', 'spaghetti', 'kebab' ]

// const age = 33;
// if (age < 0) {
// console.log("age can't be a negative number!")
// } else if (age >= 0 && age < 21) {
// console.log("you're under 21 years old")
// } else {
// console.log("you're over 21 years old")
// }

// switch ("Lisbon") {
//     case "Madrid":
//     console.log("Welcome to Spain!");
//     break;
//     case "Berlin":
//     console.log("Welcome to Germany!");
//     break;
//     case "Portugal":
//     console.log("Welcome to Portugal!");
//     break;
//     default:
//     console.log("City not found :( ");
// }

// let count = 0;
// // nothing will be printed on the console
// while (count < 0) {
// console.log("Count: " + count);
// count = count + 1;
// }

// condition will run once only
// do {
//     console.log("Count: " + count);
//     } while (count < 0);

// const foodArray = ["pizza", "salad", "soup", "spaghetti"];
// // console.log(foodArray);
// // console.log(foodArray.length);

// foodArray [0]
// foodArray [1]
// foodArray [2]
// foodArray [3]

// for (let i = 0; i < foodArray.length; i++) {
//     console.log("i love " + foodArray[i]);
// }

// for (let i = 0; i < foodArray.length; i++) {
//     console.log(`i love ${foodArray[i]}`);
// }

// function userInfo(user) {
//   return "username: " + user;
// }

// // const userInfo = () => {
// //     return "username: " + user;
// // }



// function userInfo(user) {
//     if(user.length % 2 === 0) {
//     return `username:  ${user} is even, with ${user.length} letters.`
//     } else {
//     return `username:  ${user} is odd, with ${user.length} letters.`
//     }
//     }

// // logging to the console the return of our function.
// const userName = "Lim2"
// console.log(userInfo(userName));

// const bobUser = ["Bob", "Smith", 34]


// console.log(userInfo.city) // San Francisco
// console.log(userInfo["age"]) // 23

const userInfo = {
    name: "Bob",
    lastName: "Smith",
    age: 23,
    city: "San Francisco",
    };

const userInfo2 = {
    name: "Bob2",
    lastName: "Smith2",
    age: 232,
    city: "San Francisco2",
    };

const showUserInfo = (user) => {
    return user;
};

console.log(showUserInfo(userInfo));
console.log(showUserInfo(userInfo2));

function sum(num1, num2) {
    return num1 + num2
}

console.log(sum(1,1));