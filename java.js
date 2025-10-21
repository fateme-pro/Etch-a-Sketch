const container=document.querySelector(".container");
container.style.display="flex";
container.style.flexWrap="wrap";
container.style.justifyContent="flex-start";
container.style.width="680px";
container.style.height="680px";
container.style.margin = "20px auto";


for(let i=0;i<=255;i++){
 const div=document.createElement("div");
 div.classList.add("square");
 container.appendChild(div);
 div.style.backgroundColor="green";
 div.style.width="40px";
 div.style.height="40px";
 div.style.margin = "0";
 div.style.border="1px solid red";

}
