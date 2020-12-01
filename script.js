var title = document.createElement("header");
title.innerHTML="<h1>COUNTRIES DETAILS AT A GLANCE</h1>"
title.style="text-align:center; background-color:dodgerblue;"
document.body.appendChild(title);
// function to to tackle the data from the api 
function initialize(countriesData){
    countries = countriesData;
    for(var i=0; i<countries.length; i++){
       var insider = document.createElement("div");
       insider.className = "col-md-3 m-1  bg-grey border rounded border-grey shadow-lg p-3 mb-5 bg-grey rounded align-middle overflow-auto";
       container.appendChild(insider);

        var tile = document.createElement("div");
        tile.className = "tile text-dark h5";
        insider.appendChild(tile);

        var flagarea = document.createElement("div");
        flagarea.id = "flag_area";
        tile.appendChild(flagarea);
        var flag = document.createElement("img");
        flag.id = "flag";
        flag.src = countriesData[i].flag;
        flag.classList.add('card-img-top', 'rounded', 'mt-1','img-fluid');
        flagarea.append(flag);
        flag.setAttribute('data-value',i);

       var country = document.createElement("p");
       tile.appendChild(country);
       country.append("Country: ");

       var countspan = document.createElement("span");
       countspan.id = "country";
       country.appendChild(countspan);
       countspan.append(countries[i].name);

       var cap = document.createElement("p");
       tile.appendChild(cap);
       cap.append("Capital: ");

       var capspan = document.createElement("span");
       capspan.id = "capital";
       cap.appendChild(capspan);
       capspan.append(countries[i].capital);

       var callingcode = document.createElement("p");
       tile.appendChild(callingcode);
       callingcode.append("Calling Code: ");

       var callspan = document.createElement("span");
       callspan.id = "calling_code";
       callingcode.appendChild(callspan);
       callspan.append("+"+countries[i].callingCodes);

       var timezone = document.createElement("p");
       tile.appendChild(timezone);
       timezone.append("Time Zone: ");

       var timespan = document.createElement("span");
       timespan.id = "time_zone";
       timezone.appendChild(timespan);
       timespan.append(countries[i].timezones);


       var top_domain = document.createElement("p");
       tile.appendChild(top_domain);
       top_domain.append("Top Level Domain: ");

       var topDomain_span = document.createElement("span");
       topDomain_span.id = "top_domain";
       top_domain.appendChild(topDomain_span);
       topDomain_span.append(countries[i].topLevelDomain);


       var alpha2 = document.createElement("p");
       tile.appendChild(alpha2);
       alpha2.append("Alpha2 Code: ");

       var alpha2_span = document.createElement("span");
       alpha2_span.id = "alpha2_code";
       alpha2.appendChild(alpha2_span);
       alpha2_span.append(countries[i].alpha2Code);
       
       var alpha3 = document.createElement("p");
       tile.appendChild(alpha3);
       alpha3.append("Alpha3 Code: ");

       var alpha3_span = document.createElement("span");
       alpha3_span.id = "alpha3_code";
       alpha3.appendChild(alpha3_span);
       alpha3_span.append(countries[i].alpha3Code);

       var altspell = document.createElement("p");
       tile.appendChild(altspell);
       altspell.append("Alternate Spellings: ");


       var altspell_span = document.createElement("span");
       altspell_span.id = "alt_spell";
       altspell.appendChild(altspell_span);
       altspell_span.append(countries[i].altSpellings);

       var region = document.createElement("p");
       tile.appendChild(region);
       region.append("Region: ");

       var region_span = document.createElement("span");
       region_span.id = "region";
       region.appendChild(region_span);
       region_span.append(countries[i].region);

       var sub_region = document.createElement("p");
       tile.appendChild(sub_region);
       sub_region.append("Subregion: ");

       var subregion_span = document.createElement("span");
       subregion_span.id = "sub_region";
       sub_region.appendChild(subregion_span);
       subregion_span.append(countries[i].subregion);

       var population = document.createElement("p");
       tile.appendChild(population);
       population.append("Population: ");

       var pop_span = document.createElement("span");
       pop_span.id = "population";
       population.appendChild(pop_span);
       pop_span.append(countries[i].population);


       var lat = document.createElement("p");
       tile.appendChild(lat);
       lat.append("Latitude: ");

       var lat_span = document.createElement("span");
       lat_span.id = "latitude";
       lat.appendChild(lat_span);
       lat_span.append(countries[i].latlng[0]);

       var lon = document.createElement("p");
       tile.appendChild(lon);
       lon.append("Longitude: ");

       var lon_span = document.createElement("span");
       lon_span.id = "longitude";
       lon.appendChild(lon_span);
       lon_span.append(countries[i].latlng[1]);

       var area = document.createElement("p");
       tile.appendChild(area);
       area.append("Area: ");

       var area_span = document.createElement("span");
       area_span.id = "area";
       area.appendChild(area_span);
       area_span.append(countries[i].area);


       var native_name = document.createElement("p");
       tile.appendChild(native_name);
       native_name.append("Native Name: ");

       var nn_span = document.createElement("span");
       nn_span.id = "native_name";
       native_name.appendChild(nn_span);
       nn_span.append(countries[i].nativeName);

       var numer_code = document.createElement("p");
       tile.appendChild(numer_code);
       numer_code.append("Numeric Code: ");

       var numc_span = document.createElement("span");
       numc_span.id = "numeric_code";
       numer_code.appendChild(numc_span);
       numc_span.append(countries[i].numericCode);

        var currency = document.createElement("p");
        tile.appendChild(currency);
        

        var curr_span = document.createElement("span");
        curr_span.id = "currency";
        currency.appendChild(curr_span);
        curr_span.append("Currency-Code: "+countries[i].currencies[0].code + ",  " + "Currency-Name: " + countries[i].currencies[0].name + ",  "+ "Currency-Symbol: " + countries[i].currencies[0].symbol)

        var languages = document.createElement("p")
        tile.appendChild(languages);
        languages.append("Languages: ");

        var lang_span = document.createElement("span");
        lang_span.id = "languages";
        languages.appendChild(lang_span);

        for(j=0; j<countriesData[i].languages.length; j++){
            lang_span.append(countries[i].languages[j].name + ", ");
        }

        var nat_languages = document.createElement("p")
        tile.appendChild(nat_languages);
        nat_languages.append("Native Languages: ");

        var natlang_span = document.createElement("span");
        natlang_span.id = "native_languages";
        nat_languages.appendChild(natlang_span);

        for(j=0; j<countriesData[i].languages.length; j++){
            natlang_span.append(countries[i].languages[j].nativeName + ", ");
        
        }

    }
}
var container = document.createElement("div");
container.className = "container w=100 mw-100 row mx-auto bg-grey justify-content-around";
document.body.appendChild(container)
// using xmlhttp request along with the promise to get the data
let request = obj => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", obj.url);
       
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send(obj.body);
    });
};
// using our created one to get the data
request({url: "https://restcountries.eu/rest/v2/all"})
    .then(data => {
        var countriesData = JSON.parse(data);
        initialize(countriesData)
    })
    .catch(error => {
        console.log(error);
    });