const { NlpManager } = require('node-nlp')
const fs = require('fs')
const rl = require('readline')
const clc = require('cli-color')

async function init(context) {
	const nlp = new NlpManager({ use: [ 'Basic', 'ConsoleConnector' ] })
  const botPrompt = `${clc.redBright("# (ƒ_bot) => 𝄢 ")}`

  nlp.addCorpus('./corpus.json')

  rl.createInterface({
    input: process.stdin,
    output: process.stout,
    terminal: false
  })
  function say(msg, rl) {
    rl.output.write(msg)
  }

say("ƒ_bot.status = " + clc.greenBright('active'))
	await nlp.train()
  rl.on('line', async line => {
    const result = await nlpManager.process(line);
    
  })


	const response = await nlp.process('sv', 'Hej, Användare! Vad kan jag göra för dig?')
	console.log(response);
}

init();
exports._f = init()