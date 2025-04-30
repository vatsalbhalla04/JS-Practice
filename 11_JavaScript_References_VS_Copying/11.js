// Referencing :

    //1) Primitve Values : 
        let age = 100; 
        let age2 = age ; 
        console.log(age , age2);// 100,100

        age = 200; 
        console.log(age,age2); // 200,100 
        
        let name = 'ok';
        let name2 = name;
        console.log(name,name2); // ok , ok 
        
        name = 'hey';
        console.log(name,name2); // hey , ok

        // why this ? Because primitives like numbers, strings, booleans are copied by value, not by reference but instead if used object would have got different behavior beacuse objects are copied by reference. 

    //2)  Array : 
        const players = ['a','b','c'];
        const team = players;
        console.log(players , team); 
        //['a','b','c'] || ['a','b','c']
        
        // team[1] = 'aa';
        console.log(players , team);
        //['a', 'aa', 'c'] ||  ['a', 'aa', 'c'] 

        /* Why ?
            --> players is an array (i.e., an object in memory
            --> team = players does not create a new array — it just makes team point to the same array in memory as players
            --> And objects (including arrays) are assigned by reference, not by value.
        */

    //3)  So how do we fix this? we take a copy instead ? 

        // Method 1 : Using the Slice():
        const team2 = players.slice(2,3); 

        // so "slice" it makes a copy of the original array and if any modifications done in the referenced array it wont be reflected in the original array . 

        // and the "splice" is actually opposite of the slice : it does the it's Destructive (modifies the original array) if changes made in the referenced array.

        // Method 2 : Using the Spread opt:
        const team3 = [...players];
        team3[1] = 'yo';
        console.log(team3);
        console.log(players);

        /*Diff b/w Slice() and spread opt([...])=>
            // Both makes the shallow copy of the original array but :  
            --> Use slice() when you want to extract a portion or copy array-like objects (like arguments or NodeList).
            --> Use [...] for quick full copies, merging arrays, or spreading values.
        */

        //Method - 3 : Using the Array.from: 
        const team5 = Array.from(players);
        team5[0] = 'heyy';
        console.log(team5);
        console.log(players);
    
    //4) Ref the Objects : 
        // const a = {
        //     name : 'vatsal',
        //     age : '20',
        //     social : {
        //         twitter : '@vatsal_devv',
        //     }
        // };

        // const b = Object.assign({},a);
        //Object.assign() performs a shallow copy.
        // b.name = 'vatsal bhalla'; 
        // console.log("A: ",a);
        // console.log("B: ",b);
        
        // console.log("B: ",b); //the value for the a.social.twitter will be changed 👉 '@hey_man' 😨. 

        //SOLUTION TO THIS : IS DOING THE DEEP CLONE OF THE ORIGINAL OBJECT:
            // Using structuredClone():
            // structuredClone() handles the nested objects, arrays, dates.etc.
            const a = {
            name: 'vatsal',
            age: '20',
            social: {
                twitter: '@vatsal_devv',
            }
        };
            const b = structuredClone(a);
            b.social.twitter = 'hey@man';

            console.log("A: ", a); // twitter: '@vatsal_devv'
            console.log("B: ", b); // twitter: 'hey@man'


            

        

        
            






            

        