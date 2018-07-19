const p = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};


let Helper = (str, temp, result,count) => {
  if(temp.length === str.length){
    return result.push(temp.slice(0).join(''));
  }

  for(let i=0; i<p[str[count]].length; i++){
    temp.push(p[str[count]][i]);
    Helper(str, temp, result, count+1);
    temp.pop();
  }
}
let phoneFunc = (str) => {
  let result =[];
  Helper(str, [], result,0);
  return result
}

phoneFunc("223")