app.controller("existingComments", ($scope, storageService) => {
  $scope.comments = storageService.getComments();
});