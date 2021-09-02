window.onload= function (){
    document.querySelector(".boxtop h1").innerHTML+=" "+ sessionStorage.getItem("name")
    show(0);
    timer();
}
let questions = [
    {
      id: 1,
      question: "What is the full form of RAM ?",
      answer: "Random Access Memory",
      options: [
        "Random Access Memory",
        "Randomly Access Memory",
        "Run Aceapt Memory",
        "None of these"
      ]
    },
    {
      id: 2,
      question: "What is the full form of CPU?",
      answer: "Central Processing Unit",
      options: [
        "Central Program Unit",
        "Central Processing Unit",
        "Central Preload Unit",
        "None of these"
      ]
    },
    {
      id: 3,
      question: "What is the full form of E-mail",
      answer: "Electronic Mail",
      options: [
        "Electronic Mail",
        "Electric Mail",
        "Engine Mail",
        "None of these"
      ]
    }
  ];
let count=0;
let choice=0;
let countdown;
function timer(){
  document.querySelector(".beep").innerHTML="10";
  let initial=10;
  countdown= setInterval(()=>{
      initial--;
      if(initial<0){
        document.querySelector(".beep").classList.remove("warn");
        clearInterval(countdown);
        next();
      }else{
        document.querySelector(".beep").innerHTML=initial;
        if(initial<=3){
          document.querySelector(".beep").classList.add("warn");
        }
      }
    
  },1000);
}

function eval()
{
  let ans;
  let cla = document.getElementsByClassName("options");
  for(let i=0; i<cla.length; i++){
    if(cla[i].classList.contains("act")){
      ans = document.querySelector(".act").innerHTML;
      console.log(ans);
      if(ans == questions[count].answer){
        choice += 10;
        console.log(choice);
      }
      break;
    }
  }
  document.querySelector(".st .score span").innerHTML=""+choice;
  if(count==questions.length-1){
    sessionStorage.setItem("points",choice);
    location.href="end.html"
  }
}
function next(){
    eval();
    count++;
    rem();
    show(count);
    document.querySelector(".beep").classList.remove("warn");
    clearInterval(countdown);
    timer();
}
function show(count){
    document.getElementById("question").innerHTML= questions[count].question;
    document.getElementById("option1").innerHTML= questions[count].options[0];
    document.getElementById("option2").innerHTML= questions[count].options[1];
    document.getElementById("option3").innerHTML= questions[count].options[2];
    document.getElementById("option4").innerHTML= questions[count].options[3];
}
function rem()
{
    let z = document.getElementsByClassName("options");
    for(let i=0;i<z.length;i++)
    {
        z[i].classList.remove("act");
    }
}

function active(x){
    rem();
    document.getElementById("option"+x).classList.add("act");
}
