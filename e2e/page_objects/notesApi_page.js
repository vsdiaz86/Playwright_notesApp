const { I } = inject();
const assert = require('assert');


class NotesApiPage {

  async postNewNote() {
    const data = {
      title: "New note",
      content: "Content of the new note"
    };

    const response = await I.sendPostRequest('http://localhost:3000/notes', data);
    assert.equal(response.status, 200);
    return response.data;
  }

  async getNote() {
    const response = await I.sendGetRequest('http://localhost:3000/notes');
    assert.ok(response.data[0]._id);
    assert.strictEqual(response.data[0].title, 'New note');
    assert.strictEqual(response.data[0].content, 'Content of the new note');
    assert.strictEqual(response.data[0].__v, 0);
    assert.equal(response.status, 200);
    return response.data;
  }

  async getNoteId() {
    const response = await I.sendGetRequest('http://localhost:3000/notes');
    assert.equal(response.status, 200);
    return response.data[0]._id;
  }

  async deleteNote(noteId) {
    const response = await I.sendDeleteRequest(`http://localhost:3000/notes/${noteId}`);
    assert.equal(response.status, 204);
    return response.data;
  }

  async editNote(noteId) {
    const data = {
      title: "Updated note",
      content: "Content of the updated note"
    };

    const response = await I.sendPutRequest(`http://localhost:3000/notes/${noteId}`, data);
    assert.equal(response.status, 200);
    return response.data;
  }

  async getNoteById(noteId, status) {
    const response = await I.sendGetRequest(`http://localhost:3000/notes/${noteId}`);
    assert.equal(response.status, status);
    return response.data;
  }

};



module.exports = new NotesApiPage();
module.exports.NotesApiPage = NotesApiPage;