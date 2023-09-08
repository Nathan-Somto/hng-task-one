const root = document.querySelector("#root");
class SlackInfo {
  constructor(username, imgUrl, track, githubUrl) {
    this.username = username;
    this.imgUrl = imgUrl;
    this.track = track;
    this.githubUrl = githubUrl;
  }
  getCurrentDay() {
    const day = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return day[new Date().getDay()];
  }
  getUtcMilliseconds() {
    // trick question.
    return new Date().getTime();
  }
  generateHtml() {
    const main = document.createElement("main");
    const h2 = document.createElement("h2");
    h2.innerText = this.username;
    h2.setAttribute("data-testid", "slackUserName");
    main.appendChild(h2);
    const img = document.createElement("img");
    img.src = this.imgUrl;
    img.alt = this.username;
    img.setAttribute("data-testid", "slackDisplayImage");
    main.appendChild(img);
    const p1 = document.createElement("p");
    p1.innerText = `Current day of the week: ${this.getCurrentDay()}`;
    p1.setAttribute("data-testid", "currentDayOfTheWeek");
    main.appendChild(p1);
    const p2 = document.createElement("p");
    p2.innerText = `Current UTC in milli seconds: ${this.getUtcMilliseconds()}`;
    p2.setAttribute("data-testid", "currentUTCTime");
    main.appendChild(p2);
    const p3 = document.createElement("p");
    p3.innerText = `Current Track: ${this.track}`;
    p3.setAttribute("data-testid", "myTrack");
    main.appendChild(p3);
    const a = document.createElement("a");
    a.innerText = "Github Link";
    a.href = this.githubUrl;
    a.setAttribute("data-testid", "githubURL");
    main.appendChild(a);
    root.appendChild(main);
  }
}
window.onload = function () {
  const slackInfo = new SlackInfo(
    "Somtochi Mkparu",
    "https://ca.slack-edge.com/T05FFAA91JP-U05R5R4JGKZ-9f366eaea959-512",
    "Frontend",
    "https://github.com/Nathan-Somto/hng-task-one"
  );
  slackInfo.generateHtml();
};
