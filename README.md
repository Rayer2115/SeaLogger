
# SeaLogger

A powerful library that help you organizing your logs in one place and its prettier


## Features

- Colors
- Saves logs in files
- ES6 syntax


## Installation

Install **SeaLogger** with npm

```bash
  npm install SeaLogger@latest
```
    
## How to use

First we need to import package

```js
import Logger from "sealogger"
```

Then we are defining a class with path and console object

```js
const logger = Logger(`./path/to/logs`, console)
```

And then we can use a package like

```js
logger.log(`It's a test`)
```

An event handler is builded-in

```js
logger.on(`event`, (message) => {
    // any to do
})
```

All functions:
- log
- success
- info
- error
- on

## Authors

- [@Rayer2115](https://www.github.com/Rayer2115)


## Contributing

Contributions are always welcome!

If you want, dm me on server https://visualcontent.pl/discord (Rayer)


## License

[MIT](https://choosealicense.com/licenses/mit/)

