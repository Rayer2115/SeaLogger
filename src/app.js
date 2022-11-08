import * as fs from "fs"
import moment from "moment"
import chalk from "chalk"
import EventEmitter from "events"

const time = moment().format("[[]DD-MM-YYYY HH:mm:ss[]]")

const throwError = (message) => {
    throw new Error(message)
}

class Logger extends EventEmitter {
    constructor(path, console) {
        super()

        this.path = path
        this.console = console

        if(!fs.existsSync(path))
            fs.mkdirSync(path, {
                recursive: true
            })
        
        process.on(`exit`, () => {
            fs.renameSync(`${this.path}/latest.log`, `${this.path}/${moment().format("[]DD-MM-YYYY-HH-mm-ss[]")}.log`, () => {
                this.console.log(chalk.grey(time), chalk.bgMagenta(`Saved log file in ${this.path}`))
            })
        })

        process.on(`SIGINT`, () => {
            process.exit()
        })

        process.on(`SIGQUIT`, () => {
            process.exit()
        })

        process.on(`SIGOUT`, () => {
            process.exit()
        })
    }

    log(message) {
        if (!message) 
            throwError(`You must set some message to log`)
        
        this.console.log(chalk.gray(time), chalk.bgGray.bold(` LOG `), message)

        fs.appendFile(`${this.path}/latest.log`, `${time} LOG ${message}\n`, (err) => {
            if (err)
                throwError(err)
        })
    }

    error(message) {
        if (!message) 
            throwError(`You must set some message to log`)
        
        this.console.log(chalk.gray(time), chalk.bgRedBright.bold(` ERROR `), message)

        fs.appendFile(`${this.path}/latest.log`, `${time} ERROR ${message}\n`, (err) => {
            if (err)
                throwError(err)
        })

        this.emit(`error`, {
            message: message
        })
    }

    info(message) {
        if (!message) 
            throwError(`You must set some message to log`)
        
        this.console.log(chalk.gray(time), chalk.bgCyan.bold(` INFO `), message)

        fs.appendFile(`${this.path}/latest.log`, `${time} INFO ${message}\n`, (err) => {
            if (err)
                throwError(err)
        })
    }

    success(message) {
        if (!message) 
            throwError(`You must set some message to log`)
        
        this.console.log(chalk.gray(time), chalk.bgGreenBright.bold(` SUCCESS `), message)

        fs.appendFile(`${this.path}/latest.log`, `${time} SUCCESS ${message}\n`, (err) => {
            if (err)
                throwError(err)
        })
    }
}

export default Logger