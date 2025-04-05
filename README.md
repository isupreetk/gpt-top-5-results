# Integrates ChatGPT to get top 5 matching movie results

### Set up OpenAI GPT

- Login into platform.openai.com, create a new API key.

### Sample Usage

```
import Results from "@isupreetk/gpt-top-5-results";

new Results("YOUR_API_KEY")
.getSearchResults("bollywood")
.then((movieList) =>  console.log(movieList));
```

