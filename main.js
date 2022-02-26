const Node = require('./node');
const ListSimple = require('./listas');
const Stack = require('./stack');
const prompt = require('prompt-sync')();


/*
simply linked list
*/

//Create  Instance the class ListSimple() 

// const list = new ListSimple();

// list.insertStart(3);
// list.insertStart(2);
// list.insertStart(1);
// // //list.insertStart(3.14); 

// // list.insertEnd('Hello');



// // list.insert(2022, 1 );

// list.show();



// console.log('elements in list: ', list.size ,'\n');
// console.log('start element',list.start, '\n');
// console.log('end element',list.end, '\n');

// console.log('--------------------DELETE---------------------')

// list.delete(7);

// list.show();

// console.log('elements in list: ', list.size ,'\n');
// console.log('start element',list.start, '\n');
// console.log('end element',list.end, '\n');


// console.log('--------------DELETE START-----------------');
// list.deleteStart();

// console.log('elements in list: ', list.size ,'\n');

// list.show();

// console.log('end element',list.end, '\n');

// console.log('------------DETELE END-------------------');

// list.deleteEnd();
// console.log('elements in list: ', list.size ,'\n');

// list.show();

// console.log('end element',list.end, '\n');


/*
Stacks
*/

const undoStack = new Stack();
const redoStack = new Stack();

undoStack.push('typing text');
undoStack.push('Insert jump');
undoStack.push('typing title');

/*Menu*/

while(true){

    // console.clear();
    console.log('\n-Actions stored in Stack: \n');
    undoStack.show();
    console.log('\n-Action to be removed when running undo:\n', undoStack.peek());
    
    console.log(`\nMenu:\n 1. Entered new action\n 2. Undo (ctrl + z)\n 3. Redo (ctrl + y)\n 4. Show stack  \n 5. Exit `);

   
    let option = prompt('Type option: ');

    if(option == 1){
        const actionNew = prompt('Typing action for add in stack: ');
        undoStack.push(actionNew);
        
    }
    
    if(option == 2){
        
        redoStack.push(undoStack.peek());
        undoStack.pop();
    }

    if(option == 3){
        
        undoStack.push(redoStack.peek());
        
    }

    if(option == 4){
        
        console.log('** Elements in stack: \n');
        undoStack.show();
        
    }
    
    

    if (option == 5){
        break;
    }


    //validar cuando no haya más que hacer va a tirar un error al deshacer
    
}

