import inquirer from 'inquirer';

function write(text) {
process.stdout.write(text);
}


inquirer
.prompt([
{type:'input', name:'name', message: 'What is your name?'},
{type:'list', name:'gender', message:'What is your gender?', choices: ['male', 'female', 'bigender', 'apache helicopter', 'other']},
{type:'rawlist', name:'shoe', message:'What is your shoe size?', choices: ['40', '41', '42', '43', '44']},
{type:'number', name:'age', message: 'How old are you?'},
{type:'confirm', name:'school', message: 'Did you go to school?'},
{type:'password', name:'password', message: 'Enter password'},
{type:'checkbox', name:'tasks', message: 'Did you finish your tasks?'}, ['doing it', 'finished', 'not done'],
{type:'expand', name:'expand', message: 'Kermo', choices: ['tark', 'loll', 'pro', 'noob', 'halb']},
{type:'editor', name:'editor', message: 'Editor'}
])
.then((answers) => {
console.log(answers);
})
.catch((error) => {
if (error.isTtyError){
// Prompt couldn't be rendered in the current enviroment
} else {
//Something else went wrong
}
});