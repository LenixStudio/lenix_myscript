RegisterCommand('servertest', (source: number, args: string[]) => {
  console.log(`Server command by player ${source}`);
}, false);