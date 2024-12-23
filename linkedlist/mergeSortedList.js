 const LL = require('./linkedlist')

const sL1 = new LL()
const sL2 = new LL();

for (let x of [1, 3, 5, 7, 9]) {
    sL1.append(x);
}

for (let x of [2, 4, 8, 10, 12]) {
    sL2.append(x);
}

function mergedListSorted(l1, l2) {
    if (!l1) return l2
    if (!l2) return l1

    let current1 = l1.head
    let current2 = l2.head
    const newNode = new LL()
    while (current1 && current2) {
        if (current1.value < current2.value) {
            newNode.append(current1.value)
            current1 = current1.next
        } else {
            newNode.append(current2.value)
            current2 = current2.next
        }
    }

    while (current1) {
        newNode.append(current1.value)
        current1 = current1.next
    }
    while (current2) {
        newNode.append(current2.value)
        current2 = current2.next
    }

    sL1.head = newNode.head
}
sL1.print()
sL2.print()
mergedListSorted(sL1, sL2)
sL1.print()



