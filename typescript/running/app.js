var userName;
var userInput;
userInput = false;
// userInput = 123
if (typeof userInput === 'string') {
    userName = userInput;
}
else {
    generateError('error occurs', 400);
}
function generateError(message, code) {
    throw { message: message, code: code };
}
