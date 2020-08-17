const birthDay = Date.parse("13 Sept 2000 00:47:00 CST");
setInterval(() => {
  let now = Date.now();
  let totalMs = now - birthDay;
  let totalSeconds = Math.floor(totalMs / 1000);
  let totalMinutes = Math.floor(totalSeconds / 60);
  let totalHours = Math.floor(totalMinutes / 60);
  let totalDays = Math.floor(totalHours / 24);
  let totalYears = Math.floor(totalDays / 365.25);
  document.getElementById("ageSpan").innerHTML =
    totalYears +
    " years " +
    Math.round(totalDays % 365.25) +
    " days " +
    (totalHours % 24) +
    " hours " +
    (totalMinutes % 60) +
    " minutes " +
    (totalSeconds % 60) +
    " seconds ";
}, 1000);

const today = Date.now();
const dyeDay = new Date(2014, 7, 20, 0, 0, 0, 0);
document.getElementById("tieDyeDays").innerHTML = Math.floor(
  (today - dyeDay) / (1000 * 60 * 60 * 24)
);

document.getElementById("soy").addEventListener("click", () => {
  alert(
    "Truth - I'm allergic to pretty much everything. They're all mild alleriges, and are just enough to be annoying."
  );
});
document.getElementById("poland").addEventListener("click", () => {
  alert(
    "Truth - I'm a proud genetic mutt. The full breakdown is 12.5% Polish, 12.5% German, 12.5% Bohemian, 12.5% English, and 50% Taiwanese."
  );
});
document.getElementById("diogenes").addEventListener("click", () => {
  alert(
    "Lie - Diogenes is the guy who lived in a barrel and gave Plato a plucked chicken. He's amazing, but not my #1. My favorite philosopher is Kant."
  );
});
