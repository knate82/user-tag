app.controller("commentController", $scope => {
  $scope.addComment = false;
  $scope.users = [{
      'userID': 1,
      'name': 'Kevin'
    },
    {
      'userID': 2,
      'name': 'Jeff'
    },
    {
      'userID': 3,
      'name': 'Bryan'
    },
    {
      'userID': 4,
      'name': 'Gabbey'
    }
  ];

  $scope.comments = [{
    message: "This task was assigned to Bryan",
    timeStamp: "2020/04/03"
  }];

  $scope.showUserSelection = false;

  document.addEventListener("keydown", e => {
    if (e.key === "@") {
      $scope.showUserSelection = true;
    }
  });

  $scope.tagUser = function (user) {
    taggedUsers.push(user);
    $scope.showUserSelection = false;
  };

  $scope.toggleCommentForm = () => {
    const newComment = document.getElementById("newComment");
    if ($scope.addComment && newComment.value !== "") {
      newComment.value = "";
    }
    if ($scope.showUserSelection) {
      $scope.showUserSelection = false;
    }
    $scope.addComment = !$scope.addComment;
  };
});