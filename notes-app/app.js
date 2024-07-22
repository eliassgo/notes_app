import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import notes from './notes.js';

const log = console.log;


yargs(hideBin(process.argv))
// Customize yargs version

.version('1.1.1')
// Creat add command 

.command({
    command: 'add', 
    describe: 'Add a new note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note Body',
            demandOption: true, 
            type: 'string'
        }
    },
    handler (argv){
        notes.addNote(argv.title, argv.body)
    }
})
// Create remove commmand 
.command({
    command: 'remove', 
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'Note title', 
            demandOption: true, 
            type: 'string'
        }
    },
    handler (argv){
        notes.removeNote(argv.title)
    }
})
// Create list commmand 
.command({
    command: 'list', 
    describe: 'List the notes',
    handler (){
        notes.listNotes()
    }
})
// Create read commmand 
.command({
    command: 'read', 
    describe: 'Read a notes',
    handler (){
        log('Reading a notes')
    }
}).argv

