const readline = require('readline');
const Node = require('./node');
const ListSimple = require('./listas');


// const lr = readline.createInterface({
//     input:process.stdin,
//     output: process.stdout
// })

// lr.question('Digite el dato\n', (data)=>{
//     console.log(data);
//     lr.close();
//     })

// function runStart(node){

//     console.log(`Values in nodes`);
//     console.log(`Data1 -Data2 => Pointer`);
//     console.log(``);
//     while(node != null){
//         // console.log(`${JSON.stringify(node)} - ${node.data1} - ${node.data2}=> ${node.next}`);
//         //console.log(`${node.data1} - ${node.data2} => ${JSON.stringify(node.next)}`);

//         //if (node.next === null){ return null }else {console.log( Object.values(node.next))} 

//         console.log(`${node.data1} - ${node.data2} => ${node.next  }`);
//         node = node.next;
//     }
// }

//Create instancies the class Node()

// const node4 = new Nodo("Manuel", 1123);
// const node3 = new Nodo("Esteban", 3344,node4);
// const node2 = new Nodo("Oscar", 456, node3);
// const node1 = new Nodo("Esteban", 123,node2);

//Execute runStart()

//runStart(node1);


//Create  Instance the class ListSimple() 

const list = new ListSimple();

list.insertStart(3);
list.insertStart(2);
list.insertStart(1);
//list.insertStart(3.14); 

list.insertEnd('Hello');



list.insert(2022, 1 );

list.show();



console.log('elements in list: ', list.size ,'\n');
console.log('end element',list.end, '\n');

console.log('--------------------DELETE---------------------')

list.delete();

list.show();

console.log('elements in list: ', list.size ,'\n');
console.log('end element',list.end, '\n');


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
