const { I, NotesAppPage } = inject();
const timeout = 60;
const FIELD_VALUE = '<VALUE>';


//#region .:  Addying a new note :.

Given('I am already on the Notes App main page', async () => {
    await NotesAppPage.accessLoginPage();
});

When('I click on the add note button', async () => {
    await NotesAppPage.click(NotesAppPage.addNotesButton);
});

When('I fill the field title with the value {string}', async (title) => {
    await NotesAppPage.fillField(NotesAppPage.titleInputField, title);
});

When('I fill the field body with the value {string}', async (body) => {
    within({ frame: NotesAppPage.bodyIframe }, () => {
        NotesAppPage.fillField(NotesAppPage.bodyInputField, body);
    });
});

When('I click on the save button', async () => {
    await NotesAppPage.click(NotesAppPage.saveNotesButton);
});

//#endregion