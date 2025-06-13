const sentence = 1234567790;
const str = sentence.toString();

if (str.length === 10) {
  let isUnique = true;

  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== i) {
      isUnique = false;
      break;
    }
  }

  if (isUnique) {
    console.log("Valid: 10 digits and all digits are unique.");
  } else {
    console.log("Invalid: Digits are not unique.");
  }
} else {
  console.log("Invalid: Not exactly 10 digits.");
}
