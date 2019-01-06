# Connect

An open source aggregator for web based services like whatsapp (multiple accounts), telegram, slack, google calendar, google keep, evernote, etc

## Setup

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/master-atul/connect
# Go into the repository
cd connect
# Install dependencies
npm install
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## To Run

- **npm run start** : Opens the development webpack dev server on localhost:7654 and opens it in browser for development
- **npm run build** : Runs the webpack production bundle build and saves the bundle in dist folder.
- **npm run electron:dev** : Runs electron and loads the localhost:7654 (dev app) url.
- **npm run electron:prod** : Runs electron and loads the minified bundled app (prod app) from dist folder.

**For development:**

Run `npm run start` and in another terminal run `npm run electron:dev`

**For checking prod build:**

Run `npm run build` and in another terminal run `npm run electron:prod`

**For bundling**

_coming soon_

## License

[MIT](LICENSE.md)
