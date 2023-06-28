
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";




inquirer
  .prompt([
    {"message":"enter the url:","name":"url"}
  ])
  .then((answers) => {
    const URL = answers.url;
    var qr_svg = qr.image(URL);
    qr_svg.pipe(fs.createWriteStream('qr.png'));
    writeFile('qr.txt', URL, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });