//const fetch = require("node-fetch");

console.log("Is it connected?")

fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    .then((res) => {
        return res.json();
        console.log(res.json);
    })
    //returns the array for Arrabiata.
    .then((res) => {
        console.log(res);
        return res;
    })

    .catch((error) => {
      console.log('error', error); // this isn't logging cause there's no error
    });


fetch('    https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    .then((res) => {
        return res.json();
        console.log(res.json);
    })
    //returns the array for Arrabiata.
    .then((res) => {
        console.log(res);
        return res;
    })

    .catch((error) => {
      console.log('error', error); // this isn't logging cause there's no error
    });

