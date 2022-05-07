const round = (num, decimalPlaces) => {
  num = Math.round(num + 'e' + decimalPlaces);
  return Number(num + 'e' + -decimalPlaces);
};

const calculateEntropy = (password, length) => {
  let numbers = password.match(/([0-9])/) && 10;
  let uppercase = password.match(/[A-Z]/) && 26;
  let lowercase = password.match(/[a-z]/) && 26;
  let characters = password.match(/([!,%,&,@,#,$,^,*,?,_,~])/) && 32;
  let preciseEntropy = length * Math.log2(numbers + uppercase + lowercase + characters);
  return round(preciseEntropy, 2);
};

export default calculateEntropy;
