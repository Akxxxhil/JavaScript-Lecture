//Synatx

//function is eligible for hoisting  that mean
//if we will keep the run function above also it will

run()

function run(){
    console.log("running Successfully");
}

//Functional Assignment
let walk=function walking(){
    console.log("walking Successfully");
}
walk()

//Anonymus function
//a function whose name is not assigned
let dance=function(){
    console.log("Dancing successfully");
}
dance()


function sum(a,b){
    let total=0;
    for(let value of arguments){
        total=total+value
    }
    return total
}
let answer=sum(1,2,3,4,5,6)
console.log(answer);


// Rest Operator

function sum2(...args){
    console.log(args);
} // it will create a array type proto type
sum2(1,2,3,4,5,6)
// After rest opertor you can not write any arguments....


//Deafult parameter

function intrest(p,r=9,y){
    return p*r*y/100;
}
console.log(intrest(1000,undefined,6));

//Getter and setter 
let person = {
    fname: 'Akxxhil',
    lname: "Biswal",

    get fullName() {
        return `${this.fname} ${this.lname}`;
    },
    set fullName(value) {
        if (typeof value !== 'string') { // Corrected condition
            throw new Error("You are sending wrong Value");
        }
        let spliting = value.split(' ');
        this.fname = spliting[0];
        this.lname = spliting[1];
    }
}

// setter
try {
    person.fullName = "anshuman Biswal";
} catch (e) {
    console.log(e.message); // Log the error message
}
console.log(person.fullName); // This will print the expected output since the error was caught


