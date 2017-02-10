# Call Me Maybe

A quick prototype for a research tool concept.

**NOTE**: The next iteration was done by @andrewmaier at [18f/call-me-maybe](https://github.com/18F/call-me-maybe)

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

### 18F Team Guidance

For 18F team members, we have guidance on how 18F puts this policy into practice, and how we handle the narrow situations where we may delay or withhold the release of source code.

**[18F's open source team practices.](https://github.com/18F/open-source-policy/blob/master/practice.md)**

### Credits

This policy was originally forked from the [Consumer Financial Protection Bureau's policy](https://github.com/cfpb/source-code-policy). Thanks also to [@benbalter](https://github.com/benbalter) for his [insights regarding CFPB's initial policy](http://ben.balter.com/2012/04/10/whats-missing-from-cfpbs-awesome-new-source-code-policy/).


### Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
