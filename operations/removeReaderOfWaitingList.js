
module.exports = removeReaderOfWaitingList = (queue, readerId) => {
	removeFromQueue(queue, readerId);
}

// adds element at the back of the queue
function removeFromQueue(queue, readerId) {

	// last position on the queue will be the same as the length of the queue
	let lastIndex = queue.length;
	// remove readerId in the last position of the queue
	queue.splice(queue[lastIndex], 1);
}
