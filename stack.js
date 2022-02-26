const Node = require('./node');


class Stack{
    constructor(){
        this.first = null;
        this.top = null;
        this.size = 0;
    }


    listEmpty(){
        return this.top == null;
    }

    Size(){
        return this.size;
    }

    peek(){
        return this.top.data1;
    }

    push(data){
        let newNode = new Node(data);

        if(this.listEmpty()){
            this.first = newNode;
            this.top = newNode;

        }else{
            // Pointer next the element end => newNode
            this.top.next = newNode;
            //Pointer end => new element
            this.top = newNode;
        }

        this.size++;

    }

    pop(){
        if(this.listEmpty()){
            console.log('error you cant´n delete an element in an empty list');
        }else if(this.first == this.top){
            this.first = null;
            this.top = null;
            this.size--;
        }else{
            //Delete end element in list
            let aux = this.first;
            while(aux.next != this.top){
                aux = aux.next;
                
            }

            aux.next = this.top.next;
            this.top = aux;
            this.size--;
        }
    }

    show(){
        let aux = this.first;

        while(aux){

           console.log(aux.data1);
           aux = aux.next;
        }
    }


}

module.exports = Stack;
