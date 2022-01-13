// <!-- let countriesInfo = [
//     {
//       name: "India",
//       population: " 1,394,975,829",
//       region: "Asia",
//       flag:
//         "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
//       capital: "New delhi"
//     },
//     {
//       name: "Germany",
//       population: "81,770,900",
//       region: "Europe",
//       flag:
//         "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
//       capital: "Berlin"
//     },
//     {
//       name: "United states",
//       population: "323,947,000",
//       region: "Americas",
//       flag:
//         "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
//       capital: "Washington D.C"
//     },
//     {
//       name: "Brazil",
//       population: "206,135,893",
//       region: "Americas",
//       flag:
//         "https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",
//       capital: "Brasilia"
//     },
//     {
//       name: "Iceland",
//       population: "334,300",
//       region: "Europe",
//       flag:
//         "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png",
//       capital: "Reykjavik"
//     }
//   ]; -->
  


<!DOCTYPE html>
<html>
    <head>
    <title>List of countries</title>
</head>
<body>
    <h1>List of countries </h1>
    <u1 id="list">
        <li> united states</li>
        <li> Germany</li>
        <li> china</li>
    </u1>
    <!-- <body> -->

      <!-- <h1>REST Countries API</h1> -->
      <div id="main-container">
        <div id="flag-container">
          <img src="" alt="">
        </div>
        <div id="info-container">
          <select id="countries"></select>
          <p>Population: <span id="population"></span></p>
          <p>Currencies: <span id="currencies"></span></p>
          <p>Region: <span id="region"></span></p>
          <p>Subregion: <span id="subregion"></span></p>
        </div>
      </div>
    
  
 type ="text/javascript">
          var xhttp = new XMLHttpRequest();
          var respJSON = [];
          xhttp.onreadystatechange = function(){
            if(this.readystate == 4 && this.status ==200) {
              resp = this.responseText;
              respJSON = JSON.parse(resp);
        console.log(respJSON[0].name);
              
          }
        }
          xhttp.open("GET", "https://restcountries.com/v3.1/all", 'true');
          xhttp.send();

