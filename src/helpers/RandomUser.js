const adjectives = [
    "nice",
    "preety",
    "happy",
    "remarkable",
    "brilliant",    
    "beautiful",
    "charming",
    "magnificent",
    "graceful",
    "wonderful"
];

const nouns = [
    "flower",
    "sun",
    "moon",
    "moonlight",
    "sky",
    "forest",
    "lake",
    "mountain",
    "bird",
    "star"
];

export default function randomName() {
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const userName = adjective + noun;
    return userName;
}