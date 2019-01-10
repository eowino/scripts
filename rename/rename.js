//@ts-check
const { readdir, renameSync } = require('fs');

const message =
  '⚠️  Please provide 2 args. 1st arg is the current file extension. 2nd arg is what you want to change to. Use the --dry flag to do a dry run';

function isDryRun() {
  return process.argv.includes('--dry');
}

function getArgs() {
  return {
    from: process.argv[2],
    to: process.argv[3],
  };
}

function getMatchingFilesExtension(files = [], pattern = '') {
  return files.filter(file => file.endsWith(pattern));
}

function getFilesFromCWD(pattern) {
  return new Promise((res, rej) => {
    readdir(process.cwd(), (err, files) => {
      if (err) return rej(err);
      return res(getMatchingFilesExtension(files, pattern));
    });
  });
}

async function run() {
  const { from, to } = getArgs();
  if (!from || !to) {
    console.log('\n' + message);
    process.exit(0);
  }

  try {
    const files = await getFilesFromCWD(from);
    if (files.length === 0) {
      console.log(`\n⚠️  No files found that end with: .${from}`);
      process.exit(0);
    }

    if (isDryRun()) {
      console.log(`\n🏁  ${files.length} files(s) would be renamed.\n`);
    } else {
      files.forEach(file => {
        renameSync(file, `${file.split('.')[0]}.${to}`);
      });
      console.log(`\n🏁  Renamed ${files.length} files(s).\n`);
    }
  } catch (e) {
    console.error(e);
  }
}

run();
