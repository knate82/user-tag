app.controller("newComments", ($scope, storageService) => {
  let taggedUsers = [];
  $scope.showUserSelection = false;
  $scope.users;

  document.addEventListener("keydown", e => {
    if (e.key === "@") {
      $scope.users = storageService.getAllUsers();
      $scope.showUserSelection = true;
    }
  });

  $scope.tagUser = function (user) {
    taggedUsers.push(user);
    $scope.showUserSelection = false;
  };
});