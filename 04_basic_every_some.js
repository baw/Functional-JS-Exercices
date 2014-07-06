function checkUsersValid(allUsers) {
  return function(submittedUsers) {
    return submittedUsers.every(function (submittedUser) {
      return allUsers.some(function (user) {
        return user.id === submittedUser.id;
      });
    });
  };
}

module.exports = checkUsersValid;