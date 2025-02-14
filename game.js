let boxes = document.querySelectorAll(".box");
let reset = document.getElementById("reset-btn");
let para = document.querySelector("p");
let player0 = true;
let matches = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(box.textContent === ""){
            if(player0 == true){
                box.textContent = "0";
                player0 = false;
            }else{
                box.textContent = "X";
                player0 = true;
            }
            matchefxn();
        }
    })
})
const disable = ()=>{
    for(box of boxes){
        box.disabled = true;
    }
}

const resetbtn = ()=>{
    for(box of boxes){
        box.textContent = "";
        box.disabled = false;
    }
    para.style.display = "none";
}

const matchefxn = ()=>{
    for(match of matches){
        let chance1 = boxes[match[0]].textContent;
        let chance2 = boxes[match[1]].textContent;
        let chance3 = boxes[match[2]].textContent;
        if(chance1!= "" && chance1 == chance2 && chance2 == chance3){
            console.log(`Winner is ${chance1}`);
            para.textContent = `Winner is ${chance1}`
            para.style.display = "block";
            disable()
        }

    }
}
reset.addEventListener("click",resetbtn);