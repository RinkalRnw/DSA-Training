class node{
    constructor(data){
        this.data = data
        this.next = null;
    }
}

class linklist{
    constructor(){
        this.head =null
    }
    insertAtHeadList(val){
        let n = new node(val)
        let t = this.head

        if(t == null){
            this.head = n
        }
        else {
            n.next = t
            this.head = n
        }
    }
    displayLinkList(){
        let current = this.head
        while (current) {
            console.log(current.data)
            current = current.next
        }
    }
}


let obj = new linklist()
obj.insertAtHeadList(10);
obj.insertAtHeadList(14);
obj.insertAtHeadList(100);
obj.displayLinkList();

