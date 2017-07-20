// var myObject = {
//   name: "Simon",
//   dob: "31/02/2003",
//   country: "Antigua",
//   numberOfFriends: 5
// };
//
// console.log(myObject.name);

//print out Hannah, DOB, country, all posts),
//text within post, number of likes

// var post2 = ["Hi", "4 likes"]
// var posts = ["Posts", "post1", post2, "post3", "post4"];
// var hannah = ["Hannah", "DOB", "Password", "Country", posts];
// var users = [hannah, "Julz", "Ludmila", "Oggie", "Jonathan"];
//
// console.log("user name is: " + users[0][0]);
// console.log("user DOB is: " + users[0][1]);
// console.log("user country is: " + users[0][3]);
// console.log("text in post 2 is: " + users[0][4][2][0]);
// console.log("number of likes is: " + users[0][4][2][1]);

var user1post1 = {
  text: "Simon is snowboarding",
  likes: 3
};

var user2post2 = {
  text: "Oggie is making me write too much",
  likes: 0
};

var user1 = {
  name: "Julia",
  dob: "31/02/2003",
  country: "Antigua",
  password: "Password1",
  numberOfFriends: 5,
  posts: [user1post1]
};

var user2 = {
  name: "Oggie",
  dob: "31/4/2010",
  country: "Iceland",
  password: "Password2",
  numberOfFriends: 7,
  posts: [user2post2]
};

var users = [user1, user2];
var userIndex = 0;
var postsIndex = 0;

while(userIndex < users.length) {
  var currentUser = users[userIndex];
  if(currentUser.name === "Oggie") {
    console.log(currentUser.name);
    console.log(currentUser.dob);
    console.log(currentUser.country);

    var usersPosts = currentUser.posts;
    while(postsIndex < usersPosts.length) {
      var currentPost = usersPosts[postsIndex];
      console.log("user posts are " + currentPost.text + " and likes are " + currentPost.likes);
      postsIndex++;
    }
  }
  userIndex++;

}


//
// console.log("user name is " + user.name);
// console.log("user DOB is " + user.dob);
// console.log("user country is " + user.country);

// while(index < user.posts.length) {
//   console.log("user posts are " + user.posts[index].text + " and likes are " + user.posts[index].likes);
//   index++;
// }
