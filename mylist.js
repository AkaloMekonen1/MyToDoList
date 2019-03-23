function ToDoItem(name){
    this.name = name;
    this.done = false;
    this.element = document.creatElement('li')
}

ToDoItem.prototype.toggleDone = function(){
    this.done = !this.done;
    this.element.classList.add('list-item');
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

