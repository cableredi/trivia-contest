# Trivia Contest

## Test your trivia knowlege with this Trivia Quiz

## Prerequisites

This project uses [NodeJS](http://nodejs.org) and [NPM](https://npmjs.com). To confirm if locally installed, enter into the terminal
```shell
 node --version
 npm --version
 ```
If not locally installed, you will need to install these via [Homebrew](https://brew.sh/) (recommended) or check the links below for alternative download and install methods.

#### Homebrew Install

- Install Homebrew via the link above (if you do not have it already)
- Run `brew install node` to install both NodeJS and NPM

#### Homebrew Alternative Install

- [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [NodeJS](https://nodejs.org/en/download/)

### Project Setup & Installation

1. Open the terminal and in the desired directory, and clone this repo to your local machine using the Git CLI.
```shell
 git clone https://github.com/cableredi/trivia-contest.git
 ```
2. Once cloned, navigate to the directory
```shell
 cd trivia-contest
```
  and pull down the node modules inside the client subdirectory
  ```shell
  npm install
  ```
3. Once all developer dependencies are downloaded, you are ready to get started. To start the ReactJS development server,
```shell
npm run start
```
4. Visit locally running copy of the ReactJS project at `http://localhost:3000` (or as indicated in the terminal)

## Trivia Questions

You can use the given trivia questions or create your own!

To create you own:  Update the STORE.js file located in the src directory.  Use the following format to create our own questions and answers:
```shell
export const STORE = [
  {
    question: "Question 1",
    incorrect: ["Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
    correct: "Correct Answer",
  },
  {
    question: "Question 2",
    incorrect: ["Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
    correct: "Correct Answer",
  },
];
```


