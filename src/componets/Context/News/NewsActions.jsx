export const fetchNews = async (topic,date) => {
    try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=${date}&sortBy=publishedAt&apiKey=2c7444ef89764061a75b38e1e3ca3ec5`)
        const data = await response.json()
        // console.log(data);
        return data.articles


    } catch (error) {
        console.log("error occurred");

    }


}
