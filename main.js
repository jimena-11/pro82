var mouse_event="empty"
var last_position_of_x,last_position_of_y
//se estan creando unas variables //
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
//esta parte dice que ctx es igual a canvas.getContext("2d")//
color="orange"
//se esta diciendo que el color inicial es el naranja//
weidth_of_line=1
//dice que el grozor de linea es de 1//

canvas.addEventListener("mousedown",mymousedown)
function mymousedown(e){
    color=document.getElementById("color").value
weidth_of_line=document.getElementById("width_of_line").value
// weidth_of_line es igual a width_of_line//
mouse_event="mousedown"
}

canvas.addEventListener("mousemove",mymousemove)
function mymousemove(e){
current_possiton_of_mouse_x=e.clientX-canvas.offsetLeft
current_possiton_of_mouse_y=e.clientY-canvas.offsetTop
if(mouse_event=="mousedown"){
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=weidth_of_line
    // el grozor de ctx es igual a weidth_of_line//
    ctx.moveTo(last_position_of_x,last_position_of_y)
    ctx.lineTo(current_possiton_of_mouse_x,current_possiton_of_mouse_y)
    ctx.stroke()
}
last_position_of_x=current_possiton_of_mouse_x
last_position_of_y=current_possiton_of_mouse_y
}
canvas.addEventListener("mouseup",mymouseup)
function mymouseup(e){
    mouse_event="mouseup"
}
canvas.addEventListener("mouseleave",mymouseleave)
function mymouseleave(e){
    mouse_event="mouseleave"
}
function clear_Area(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
// esta funcion sirve para limpiar el canvas//
}