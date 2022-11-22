const execa = require('execa');

(async () => {
	console.log('building packages/backend ...');

	await execa('yarn', ['run', 'build'], {
		cwd: __dirname + '/../packages/backend',
		stdout: process.stdout,
		stderr: process.stderr,
	});

	console.log('building packages/client ...');

	await execa('yarn', ['run', 'build'], {
		cwd: __dirname + '/../packages/client',
		stdout: process.stdout,
		stderr: process.stderr,
	});

	console.log('building packages/sw ...');

	await execa('yarn', ['run', 'build'], {
		cwd: __dirname + '/../packages/sw',
		stdout: process.stdout,
		stderr: process.stderr,
	});

	console.log('build finishing ...');

	await execa('yarn', ['run', 'gulp'], {
		cwd: __dirname + '/../',
		stdout: process.stdout,
		stderr: process.stderr,
	});
})();
