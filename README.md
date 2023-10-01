# The Dad Joke Depot

Author: Jessi Velazquez

## About the Site

This is a website designed to be a one stop shop for all your Dad jokes! The site uses the [https://icanhazdadjoke.com/api](https://icanhazdadjoke.com/api) to fetch the jokes. The layout of components and their features are as follows:

#### Header
- This contains the logo and title of the site, as well as router links to Home, Search, and Random Joke.

#### Footer
- Contains the title of the site and links to social media sites.

#### Home
- The Home screen contains buttons that link to Search and Random Joke.

#### Search
- On this page, you can search for a joke.
- The jokes are displayed as cards, five at a time, with pagination to navigate through the pages if there are more than five jokes returned from the API.
- Clicking on a joke will take you to a dedicated page for that joke (Joke Details).

#### Random Joke
- This page will give you a random joke from the API. This behavior happens automatically when the page mounts, there is no CTA to get the joke, as simply navigating to this page signifies the intent to get a random joke.
- Clicking on a joke will take you to a dedicated page for that joke (Joke Details).

#### Joke Details
- Here you will see the joke printed out as text.
- There is a button to copy the joke to the clipboard.
- There is a button to navigate back.
- More features could be built out here as we gather more details about the jokes.

## Instructions to Run Locally

1. Make sure you have [git](https://git-scm.com/download/win), Node.js, and Node Package Manager (npm) installed on your machine. You can install both Node.js and npm [here](https://nodejs.org/en/download/). You can also run commands to install depending on your OS, for example if you use Homebrew on a Mac, you can run `brew install git`, etc. But going further into this is out of scope of this README.

1. Navigate to the Github Repository: [https://github.com/onX-Hiring/interview-project-web_Jessi-Velazquez](https://github.com/onX-Hiring/interview-project-web_Jessi-Velazquez) and clone the program repository by clicking 'Code' at this link and copying the proper Github repository url (SSH or HTTPS).

3. Using the command line, navigate to the location on your machine that you want to save the program, and run the following command: `git clone <repository_url>`.

4. Navigate to the /dad-jokes folder in the program directory (`cd dad-jokes`), and install dependencies by running the following command: `npm install`.

5. -- OPTIONAL -- Install the Vue VLI by running the command `npm install -g @vue/cli`.

6. Run the development server by running the command `npm run serve`.

7. Navigate to [http://localhost:8080/](http://localhost:8080/) in a web browser to see the site!


---------------------------------------------------------------------------------------


# Web Interview Project

Using any tools you prefer (Vue, React, Angular, plain ol JavaScript, CSS frameworks) let’s build a website. The website only needs to do a couple things. Primarily it is going to interact with https://icanhazdadjoke.com/api 

  * Be able to search for a joke
    * Pagination of joke search results would be nice, but not required. You might save this for last if you have time.
    * Gracefully handle the case where there are no search results

  * Be able to retrieve a random joke

  * Even though it is kind of silly, when you click a joke it should go to an individual joke page.
    * On that page you should be able to click a button to copy the joke to your clipboard.
    
  * There should be a page header and footer, with navigation to the search page, the random page, and any additional pages you feel like adding.

  * Although this is a very simple website, it should be nicely laid out and formatted. We aren’t going to judge your web design tastes, we are just looking for knowledge on how to layout the components of your site.
