let userInput: unknown; // more restritive than any type
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {}
}

const result = generateError('An error ocurred!', 500);
console.log(result);
