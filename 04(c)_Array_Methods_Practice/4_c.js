const people = [
  {
    name: "Wes",
    year: "1988",
  },
  {
    name: "Kait",
    year: "1986",
  },
  {
    name: "Irv",
    year: "1970",
  },
  {
    name: "Lux",
    year: "2015",
  },
];

const comments = [
    {
        text:'Love this!',
        id:523423
    },
    {
        text:'Super good',
        id:823423
    },
    {
        text:'You are the best',
        id:2039842
    },
    {
        text:'Ramen is my fav food ever',
        id:123523
    },
    {
        text:'Nice Nice Nice!',
        id:542328
    },
];

//some() and every() checks:

    // "some()" is an array method that checks if at least one element in the array passes a test (provided by a callback function). It returns "true" if at least one element "satisfies" the condition, and "false" otherwise.

    //1) Array.prototype.some() is at least one person 19:
    const isAdult = people.some((person)=>{
        const currYear = (new Date()).getFullYear();
        if(currYear - person.year >=19){
            return true;
        }
    });
    console.log(isAdult);

    // "every()" method in JavaScript is similar to the some() method, but it behaves differently. While some() checks if at least one element in the array satisfies a condition, every() checks if all elements in the array satisfy the condition.

    //2) Array.prototype.every() is at least one person 19:
    const allAdult = people.every((person)=>{
        const currentYr = (new Date()).getFullYear();
        if(currentYr - person.year >=19){
            return true;
        }
    })
    console.log(allAdult);

    /*
    (new Date()).getFullYear(): This part gets the current year.

    new Date():  creates a new Date object that represents the current date and time.

    .getFullYear():  extracts just the year (e.g., 2025 if the current year is 2025).

    currentYr - person.year: This subtracts the person's birth year (person.year) from the current year (currentYr) to calculate their age.

    If person.year is 2005 and currentYr is 2025, currentYr - person.year would give you 2025 - 2005 = 20 years, which means the person is 20 years old.
    */

// find():
    /*
    find(): 
        --> find() starts from the first element of the array and checks the condition for each element.
        --> When it reaches the second element (with id: 823423), the condition comment.id === 823423 becomes true, and the find() method immediately returns this element.
        --> It doesn't continue checking the remaining elements after the first match, so the search is stopped early

    filter():Returns an array of all elements that satisfy the condition.It continues to iterate through the whole array even after finding the first match.
*/
    //1) find the comment with id 823423:
    const comment = comments.find(comment => comment.id === 823423)
    console.table(comment);

// findIndex(): It is similar to the find() method but instead of returing the element it returns the index of that element.
    //1) Find and delete the comment with the id of 823423:
    const index = comments.findIndex(comment=>comment.id === 823423);
    const remove = comments.splice(index,1);

    console.table(comments); // the id with 823423 is deleted succesfully.
    
    

    
    
    



    
    