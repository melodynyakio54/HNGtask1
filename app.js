// Get the current date and extract the day of the week
const currentDate = new Date();
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDay = daysOfWeek[currentDate.getDay()];

// Find the <p> element with the data-testid attribute "currentDayOfTheWeek"
const currentDayElement = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);

// Set the text content of the <p> element to the current day of the week
if (currentDayElement) {
  currentDayElement.textContent = currentDay;
}

// Set placeholders for missing data attributes
const slackNameElement = document.querySelector(
  '[data-testid="slackUserName"]'
);
if (slackNameElement) {
  slackNameElement.textContent = "MelodyGichini"; //Slack name
}

// Set a placeholder image for the Slack profile picture
const slackImageElement = document.querySelector(
  '[data-testid="slackDisplayImage"]'
);
if (slackImageElement) {
  slackImageElement.src = "melodyimage.jpg"; // Slack profile picture URL
  slackImageElement.alt = "Melody Gichini";
}

// Set a placeholder for the track
const trackElement = document.querySelector('[data-testid="myTrack"]');
if (trackElement) {
  trackElement.textContent = "Frontend"; //my track
}

// Set a placeholder for the GitHub URL
const githubURLElement = document.querySelector('[data-testid="githubURL"]');
if (githubURLElement) {
  githubURLElement.href = "https://github.com/melodynyakio54/HNGtask1"; // github url
}
