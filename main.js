//Esteban Potes Rua

const Node = require('./node');
const Stack = require('./stack');


const stack1 = new Stack();
const stack2 = new Stack();
const stack3 =  new Stack();

//fill stack 1

stack1.push(42);
stack1.push(50);
stack1.push(67);
stack1.push(12);
stack1.push(28);

//fill stack 2

stack2.push(33);
stack2.push(50);
stack2.push(42);
stack2.push(68);
stack2.push(28);


// print stack 1

console.log('Elements stack 1');
stack1.show();

console.log('Elements stack 2')
stack2.show();


 //symmetrical difference the two stacks


 function symmetricalDifference(s1, s2){

    //validate if exist un node and not is null
    while(s1.first){
        //pointer the first node the one stack  => first the next
        s1.first = s1.first.next;
        //pointer the first node the second stack => first the next
        s2.first = s2.first.next;

        //validate if exists node
        if(s1.first){
            //compare values the two stacks id diferente then insert in stack 3
            if(s1.first.data1 != s2.first.data1 ){
                stack3.push(s1.first.data1);
                stack3.push(s2.first.data1);
            }
        }
       
    }

}
//call and send stack to calc diference
symmetricalDifference(stack1, stack2);

//show Symmetrical Difference
console.log('Elements stack 3')
stack3.show();












    


