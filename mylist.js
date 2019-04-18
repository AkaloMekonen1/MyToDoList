function ToDoItem(name){
    this.name = name;
    this.done = false;
    this.element = document.createElement('li')
    this.clickBtn = document.getElementById('AddButton')
    // this.placeholder = document.getElementById('ListName')
    this.element.textContent = name;
    this.element.classList.add('list-item');
    this.clickBtn.addEventListener('click',()=>this.toggleDone())
}

ToDoItem.prototype.toggleDone = function(){
    this.done = !this.done;
    if(this.done){
        this.element.classList.add('done')
    }else{
        this.element.classList.remove('done')
    }
}

function List(elem){
    this.list = [];
    this.element = elem;
}

List.prototype.add = function(name){
    var item = new ToDoItem(name);
    this.list.push(item);
    this.element.appendChild(item.element);
    // this.element = document.getElementById('ListName').value
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

var myList = new List(document.getElementById('list'));
