const key= "09008c298b20c81d5f07142ba42f52da";
var city="";
var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var mon= months[d.getMonth()];
var days= ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var day= days[d.getDay()];
var num=d.getDate();
var year=d.getFullYear();
var date= day+" "+ num+" "+ mon+" "+year;
$("#location").keydown((e)=>{
    console.log(city);
    if(e.keyCode==8)
    {
        city=city.slice(0,city.length-1);
        console.log(city);
        
    }
    else if(e.keyCode==20)
    {
        
    }
    else if(e.keyCode==13)
    {

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`).then((res)=>{
            return res.json();
        }).then((res)=>{
            document.getElementById("place").innerText=city+", "+res.sys.country;
        document.getElementById("date").innerText=date;
            console.log(res);
            document.getElementById("temp").innerText=(Math.round(res.main.temp)+"° C");
            document.getElementById("weather").innerText=res.weather[0].main;
            document.getElementById("min-max").innerText=(Math.floor(res.main.temp_min)+"° c / "+ Math.ceil(res.main.temp_max)+"° c");
        }).catch((err)=>{
            console.log(err);
        });
    }
    else
    {
       city=city+e.key;
    }
});

/*const city=document.getElementById("location").value;*/