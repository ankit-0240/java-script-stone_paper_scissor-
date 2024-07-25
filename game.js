let userscore=0
let compscore=0

const choices= document.querySelectorAll(".choice")

const msg = document.querySelector("#msg")
const userpara = document.querySelector("#user-score")
const comppara = document.querySelector("#comp-score")


const compchoice=()=>{
    let option =["rock","paper","scissor"]
    let randomindx = Math.floor(Math.random()*3)
    return option[randomindx]
}
 const drawgame=()=>{
    console.log("game was draw")
    msg.innerText="game draw ,try again"
    msg.style.backgroundColor="black"
 }

 const win=(userwin ,userchoice, cmpchoice)=>{

    if(userwin){
        userscore++;
        userpara.innerText=userscore;
        console.log("you win dear , give me a party")
        msg.innerText=`you win dear , give me a party your ${userchoice} beats ${cmpchoice}`
        msg.style.backgroundColor="green"
    } else{
        compscore++;
        comppara.innerText=compscore;
        console.log("you lose dear ")
        msg.innerText=`you lose dear ${cmpchoice} beats yours${userchoice}`
        msg.style.backgroundColor="red"
    }




 }
const play=(userchoice)=>{
 console.log("user choice=",userchoice)
 const cmpchoice= compchoice();
 console.log("comp choice=",cmpchoice)

 if(userchoice==cmpchoice){
    drawgame();
}
else{

    let userwin=true;
    if(userchoice==="rock"){
        userwin= cmpchoice === "paper" ? false:true;

    }else if(userchoice === "paper"){
        userwin= cmpchoice  ==="scissors"?false : true;

    }else {

        userwin = cmpchoice==="rock" ? false:true;
    }

    win(userwin,userchoice,cmpchoice)


}
}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice= choice.getAttribute("id")
        console.log("clicked",userchoice)
        play(userchoice)
    })
})