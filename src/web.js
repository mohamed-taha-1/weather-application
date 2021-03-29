const express= require('express');
// const { dirname } = require('path')

const hbs=require('hbs');
const app=express()
const path=require('path')

const port=process.env.PORT || 3000

// const publicDir=path.join(__dirname,'../public');
const geocoed=require('./utils/geocode')
const forcast = require('./utils/forcast')

const partialDir=path.join(__dirname,'../views/partial')


hbs.registerPartials(partialDir)

app.set('views', __dirname + '../../views');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '../../public'));
// app.engine('hbs',hbs({ partialsDir:partialDir}))
 
// app.use(express.static(publicDir))



try{

 

    
    app.get('',(req,res)=>{

      
        res.render('home',{
            name:'mohamed taha',
            age:23
        })
    
    })

    app.get('/about',(req,res)=>{

      
        res.render('About/About')
    
    })


    app.get('/json',(res,req)=>{

        
        req.send({
            name:'ahmed',
            age:23
        })
    })

      // anther route

    app.get('/about',(res,req)=>{

        
        req.send('<h1> About </h1>')
    })

    // anther route 

    app.get('/welcome',(res,req)=>{

             req.send(sataticFile)
    })

  // anther route 

    app.get('/products',(req, res)=>{
        if(!req.query.address){
            return res.send({
                error: 'there are no serach items '
            })
        }

        geocoed(req.query.address , (error , {lattuide,longitude , location})=>{
            if(error){
                return res.send( { error})
            }

            forcast(lattuide,longitude ,(error , forcastData)=>{
                if(error){
                    return res.send( { error})
                }
                res.send({
                    forcast:forcastData,
                    location,
                    address:req.query.address
                })
            })
        })
        
    })
    // anther route 
    app.get('/weather',(req, res)=>{
        if(!req.query.search){
            return res.send({
                error: 'there are no search items '
            })
        }
        
        res.send({
           forcasting:'it is rain',
           location:req.query.search
        })
    })
     // anther route 

    app.get('/about/*',(req,res)=>{
        res.render('404Error')
    })

      // anther route 

    app.get('*',(req,res)=>{
        res.render('404Error')
    })

      // port 
    app.listen(port)

    // end of try 
}catch(e){
    console.log(e.message)
}
