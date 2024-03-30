// Create a class named CodeSenseiKit
class CodeSenseiKit {
    constructor() {
        this.tools = [];
    }

    // Method: add a tool to the CodeSenseiKit
    addTool(tool) {
        this.tools.push(tool);
        console.log(`Added ${tool} to the CodeSenseiKit.`);
    }

    // Method: remove a tool from the CodeSenseiKit
    removeTool(tool) {
        const index = this.tools.indexOf(tool);
        if (index !== -1) {
            this.tools.splice(index, 1);
            console.log(`Removed ${tool} from the CodeSenseiKit.`);
        } else {
            console.log(`${tool} is not found in the CodeSenseiKit.`);
        }
    }

    // Method: list all tools in the CodeSenseiKit
    listTools() {
        console.log("Tools in the CodeSenseiKit:");
        this.tools.forEach(tool => {
            console.log(tool);
        });
    }
}

// Create an instance of CodeSenseiKit named myCodeSenseiKit
const myCodeSenseiKit = new CodeSenseiKit();

// Add tools to the CodeSenseiKit
myCodeSenseiKit.addTool("IDE");
myCodeSenseiKit.addTool("Debugger");
myCodeSenseiKit.addTool("Version Control");

// List all tools in the CodeSenseiKit
myCodeSenseiKit.listTools();

// Remove a tool from the CodeSenseiKit
myCodeSenseiKit.removeTool("IDE");

// List all tools in the CodeSenseiKit after removal
myCodeSenseiKit.listTools();
