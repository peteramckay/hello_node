# Hello, Node: A Web Server

A minimal Node.js webserver using vanilla http. Great as a starting point or a sanity check that your environment is set up correctly. Open source under MIT license.

## Prerequisites

You'll need **Node.js** and **npm** installed. The recommended approaches:

**Option 1 — Official installer (simplest)**
Download the LTS release directly from the canonical [Node.js website](https://nodejs.org/en/download) maintained by the OpenJS Foundation and the Node developer community.

**Option 2 — nvm (recommended for developers)**
[nvm](https://github.com/nvm-sh/nvm) lets you manage multiple Node versions easily:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install --lts
```

**Option 3 — NodeSource (Ubuntu/Debian)**

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Verify your installation with:

```bash
node -v
npm -v
```

## Running the server

Clone the repo, then start the server:

```bash
node hello_node.js
```

You should see:

```
Server running at http://127.0.0.1:1337/
```

Open that URL in your browser (or `curl http://127.0.0.1:1337/`) and you'll get a friendly greeting back.

You can also use the npm start script:

```bash
npm start
```

## Configuration

The host and port can be overridden with environment variables:

```bash
PORT=3000 node hello_node.js
```

## About This Project

This started as a bare-bones experiment with Node's built-in `http` module — no frameworks, no dependencies. It's intentionally simple. The code uses the `url` module as a foundation for parsing request URLs, which is a natural next step if you want to add routing.

For a more full-featured starting point, take a look at [Express](https://expressjs.com/).
