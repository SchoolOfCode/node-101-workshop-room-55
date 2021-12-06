

  //console.log(myCollection);

//function describeItem () {
  //let myName = myCollection[1].name
  //let count = myCollection[1].count
  //let like = myCollection[1].whatILike
  //if (count === 1) {
    //console.log('I have a ' + myName + " ," + like)
  //}
  //else
  //console.log('I have a ' + count + myName + like);
//}
//describeItem();



  /*👉 2c. Create a function called `describeItem`, which should take in an item as a parameter 
  (the argument handed to this function would be an item from our collection). 
  The function should `console.log` a message according to how many of the item you have.

If there's only one of the item in your collection, it should log "I have a `name`. 
Here's what I like about it: `whatILike`". If you have more than one of it, 
the message should log "I have `count` `name`s. Here's what I like about them: `whatILike`".

Plan
Write an if statement so if count = 1 print out myName and what I like
but if count = 2 print out count, myName and what I like

For example, the result of calling the `describeItem` function with the first item in our collection would be:
_"I have a School of Code mug. Here's what I like about it: It has my cute pixel character on it!"_

Call your function below where you've defined it, handing in the first item in `myCollection`.

Now run the file again (using `node index.js`); */

  
/*👉 2d. Now make a function called `describeCollection` 
that takes in an array as a parameter. 
The function should loop through the array, and for each item, 
it should call the `describeItem` function so it displays a message 
according to how many you have in your collection.

Plan
Write a for loop to go through each index in the array in myCollection

Call your function below where you've defined it, handing in the `myCollection` array.

Run the file again to see the output and check that it outputs the correct message 
for each item in your collection (i.e. each object in your `myCollection` array). */


/*function describeCollection() {

  for (let i = 0; i < myCollection.length; i++)
{
  let myName = myCollection[i].name
  let count = myCollection[i].count
  let like = myCollection[i].whatILike
  if (count === 1) {
    console.log('I have a ' + myName + " ," + like)
  }
  else
  console.log('I have a ' + count + myName + like);
}
}

describeCollection(); */


/*## Part 3: Exporting and importing

Now let's neaten things up by moving the `myCollection` array to its own file. 
With Node's power to export and import, everything doesn't have to all be in one file, 
which makes for cleaner, more readable code.

👉 3a. Create a new file in the same folder called `collection.js`. 
Cut and paste your `myCollection` array from `index.js` to collection.js instead.

_Note: Only move the `myCollection` variable! Keep the functions in `index.js`._ */




import myCollection from "./collection.js"; 
console.log(myCollection)



/*👉 3c. Now import `myCollection` at the top of `index.js`. You should be able to then call your function 
just as you did in part 1, but this time using `myCollection` imported from its separate file.

Use Node to run the `index.js` file again just to check that your console.logs are still 
coming through correctly! */