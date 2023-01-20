function pigLating(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  else {
    const textArray = text.split(" ");
    let newArray = [];
    for (let i = 0; i < textArray.length; i += 1) {
      const subElement = textArray[i].split("");
      //check if the first letter is a vowel
      if (subElement[0] === "a" || subElement[0] === "e" || subElement[0] === "i" || subElement[0] === "o" || subElement[0] === "u") {
        let subElement1 = subElement.join("");
        newArray.push(subElement1 + "way");
      }
      else if (subElement[0] === "q" && subElement[1] === "u") {
        subElement.shift();
        subElement.shift();
        let subElement1 = subElement.join("");
        newArray.push(subElement1 + "quay");
      }
      //first letter is consonant, second is vowel
      else if (subElement[1] === "a" || subElement[1] === "e" || subElement[1] === "i" || subElement[1] === "o" || subElement[1] === "u") {
        let fistLetter = subElement[0];
        subElement.shift();
        let subElement1 = subElement.join("");
        newArray.push(subElement1 + fistLetter + "ay");
      }
      //if first and second are consonants, and the third is vowel -> shift the first two letters to the end and add "ay"
      else if ((subElement[2] === "a" || subElement[2] === "e" || subElement[2] === "i" || subElement[2] === "o" || subElement[2] === "u")) {
        let fistLetter = subElement[0];
        let secondLetter = subElement[1];
        subElement.shift();
        subElement.shift();
        let subElement1 = subElement.join("");
        newArray.push(subElement1 + fistLetter + secondLetter + "ay");
      }
      //if first three are consonants -> shift the first three letters to the end and add "ay"
      else {
        let fistLetter = subElement[0];
        let secondLetter = subElement[1];
        let thirdLetter = subElement[2];
        subElement.shift();
        subElement.shift();
        subElement.shift();
        let subElement1 = subElement.join("");
        newArray.push(subElement1 + fistLetter + secondLetter + thirdLetter + "ay");
      }
    }
    let newArray1 = newArray.join(" ");
    const header = document.createElement("h3");
    header.append("This is your sentence translated into Pig Latin:");
    document.body.append(header);
    const paragraph = document.createElement("p");
    paragraph.append(newArray1);
    document.body.append(paragraph);
  }
}

//Interface Logic 
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = function (event) {
    event.preventDefault();
    let array = document.getElementById("input").value;
    let array1 = array.toString();
    pigLating(array1);
  }
}
