const request=require('request')

const forcast=(lat,long,callback)=>{
    const url='http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&lang=en&units=metric&appid=a2cd85cc77f2c761606ee07edbe4cf1c'
    
    request({url:url,json:true},(error,response)=>{
        if(error){
    
           callback('Unabel to  connect to  weather service ! ',undefined)
    
        }else if(response.body.error){
    
            callback('Unabel o find location ',undefined)
    
        }else{ //weather[0].description
            callback(undefined,response.body.weather[0].description  +'  and temperature is   '+ response.body.main.temp)
        }
    })
}

// http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=a2cd85cc77f2c761606ee07edbe4cf1c

module.exports=forcast