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

function List(){
    this.list = [];
}
List.prototype.add = function(name){
    var item = new ToDoItem(name);
    this.list.push(item);
}

List.prototype.remove = function(item){
    var removeItem = item.splice();
}

var shoppingList = new List();
shoppingList.add('milk');
shoppingList.add('bread');
shoppingList.add('eggs');
shoppingList.list[1].toggleDone();
console.log(shoppingList.list[1].done); //should be true
console.log(shoppingList.list[1].name); //should be bread
console.log(shoppingList.list[2].done); //should be false
console.log(shoppingList.list[2].name); //should be eggs
console.log(shoppingList.list[0].name); //should be milk
console.log(shoppingList.list[0].name); //should be false