let inputtext= document.querySelector(".inputtext");
let recentinput = []
let formInput= document.getElementById("inputForm")
const listofRecentEl= document.querySelector(".listofRecent")


inputtext.addEventListener("keydown",()=>{
    console.log(inputtext)
    
    if(inputtext.value){
        document.getElementById("closesearch").style.display="block"
    }
    else{
        document.getElementById("closesearch").style.display="none"
    }
})
/*
formInput.addEventListener("submit",(e)=>{
    e.preventDefault()
    let listofRecentHTMLEl=""

    recentinput.push(inputtext.value)
    console.log(recentinput) 
     
    if(recentinput.length>0){
        for(i=0; i<recentinput.length; i++){
            listofRecentHTMLEl +=
            
           
        }
        listofRecentEl.innerHTML= listofRecentHTMLEl
        }
})
*/
