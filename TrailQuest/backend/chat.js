import { OPENAI_API_KEY } from '@env';

export const runPrompt = async (trails, gear) => {
    const prompt = `These are my gear: ${gear}\nThis is a list of trails: ${trails}\n
                    Please choose the best 3 trails from my list that are best suited for my gear.\n
                    Then make a creative name that encapsulates a quest of finishing these 3 trails.\n
                    I have very specific requirements for the output. Make sure the output is in the following format:\n
                    I only want one single line of output, in the following format:\n
                    "Name_of_Quest: Trail_1, Trail_2, Trail_3". Make sure the name of the\n
                    quest has no underscores or commas, but have spaces between words and each word is a real English word.\n
                    In addition, please make sure each trail is separated by a comma, has no underscores in their names,\n
                    and do not give any additional output beyond what I have requested. Please also don't label anything extra,\n
                    just provide the output in the format I have requested. Please don't have ANY content that isn't part of the format that was specified.\n
                    Lastly, do not include the double quotes as part of the output, they are just there to show you the format.`;
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant."
        },
        {
          role: "user",
          content: prompt
        }
      ]
    })
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  const answer = data['choices'][0]['message']['content'];
  const [questName, three_trails] = answer.split(': ');
  const trailNames = three_trails.split(', ');
  const final_result = [questName, ...trailNames];

  return final_result;
};

export default runPrompt;