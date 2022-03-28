
function makeFriend(profile, nickname, state) {
  let friend = document.createElement('div');
  friend.setAttribute('class', 'friend');

  friend.innerHTML = `
  <div class="friend">
  <img class="friend-profile" src=${profile}>
  <div class="friend-info">
  <div class="friend-nickname">${nickname}</div>
  <div class="friend-state"> ${state}</div>
  </div>
  <a class="friend-follow">팔로우</a>
  </div>
  `;


  return friend;
}

function addFriends() {

  for (let i = 0; i < friendList.length; i++) {
    let friend = makeFriend(friendList[i].profile, friendList[i].nickname, friendList[i].state);
    let parent = document.getElementById('friend-for-you-container');

    parent.appendChild(friend);
  }
}

addFriends();