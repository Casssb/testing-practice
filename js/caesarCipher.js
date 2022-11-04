const caesarCipher = (string) => {
  string = string.split('');
  string = string.map((char) => {
    let code = char.charCodeAt(0);

    if ((code > 64 && code < 78) || (code > 96 && code < 110)) code += 13;
    else if ((code > 77 && code < 91) || (code > 109 && code < 123)) code -= 13;

    return String.fromCharCode(code);
  });

  return string.join('');
};

console.log(caesarCipher('hello'));

export { caesarCipher };
