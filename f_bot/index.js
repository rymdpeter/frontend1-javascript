const { NlpManager } = require('node-nlp')
const fs = require('fs')
const rl = require('readline')
const clc = require('cli-color')

async function init(context) {
	const nlp = new NlpManager({ use: [ 'Basic', 'ConsoleConnector' ] })
  const botPrompt = `${clc.redBright("(ƒ_bot) => : ")}`

  nlp.addCorpus('./corpus.json')

  rl.createInterface({
    input: process.stdin,
    output: process.stout,
    terminal: false
  })
  function say(msg) {
    output.line(msg)
  }

say("ƒ_bot.status = " + clc.greenBright('active'))
	await nlp.train()
  rl.on('line', async line => {
    
  })


	const response = await nlp.process('sv', 'Hej, Användare! Vad kan jag hjälpa dig med?')
	console.log(response);
}

init();
