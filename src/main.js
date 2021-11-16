import _join from 'lodash/join';
import * as fcl from '@onflow/fcl';

async function hello_from_flow(){
	fcl.config().put("accessNode.api", "https://access-testnet.onflow.org");
	let msg = await fcl.query({
		cadence: `pub fun main(): String { return "Hello from Flow!"; }`
	});
	return msg;
}

async function make_div() {
  const div = document.createElement('div');
  let htm = _join(["<p>Something from ", ' lodash (just for fun)!</p>'], ' ');
  let msg = await hello_from_flow();
  htm += `<p>${ msg }</p>`;
  div.innerHTML = htm;
  document.body.appendChild( div );
}

make_div();
