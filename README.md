# What is this project?
1. An excuse to learn webpack and hosting React projects!
2. Eventually it will be a quick way to look up monster stats/rewards for MHW.

# Using MHW Field Giude
* Search for monsters by name, or search for parts sources. Type your search and click enter. Search is case insensitive and goes by partial matches (good if you cant rememember how to spell Xeno'jiva!).
* Add new monsters, edit existing ones, or delete monsters from the edit page.
* ...and thats about it for now - might add in more of the field guide sections later.

# Installing / Developing
1. Download or Copy Project and navigate to project directory.
2. `npm install`
3. Serving static file: `npm start` will build a dist folder and start the server on port 5000. You can also manually build with `npm run build` and start manully with `node app.js`.
4. navigate to localhost:5000 in your browser (not tested in anything but chrome - will likely only work in modern browsers)

# Current State of MHW Finder
* Styling is in a very bad placeholder state.
* Breakable parts section of field guide will not be added for quite a while, while I get what is here looking better.
