import main from "./sad";
import { run } from "./sushiswap";
console.log("\x1b[41m", "Running sad.ts file....", "\x1b[0m");
main().then((responseFromMain) => {
  console.log("Response from main", responseFromMain);
  console.log("\x1b[41m", "Running sushiwap.js file....", "\x1b[0m");
  run().then((responseFromRun) => {
    console.log("Response from run function", responseFromRun);
  });
});
