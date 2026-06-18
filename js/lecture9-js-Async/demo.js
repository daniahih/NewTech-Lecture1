function loginUser(callback) {
  setTimeout(() => {
    console.log("User logged in");
    callback();
  }, 1000);
}

function loadUserProfile(callback) {
  setTimeout(() => {
    console.log("User profile loaded");
    callback();
  }, 1000);
}

function loadUserPosts(callback) {
  setTimeout(() => {
    console.log("User posts loaded");
    callback();
  }, 1000);
}

function loadUserNotifications(callback) {
  setTimeout(() => {
    console.log("User notifications loaded");
    callback();
  }, 1000);
}

function loadUserMessages(callback) {
  setTimeout(() => {
    console.log("User messages loaded");
    callback();
  }, 1000);
}

function loadUserSettings(callback) {
  setTimeout(() => {
    console.log("User settings loaded");
    callback();
  }, 1000);
}

function loadUserDashboard(callback) {
  setTimeout(() => {
    console.log("User dashboard loaded");
    callback();
  }, 1000);
}

function loadUserFeed(callback) {
  setTimeout(() => {
    console.log("User feed loaded");
    callback();
  }, 1000);
}

function loadUserSidebar(callback) {
  setTimeout(() => {
    console.log("User sidebar loaded");
    callback();
  }, 1000);
}

function loadUserRecommendations(callback) {
  setTimeout(() => {
    console.log("User recommendations loaded");
    callback();
  }, 1000);
}

function loadUserActivity(callback) {
  setTimeout(() => {
    console.log("User activity loaded");
    callback();
  }, 1000);
}

function loadUserStats(callback) {
  setTimeout(() => {
    console.log("User stats loaded");
    callback();
  }, 1000);
}

function finishSetup(callback) {
  setTimeout(() => {
    console.log("All user data is ready");
    callback();
  }, 1000);
}

loginUser(() => {
  loadUserProfile(() => {
    loadUserPosts(() => {
      loadUserNotifications(() => {
        loadUserMessages(() => {
          loadUserSettings(() => {
            loadUserDashboard(() => {
              loadUserFeed(() => {
                loadUserSidebar(() => {
                  loadUserRecommendations(() => {
                    loadUserActivity(() => {
                      loadUserStats(() => {
                        finishSetup(() => {
                          console.log("Callback hell is hard to maintain");
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
