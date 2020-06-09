#! /usr/bin/env node

const program = require('commander');
const download = require('download-git-repo')
const chalk = require('chalk')
const ora = require('ora')

const spinner = ora(chalk.yellow('Downloading template ...'))

program.version('1.0.0', '-v, --version')
    .command('init <projectName>')
    .action((projectName) => {
    	if(!projectName) {
			chalk.red('tcy-cli init <projectName>, projectName is required')
			return
    	}
        spinner.start()
        download('github:tianzhu1992/blocks-admin-vue', projectName,  (err) => {
        	spinner.succeed()
            console.log(err ? chalk.red('Something Wrong In Download Template') : chalk.green('Download Template Success'))
        })
    })
program.parse(process.argv);
