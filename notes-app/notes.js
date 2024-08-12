import fs from 'fs';
import chalk from 'chalk';


const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicatesNote = notes.find((note) => note.title === title)

    if (!duplicatesNote){
        notes.push({
            title: title, 
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'))
    } else {
        console.log('Note title taken!')
    }

}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note){
        console.log(chalk.green.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found'))
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length){
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse('Note removed'))
    } else {
        console.log(chalk.red.inverse('Not note found'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    
    console.log(chalk.red.inverse('Your Notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })

}


export default {
    addNote: addNote, 
    removeNote: removeNote,
    listNotes: listNotes, 
    readNote: readNote
}