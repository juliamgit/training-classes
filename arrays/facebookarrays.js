//print out Hannah, DOB, country, third post (position 2),
//text within post, number of likes

var post2 = ["Hi", "4 likes"]
var posts = ["Posts", "post1", post2, "post3", "post4"];
var hannah = ["Hannah", "DOB", "Password", "Country", posts];
var users = [hannah, "Julz", "Ludmila", "Oggie", "Jonathan"];

console.log("user name is: " + users[0][0]);
console.log("user DOB is: " + users[0][1]);
console.log("user country is: " + users[0][3]);
console.log("text in post 2 is: " + users[0][4][2][0]);
console.log("number of likes is: " + users[0][4][2][1]);
