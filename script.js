async function detectLanguage() {
  const text = document.getElementById("text").value.trim();
  const result = document.getElementById("result");

  

  result.innerText = "Detecting...";

  const apiKey = "ed7dd947906014ff734214a2145d40e9";

  try {
    const response = await fetch("https://ws.detectlanguage.com/0.2/detect", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + apiKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ q: text })
    });

    const data = await response.json();
    if (data && data.data && data.data.detections.length > 0) {
      const lang = data.data.detections[0].language.toUpperCase();
      result.innerText = "Detected Language: " + lang;
    } else {
      result.innerText = "Could not detect the language.";
    }
  } catch (error) {
    console.error(error);
    result.innerText = "Error: API request failed.";
  }
}
