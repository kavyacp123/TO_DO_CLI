const fs = require("fs");
const { Command } = require("commander");
const program = new Command();
let i = 0;
let rawData = fs.readFileSync('to_do.json');
    let data = JSON.parse(rawData);
    if (data.length > 0) {
        i = data[data.length - 1].index + 1;
    }
program
    .name("TO_DO_LIST")
    .description("A simple CLI to-do list")
    .version("0.0.1");
program
    .command("add")
    .argument("string(task)>", "Task to be added")
    .action((task) => {
            let rawData = fs.readFileSync('to_do.json');
            let data = JSON.parse(rawData);
            let newObject = {
                index: i, 
                task: task,
            };
            i++;  
            data.push(newObject);
            fs.writeFileSync('to_do.json', JSON.stringify(data, null, 4));
            console.log("New task added to the to-do list:", task);
        }
    );
program.parse();
