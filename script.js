const facts = [
    "Hiking can help improve your mood and reduce stress.",
    "The longest hiking trail in the world is the Sentiero Italia, which is over 6,000 kilometers long.",
    "The first national park in the world was Yellowstone, established in 1872.",
    "Hiking can burn up to 500 calories per hour, depending on the intensity.",
    "There are over 400 national parks in the United States."
];

document.getElementById('generate-btn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').textContent = facts[randomIndex];
});
