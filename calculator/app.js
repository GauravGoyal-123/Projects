const inp=document.getElementById("inp");
const btn=document.querySelectorAll("button");

for(let x of btn){
    x.addEventListener('click',(e)=>{
        const exp=e.target.innerText;
        if(exp==='C'){
            inp.value="";
        }
        else if(exp==='**'){
            inp.value+='*'
        }
        else if(exp==='='){
            try{
                inp.value=eval(inp.value);
            }
            catch(e){
                inp.value="Invalid Operation";
            }
        }
        else {
            inp.value+=exp;
        }
    })
}














for(let btns of btn){
    btns.addEventListener('click',(e)=>{
        const expression=e.target.innertext;
        if(expression==='C'){
            inp.value="";
        }
        else if(expression==='**'){
            inp.value="*";
        }
        else if(expression==='='){
            try{
                inp.value=eval(inp.value);
            }
            catch(e){
                inp.value="Invalid Operation";
            }
        }
    })
}