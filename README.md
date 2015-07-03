# Call Me Maybe

A quick prototype for a research tool concept.

## Demo

[Here is an example of a page with the embedded script](https://jeremiak.github.io/call-me-maybe/demo.html) and the [resulting data store aka Google Doc](https://docs.google.com/spreadsheets/d/1uov31VpYtkCzLF0eFz6FVdC7y-JjcrX0sWTWE0ZunD8/edit#gid=1073603305).

## Installing/Developing

Quick steps for getting the project running locally:

`$ git clone git@github.com:jeremiak/call-me-maybe.git`

`$ cd call-me-maybe`

`$ bundle install && npm install`

`$ npm start`

### Notes
The Jekyll app serves as a way to build embed codes. The actual embed related code lives in `/js` with the primary file being `index.js`, which is turned into `bundle.js` by `browserify`.