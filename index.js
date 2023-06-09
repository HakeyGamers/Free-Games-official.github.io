function nextPage() {
  var games = document.getElementsByClassName("game");
  var nextPageLink = document.getElementById("nextPageLink");
  var visibleGames = 0;

  for (var i = 0; i < games.length; i++) {
    if (games[i].style.display !== "none") {
      visibleGames++;
      if (visibleGames > 3) {
        games[i].style.display = "none";
      }
    }
  }

  if (visibleGames <= 3) {
    nextPageLink.style.display = "none";
  }
}
