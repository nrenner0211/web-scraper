# web-scraper

## Table of Contents

- [web-scraper](#web-scraper)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Tech Stack](#tech-stack)
  - [Installation](#installation)
    - [Clone Repository](#clone-repository)
    - [Install Dependencies](#install-dependencies)
    - [Start Application](#start-application)
    - [Configuration](#configuration)
  - [Links](#links)
  - [Contact 📩](#contact-)

## About

A simple web scraper that is currently configured to scrape articles and urls from [The Guardian](https://theguardian.com).

## Tech Stack

- JavaScript
- Node.js
- Express.js

## Installation

### Clone Repository

`git clone git@github.com:nrenner0211/web-scraper.git`

### Install Dependencies

All NPM packages required for this application are already listed as dependencies in the package.json file. Run the command `npm i` in your terminal at the root directory level to install the packages.

### Start Application

- Run the command `npm start` in your terminal.

### Configuration

- To scrape a new site, go to `index.js` and simply change the URL on `line 9`.
- You will then need to inspect the desired webpage with devTools to find an identifying class/id of the elements containing the data.
- Once you find what you're looking for, return to `index.js` and replace the className on line 18.
- Example of inspecting with devTools:
![Example](/example.png)

## Links

🔗 [Repository](https://github.com/nrenner0211/web-scraper)

## Contact 📩

[![Linkedin Badge](https://img.shields.io/badge/-nrenner0211-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/nicolette-renner/)](https://www.linkedin.com/in/nicolette-renner/)
[![GitHub Badge](https://img.shields.io/badge/-nrenner0211-7261A3?style=flat-square&logo=Github&logoColor=white&link=https://github.com/nrenner0211)](https://github.com/nrenner0211)
[![Gmail Badge](https://img.shields.io/badge/-nrenner0211@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:nrenner0211@gmail.com)](mailto:nrenner0211@gmail.com)
