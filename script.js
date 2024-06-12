function analyzeSentence(sentence) {
    let lengthCounter = 0;
    let wordCounter = 0;
    let vowelCounter = 0;
    let inWord = false;

    const vowels = 'aeiouAEIOU';
    
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        if (char === '.') {
            if (inWord) {
                wordCounter++;
            }
            break;
        }

        lengthCounter++;

        if (char === ' ') {
            if (inWord) {
                wordCounter++;
                inWord = false;
            }
        } else {
            if (!inWord) {
                inWord = true;
            }
            if (vowels.includes(char)) {
                vowelCounter++;
            }
        }
    }

    console.log("Length of the sentence:", lengthCounter);
    console.log("Number of words:", wordCounter);
    console.log("Number of vowels:", vowelCounter);
}

// Example usage:
const sentence = prompt("Enter a sentence ending with a period:");
analyzeSentence(sentence);


