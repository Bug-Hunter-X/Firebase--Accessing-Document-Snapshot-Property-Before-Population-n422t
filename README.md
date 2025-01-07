# Firebase: Accessing Document Snapshot Property Before Population

This repository demonstrates a common error when using the Firebase SDK in JavaScript: attempting to access a property of a document snapshot before the snapshot has fully loaded from the server.  This leads to undefined values and potential application crashes.

## Problem

The `onSnapshot` listener might return an empty snapshot initially. If you directly try to access data fields within that snapshot, you'll get `undefined` instead of the expected data. This can lead to unpredictable behavior and errors in your application. 

## Solution

The solution is to check if the data exists within the snapshot before accessing it.  This can be done by checking if the relevant fields are defined.