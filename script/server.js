const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const port = 3000;

// Define a route to handle search requests
app.get('/search', async (req, res) => {
  const { query } = req.query;

  try {
    // Send a request to the target website's search endpoint
    const response = await axios.get(`https://www.cdnfonts.com/search?q=${query}`);

    // Extract relevant information from the response using Cheerio
    const $ = cheerio.load(response.data);

    // Process the search results
    const results = [];

    $('.font-card').each((index, element) => {
      const fontName = $(element).find('.font-name').text().trim();
      const fontUrl = $(element).find('.download a').attr('href');

      // Add the font name and download link to the results
      results.push({ name: fontName, url: fontUrl });
    });

    // Return the processed results as JSON
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
