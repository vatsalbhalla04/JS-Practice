const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

//Filter method : 
    //1) Filter the list of investors for those who were born in 1500's
    const filter = inventors.filter(
        inventor => inventor.year >= 1500 && inventor.year <=1600
    );
    console.table(filter);

// Map(): It takes an array, performs an operation on each element, and returns a new array of the same length.
    // 2) Give the an array of the inventors first and the last name:
    const full_name = inventors.map(inventor=>{
         return `${inventor.first}  ${inventor.last}`
    })
    console.table(full_name);

// Sort() : array.sort() is a built-in JavaScript method that rearranges the elements of an array based on how you tell it to compare two elements. It doesn't just shuffle stuff—it compares two elements at a time, like a judge in a tournament 🥋, and reorders them accordingly.
    // 3) Sort the investors by birthday, oldest to youngest: 
    const birthday = inventors.sort((a,b)=>{
        return a.year > b.year ? 1 : -1
    })
    console.table(birthday);

// Reduce() : .It reduces an array down to a single value by running a function on each element, and passing along an accumulator (a rolling result).

    /*Syntax : array.reduce((accumulator, currentvalue)=>{
            return updatedAccu.;
        }, intialvalue)
    */

    // Example: Sum of all numbers:
    const nums = [1,2,3,4];
    const total = nums.reduce((a,b)=>{
        return a+b
        /*
        acc starts at 0 , 
        0 + 1 = 1 ,
        1 + 2 = 3, 
        3 + 3 = 6
        */
    },0);
    console.log(total);

    // 4) How many years did all the investors lived?
    const totalyr = inventors.reduce((total, inventor)=>{
        return total + (inventor.passed - inventor.year)
    },0) // Always keep the initial value as Zero(0).
    console.log(totalyr);

    // 5) Sort the investors by years lived:
    const oldest = inventors.sort((a,b)=>{
        const lastGuy = a.passed - a.year;
        const nextGuy = b.passed - b.year;
        
        return lastGuy > nextGuy ? -1 : 1;
    })
    console.table(oldest);

    //6) Create A list of Boulevards in Paris that contain 'de' anywhere in the name:
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

    // const Category = document.querySelectorAll('.mw-category-group');

    // Flatten all <a> links from each group
    // const links = Array.from(Category).flatMap(group => Array.from(group.querySelectorAll('a')));
    // Flat Map: Combines ".map() + .flat()" in one step. Helps you extract links from each group and flatten them into one big array.
    
    // const de = links
    //   .map(link => link.textContent)
    //   .filter(name => name.includes('de'));
    // console.table(de);
    
    // Concised Version: 
    // const dee = Array.from(document.querySelectorAll('.mw-category-group a'))
    // .map(link => link.textContent.toLowerCase().trim())
    // .filter(name => name.includes('de'));

    // console.table(dee);

    //7) Sort the people alphabetically by last name:
    const a = people.sort((lastOne,nextOne)=>{
        const [last,first] = lastOne.split(', ');
        const [last_,first_] = nextOne.split(', ');
        return last > last_ ? 1 : -1;
    })
    console.table(a);

    //8) Sum up the instance of each of these : 
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

    const transportation = data.reduce(function(obj, item) {
        if (!obj[item]) {
          obj[item] = 0;
        }
        obj[item]++;
        return obj;
      }, {});
  
      console.table(transportation);



    


    


    
