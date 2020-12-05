// this file contains the logic for add a reader to the waiting list

// exports function that calls a function that receives waiting list and string with reader id
module.exports = addReaderToWaitingList = (queue, readerId) => {
	addToQueue(queue, readerId);
}

// fucntion that adds element at the back of the queue
function addToQueue(queue, readerId) {
	// last position on the queue will be the same as the length of the queue
	let currLength = queue.length;
	// add readerId in the last position of the queue
	queue[currLength] = readerId;
}
