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
	const licenseBadge = renderLicenseBadge(data.license);
	const licenseSection = renderLicenseSection(data.license);
	const description = data.description;
	const installation = data.installation;
	const usage = data.usage;
	const contributing = data.contributing;
	const tests = data.tests;
	let questions;

	let markdown = `# ${data.title}\n\n`;
	markdown += `${licenseBadge}\n\n`;
	markdown += `## Description\n\n${description}\n\n`;

	if (installation !== '') {
		markdown += `## Installation\n\n${installation}\n\n`;
	}

	markdown += `## Usage\n\n${usage}\n\n`;
	markdown += `## License\n\n${licenseSection}\n\n`;

	if (contributing !== '') {
		markdown += `## Contributing\n\n${contributing}\n\n`;
	}

	if (tests !== '') {
		markdown += `## Tests\n\n${tests}\n\n`;
	}

	markdown += `## Questions\n\n${questions}`;

	return markdown
}

module.exports = generateMarkdown;
