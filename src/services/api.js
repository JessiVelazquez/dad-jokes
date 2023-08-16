import axios from 'axios';

const BASE_URL = 'https://icanhazdadjoke.com';

export const searchDadJokes = async (term) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      headers: {
        'Accept': 'application/json'
      },
      params: {
        term: term
      }
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Error fetching jokes");
    }

  } catch (error) {
    console.error("An error occurred: ", error);
    return { results: [] };
  }
};

export const getRandomJoke = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Error fetching a random joke");
    }

  } catch (error) {
    console.error("An error occurred:", error);
    return null;
  }
};

export const getJokeById = async (jokeId) => {
  try {
    const response = await axios.get(`${BASE_URL}/j/${jokeId}`, {
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Error fetching the joke");
    }

  } catch (error) {
    console.error("An error occurred:", error);
    return null;
  }
};

