export const fetchQuotes = async () => {

    try {
        const Qresponse = await fetch("https://quotable.io/random")
        const Qdata = await Qresponse.json()
        return Qdata

    } catch (error) {
        console.log("error!!!");

    }
}

// fetchQuotes()