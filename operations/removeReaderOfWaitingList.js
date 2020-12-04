
module.exports = removeReaderOfWaitingList = (queue, readerId) => {
	removeFromQueue(queue, readerId);
}

// adds element at the back of the queue
function removeFromQueue(queue, readerId) {

	for(let i= 0; i < queue.length; i++) {
		if(queue[i] === readerId) {
			queue.splice(i, 1);
		}	
	}
}
