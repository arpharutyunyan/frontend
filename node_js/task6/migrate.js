import { Candidates, People } from "./models/index.js";
import Parties from "./models/Parties.js";


async function main() {
  await People.sync({ alter: true, logging: true });
  await Parties.sync({ alter: true, logging: true });
  await Candidates.sync({ alter: true, logging: true });
  process.exit();
}

main();
