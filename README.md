# What is this project?
1. An excuse to learn webpack and hosting React projects!
2. Eventually it will be a quick way to look up monster stats for MHW

# Installing / Developing
1. Download or Copy Project and navigate to project directory.
2. `npm install`
3. Serve via 1 of 2 methods:
* Serving static file: `npm run build`, wait for webpack to build a dist folder, `npm start`, navigate browser to localhost:5000
* Serving with live-reload via webpack: `npm run start:dev`, navigate browser to localhost:5000

"webpack-dev-server" is being very annoying. Anytime you modify dependencies (adding or removing packages) it deletes webpack-dev-server files from node_modules and makes the start:dev script fail. I will look into this and fix it later but a current workaround is to delete your node_modules folder and run `npm install` again after making your changes.

# Current State of MHW Finder
* Searchbar hasn't been programmed yet and won't do anything.
* Styling is in a placeholder state.
