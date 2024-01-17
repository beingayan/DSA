/* 
----------- Indexes -------------
# Basic operation  (#1)
# Searching LinkedList start  (#2)
# Detecting loop in linked list start (#3)
# Reverse Linked list start (#5)

*/



// LinkedList basic operation Start #1

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            return;
        }
        let lastNode = this.head;
        while (lastNode.next) {
            lastNode = lastNode.next;
        }
        lastNode.next = newNode;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    delete(value) {
        if (this.isEmpty()) {
            return;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }
        let currentNode = this.head;
        while (currentNode.next && currentNode.next.value !== value) {
            currentNode = currentNode.next;
        }
        if (currentNode.next) {
            currentNode.next = currentNode.next.next;
        }
    }

    display() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.value + " -> ");
            currentNode = currentNode.next;
        }
        console.log("null");
    }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.prepend(0);
linkedList.display();

linkedList.delete(2);
linkedList.display();

// LinkedList basic operation End

/************************************************************************************************************

                Searching LinkedList start  (#2)

 ************************************************************************************************************/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function searchLinkedList(head, targetValue) {
    let current = head;

    while (current !== null) {
        if (current.data === targetValue) {
            return true; // Value found
        }

        current = current.next;
    }

    return false; // Value not found
}

// Example usage:
const myList = new Node(1);
myList.next = new Node(2);
myList.next.next = new Node(3);
myList.next.next.next = new Node(4);

const targetValue = 3;

if (searchLinkedList(myList, targetValue)) {
    console.log(`Value ${targetValue} found in the linked list.`);
} else {
    console.log(`Value ${targetValue} not found in the linked list.`);
}

// Searching LinkedList End

/************************************************************************************************************

           Detecting loop in linked list start (#3)

************************************************************************************************************/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function detectLoop(head) {
    const hashSet = new Set(); // Hash set to store visited nodes

    let current = head;

    while (current !== null) {
        // If the current node is already in the hash set, a loop is detected
        if (hashSet.has(current)) {
            return true;
        }

        // Add the current node to the hash set
        hashSet.add(current);

        // Move to the next node
        current = current.next;
    }

    // If the loop completes without returning true, there is no loop
    return false;
}

// Example with a loop
const headWithLoop = new Node(1);
headWithLoop.next = new Node(2);
headWithLoop.next.next = new Node(3);
headWithLoop.next.next.next = new Node(4);
headWithLoop.next.next.next.next = headWithLoop.next; // Creating a loop

console.log("Does the linked list have a loop?", detectLoop(headWithLoop));

// Example without a loop
const headWithoutLoop = new Node(1);
headWithoutLoop.next = new Node(2);
headWithoutLoop.next.next = new Node(3);
headWithoutLoop.next.next.next = new Node(4);

console.log("Does the linked list have a loop?", detectLoop(headWithoutLoop));

// Detecting loop in linked list End

/************************************************************************************************************

                  Reverse Linked list start (#5)

************************************************************************************************************/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    let next = null;

    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev; // 'prev' is now the new head of the reversed linked list
}

// Example usage:
const originalList = new Node(1);
originalList.next = new Node(2);
originalList.next.next = new Node(3);
originalList.next.next.next = new Node(4);
originalList.next.next.next.next = new Node(5);

const reversedList = reverseLinkedList(originalList);

// Print the reversed linked list
let current = reversedList;
while (current !== null) {
    console.log(current.data);
    current = current.next;
}


// Reverse Linked list End


// ************************************************************************************************************//

