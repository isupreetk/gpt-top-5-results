
import OpenAI from "openai";

class Results {

async getSearchResults(searchQuery: string): Promise<string[]> {

  console.log("apiKey", process.env.OPENAI_KEY);

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY,
  });

const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query " + searchQuery
      ". Only give me comma separated names of 5 movies like the example result given ahead. Example Result: Venom, Moana 2, Despicable Me 2, Drishyam";

      console.log("gptQuery", gptQuery);
      
    // Make an API call to OPENAI and get movie results
    const gptData = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-4o-mini",
    });

    const gptMoviesList = gptData.choices?.[0]?.message?.content.split(", ");
    console.log("gptMoviesList", gptMoviesList);
    return gptMoviesList;
  }
}

interface Results {
  getSearchResults(searchQuery: string): Promise<string[]> 
};
  
export default Results;