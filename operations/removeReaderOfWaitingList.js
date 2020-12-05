// this file contains the logic to remove reader of the waiting list
// which happens when the reader gets to borrow the book he was waiting for

// exports function that calls a function passing waiting list and reader id
module.exports = removeReaderOfWaitingList = (queue, readerId) => {
	removeFromQueue(queue, readerId);
}

// adds element at the back of the queue
function removeFromQueue(queue, readerId) {
	// loop though waiting list
	for(let i= 0; i < queue.length; i++) {
		// if there's a match, removes readerId from waiting list
		if(queue[i] === readerId) {
			queue.splice(i, 1);
		}	
	}
}
