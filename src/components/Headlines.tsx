import React from "react";

const Headlines = (): JSX.Element => {
   const [headlines, setHeadlines] = React.useState([]);

   React.useEffect(() => {
      const getHeadlinesData = () => {
         fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=fe35c73a2fba43ae8248863d965393b5")
            .then((response) => response.json())
            .then((data) => {
               const articles = data.articles;

               setHeadlines(articles)
            });
      };
      getHeadlinesData();
   }, []);

   console.log(headlines)

   return (
      <>
         {headlines.map((item, index)=> {
            return(
               <div key={index}>
                  <img src={`${item.urlToImage}`} alt=""/>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p>{item.publishedAt}</p>
               </div>
         
            )
         })}
      </>
   )
};

export default Headlines;
