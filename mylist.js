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

// var toDoItem1 = new ToDoItem('wake up')
// var toDoItem2 = new ToDoItem('eat breakfast')
// var toDoItem3 = new ToDoItem('go to work')

// toDoItem1.toggleDone()
// toDoItem2.toggleDone()
// toDoItem2.toggleDone()



function List(){
    this.list = [];

}
List.prototype.add = function(name){
    var item = new ToDoItem(name);
    this.list.push(item);
}

List.prototype.remove = function(name){
    var indexToRemove = name;
    this.list.splice(indexToRemove,2);
    console.log(this.list);
    debugger;
}

var myList = new List();
myList.add("wake up");
myList.add("eat");
myList.add("go to work");
myList.add("back from work");
myList.add("go to sleep");
myList.remove("wake up");