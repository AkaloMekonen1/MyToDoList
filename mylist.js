function ToDoItem(name){
    this.name = name;
    this.done = false;
    this.element = document.creatElement('li').textContent
}

ToDoItem.prototype.toggleDone = function(){
    this.done = !this.done;
}

function List(){
    this.list = [];

}
List.prototype.add = function(name){
    var item = new ToDoItem(name);
    this.list.push(item);
}

List.prototype.remove = function(name){  
    var indexToRemove = this.list.findIndex(function(listItem){
        
        return listItem.name === name;
    });
    this.list.splice(indexToRemove,1);
}

List.prototype.toggleDone = function(name){
    var item = this.list.find(function(item){
       return item.name === name;
    })
    item.toggleDone();
}

ToDoItem.prototype.addList = function(){
    this.element.classList.add('list-item');
}