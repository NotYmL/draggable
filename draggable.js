async function draggable(grabP, move){
    let lastPosX = null;
    let lastPosY = null;

    let op = document.body.getElementsByTagName("*");
    for(let i = 0; i < op.length; i++) {
        Object.assign(op[i].style, {userSelect: "none"});
    }
    
    move.style.position = "absolute";
    
    grabP.addEventListener("mousemove", (e) => {
        if(e['buttons']==1) {
            
            move.style.left = `${move.offsetLeft - (lastPosX - e.clientX)}px`;
            move.style.top = `${move.offsetTop  - (lastPosY - e.clientY)}px`;
        }
        lastPosX=e.clientX; 
        lastPosY=e.clientY;
    })
}
