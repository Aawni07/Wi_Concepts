const fs = require('fs')
//textIn, after reading the file, this stores the contentOf the file input.txt
const textIn = fs.readFileSync('../assets/input.txt', 'utf-8')

let content = `content has been read from the textIn file and got returned from it\n ${textIn} \n data Created on ${new Date}`
const writeIn = fs.writeFileSync('../assets/output.txt', `${content}`)
