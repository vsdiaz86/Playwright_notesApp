const { I } = inject();
const timeout = 120;

class BasePage {
	constructor() {
		this.timeout = timeout;
	}

	async isCurrentPage(mainElement = null) {
		I.waitForElement(mainElement || this.pageTitle, this.timeout);
	}

	async fillField(field, value, timeout = this.timeout) {
		I.waitForElement(field, timeout);
		I.fillField(field, value);
	}

	async click(field, timeout = this.timeout) {
		I.waitForElement(field, timeout);
		I.click(field);
	}

	async doubleClick(field, timeout = this.timeout) {
		I.waitForElement(field, timeout);
		I.doubleClick(field);
	}

	async waitForLoaderInvisible(timeout = 60) {
		I.waitForInvisible(this.loader, timeout);
	}

	async selectOption(field, value, timeout = this.timeout) {
		I.waitForElement(field, timeout);
		I.selectOption(field, value);
	}

	async attachFile(field, file, timeout = this.timeout) {
		I.grabTextFrom(field, timeout);
		I.attachFile(field, file);
	}
}

module.exports = BasePage;