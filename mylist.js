function ToDoItem(name){
    this.name = name;
    this.done = false;
    this.element = document.createElement('li')
    this.element.textContent = name;
    this.element.classList.add('list-item');
    this.element.addEventListener('click',this.toggleDone.bind(this))
}

ToDoItem.prototype.toggleDone = function(){
    this.done = !this.done;
    if(this.done){
            this.element.classList.add('done')
        }else{
            this.element.classList.remove('done')
        }
}

function List(elem,input,button){

    this.list = [];
    this.element = elem;
    this.input = input;
    this.button = button;
    this.button.addEventListener('click',this.add.bind(this))
    this.input.addEventListener('keydown',(event)=> {
        if(event.key === 'Enter'){
            this.add()}
    })
}

List.prototype.add = function(){
    
    var name = this.input.value;
    var item = new ToDoItem(name);
    this.list.push(item);
    this.element.appendChild(item.element);
    var ListButton = document.createElement('button');
    this.element.appendChild(ListButton);
    ListButton.innerText = "x"
    this.input.value = '';
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

var myList = new List(
    document.getElementById("list"),
    document.getElementById('ListInput'),
    document.getElementById('AddButton')
    );
    
