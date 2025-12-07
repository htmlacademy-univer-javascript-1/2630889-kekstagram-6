const checkString = function(string, length){
  if(string.length <= length){
    return true;
  }
  else{
    return false;
  }
};

checkString('vueirvveuir', 20);
checkString('vueirvveuir', 9);

const checkPalindrom = function(string){
  const stringRev = string.trim().split('').reverse().join('');
  if(string.trim() === stringRev){
    return true;
  }
  else{
    return false;
  }
};

checkPalindrom('    топот        ');
checkPalindrom('топор');
