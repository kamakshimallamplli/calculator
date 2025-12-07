let buttons= document.querySelectorAll("button")
let a= document.getElementById("value")

buttons.forEach(btn=>{
   btn.addEventListener("click",()=>{
    let text=btn.innerText
    if(text=="C"){
        a.value=""
    }
    else if (text=="DEL"){
        a.value=a.value.slice(0,-1)
    }
    else if(text== "="){
        try{
            a.value=eval(a.value)
        }
        catch{
            a.value="ERROR"
        }
    }
    else{
        a.value+=text
    }

   })
})