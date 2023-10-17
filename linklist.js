//Linked List
//create a node
class node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(data){
        this.head = null;
    }

    add(data){
        let newNode = new node(data)
    }
}