
// Code structure
// Statements are syntax constructs and commands that perform actions.

alert('Hello'); alert('World');

// Usually, statements are written on separate lines to make the code more readable:

alert('Hello');
alert('World');

/*
A semicolon may be omitted in most cases when a line break exists.

This would also work:
*/

alert('Hello')
alert('World')

// There are cases when a newline does not mean a semicolon. For example:

alert(3 +
1
+ 2);

// If you’re curious to see a concrete example of such an error, check this code out:

[1, 2].forEach(alert)

// Now, let’s add an alert before the code and not finish it with a semicolon:
// Now if we run the code, only the first alert is shown and then we have an error!

alert("There will be an error")

[1, 2].forEach(alert)

// But everything is fine again if we add a semicolon after alert:
// Now we have the “All fine now” message followed by 1 and 2.

// The error in the no-semicolon variant occurs because JavaScript does not assume a semicolon before square brackets [...].
alert("All fine now");

[1, 2].forEach(alert)

// So, because the semicolon is not auto-inserted, the code in the first example is treated as a single statement. Here’s how the engine sees it:
// But it should be two separate statements, not one. Such a merging in this case is just wrong, hence the error. This can happen in other situations.

alert("There will be an error")[1, 2].forEach(alert)

//
// Comment
//

// This comment occupies a line of its own
alert('Hello');

alert('World'); // This comment follows the statement

// Multiline comments start with a forward slash and an asterisk /* and end with an asterisk and a forward slash */.

/* An example with two messages.
This is a multiline comment.
*/
alert('Hello');
alert('World');

// Sometimes it can be handy to temporarily disable a part of code:

/* Commenting out the code
alert('Hello');
*/
alert('World');
























