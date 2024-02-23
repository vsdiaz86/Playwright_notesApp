const { I, NotesApiPage } = inject();
const timeout = 60;
const assert = require('assert');
let noteId;


//#region .: Addying a new note by Api :.

Given('I am addying a new note by api', async () => {
    await NotesApiPage.postNewNote();
});

Then('I can see the new note by get request', async () => {
    noteId = await NotesApiPage.getNoteId();
    assert.ok(noteId);
});

//#region .: Editing a note by Api :.

Given('I already have a note added', async () => {
    const result = await NotesApiPage.getNoteById(noteId, 200);
    assert.strictEqual(result.title, 'New note');
    assert.strictEqual(result.content, 'Content of the new note');
});

When('I edit the data by a put api request', async () => {
    const result = await NotesApiPage.editNote(noteId);
    assert.strictEqual(result.title, 'Updated note');
    assert.strictEqual(result.content, 'Content of the updated note');
});

//#endregion

//#region .: Deleting note by Api :.

Given('I already have a note', async () => {
    await NotesApiPage.getNoteById(noteId, 200);
});

When('I delete the note by the api', async () => {
    await NotesApiPage.deleteNote(noteId);
});

Then('I cant find the note by a get request', async () => {
    const result = await NotesApiPage.getNoteById(noteId, 404);
    assert.strictEqual(result.error, 'Not found');
});

//#endregion