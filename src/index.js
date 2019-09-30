const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let litArr = [];
  let str = '';
  const MORSE_INSTRUCTION = {
    '10': '.',
    '11': '-',
    '00': ' ',
    '**': '*',
  };
  for (let i=0; i<(expr.length/10);) {
    litArr[i] = expr.slice(i*10, ++i*10);
    for (let k=0; k<litArr[i-1].length;) {
      for (let key in MORSE_INSTRUCTION){
        if (key == litArr[i-1].slice(k, k+2)) {
          str += MORSE_INSTRUCTION[key];
        };
      }
      k += 2;
    }
  }
  litArr = [];
  let answer = '';
  for ( let i=0; i<(str.length/5);) {
    litArr[i] = str.slice(i * 5, ++i * 5).trim();
    outer: for (let key in MORSE_TABLE) {
      if (litArr[i - 1] === key) {
        answer += MORSE_TABLE[key];
      } else if (litArr[i - 1] === '*****') {
        answer += ' ';
        break outer;
      }
    }
  }
  return answer;
}

module.exports = {
    decode
}