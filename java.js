function popUp(){
 const body= document.querySelector("body");
 const button=document.querySelector("button")
 body.appendChild(button);
 button.textContent="click here to design your own grid!!";
 button.addEventListener("click",()=>{
   button.textContent="if you want another grid click here";
    let numPerSide=prompt("number of squares per side?","16*16");
    numPerSide=parseInt(numPerSide);
    if(!isNaN(numPerSide)&&numPerSide>0){
      createGrid(numPerSide);
    }else{
      alert("please enter a valid number");
    }
 
 });

}




function createGrid(num){
 const container=document.querySelector(".container");
 container.innerHTML="";//clear page
 container.style.display="flex";
 container.style.flexWrap="wrap";
 container.style.justifyContent="flex-start";
 container.style.width="800px";
 container.style.height="800.5px";
 container.style.margin = "20px auto";

 const  squareSize= 800/num;

for(let i=1;i<=(num*num);i++){
 const div=document.createElement("div");
 div.classList.add("square");
 container.appendChild(div);
 div.style.backgroundColor="#dbb7db";
 div.style.width=`${squareSize}px`;
 div.style.height=`${squareSize}px`;
 div.style.margin = "0";
 div.style.border="1px solid #868286";
 div.style.boxSizing="border-box"
 div.addEventListener("mouseenter",()=>{
   div.classList.add("hover"); 
 })
 div.addEventListener("mouseover",()=>{
    div.classList.remove("hover");
 })
}

}

popUp();


