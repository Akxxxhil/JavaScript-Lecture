let recatngle={
    length:10,
    br:8,
    draw:function(){
        console.log('recta draw');
    }
}

//functiion declared in the object it is called method
//to get value
//recatngle.length/bredath/draw()


// factory function to craete object ++>> 

function createReactangle(){
    return recatngle={
        length:10,
        br:8,
        draw:function(){
            console.log('recta draw');
        }
    }
}

// console.log(createReactangle().length);
let obj1=createReactangle()
console.log(obj1 );

function createReactangle(len,bre){
    return recatngle={
        length:len,
        breadth:bre,
        draw:function(){
            console.log('recta draw');
        }
    }
}

let obj2=createReactangle(4,5);

//now i can take it as input parameter



//Constructor function to Create object +++>>>>(Pascal Notation)

function Rectangle(){
    this.length=50;
    this.breadth=39;

    this.draw=function(){
        console.log("re declared");

    }
}

let recobj= new Rectangle();

//dynamic nature of objects
recobj.color="red"
console.log(recobj);
//to delete use delete keyword 
delete recobj.color
console.log(recobj);

let a ={value:10}
let b=a;
a.value++;
console.log(a.value);//11
console.log(b.value);//11

//  11 both because it passes the same adresses not only value
//in refernces the values points to same adress

//Note:::+++
// primitives are copied by their values.
//refernces are copied by their adresses/refernces

let person={
    name:"Akxxhil",
    age:22,
    company:"Cred",
    study:"B.tech"
}

for(let key in person){
    console.log(key,person[key]);
    //key for keys 
    //person[key ] for values
}

if('color' in person){
    console.log("present");
}
else{
    console.log("Absent");
}


//Object cloning

//spread
let person2={...person}
console.log(person2);

//Assign
let person3=Object.assign({},person)
console.log(person3);

//iteration
let person4={}
for (let key in person){
    person4[key]=person[key]
}
console.log(person4);