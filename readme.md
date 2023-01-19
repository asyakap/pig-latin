# Pig Latin
#### By Asia Kaplanyan 

## Technologies Used

* _HTML_
* _CSS_
* JavaScript

## Description

_This webpage replaces text with its Pig Latin version._

## Setup/Installation Requirements

* _You need a web browser_


## Known Bugs

* _No known bugs_


## License

_If you run into a problem or in case you have any ideas or concerns please contact me._

Copyright (c) _01/19/2023_ _Asia Kaplanyan_

## Tests
Describe: pigLatin()

Test: "It should return nothing if a sentence is empty."
Code:
const text = "";
pigLatin(text);
Expected Output: 

Test: "It should return a word ending with way if a word starts with a vowel."
Code:
const text = "away";
pigLatin(text);
Expected Output: "awayway";

Test: "All the words starting with a vowel should have a "way" attached to the end."
Code:
const text = "away away";
pigLatin(text);
Expected Output: "awayway awayway";

Test: "If the word starts with a consonant it shouldn't end with "way", but still should be displayed."
Code:
const text = "away place away";
pigLatin(text);
Expected Output: "awayway place awayway";

Test: "If the first letter of the word is a consonant folowed by vowel, it should shift the first letter in the end and add "ay"."
Code:
const text = "pay";
pigLatin(text);
Expected Output: "aypay";

Test: "It should pass the previous test for multiple words in the sentence".
Code:
const text = "pay pay";
pigLatin(text);
Expected Output: "aypay aypay";


Test: "If the first and second letters of the word are consonants folowed by vowel, it should shift the first and the second letters in the end and add "ay"."
Code:
const text = "play";
pigLatin(text);
Expected Output: "ayplay";

Test: "It should pass the previous test for multiple words in the sentence".
Code:
const text = "play play";
pigLatin(text);
Expected Output: "ayplay ayplay";