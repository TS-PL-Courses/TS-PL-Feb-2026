function countLetterCases(input: string): { uppercase: number; lowercase: number } {
    let uppercase = 0;
    let lowercase = 0;

    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (char >= 'A' && char <= 'Z') {
            uppercase++;
        } else if (char >= 'a' && char <= 'z') {
            lowercase++;
        }
    }

    return { uppercase, lowercase };
}

const result = countLetterCases("Hello World");
console.log(`Number of uppercase characters: ${result.uppercase}`);
console.log(`Number of lowercase characters: ${result.lowercase}`);
