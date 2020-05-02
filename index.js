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

function loadMembers() {
  // var ulList = "";
  // for (var i = 0; i < members.length; i++) {
  //   ulList = ulList.concat("<li><a href=\"" + members[i].github + "\">" + members[i].name + "</a></li>");
  // }
  // ulList.replace(" ", "/");
  console.log(members);
  const ulList = members
    .map(
      (member) =>
        `
        <li class="memberCard">
          <img class="cardImage" src="${member.avatar}" alt="member">
          <a href="${member.github}" class="cardTitle">${member.name}</a>
          <p class="cardDescription">${member.description}<p>
          <p class="cardProject">${member.project}<p>
        </li>
    `
    )
    .join("");
  document.getElementById("memberList").innerHTML = ulList;
}

function loadProjects() {
  var ulList = "";
  for (var i = 0; i < projects.length; i++) {
    ulList = ulList.concat(
      '<li><a href="' +
        projects[i].projectUrl +
        '">' +
        projects[i].projectName +
        "</a></li>"
    );
  }
  ulList.replace(" ", "/");
  document.getElementById("projectList").innerHTML = ulList;
}

function startJS() {
  loadMembers();
  loadProjects();
}
