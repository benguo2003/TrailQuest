import { OPENAI_API_KEY } from '@env';

export const runPrompt = async (gear, range) => {
    const prompt = `I have the following hiking gear: ${gear}
My range is ${range} miles from Los Angeles, CA.

Please suggest 3 real hiking trails near Los Angeles that are suited for my gear and within my range.
Then make a creative quest name that encapsulates finishing these 3 trails.

Respond ONLY with valid JSON in this exact format, no other text:
{"quest":"Quest Name Here","trails":[{"name":"Trail Name","description":"A short 1-sentence description","lat":34.0,"lon":-118.0},{"name":"Trail Name 2","description":"A short 1-sentence description","lat":34.0,"lon":-118.0},{"name":"Trail Name 3","description":"A short 1-sentence description","lat":34.0,"lon":-118.0}]}`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a helpful hiking trail assistant. Always respond with valid JSON only."
        },
        {
          role: "user",
          content: prompt
        }
      ]
    })
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.log('OpenAI error:', response.status, errorBody);
    throw new Error(`HTTP error! status: ${response.status} - ${errorBody}`);
  }

  const data = await response.json();
  const answer = data['choices'][0]['message']['content'];
  const parsed = JSON.parse(answer);

  // Build the quest_list in the format the app expects:
  // [questName, trail1, trail2, trail3, desc1, lat1, lon1, desc2, lat2, lon2, desc3, lat3, lon3]
  const quest_list = [parsed.quest];
  for (const trail of parsed.trails) {
    quest_list.push(trail.name);
  }
  for (const trail of parsed.trails) {
    quest_list.push(trail.description);
    quest_list.push(trail.lat);
    quest_list.push(trail.lon);
  }

  return quest_list;
};

export default runPrompt;
