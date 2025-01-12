#! /usr/bin/env node
import yargs from 'yargs';

const usage = "load all dependencies of yours!!!";

const options = yargs(process.argv)
      .usage(usage)
      .option("l", {
        alias:"languages",
        describe: "List all supported languages.",
        type: "boolean",
        demandOption: false
      })
      .help(true)
      .argv;



console.log(options);
console.log('adsfasdf')
