const smokingFee = 600;
const Insurance = 36744;
const abceed = 2700;
const tapple = 4950;
const amazon = 600;
const spotify = 990;
const foodsExpence = 20000;
const docomo = 8030;
const Ymobile = 4500;
const OwnMoney = 13500;
const Salary = 210000 + OwnMoney;

console.log(
  Salary -
    caclulate(smokingFee) -
    Insurance -
    abceed -
    tapple -
    amazon -
    spotify -
    foodsExpence -
    docomo -
    Ymobile -
    OwnMoney
);

function caclulate(smokingFee) {
  return smokingFee * 31;
}
