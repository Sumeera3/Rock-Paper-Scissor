option=document.querySelectorAll(".option");
msg=document.querySelector(".msg");
Uscore=document.querySelector(".Uscore");
Cscore=document.querySelector(".Cscore");

let User_score=0;
let Com_score=0;

const Winner=(Uwin,Uchoice,Cchoice)=>{


    if(Uwin==true){
        msg.innerText=`You Win! Your ${Uchoice} beats ${Cchoice}`;
        msg.style.backgroundColor="green";
        User_score++;
        Uscore.innerText=User_score;
    }
    else{
        msg.innerText=`You Lost! ${Cchoice} beats Your ${Uchoice}`;
        msg.style.backgroundColor="red";
        Com_score++;
        Cscore.innerText=Com_score;
    }

}


const play=(Uchoice)=>{
    let  Uwin=true;
    const Cchoice=ComOpt()
    if(Uchoice==Cchoice){
        msg.innerText="The Game is Draw! Play Again";
        msg.style.backgroundColor='black';
    }
    else{
        if(Uchoice=="Rock"){
            Uwin=Cchoice=="Paper"?false:true;
        }
        else if(Uchoice=="Paper"){
            Uwin=Cchoice=="Rock"?true:false;
        }
        else{
            Uwin=Cchoice=="Rock"?true:false;
        }
        Winner(Uwin,Uchoice,Cchoice);
    }

    
}

const ComOpt=()=>{
    let arr=["Rock","Paper","Scissor"];
    const Idx=Math.floor(Math.random()*3);
    const Cchoice=arr[Idx];
    return Cchoice

}

option.forEach((opt)=> {

    opt.addEventListener("click",()=>{
        const Uchoice=opt.getAttribute("id");
        play(Uchoice);

    })
    
    
});
