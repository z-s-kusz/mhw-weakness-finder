# What is this project?
1. An excuse to learn webpack and hosting React projects!
2. Eventually it will be a quick way to look up monster stats/rewards for MHW.
3. A chance to reacquaint myself with responsive web design.

# Using MHW Field Guide
* Spoiler warning! All monsters from the game are listed - if you want to discover each monster on your own don't use this app.
* Search for monsters by name, or search for parts sources. Search is case insensitive and goes by partial matches (good if you can't remember how to spell Jyuratodus!).
* Add new monsters, edit existing ones, or delete monsters from the edit page (not available in heroku live version).
* Check out some neat graphs made with recharts: https://github.com/recharts/recharts
* Click monster names to go to monster detail pages with all the info from in-game

# Installing / Developing
1. Download or Copy Project and navigate to project directory.
2. `npm install`
3. Serving static file: `npm start` will build a dist folder and start the server on port 5000. You can also manually build with `npm run build:dev` and start manually with `node app.js`.
4. navigate to localhost:5000 in your browser (not tested in anything but chrome - will likely only work in modern browsers)

# Current State of MHW Finder
* Wyvern types and location info will be added.
* Add 'No Results' Feedback on search.
* Add monster descriptions and useful hints from field guide.
* Add an about page.

# Live App's Updates
03/30/18 -
* Deviljho added with complete info.
04/09/18 -
* Monster detail pages! Click a monster name to see the monsters weakness spots and breakable parts with drop tables.
* Filled out more info from my researched monsters.
* Added charts page to the live version. (Because why not spend an hour fighting mobile responsive css for a feature not even I wanted?)
