function ToDoItem(name){
    this.name = name;
    this.done = false;
    this.element = document.createElement('li')
    this.element.textContent = name;
    this.element.classList.add('list-item');
}

ToDoItem.prototype.toggleDone = function(){
    this.done = !this.done;
}

function List(elem){
    this.list = [];
    this.element = elem;

}

List.prototype.add = function(name){
    var item = new ToDoItem(name);
    this.list.push(item);
    this.element.appendChild(item.element);
}

List.prototype.remove = function(name){  
    var indexToRemove = this.list.findIndex(function(listItem){
        
        return listItem.name === name;
    });
    this.list.splice(indexToRemove,1);
    var elementToRemove = document.getElementById('list')
    elementToRemove.removeChild(item.element)
    
}

List.prototype.toggleDone = function(name){
    var item = this.list.find(function(item){
       return item.name === name;
    })
    item.toggleDone();
}

