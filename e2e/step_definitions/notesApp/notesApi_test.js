const { I, NotesApiPage } = inject();
const timeout = 60;
const FIELD_VALUE = '<VALUE>';


//#region .:  Addying a new note by Api :.

Given('I am addying a new note by api', async () => {
    await NotesApiPage.postNewNote();
});

Then('I can see the new note by get request', async () => {
    await NotesApiPage.getNote();
});



//#endregion