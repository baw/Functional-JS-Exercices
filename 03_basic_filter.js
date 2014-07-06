function getShortMessages(messages) {
  var results = messages.filter(function(object) {
    return object.message.length < 50;
  });
  return results.map(function (object) {
    return object.message;
  });
}

module.exports = getShortMessages;