# PERN Collections Game

https://gfycat.com/naughtydarlingiceblueredtopzebra
![Collections Gif](https://thumbs.gfycat.com/NaughtyDarlingIceblueredtopzebra-size_restricted.gif)

PERN Collections Game was originally designed to be a collecting game where players can login and collect different types of mythical creatures. On top of that, they will be able to trade and use their creatures to earn more gold, the in-game currency.

The initial use-case for this application was to provide a generation engine for more complete placeholder data. While REST APIs that provide dummy data currently exist, the aim of this application is to provide JSON data along with images that are dynamically generated based on the descriptions of the JSON data. E.g. { type: person, color: blue, pattern: striped, build: short } would produce an image of a skinny blue person wearing a striped shirt, or... a smurf.

### Introduction

PERN Collections Game is a fullstack application built using: PostgreSql as the database, node.js and express for the backend, and React for the frontend.

Todo:

- [x] Sync backend and frontend timeout generation function
- [x] Provide login and signup functionality
- [x] Provide account validation functionality
- [ ] Check session signature does not already exist in local storage
- [ ] Improve UI and design
- [ ] Refactor accountLogoutController to a service if necessary
- [ ] Refactor client for async/await instead of .then() chaining
- [ ] Link Accounts with Dragons created
