const { I } = inject();
const BasePage = require('./base_page.js');
const timeout = 60;


class NotesAppPage extends BasePage {
	constructor() {
		super();
		this.addNotesButton = "//i[@class='bi bi-plus']";
		this.titleInputField = "#title";
		this.bodyIframe = 'iframe[id="content_ifr"]';
		this.bodyInputField = 'body[id="tinymce"]';
		this.saveNotesButton = "//i[@class='bi bi-check']";

	}

	async accessLoginPage() {
		await I.amOnPage('');
		await super.isCurrentPage();
	}

	async fillUserAndPass(user, pass) {
		await super.fillField(this.userInput, user);
		await super.fillField(this.passwordInput, pass);
	}

	async clickLogin() {
		await super.click(this.loginButton);
	}
}

module.exports = new NotesAppPage();
module.exports.NotesAppPage = NotesAppPage;
