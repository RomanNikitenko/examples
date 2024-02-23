import * as fs from 'fs';

/**
 * - reads tokens from file
 * - finds only github.com tokens
 * - extracts a token, so:
 * - https://oauth2:gho_FKe_some_symbols_here_dmJ1@github.com => gho_FKe_some_symbols_here_dmJ1
 */


function extractTokensFromFile(filePath: string): string[] {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const lines = fileContent.split('\n');
    const tokens: string[] = [];

    console.log(`=== Found ${lines.length} lines in the file`);
    for (const line of lines) {
      console.log(`============== Line: ${line}`);
      if (!line.includes('gitlab.com')) {
        console.log(`=== The line contains NOT gitlab.com token`);
        const token = line.substring(line.lastIndexOf(':') + 1, line.indexOf('@'));
        console.log(`=== Token: ${token}`);
        tokens.push(token);
      } else {
        console.log(`=== The line contains gitlab.com token, so skip it`);
      }
    }

    return tokens;
  } catch (err) {
    console.error('Error reading the file:', err);
    return [];
  }
}

const filePath = './src/tokens.txt';
const tokens = extractTokensFromFile(filePath);
console.log('===========================================================');
console.log('The result is: ');
console.log(tokens);
