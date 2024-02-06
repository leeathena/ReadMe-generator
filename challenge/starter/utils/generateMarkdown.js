// function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
  **License** ${data.license}
  
  ##Description:
  ${data.description}

  #Table of content:
  [Installation](#installation)
  [Usage](#usage)
  [Contributing](#contributing)
  [License](#license)
  [Questions](#questions)

  ##Installation:
  ${data.installation}

  ##Usage:
  ${data.usage}

  ##Contributing:
  ${data.contributing}

  ##License:
  ${data.license}

  ##Questions:
  For any queries please vist [GitHub](https://github.com/${username}) or email me at [${email}](mailto:${email}).

`
}
module.exports = generateMarkdown;
