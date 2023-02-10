const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const feed = document.getElementById("feed");

renderFeed();

function renderFeed() {
  let postsHTML = "";

  posts.forEach((post, index) => {
    postsHTML += generatePostHTML(index, post);
  });

  feed.innerHTML = postsHTML;
}

function like(id) {
  posts[id].likes++;
  const likesHTML = document.getElementById(id + "-likes");
  likesHTML.textContent = `${posts[id].likes} likes`;
}

function generatePostHTML(
  id,
  { avatar, name, location, post, likes, username, comment }
) {
  return `<article class="post">
      <div class="post-container">
        <section class="user-bar">
          <img
            src="${avatar}"
            alt="Avatar of ${name}"
            class="avatar"
          />
          <div class="user-info">
            <p class="fullname">${name}</p>
            <p class="location">${location}</p>
          </div>
        </section>
      </div>
      <img
        src="${post}"
        alt="Portrait drawn by ${name}"
        class="post-img"
        ondblclick="like(${id})"
      />
      <div class="post-container">
        <section class="interaction-bar">
          <button class="interaction-btn"" onClick="like(${id})"><img src="images/icon-heart.png" alt="Like button." class="interaction-icon" /></button>
          <button class="interaction-btn""><img src="images/icon-comment.png" alt="Comment button." class="interaction-icon"/></button>
          <button class="interaction-btn""><img src="images/icon-dm.png" alt="Direct message button." class="interaction-icon" /></button>
        </section>
        <p class="post-likes" id="${id}-likes">${likes} likes</p>
        <p class="post-message"><span class="username">${username}</span> ${comment}</p>
      </div>
      </article>`;
}
