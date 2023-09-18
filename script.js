let btns=document.getElementsByClassName("number")
let turn='X'
let resetbtn=document.getElementsByClassName("reset")[0]
let WIN=document.getElementById("win")
let audio1=new Audio("sound.wav")
let audio2=new Audio("win.wav")


// setInterval(()=>{
//     document.body.classList.toggle("temp-color");
// },200)

const start= resetbtn.addEventListener('click',()=>{
    for(let i=1;i<=9;i++)
    {
        document.getElementById(`${i}`).innerHTML=''
    }
    document.getElementById("win").innerHTML=''
    document.getElementsByClassName("bari")[0].innerHTML='Turn for X'
    turn='X'
    document.getElementsByTagName("img")[0].style.width="0vw"
    winner=false
})
document.getElementsByClassName("bari")[0].innerHTML=`Turn for ${turn}`
let narray=Array.from(btns)
let winner=false
const add=()=>{
for(let element of narray)
{
    let found=false
        element.addEventListener('click',(e)=>{
            if(e.target.innerHTML=='' && winner==false){
            audio1.play();
            e.target.innerHTML=turn
            turn=newturn()
            document.getElementsByClassName("bari")[0].innerHTML=`Turn for ${turn}`
            found=checkwinner()
          
            if(found==false && draw()==true) 
            {
                WIN.innerHTML='Match Drawn'
                document.getElementsByClassName("bari")[0].innerHTML=``
            }
        }
        })
        if(found==true)
        break
}
}
add();
function newturn(){
    return turn==='X' ? 'O' :'X'
}


function draw(){
    let count=0
    Array.from(btns).forEach((element)=>{
       if(element.innerHTML!=='')
       {
        count++;
       }
    })
    return count==9
}



function checkwinner(){
    let win=[
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,5,9],
        [3,5,7]
    ]
    let val=0;
    win.forEach( (arr)=>{
        let a=document.getElementById(arr[0]).innerHTML
        let b=document.getElementById(arr[1]).innerHTML
        let c=document.getElementById(arr[2]).innerHTML
        if(a===b && b===c && a!==''){
            document.getElementsByTagName("img")[0].style.width="auto"
            WIN.innerHTML=`${a} is the winner`
            winner=true
            document.getElementsByClassName("bari")[0].innerHTML='' 
            audio2.play()
            val=val|1;
            
        }   
    })
    if(val==1)
        return true;
    else return false;
}
