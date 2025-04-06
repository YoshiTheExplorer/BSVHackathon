window.onload = function() {
    document.querySelector('button')?.addEventListener('click', function() {
      console.log("Getting auth token..");
      chrome.identity.getAuthToken({interactive: true}, function(token) {
        console.log(token);

        fetch("https://www.googleapis.com/youtube/v3/channels?part=snippet&mine=true", {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json"
            }
          })
            .then(response => response.json())
            .then(data => {
              console.log("YouTube Channel Info:", data);
              const handle = data.items?.[0]?.snippet?.customUrl;
              const title = data.items?.[0]?.snippet?.title;
              console.log("Handle / custom URL:", handle);
              console.log("Channel title:", title);
            })
            .catch(err => console.error("API error:", err));        
      });
    
      

    });
  };
  