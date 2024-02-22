const dotenv = require('dotenv');
const dotenvParseVariables = require('dotenv-parse-variables');

let env = dotenv.config()
if (env.error) throw env.error;
env = dotenvParseVariables(env.parsed);

exports.config = {
	output: './output',
	helpers: {
		Playwright: {
			url: process.env.BASE_URL,
			show: process.env.SHOW_BROWSER === 'true',
			browser: process.env.BROWSER,
			waitForNavigation: "domcontentloaded",
			waitForAction: 700,
			chromium: {
				args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage',
					'--ignore-certificate-errors']
			},
			firefox: {
				args: ['--no-sandbox', '--ignore-certificate-errors']
			}
		},
		CustomHelper: {
			require: './support/helpers/custom_helper.js',
		},
		ResembleHelper: {
			require: "codeceptjs-resemblehelper",
			screenshotFolder: "./output/",
			baseFolder: "./support/screenshots/base/",
			diffFolder: "./support/screenshots/diff/"
		},
		REST: {}
	},
	include: {
		I: './steps_file.js',
		NotesAppPage: './page_objects/notesApp_page.js',
		NotesApiPage: './page_objects/notesApi_page.js'
	},
	async bootstrapAll() {
	},
	async teardownAll() {
	},
	mocha: {},
	bootstrap: null,
	teardown: null,
	hooks: [],
	gherkin: {
		features: './features/*/*.feature'
	},
	plugins: {
		allure: {
			enabled: true,
			require: '@codeceptjs/allure-legacy',
			outputDir: 'output'
		},
		screenshotOnFail: {
			enabled: true
		},
		skipper: {
			require: './support/plugins/skipper.js',
			enabled: true
		}
	},
	tests: './step_definitions/*/*_test.js',
	name: 'e2e'
}
