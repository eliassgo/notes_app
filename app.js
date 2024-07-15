import chalk from 'chalk';
import yargs from 'yargs';
import getNotes from './notes.js';

const log = console.log;


yargs(process.argv)
// Customize yargs version
.version('1.1.1')
// Creat add command 
.command({
    command: 'add', 
    describe: 'Add a new note',
    handler: function (){
        log('Adding a new note')
    }
})
// Create remove commmand 
.command({
    command: 'remove', 
    describe: 'Remove a note',
    handler: function (){
        log('Removing the note')
    }
})
// Create list commmand 
.command({
    command: 'list', 
    describe: 'List the notes',
    handler: function (){
        log('Listing out all notes')
    }
})
// Create read commmand 
.command({
    command: 'read', 
    describe: 'Read a notes',
    handler: function (){
        log('Reading a notes')
    }
}).argv

log(yargs(process.argv).argv);
