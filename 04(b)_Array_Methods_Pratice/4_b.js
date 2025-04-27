//https://chatgpt.com/share/6809263f-97d4-800f-87a9-3e631d0c999e
// https://chatgpt.com/share/680a384c-93a4-800f-b1aa-64ca8cd86e15
const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];
//👆 This is an array of objects.Each item inside the array is a plain JavaScript object — key-value pairs like name, mass, gender, etc.

//Use map() when you want to change the content.
// MAP : 
    //1) Get an array of all the names: 
    const a = characters.map(character =>{
        return character.name;
    });
    console.table(a);

    //2) Get an array of all heights:
    const h = characters.map(character=>{
        return character.height;
    });
    console.table(h);

    //3) Get an array of objects with just name and height properties:
    const result = characters.map(character=>{
        // either use parentheses or use "return" so get the values:
       return {
        name: character.name, 
        height: character.height
       };
    });
    console.table(result);
    
    //4) Get an array of all first names:
    const f_name = characters.map(character=>{
        return character.name.split(' ')[0]; //Split the name by spaces, and just give me the first piece (index 0) — that's the first name.
    })
    console.table(f_name);

// Filter:
    //1) Get characters with mass greater than 100:
    const m = characters.filter(character=>{
        return character.mass > 100;
    });
    console.table(m);

    //2) Get characters with height less than 200:
    const c_height = characters.filter(character=>{
        return character.height < 200;
    })
    console.table(c_height);
    
    //3) Get all male characters:
    const c_male = characters.filter(character=>{
        return character.gender === 'male' //"===" checks the value — what you actually meant
    });
    console.table(c_male);

    //4) Get all female characters:
      const c_female = characters.filter(character=>{
        return character.gender === 'female'
    });
    console.table(c_female);

//Use sort() when you want to change the order.    
// SORT: 
    // 1) Sort by name:
    const sort_name = characters.sort((a,b)=>{
        if(a.name < b.name) return -1;// If a.name < b.name, return -1 (indicating a comes before b).
        if(a.name > b.name) return 1;// If a.name > b.name, return 1 (indicating b comes before a).
        return 0 ; 
    })
    console.table(sort_name);

    //OR using the ternary opt:
    const sort_names = characters.sort((a,b,)=>{
        
        // return a.name < b.name ? -1 : 1 ; // issue working with this is : If a.name is "Luke" and b.name is "Luke", it will return 1, which means b would still come before a, even though they are equal

         // so use this way of writing instead:
         return a.name < b.name ? 1 : a.name > b.name ? 1 : 0; 
    })
    console.table(sort_names);
    
    //2) Sort by mass:
    const sort_mass = characters.sort((a,b)=>{
        return parseInt(a.mass) > parseInt(b.mass) ? 1 : -1;
        //parseInt() converts the mass string to an integer, ensuring that the comparison is done numerically rather than lexicographically

        // Or :return Number(a.mass) > Number(b.mass) ? 1 : -1; Number() will convert the mass string to a number, ensuring proper numerical comparison.

    })
    console.table(sort_mass);
    
    //3) Sort by height:
    const sort_height = [...characters].sort((a,b)=>{
        return parseInt(a.height) - parseInt(b.height) ? 1 : -1;
    })
    console.table(sort_height);

    //4) Sort by gender:
    const sort_gender = [...characters].sort((a, b) => {
       return a.gender < b.gender ? -1 : a.gender > b.gender ? 1 : 0;
    });
    console.table(sort_gender);

    //5 Sort characters by gender (males first), and within each gender, sort alphabetically by name:
    const malesFirst = [...characters].sort((a, b) => {
        if (a.gender === b.gender) return 0;
        return a.gender === 'male' ? -1 : 1;
    });
    console.table(malesFirst);

// REDUCE : 
    //1) Get the total mass of all the characters :
    const total_mass = characters.reduce((acc,curr)=>{
        console.table(curr);
        // char (or curr — whatever you name it)
        //‣ is NOT an array
        // ‣ it’s just ONE object from the characters array
        // ‣ on each loop, it gives you: { name: 'Luke Skywalker', height: '172', mass: '77', … }

        //char is just one single object from the characters array in each loop. It’s like saying:
        //First loop → char = characters[0]
        // Second loop → char = characters[1]
        // Third loop → char = characters[2]
        // … and so on.

        return acc + parseInt(curr.mass);
        // acc starts as a number = 0
        // char = object → char.mass = string
    },0) // If the initial value is not kept then it will give answer in  long concatenated: '[object Object]7784136'
    console.log("Total Mass:",total_mass);

    // 2) Get The total height of all the characters: 
    const total_height = characters.reduce((acc,curr)=>
        acc + parseInt(curr.height)
    ,0);
    console.log("Total Height: ",total_height);

    //3) Get the total number of character in all the character name:
    //want to manually extract each character (like using charAt()):
    const total_characters = characters.reduce((acc, curr) => {
        // Loop over each character in the name using charAt()
        for (let i = 0; i < curr.name.length; i++) {
            curr.name.charAt(i);  // Extracts each character (not necessary for length, just demo)
            acc++;  // Increase total count for each character
        }
        return acc;
    }, 0);
    console.log("Total num Of chars in all the character name:" , total_characters);

    //OR: Summing up the lengths of all character names in the array.
    const total_chars = characters.reduce((acc,curr)=>{
        return acc + curr.name.length; 
    },0)
    console.log(total_chars);
    
    //4)Get the total number of characters by eye color (hint. a map of eye color to count):
    const total_eye_color = characters.reduce((acc,curr)=>{
        if(acc[curr.eye_color]){
            acc[curr.eye_color] += 1;
        }
        else {
            acc[curr.eye_color] = 1;
        }
        return acc;
    },{}); //{} (empty object) is used because we're tracking counts based on keys (i.e., eye color) — this requires an object to store the counts.

    // And why not used 0 : 0 as the initial value would work if you were just summing values or numbers, but here we need to build an object with keys for each eye color

    console.table(total_eye_color);


    
    
    