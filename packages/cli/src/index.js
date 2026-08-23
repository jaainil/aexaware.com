import { cmdHelp, cmdVersion, cmdServices, cmdPortfolio, cmdBlog,
         cmdContact, cmdKeys, cmdMcp, cmdSandbox } from './commands.js';
import { red, dim } from './colors.js';

export async function main(argv) {
  const [command, ...args] = argv;

  switch (command) {
    case 'services':   return cmdServices(args);
    case 'portfolio':  return cmdPortfolio(args);
    case 'blog':       return cmdBlog(args);
    case 'contact':    return cmdContact();
    case 'keys':       return cmdKeys();
    case 'mcp':        return cmdMcp();
    case 'sandbox':    return cmdSandbox();
    case 'version':
    case '--version':
    case '-v':         return cmdVersion();
    case 'help':
    case '--help':
    case '-h':
    case undefined:    return cmdHelp();
    default:
      console.log(`${red('✖')}  Unknown command: ${command}`);
      console.log(dim('   Run: aexaware help'));
      process.exit(1);
  }
}
