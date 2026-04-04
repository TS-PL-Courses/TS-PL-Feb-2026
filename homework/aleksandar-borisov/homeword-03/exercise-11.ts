/**
 * Prints a message expressing love for a programming language and the reason why.
 * @param {string} programmingLanguage - The programming language to compliment
 * @param {string} compliment - The reason for loving the language
 * @returns {void}
 */
function loveProgrammingLanguage(programmingLanguage: string, compliment: string): void {
    console.log(`I love ${programmingLanguage} because ${compliment}`);
}

console.log(loveProgrammingLanguage("TypeScript", "it adds type safety to JavaScript"));
console.log(loveProgrammingLanguage("Python", "it has clean and readable syntax"));
console.log(loveProgrammingLanguage("Rust", "it is blazingly fast and memory safe"));
