//Given the string "team number 2", transform and return the string in camelCase
let str = "team number 2"

function camelCase(str) {
  let camelCasedStr = "";
  let capNext = false;
  for (let i = 0; i < str.length; i++) {

    if (str[i] == " ") {
      capNext = true;
    } else {
      if (capNext) {
        camelCasedStr += str[i].toUpperCase()
        capNext = false;
      } else {
        camelCasedStr += str[i]
      }

    }
  }
  camelCasedStr[0] = camelCasedStr[0].toLowerCase()
  return camelCasedStr;
}
