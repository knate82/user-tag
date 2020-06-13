app.controller("commentController", $scope => {
  $scope.addComment = false;

  $scope.toggleCommentForm = () => {
    $scope.addComment = !$scope.addComment;
  };
});