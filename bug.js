The Firebase SDK may throw an error if you try to access a property of a document snapshot before the snapshot has been fully populated. This can happen if you're trying to access data from a query snapshot before the query has completed or if you're trying to access data from a document snapshot before the document has been loaded from the server.