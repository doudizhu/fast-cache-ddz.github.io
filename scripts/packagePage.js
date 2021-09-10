const path = require("path");
const callfile = require("child_process");

const cwd = path.resolve(__dirname, `../`)
const packagePath = path.resolve(__dirname, `../package/fast-cache-ddz.github.io`)

callfile.exec(
  `
    gitbook build &&
    cp -r _book/ ../package/fast-cache-ddz.github.io &&
    cd ../package/fast-cache-ddz.github.io &&

    git pull &&
    git add . &&
    git commit -m 'update' &&
    git push
  `,
  {
    cwd,
  },
  async function (error, stdout, stderr) {
    console.log(error, stdout, stderr)
  }
)
