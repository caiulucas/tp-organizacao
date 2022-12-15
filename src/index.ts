import { getArgs } from './utils/getArgs';

function main() {
  const args = getArgs();
  const ramSize: number = Number(args[2]);

  console.log(ramSize);

}

main();