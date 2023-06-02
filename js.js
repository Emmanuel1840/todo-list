// const inputTarea = document.getElementById('tarea');
// const miParrafo = document.getElementById('parrafo');
// const miFormulario = document.getElementById('formulario');
// const form=document.querySelector('form');
// const text = document.getElementById('text');
// const todoCon =document.querySelector('.todo-con');


// console.log(inputTarea.value);

// function addTask (e){

//     e.preventDefault();
//     console.log('enviando....');

    //     const form = document.createElement('p'); //
    //     form.innerText = inputTarea.value;
    //    

//     const card = document.createElement('div');
//     card.classList.add('card');
    
//     const textTarea = document.createElement('p');
//     textTarea.innerText = inputTarea.value;
   

//     const chek= document.createElement('c');
//     chek.classList.add('limpiar');
    
//     card.appendChild(textTarea);  
    
    
//     boxTareas.appendChild(card);
//     inputTarea.value= '';

//     const check = nuevaTarea.querySelector('check');
//     check.addEventListener('click', ()=>{
//         check.classList.toggle('active-check')
//         nuevaTarea.children[1].classList.add('complete');
//     })
    
// }


//  miFormulario.addEventListener('submit', addTask)


// const form=document.querySelector('form');
// const text = document.getElementById('text');
// const todoCon =document.querySelector('.todo-con');

// form.addEventListener('submit', (e)=>   {
//     e.preventDefault();
//     addtodo();
// })


// function addtodo(){
//     let todoColl=document.createElement('div');
//     const textTarea = document.createElement('p');
//     todoColl.innerHTML=`
//     <div class="todo-li">
//         <div class="check active-check"><img src="./todo-app-main/images/icon-check.svg" alt=""></div>
//         <p">${textTarea}</p>
//         <button class="close"><img src="./todo-app-main/images/icon-cross.svg" alt=""></button>
//     </div>`

//     todoCon.appendChild(todoColl);
//     const close=todoColl.querySelector('.close');
//     close.addEventListener('click', ()=>{
//         todoColl.remove();
//     })

//     const check=todoColl.querySelector('.check');
//     check.addEventListener('click', ()=>{
//         check.classList.toggle('active-check')
//         console.log(todoColl.children[0].children[1].classList.add('complete'));
//     })
// }

let form=document.querySelector("form");
let text=document.getElementById("text");
let todoCon=document.querySelector(".todo-con")
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    addtodo();
})
function addtodo(){

    let todoColl=document.createElement("div");
    todoColl.classList.add("todocoll")
    let todotext=text.value;
    todoColl.innerHTML=`
    <div class="todo-li">
    <div class="check"active-check":""}"><img src="./images/icon-check.svg" alt=""></div>
    <p id="parrafo">${todotext}</p>
    <button class="close"><img src="./images/icon-cross.svg" alt=""></button>
  </div>`;
    todoCon.appendChild(todoColl);
    const close=todoColl.querySelector('.close');
     close.addEventListener('click', ()=>{
        todoColl.remove();
   })

    let check=todoColl.querySelector(".check");
    check.addEventListener('click', ()=>{
        check.classList.toggle("active-check")
        todoColl.children[0].children[1].classList.add("complete")  
    })
}
    text.value="";






