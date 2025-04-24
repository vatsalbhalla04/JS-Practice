//https://chatgpt.com/share/6809263f-97d4-800f-87a9-3e631d0c999e
//https://chatgpt.com/share/68092617-e8b4-800f-8e97-a22a12775c77
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





    
    


    

    
    
    