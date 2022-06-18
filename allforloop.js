//1. For the given JSON data iterate over all for loops (for, for in, for of, forEach)

// creating an object name obj and assigning the given data using properties.
var obj=[
{   
    person: "Arun",
    age: 2,
    company: "Guvi" 
},
{   
    person: "Banu",
    age: 3,
    company: "Guvi Geek" 
},
{   
    person: "Lavish",
    age: 4,
    company: "Guvi Geek Network" 
}
]
// creating a normal for loop to iterate the given data in the Json object var obj.
for (var i=0;i<obj.length;i++) {
    // assigning the values in 'obj' variable to a variable named 'index'.
    let index = obj[i]; //in place of 'i' we can give index number of the array to print particular property details in the 'obj' object.
    // using template literal method to print the data in console.
    console.log(`    
    Person:${index.person}
    Age:${index.age}
    Company:${index.company}
    `
    );
}
/* Output:
       Person:Arun
       Age:2
       Company:Guvi

       Person:Banu
       Age:3
       Company:Guvi Geek

       Person:Lavish
       Age:4
       Company:Guvi Geek Network
*/

// creating a  forEach loop to iterate the given data in the Json object var obj.
// forEach method will call a function for each element in an array/object.
// created an arrow function with variable named 'index' and created aforEach loop with condition of the 'index' function.
obj.forEach((index)=>{
    console.log(`    
    Person:${index.person}
    Age:${index.age}
    Company:${index.company}
    `
    );

})
/*Output 
    Person:Arun
    Age:2
    Company:Guvi

    Person:Banu
    Age:3
    Company:Guvi Geek

    Person:Lavish
    Age:4
    Company:Guvi Geek Network 
    */

// creating a for in loop which is an enumeration based loop which will iterate over the index.
for(var index in obj){
    let key=obj[index]; // created a varaible named 'key' and passed the all values inside the 'obj' to 'key' variable.
    console.log(`    
    Person:${key.person}
    Age:${key.age}
    Company:${key.company}
    `
    );
}

/*Output 
    Person:Arun
    Age:2
    Company:Guvi

    Person:Banu
    Age:3
    Company:Guvi Geek

    Person:Lavish
    Age:4
    Company:Guvi Geek Network 
*/

    // creating a for of loop which is intended to iterate over the values of variable 'obj'.
    // for of loop is the most optimized and efficient loop of all the for loops.
    for(var data of obj){
    console.log(`    
    Person:${data.person}
    Age:${data.age}
    Company:${data.company}
    `
    );
    }
/*Output 
    Person:Arun
    Age:2
    Company:Guvi

    Person:Banu
    Age:3
    Company:Guvi Geek

    Person:Lavish
    Age:4
    Company:Guvi Geek Network 
*/
