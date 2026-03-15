function calculate(qaName: string, numberOfFunctionalities: number, time: number = 2) {
    const totalTime: number = numberOfFunctionalities * time;
    return `The QA ${qaName} will need ${totalTime} hours to complete ${numberOfFunctionalities} project/s.`
}

console.log(calculate("Pesho", 5));