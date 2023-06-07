function gainAcess(event){
    const curElement=event.target
    var value=curElement.innerHTML
    var prevalue=textbox.value
    if(value=="="){
        const res=eval(prevalue)
        textbox.value=res
        if(value==curElement){
            textbox.value=""
        }
    }
    else if(value=="AC"){
        textbox.value=""
    }
    else if(value=="C"){
        textbox.value=prevalue.slice(0,-1)
    }
    else if(value=="REP"){
        textbox.value=prevalue
    }
    else{
        console.log(prevalue)
        textbox.value=prevalue+""+value
    }
}
const boxes= document.querySelectorAll('button');
console.log(boxes);

for(const element of boxes){
    element.addEventListener("click",gainAcess);
}
const textbox=document.getElementById("input");