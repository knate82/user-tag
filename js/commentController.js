app.controller("commentController", ($scope) => {
  /**
   * Items for the UserTag component
   */
  $scope.showUserSelection = false;
  $scope.isTagging = false;
  $scope.taggedUsers = [];
  $scope.userListBox = document.getElementById('userList');
  $scope.messageBox = document.getElementById('newComment');

  document.addEventListener("keydown", e => {
    if (e.key === "@") {
      $scope.showUserSelection = true;
      $scope.isTagging = true;
    } else if ($scope.isTagging && e.key === "Backspace") {
      if ($scope.messageBox.value.endsWith('@')) {
        $scope.showUserSelection = false;
        $scope.isTagging = false;
      }
    }
  });

  $scope.tagUser = function (user) {
    let message = document.getElementById("newComment").value;
    let comment = `${message}${user.name}`;
    document.getElementById("newComment").value = comment;
    $scope.taggedUsers.push(user);
    $scope.showUserSelection = false;
    document.getElementById("newComment").focus();
  };

  /**
   * Items for Demo purposes
   */
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
    },
    {
      'userID': 5,
      'name': 'Jefferson'
    },
    {
      'userID': 6,
      'name': 'Jason'
    }
  ];

  $scope.comments = [{
    message: "This task was assigned to Bryan",
    timestamp: "2020/04/03 11:00 AM"
  }];

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

  $scope.formatAMPM = function (date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  $scope.createTimestamp = function () {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    let time = $scope.formatAMPM(today);
    return `${yyyy}/${mm}/${dd} ${time}`;
  };

  $scope.submit = function () {
    if (messageBox.value === "") {
      return;
    }
    let timestamp = $scope.createTimestamp();
    let comment = {
      message: messageBox.value,
      timestamp: timestamp,
      taggedUsers: $scope.taggedUsers
    };
    $scope.comments.push(comment);
    $scope.taggedUsers = [];
    messageBox.value = "";
    console.log(timestamp);
  };
});