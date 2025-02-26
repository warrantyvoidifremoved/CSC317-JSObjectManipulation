const sculptureList = require('./data.js'); // Import data.js

/**
 * Creates a new sculptureLengths object that stores the length of each piece
 * of data about a sculpture: name, artist, description, url, and alt.
 *
 * @constructor
 * @param {string} name - The sculpture's name.
 * @param {string} artist - The artist's name.
 * @param {string} description - A textual description of the sculpture.
 * @param {string} url - A URL pointing to an image of the sculpture.
 * @param {string} alt - Alternative text describing the sculpture's image.
 * 
 * @property {number} name - The length of the sculpture's name.
 * @property {number} artist - The length of the artist's name.
 * @property {number} description - The length of the sculpture's description.
 * @property {number} url - The length of the URL string.
 * @property {number} alt - The length of the alt text.
 */
function SculptureLengths(name, artist, description, url, alt) {
    this.name = typeof name === 'string' ? name.length : 0;
    this.artist = typeof artist === 'string' ? artist.length : 0;
    this.description = typeof description === 'string' ? description.length : 0;
    this.url = typeof url === 'string' ? url.length : 0;
    this.alt = typeof alt === 'string' ? alt.length : 0;
}

const sculptureListLengths = [];

for (let i = 0; i < sculptureList.length; i++) {
    // Extract the values from the current object.
    let { name, artist, description, url, alt } = sculptureList[i];
    // Populate with a sculptureLength object of the current sculpture object's values.
    sculptureListLengths.push(new SculptureLengths(name, artist, description, url, alt));
}

for (let sculpture of sculptureListLengths) {
    console.log(sculpture);
}