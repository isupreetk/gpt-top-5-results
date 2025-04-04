
import OpenAI from "openai";

class Results {

  apiKeyBase:string;

  constructor(apiKeyBase: string) {
    console.log("apiKey received", apiKeyBase);

    this.apiKeyBase = apiKeyBase;
    console.log("apiKey set", this.apiKeyBase);

  }

async getSearchResults(searchQuery: string): Promise<string[]> {

  console.log("apiKey", this.apiKeyBase);

  const openai = new OpenAI({
    apiKey: this.apiKeyBase,
  });

const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query " + searchQuery +
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
  
export default Results;