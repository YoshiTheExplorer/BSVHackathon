chrome.action.onClicked.addListener(function() {
    console.log("event triggered!");
    chrome.tabs.create({url: 'youtubeAuth.html'});
  });
  