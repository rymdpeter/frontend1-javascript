const { NlpManager } = require('node-nlp')
const fs = require('fs')
const readline = require('readline')
const clc = require('cli-color')

async function init(context, rl) {
	const nlp = new NlpManager({ use: [ 'Basic', 'ConsoleConnector' ] })
  const botPrompt = `${clc.redBright("#(ƒ_bot) => 𝄢 ")}`

  nlp.addCorpus(__dirname + '/corpus.f_bot.json')
  nlp.addAction()

  // const rl = readline.createInterface({
  //   input: process.stdin,
  //   output: process.stout,
  //   terminal: false
  // })
  function say(msg) {
    rl.write(msg + "\n")
  }

say("ƒ_bot.status = " + clc.greenBright('active'))
	await nlp.train()
  
      
      rl.on('line', async line => {
        const result = await nlp.process(line);
        console.debug(result)
      })
      rl.prompt()
    
  
  

	// const response = await nlp.process('sv', 'Hej, Användare! Vad kan jag göra för dig?')
	//console.log(response);
}

init();
exports.init = init