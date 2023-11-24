let todo1 = 'Get groceries';
let todo2 = 'Wash car';
let todo3 = 'Make dinner';




const todos = [{
   title: 'Get groceries',
   dueDate: '2021-10-04',
   id: 'id1'
}, {
   title: 'Wash car',
   dueDate: '2021-02-03' ,
   id: 'id2'
}, {
   title: 'Make dinner',
   dueDate: '2021-02-05',
   id: 'id3'
}];

 
render();

function addTodo() {
   const textbox = document.getElementById('todoTitle');
   const title = textbox.value

   const datePicker = document.getElementById('datePicker');
   const dueDate = datePicker.value;

   const id = new Date().getTime();

   todos.push({
      title: title,
      dueDate: dueDate,
      id: id
   });

   render();
}

function deleteTodo(event) {
   const deleteButton = event.target;
   const idToDelete = deleteButton.id; 
}

function render() {

   document.getElementById('todoList').innerHTML = '';

   todos.forEach(function (todo) {
      const element = document.createElement('div');
      element.innerText = todo.title + ' ' + todo.dueDate;
      
      const deleteButton = document.createElement('button')
      deleteButton.innerText = 'Delete';
      deleteButton.style = 'margin-left: 12px';
      deleteButton.onclick = deleteTodo;
      deleteButton.id = todo.id;
      element.appendChild(deleteButton);
      const todoList = document.getElementById('todoList')
      todoList.appendChild(element);
   });
}

const cart = document.getElementById('cart');

function addToCart(food) {
   const cartedItems = document.createElement('div');
   cartedItems.innerText = food;
   cart.appendChild(cartedItems);
}

function clearCart() {
   cart.innerHTML = '';
}





const measurement = document.getElementById('measurement');

function convertToCm() {
   const value = measurement.value;

   const convertedValue = +value * 2.54;

   const result = document.createElement('div');
   result.innerText = convertedValue;
   document.body.appendChild(result);
}

function convertToInch() {
   const value = measurement.value;

   const convertedValue = +value / 2.54;
   const result = document.createElement('div');
   result.innerText = convertedValue;
   document.body.appendChild(result)
}
// function CreateDiv() {


//   let textbost = document.getElementById('textbos');
//   let title = textbost.value;

//   let div = document.createElement('div');
//   div.innerText = title;
//   document.body.appendChild(div);
  
   
// }



// function changeText() {
//    let clickbox = document.getElementById('todoButton');
//    clickbox.innerText = 'done'

// }
// let counter = 0

// function countUp() {
//    counter = counter + 1;
//    let counting = document.getElementById('counter')
//    counting.innerText = counter
// }

// let counte = 0

// function countDown() {
//    counte = counte - 1;
//    let counted = document.getElementById('counte');
//    counted.innerText = counte;
// }

// function greeting(firstName) {
//    console.log('hello ' + firstName)
// }
// greeting('Simon');







