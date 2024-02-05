// function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
  **License** ${data.license}
  
  ##Description:
  ${data.description}

  ##Table of content:
  ${data.tableOfContent}

  ##Installation:
  ${data.installation}

  ##Usage:
  ${data.installation}

  ##Contributing:
  ${data.installation}

  ##License:
  ${data.license}
`
}
module.exports = generateMarkdown;
