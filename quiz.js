
function data(e){
    e.preventDefault();
    let name =  document.getElementById("hel").value;
    console.log(name);
    sessionStorage.setItem("name", name);
    location.href= "quiz2.html"
}