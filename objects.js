const bottel = {
    name: 'Lalaman Water',
    size: 1,
    cold: true
}

for (const val in bottel) {
    console.log(bottel);
}

for (const [key, value] of Object.entries(bottel)) {
    console.log(key, value);
}