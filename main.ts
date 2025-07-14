// main.ts - Deno CLI Application Template

import { Command } from "https://deno.land/x/cliffy@v1.0.0-rc.4/command/mod.ts";

async function main() {
  const { options } = await new Command()
    .name("deno-app")
    .version("1.0.0")
    .description("A Deno CLI application template")
    .option("-n, --name <name:string>", "Your name", { default: "World" })
    .parse(Deno.args);

  console.log(`Hello, ${options.name}!`);
  console.log("Welcome to your Deno CLI application!");
}

if (import.meta.main) {
  await main();
}
