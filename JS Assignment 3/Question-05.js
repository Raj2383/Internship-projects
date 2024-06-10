// Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.


function replaceWrongWithCorrect(sentence, wrong, correct) {
    const correctedSentence = sentence.replace(wrong,correct);
    return correctedSentence;
   }  
   const inputSentence = "I love JavaScript, but sometims I make mistakes.";
   const wrongWord = "sometims";
   const correctWord = "sometimes";
   const correctedSentence = replaceWrongWithCorrect(inputSentence, wrongWord, correctWord);
   console.log(correctedSentence);
   
   
   // Output:-  I love JavaScript, but sometimes I make mistakes.
   