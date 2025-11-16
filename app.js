// // Dummy users
// const allUsers = [
//   { id: 1, name: "Ali Raza", bio: "Frontend Developer" },
//   { id: 2, name: "Sara Khan", bio: "UI/UX Designer" },
//   { id: 3, name: "Ahmed Malik", bio: "ReactJS Learner" },
//   { id: 4, name: "Fatima Noor", bio: "JavaScript Enthusiast" },
//   { id: 5, name: "Bilal Hussain", bio: "Full Stack Student" }
// ];

// // State arrays
// let suggestions = allUsers.slice(); // copy of allUsers
// let requests = [];                  // people you sent request to
// let friends = [];                   // accepted friends

// // DOM elements
// const suggestionList = document.getElementById("suggestion-list");
// const requestList = document.getElementById("request-list");
// const friendsList = document.getElementById("friends-list");

// // ---------- TAB SWITCHING (ALTERNATIVE) ----------
// const tabButtons = document.getElementsByClassName("tab-btn");
// const tabContents = document.getElementsByClassName("tab-content");

// for (let i = 0; i < tabButtons.length; i++) {
//   tabButtons[i].onclick = function () {
//     // which tab to open?
//     const target = this.getAttribute("data-tab"); // e.g. "suggestions"

//     // remove "active" from all buttons
//     for (let j = 0; j < tabButtons.length; j++) {
//       tabButtons[j].classList.remove("active");
//     }

//     // remove "active" from all tab contents
//     for (let k = 0; k < tabContents.length; k++) {
//       tabContents[k].classList.remove("active");
//     }

//     // add "active" to clicked button
//     this.classList.add("active");

//     // add "active" to correct tab content
//     const activeTab = document.getElementById(target);
//     activeTab.classList.add("active");
//   };
// }

// // ---------- RENDER FUNCTIONS ----------

// function renderSuggestions() {
//   suggestionList.innerHTML = "";

//   if (suggestions.length === 0) {
//     suggestionList.innerHTML = '<p class="empty">No more suggestions 😊</p>';
//     return;
//   }

//   for (let i = 0; i < suggestions.length; i++) {
//     const user = suggestions[i];

//     const card = document.createElement("div");
//     card.className = "card";

//     // no template string, simple string +
//     card.innerHTML =
//       '<div class="card-left">' +
//         '<div class="avatar">' + user.name.charAt(0) + '</div>' +
//         '<div class="card-info">' +
//           '<h3>' + user.name + '</h3>' +
//           '<p>' + user.bio + '</p>' +
//         '</div>' +
//       '</div>' +
//       '<button class="btn btn-primary" data-id="' + user.id + '">Add Friend</button>';

//     // alternative of card.querySelector("button")
//     const btn = card.getElementsByTagName("button")[0];

//     // alternative of addEventListener
//     btn.onclick = function () {
//       sendFriendRequest(user.id);
//     };

//     suggestionList.appendChild(card);
//   }
// }

// function renderRequests() {
//   requestList.innerHTML = "";

//   if (requests.length === 0) {
//     requestList.innerHTML = '<p class="empty">No pending friend requests.</p>';
//     return;
//   }

//   for (let i = 0; i < requests.length; i++) {
//     const user = requests[i];

//     const card = document.createElement("div");
//     card.className = "card";

//     card.innerHTML =
//       '<div class="card-left">' +
//         '<div class="avatar">' + user.name.charAt(0) + '</div>' +
//         '<div class="card-info">' +
//           '<h3>' + user.name + '</h3>' +
//           '<p>' + user.bio + '</p>' +
//         '</div>' +
//       '</div>' +
//       '<div>' +
//         '<button class="btn btn-primary btn-accept" data-id="' + user.id + '">Accept</button>' +
//         '<button class="btn btn-danger btn-reject" data-id="' + user.id + '">Reject</button>' +
//       '</div>';

//     // alternative of card.querySelector(".btn-accept / .btn-reject")
//     const buttons = card.getElementsByTagName("button");
//     const acceptBtn = buttons[0]; // first button
//     const rejectBtn = buttons[1]; // second button

//     acceptBtn.onclick = function () {
//       acceptRequest(user.id);
//     };

//     rejectBtn.onclick = function () {
//       rejectRequest(user.id);
//     };

//     requestList.appendChild(card);
//   }
// }

// function renderFriends() {
//   friendsList.innerHTML = "";

//   if (friends.length === 0) {
//     friendsList.innerHTML = '<p class="empty">You have no friends yet. Start sending requests! 😄</p>';
//     return;
//   }

//   for (let i = 0; i < friends.length; i++) {
//     const user = friends[i];

//     const card = document.createElement("div");
//     card.className = "card";

//     card.innerHTML =
//       '<div class="card-left">' +
//         '<div class="avatar">' + user.name.charAt(0) + '</div>' +
//         '<div class="card-info">' +
//           '<h3>' + user.name + '</h3>' +
//           '<p>' + user.bio + '</p>' +
//         '</div>' +
//       '</div>' +
//       '<span class="badge">Friend</span>';

//     friendsList.appendChild(card);
//   }
// }

// // ---------- LOGIC FUNCTIONS (simple loops instead of findIndex) ----------

// // send friend request
// function sendFriendRequest(userId) {
//   let index = -1;

//   for (let i = 0; i < suggestions.length; i++) {
//     if (suggestions[i].id === userId) {
//       index = i;
//       break;
//     }
//   }

//   if (index === -1) return;

//   const user = suggestions[index];

//   suggestions.splice(index, 1); // remove from suggestions
//   requests.push(user);          // add to requests

//   renderSuggestions();
//   renderRequests();
// }

// // accept friend request
// function acceptRequest(userId) {
//   let index = -1;

//   for (let i = 0; i < requests.length; i++) {
//     if (requests[i].id === userId) {
//       index = i;
//       break;
//     }
//   }

//   if (index === -1) return;

//   const user = requests[index];

//   requests.splice(index, 1); // remove from requests
//   friends.push(user);        // add to friends

//   renderRequests();
//   renderFriends();
// }

// // reject friend request
// function rejectRequest(userId) {
//   let index = -1;

//   for (let i = 0; i < requests.length; i++) {
//     if (requests[i].id === userId) {
//       index = i;
//       break;
//     }
//   }

//   if (index === -1) return;

//   requests.splice(index, 1); // just remove

//   renderRequests();
// }

// // ---------- INITIAL RENDER ----------
// renderSuggestions();
// renderRequests();
// renderFriends();
//


// dummy users 
const allUsers = [{id:1,name : 'Ali Raza',bio : 'Frontend developer'},
  {id : 2, name : 'Sara Kahn',bio:'UI/Ux Designer'},
  {id: 3, name : 'Ahmad Malik',bio : 'ReactJs Learner'},
  {id: 4, name : 'Fatima Noor', bio: 'Js developer'},
  {id :5, name : 'Bilal', bio : 'Full Stack developer'}
]
// state array 
// copy of all users
let suggestion = allUsers.slice(); 
console.log(suggestion)
// people sent request to 
let requests = [];
console.log(requests)
// accepted request 
let friends = [];
console.log(friends)

// DOM elements
const suggestionList = document.getElementById('suggestion-list');
const requestList = document.getElementById('request-list');
const friendsList = document.getElementById('friends-list');

// tab switching alternative
const tabButtons = document.getElementsByClassName('tab-btn');
const tabContents = document.getElementsByClassName('tab-content');

for(let i = 0; i < tabButtons.length;i++){
  console.log(tabButtons[i].onclick = function(){
    // which tab to open 
    const target = this.getAttribute('data-tab');
  //  remove active 
  for(let j = 0 ; j < tabButtons.length;j++){
    tabButtons[j].classList.remove('active')
  }
  // remove active from all the content
  for(let k = 0; k < tabContents.length;k++){
    tabContents[k].classList.remove('active')
  }
  // add active to click button 
  this.classList.add('active')
  // add active to correct tab content 
  const activeTab = document.getElementById(target);
  activeTab.classList.add('active')
  })
}

// render function 
function renderSuggestions (){
  suggestionList.innerHTML = '';
  if(suggestion.length === 0){
    suggestionList.innerHTML = '<p class="empty">No more suggestions</p>';
    return;
  }
  for(let i = 0 ; i < suggestion.length;i++){
    const user = suggestion[i];
    console.log(user)
  }
}