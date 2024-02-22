const { I } = inject();
const assert = require('assert');

class NotesApiPage {

  async postNewNote() {
    const data = {
      title: "New note",
      content: "Content of the new note"
    };

    const response = await I.sendPostRequest('http://localhost:3000/notes', data);
    return response.data;
  }

  async getNote() {
    const response = await I.sendGetRequest('http://localhost:3000/notes');
    assert.ok(response.data[0]._id);
    assert.strictEqual(response.data[0].title, 'New note');
    assert.strictEqual(response.data[0].content, 'Content of the new note');
    assert.strictEqual(response.data[0].__v, 0);
    return response.data;

  }
};


module.exports = new NotesApiPage();
module.exports.NotesApiPage = NotesApiPage;