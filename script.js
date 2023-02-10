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
let postsHTML = "";

posts.forEach((post) => {
  postsHTML += generatePostHTML(post);
});

feed.innerHTML = postsHTML;

function generatePostHTML({
  avatar,
  name,
  location,
  post,
  likes,
  username,
  comment,
}) {
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
      />
      <div class="post-container">
        <section class="interaction-bar">
          <img src="images/icon-heart.png" alt="Like button." />
          <img src="images/icon-comment.png" alt="Comment button." />
          <img src="images/icon-dm.png" alt="Direct message button." />
        </section>
        <p class="post-likes">${likes} likes</p>
        <p class="post-message"><span class="username">${username}</span> ${comment}</p>
      </div>
      </article>`;
}
