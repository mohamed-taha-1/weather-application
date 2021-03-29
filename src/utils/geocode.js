const request=require('request')

const geocoed=(address,callback)=>{
   
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?limit=2&access_token=pk.eyJ1IjoibW9oYW1lZDEyMTMiLCJhIjoiY2tpZTJzdnFzMDYxMjJ1cDFrMDlqeGpnNSJ9.yG_OCuEfrkmcjw_03vYEQw'
   
    request({url:url , json:true},(error , response )=>{
        if(error){
         
                 callback('Unabel to connect to location  services',undefined)
        
        }else if(response.body.features.length === 0){
             
                callback('Unabel to fined location .Try anther search',undefined)
      
        }else{
            callback(undefined,{
          
                lattuide:response.body.features[0].center[1],
                longitude:response.body.features[0].center[0],
                location:response.body.features[0].place_name
            
            })
        }
       
    })
}



module.exports=geocoed