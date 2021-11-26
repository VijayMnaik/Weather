let search=document.querySelector(".fas");
search.addEventListener('click',function(){
    let city=document.querySelector(".search-bar").value;
    searching(city);
})

function searching(city){
    url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=9d775636dbc0d23ed04a838ed1c88784&units=metric";
fetch(url).then((response)=>{
    if(!response.ok){
        alert("No Weather Found");
        throw new Error("no weather found");
    }
    else
        return response.json();

}  )
.then((data)=>{
    let place=data.name;
     place="Weather in "+place;
    let temp=data.main.temp;
    let icon=data.weather[0].icon;
    let imgurl="http://openweathermap.org/img/wn/"+icon+"@2x.png";
    let desc=data.weather[0].description;

    let humidity=data.main.humidity;
    let windspeed=data.wind.speed;
    document.querySelector(".broken").innerHTML=desc;
    document.querySelector(".city").innerHTML=`${place}`;
    document.querySelector(".heat").innerHTML=`${temp}&#176C`;
    document.querySelector(".imga").src=imgurl;
    document.querySelector(".humidity").innerHTML=`Humidity :${humidity}%`;
    document.querySelector(".wind-speed").innerHTML=`Wind Speed :${Math.floor(windspeed*3.6)} km/hr`;
})
}

window.addEventListener('keypress',function(event){
    if(event.key=="Enter"){
        searching(this.document.querySelector(".search-bar").value);
    }
});

window.onload=function(){
        backgrounds=["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg","images/8.jpg","images/9.jpg",];
        setInterval(changeImage,5000);
        function changeImage(){
    let rand=Math.floor((Math.random()*3));
    document.body.style.backgroundImage="url('"+backgrounds[rand]+"')";

    }
}

searching("bangalore");

