const Node = require('./node');


class Stack{
    constructor(){
        this.first = null;
        this.top = null;
        this.size = 0;
    }


    //Vlidate if stack is empty
    listEmpty(){
        return this.top == null;
    }


    push(data){
        let newNode = new Node(data);

        if(this.listEmpty()){
            //create node
            this.first = newNode;
            this.top = newNode;

        }else{
            // Pointer next the element end => newNode
            this.top.next = newNode;
            //Pointer end => new element
            this.top = newNode;
        }

        //increment size
        this.size++;

    }

    //show stacks
    show(){
        let aux = this.first;

        while(aux){

           console.log(aux.data1);
           aux = aux.next;
        }
    }


   


}

module.exports = Stack;
