async function fetchWithError(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve('Success')
            } else {
                reject('Something went wrong!')
            }
        }, 1500)
    })
}

async function callFetchWithError() {
    try {
        console.log(await fetchWithError())
    } catch (error) {
        console.log(error)
    }
}

callFetchWithError()