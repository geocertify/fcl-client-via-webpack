# fcl-client-via-webpack
For the Flow blockchain, this example uses **webpack** to bundle the client-side FCL with its dependencies.  It includes a simple node.js server.

To run this example, clone the repository, then from the root directory:
```
npm install  // install dependencies locally (webpack and @onflow/fcl)
npm run build  // run webpack to build the fcl_client bundle
npm run start  // start the node.js server on localhost:5000
```
Then navigate to localhost:5000 in a browser.

FCL is the Flow Client Library used to access the Flow blockchain.  FCL depends on node.js builtin modules, including *http*, *https*, and *url*, and their dependencies.  All these resources must be bundled and delivered to the client.

This example uses **webpack** (latest) to build a bundle that can be loaded by a <script> tag in a simple HTML page (index.html).

The script included in the bundle accesses the Flow test-net and executes a one-line *cadence* script.
  
Other Resources:
  
  - svelte:  https://github.com/bluesign/fcl-svelte-rollup
  - vue/nuxt:  https://codesandbox.io/s/menta-8ug6l?file=/plugins/fcl.client.js
  - react/cra: https://github.com/onflow/kitty-items
  
