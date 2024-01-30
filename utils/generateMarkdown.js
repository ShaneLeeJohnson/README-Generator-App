// An array of license objects that each have their own badge and link urls.
const licenses = [
	{
		name: 'Apache License 2.0',
		badgeUrl: 'https://img.shields.io/badge/License-Apache%20License%202.0-blue.svg',
		linkUrl: 'https://opensource.org/license/apache-2-0/'
	},
	{
		name: 'GNU GPL v3.0',
		badgeUrl: 'https://img.shields.io/badge/License-GNU%20GPL%20v3.0-blue.svg',
		linkUrl: 'https://opensource.org/license/gpl-3-0/'
	},
	{
		name: 'MIT License',
		badgeUrl: 'https://img.shields.io/badge/License-MIT%20License-blue.svg',
		linkUrl: 'https://opensource.org/license/mit/'
	},
	{
		name: 'Boost Software License 1.0',
		badgeUrl: 'https://img.shields.io/badge/License-Boost%20Software%20License%201.0-blue.svg',
		linkUrl: 'https://opensource.org/license/bsl-1-0/'
	},
	{
		name: 'Eclipse Public License 2.0',
		badgeUrl: 'https://img.shields.io/badge/License-Eclipse%20Public%20License%202.0-blue.svg',
		linkUrl: 'https://opensource.org/license/epl-2-0/'
	},
	{
		name: 'GNU AGPL v3.0',
		badgeUrl: 'https://img.shields.io/badge/License-GNU%20AGPL%20v3.0-blue.svg',
		linkUrl: 'https://opensource.org/license/agpl-v3/'
	},
	{
		name: 'GNU LGPL v2.1',
		badgeUrl: 'https://img.shields.io/badge/License-GNU%20LGPL%20v2.1-blue.svg',
		linkUrl: 'https://opensource.org/license/lgpl-2-1/'
	},
	{
		name: 'Mozilla Public License 2.0',
		badgeUrl: 'https://img.shields.io/badge/License-Mozilla%20Public%20License%202.0-blue.svg',
		linkUrl: 'https://opensource.org/license/mpl-2-0/'
	},
	{
		name: 'The Unlicense',
		badgeUrl: 'https://img.shields.io/badge/License-The%20Unlicense-blue.svg',
		linkUrl: 'https://opensource.org/license/unlicense/'
	}
]

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	const foundLicense = licenses.find((item) => item.name === license);
	if (foundLicense) {
		return `![License: ${foundLicense.name}](${foundLicense.badgeUrl})`;
	} else {
		return ''; // No badge if license wasn't found
	}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	const foundLicense = licenses.find((item) => item.name === license);
	if (foundLicense) {
		return `[License: ${foundLicense.name}](${foundLicense.linkUrl})`;
	} else {
		return ''; // No link if license wasn't found
	}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	const foundLicense = licenses.find((item) => item.name === license);
	if (foundLicense) {
		return `This project is licensed under the ${renderLicenseLink(license)}`;
	} else {
		return 'This project has no specified license.'; // Handles if there is no license
	}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	// variables for saving the users responses to the prompted questions
	const licenseBadge = renderLicenseBadge(data.license);
	const licenseSection = renderLicenseSection(data.license);
	const description = data.description;
	const installation = data.installation;
	const usage = data.usage;
	const contributing = data.contributing;
	const tests = data.tests;
	const userName = data.userName;
	const email = data.email;
	// Creates the table of contents section of the README
	let tableOfContents = `## Table of Contents\n`;

	// The following logic checks to make sure that user actually wrote something for each of the following
	// sections. If they did, then those sections are added to the Table of Contents
	if (installation !== '') {
		tableOfContents += `* [Installation](#installation)\n`;
	}

	if (usage !== '') {
		tableOfContents += `* [Usage](#usage)\n`;
	}

	tableOfContents += `* [License](#license)\n`;

	if (contributing !== '') {
		tableOfContents += `* [Contributing](#contributing)\n`;
	}

	if (tests !== '') {
		tableOfContents += `* [Tests](#tests)\n`;
	}

	tableOfContents += `* [Questions](#questions)`;

	// Adds the title section to the README file
	let markdown = `# ${data.title}\n\n`;

	// Checks that the user picked a license and if they did, adds the license badge near the top of the README file
	if (data.license !== 'No License') {
		markdown += `${licenseBadge}\n\n`;
	}

	// Adds the description and table of contents sections to the README file
	markdown += `## Description\n\n${description}\n\n`;
	markdown += `${tableOfContents}\n\n`;

	// Checks if the user has installation steps and if they do, adds the installation section to the README file
	if (installation !== '') {
		markdown += `## Installation\n\n${installation}\n\n`;
	}

	// Adds the usage and license sections to the README file
	markdown += `## Usage\n\n${usage}\n\n`;
	markdown += `## License\n\n${licenseSection}\n\n`;

	// Checks if the user has contributing guidelines for their project and if they do, 
	// adds the contributing section to the README file
	if (contributing !== '') {
		markdown += `## Contributing\n\n${contributing}\n\n`;
	}

	// Checks if the user provided any tests info for their project and if they did, adds the tests section to the README file
	if (tests !== '') {
		markdown += `## Tests\n\n${tests}\n\n`;
	}

	// Creates the questions section of the README file
	let questions = `If you have any questions about this project, please feel free to contact me using the methods below\n\n`;

	// Checks if the user added their github username and if they did, adds it to the questions section
	if (userName !== '') {
		questions += `Github username: [${userName}](https://github.com/${userName})\n\n`;
	}

	// Checks if the user added their email and if they did, adds it to the questions section
	if (email !== '') {
		questions += `Email: ${email}`;
	}

	// Adds the questions section to the README file
	markdown += `## Questions\n\n${questions}`;

	return markdown
}

// Exports the generateMarkdown function so that it can be used in the index.js file.
module.exports = generateMarkdown;
