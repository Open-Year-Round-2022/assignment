
function makeStory(profile, nickname) {
  let story = document.createElement('div');
  story.setAttribute('class', 'story');

  story.innerHTML = `
  <div class="left-story">
  <img class="story-template" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Instagram_Stories_ring.svg/168px-Instagram_Stories_ring.svg.png?20201201230920">
  <img class="story-profile" src=${profile}><div class="story-nickname">${nickname}</div>
  </div>
  `;
  console.log(story);

  return story;
}

function addStories() {

  for (let i = 0; i < storyList.length; i++) {
    let story = makeStory(storyList[i].profile, storyList[i].nickname);
    let parent = document.getElementById('story-container');

    parent.appendChild(story);
  }
}

addStories();