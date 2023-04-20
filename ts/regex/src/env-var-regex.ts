/*
 * This function is used to resolve env variables in command line.
 * It should support both syntaxes: ${VAR} and $VAR
 * The function returns the original command line if:
 * - envVariables is undefined or empty
 * - there are no env variables in the command line
 * - there are env variables in the command line but they are not defined in the envVariables array
 */
export function resolveEnvVariablesForCommand(commandLine: string, envVariables?: Array<{ name: string, value: string }>): string {
	console.log('===================== Env Variables Regex =====================');
	if (!envVariables || envVariables.length === 0) {
		console.log('==== Env Variables Regex ==== RETURN - No env variables');
		return commandLine;
	}

	// it should support both syntaxes: ${VAR} and $VAR
	const regex = /\$\{?([a-zA-Z_][a-zA-Z0-9_]*)\}?/g;;
	let match = regex.exec(commandLine);
	while (match) {
		const forReplace = match[0];
		console.log('==== Env Variables Regex ==== For replace: ', forReplace);

		const envVariableName = match[1];
		console.log('==== Env Variables Regex ==== envVariableName: ', envVariableName);
		
		const envVariableValue = envVariables.find(env => env.name === envVariableName)?.value;
		console.log('==== Env Variables Regex ==== envVariableValue: ', envVariableValue);
		
		if (envVariableValue) {
			commandLine = commandLine.replace(match[0], envVariableValue);
		}
		match = regex.exec(commandLine);
	}
	console.log('==== Env Variables Regex ==== RESULT - commandLine: ', commandLine);
	return commandLine;
}

const testVariables = [
	{ name: 'USER', value: 'Roman' },
	{ name: 'PROJECT_DIR', value: '/projects' }
];

const commandContainsEnvVarWithBraces = ('echo "${USER}"');
resolveEnvVariablesForCommand(commandContainsEnvVarWithBraces, testVariables);

const commandContainsEnvVarWithoutBraces = ('echo "$USER"');
resolveEnvVariablesForCommand(commandContainsEnvVarWithoutBraces, testVariables);

const commandWithMixEnvVariables = ('cd $PROJECT_DIR && echo "${USER}" && echo $USER');
resolveEnvVariablesForCommand(commandWithMixEnvVariables, testVariables);
