const execa = require('execa');

(async () => {
	console.log('linting packages/backend ...');
	await execa('yarn', ['run', 'lint'], {
		cwd: __dirname + '/../packages/backend',
		stdout: process.stdout,
		stderr: process.stderr,
	});

	console.log('linting packages/frontend ...');
	await execa('yarn', ['run', 'lint'], {
		cwd: __dirname + '/../packages/frontend',
		stdout: process.stdout,
		stderr: process.stderr,
	});

	console.log('linting packages/sw ...');
	await execa('yarn', ['run', 'lint'], {
		cwd: __dirname + '/../packages/sw',
		stdout: process.stdout,
		stderr: process.stderr,
	});
})();
