//1. create a ToDoItem class
//2. it should have a `name` and `done` properties and a `toggleDone` method which toggles the done property from true to false and vice-versa

//write your code here..
function ToDoItem(name){
    this.name = name;
    this.done = true;
}

ToDoItem.prototype.toggleDone = function(){
    this.done = !this.done;
}

//If you write it correctly the following code should work:

var toDoItem1 = new ToDoItem('wake up')
var toDoItem2 = new ToDoItem('eat breakfast')
var toDoItem3 = new ToDoItem('go to work')

toDoItem1.toggleDone()
toDoItem2.toggleDone()
toDoItem2.toggleDone()

console.log(toDoItem1.name) // should print 'wake up'
console.log(toDoItem1.done) // should print: true
console.log(toDoItem2.name) // should print: 'eat breakfast'
console.log(toDoItem2.done) // should print: false
console.log(toDoItem3.name) // should print: 'go to work'
console.log(toDoItem3.done) // should print: false

