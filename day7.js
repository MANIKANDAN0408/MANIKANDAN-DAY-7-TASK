//solving problems using array function on the rest countries'data.


// a.Get all the countries from the Asia continent/region using the filter function.

var request = new XMLHttpRequest();
       request.open("GET","https://restcountries.com/v2/all","true");

       request.send();

       request.onload = function() {

       var data = JSON.parse(request.response);

        var result = data.filter((element)=>{

        return element.region === "Asia";

    })

    console.log(result);
}





// b.Get all the countries with a population of less than 2 lakhs using Filter fuction.

var request=new XMLHttpRequest();

     request.open("GET","https://restcountries.com/v2.1/all","true");

     request.send();

     request.onload = function () {

    var countryData = JSON.parse(request.response);

    var population = countryData.filter((element)=>{

        return (element.population<200000);

    })

    console.log(population);
}





// c. Print the following details name, capital, flag using ForEach function.

var request = new XMLHttpRequest();

       request.open("GET","https://restcountries.com/v2/all","true");

       request.send();

       request.onload = function() {

       var data = JSON.parse(request.response);

       data.forEach((element)=>{

     console.log("country name =>",element.name,",capital =>",element.capital,",flag =>",element.flag);
    })
}






// d.Print the total population of countries using reduce function.


var request=new XMLHttpRequest();

      request.open("GET", "https://restcountries.com/v3.1/all", "true");

      request.send();

      request.onload = function() {

    var countryData = JSON.parse(request.response);

    var population = countryData.reduce((acc,element)=>{

        return (acc+element.population);

    },0)

    console.log(population);
}





// e. Print the countries which uses US Dollars as currency.

var request = new XMLHttpRequest();

        request.open("Get","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json","true");

        request.send();

        request.onload = function () {

     var data = JSON.parse(this.response);

     var cur=[];

     for(i=0;i<data.length;i++){

         if(data[i].currencies[0].code==="USD")

         {
          console.log("name:",data[i].name,"=>",data[i].currencies[0].code);

         }
     }
}
