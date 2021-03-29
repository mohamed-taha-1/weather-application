
   
const weatherFrom=  document.querySelector('form')
const search=  document.querySelector('input')
const messageOne=  document.querySelector('#message-1')
const messageTwo=  document.querySelector('#message-2')









weatherFrom.addEventListener('submit',(e)=>
{
    e.preventDefault()

    messageOne.textContent='loading ... '
    messageTwo.textContent=''

    const location=search.value
    
    fetch('http://localhost:3000/products?address='+location).then(response=>{
    response.json().then(data=>{
        if(data.error){
            messageOne.textContent=data.error
        }else{
       
            messageOne.textContent=data.location
            messageTwo.textContent=data.forcast
           
        }
    })
    })
})
