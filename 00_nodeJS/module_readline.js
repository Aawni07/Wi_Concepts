const readLine = require('readline') 
// createInterface(), used to interact with the users.
// needs to initialize input & output streams. Which takes 2Args, standardInput & reading the standardOutput.
// readLine.createInterface(InputDeviceInfo, output, completer)
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("Please enter your petName : ",(name)=>{
    console.log(`My petName is ${name}`);
    rl.close();
})
rl.on('close',()=>{
    console.log('readline Interface closed');
    process.exit(0)
})
