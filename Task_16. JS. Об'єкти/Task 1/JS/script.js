// 1.	Знайти в об’єкті city, місто з найбільшою кількістю населення
let city = {
      "Zarephath": 728375,
      "Reinerton": 864402,
      "Spelter": 340533,
      "Henrietta": 932557,
      "Dyckesville": 421758,
      "Yettem": 250492,
      "Gracey": 551885,
      "Floris": 216435,
      "Davenport": 290139,
      "Tioga": 653031
    };

     function getCityWithBiggestPopulation(obj){     
        let max=0;     
        let findCity;     
        for(let key in obj){         
           if(obj[key]>max){             
              max=obj[key];             
              findCity=key;         
           }     
        }     return findCity;
    }
    console.log(getCityWithBiggestPopulation(city));