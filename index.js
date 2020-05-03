// Set the date we're counting down to
var countDownDate = new Date("May 2, 2020 09:00:00 PST").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("countDown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countDown").innerHTML = "Meeting in Progress";
  }
}, 1000);

// Fetch github avatar and save link to the member object
const fetchAvatar = async (github, i) => {
  const githubUsername = github.substring(github.lastIndexOf("/") + 1);
  const url = `https://api.github.com/users/${githubUsername}`;
  const user = await fetch(url).then((res) => res.json());
  return (members[i].avatar = user.avatar_url);
};

function loadMembers() {
  const ulList = members
    .map((member, i) => {
      if (!member.avatar) {
        fetchAvatar(member.github, i);
      }
      return `
        <li class="card">
          <img class="cardImage" src="${member.avatar}" alt="member">
          <a href="${member.github}" class="cardTitle">${member.name}</a>
          <p class="cardDescription">${member.description}<p>
          <p class="cardProject">Projects: ${member.projects}<p>
        </li>
    `;
    })
    .join("");
  document.getElementById("memberList").innerHTML = ulList;
}

function loadProjects() {
  // Default project image
  let image =
    "data:image/jpeg;base64,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";
  const ulList = projects
    .map((project) => {
      if (!project.projectLogo) {
        project.projectLogo = image;
      }
      return `
        <li class="card">
          <img class="cardImage" src="${project.projectLogo}" alt="project">
          <a href="${project.projectUrl}" class="cardTitle">${project.projectName}</a>
          <p class="cardDescription">${project.projectDescription}<p>
          <a href="${project.projectGithub}">GitHub</a>
          <p class="cardProject">Status: ${project.projectStatus}<p>
        </li>
    `;
    })
    .join("");
  document.getElementById("projectList").innerHTML = ulList;
}

function startJS() {
  loadMembers();
  loadProjects();
}
