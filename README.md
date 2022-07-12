# draggable

```js
async function draggable(grabP, move){let lastPosX = null;let lastPosY = null;let op = document.body.getElementsByTagName("*");for(let i = 0; i < op.length; i++) {Object.assign(op[i].style, {userSelect: "none"});}move.style.position = "absolute";grabP.addEventListener("mousemove", (e) => {if(e['buttons']==1) {move.style.left = `${move.offsetLeft - (lastPosX - e.clientX)}px`;move.style.top = `${move.offsetTop  - (lastPosY - e.clientY)}px`;lastPosY=e.clientY;lastPosX=e.clientX;}else{lastPosX=e.clientX; lastPosY=e.clientY;}})}
```
draggable(GrabPiont, ElementToMove)

![alt text](https://media.discordapp.net/attachments/996444271219585077/996485765796204694/demo.png)
