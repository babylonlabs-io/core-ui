import { confirm } from "@inquirer/prompts";
import { execSync } from "child_process";
import fs from "fs";

async function run() {
  try {
    const changesetDir = ".changeset";
    const changesetExists = fs.existsSync(changesetDir);

    const hasChangesetMd =
      changesetExists &&
      fs.readdirSync(changesetDir).some((file) => {
        const fileLower = file.toLowerCase();
        return fileLower.endsWith(".md") && fileLower !== "readme.md";
      });

    if (hasChangesetMd) {
      console.log("🦋 Changeset markdown file already exists. Skipping prompt.");
      return;
    }

    const runChangeset = await confirm({
      message: "🦋 Do you want to include a changeset in this commit?",
      default: false,
    });

    if (runChangeset) {
      try {
        // Generate the changeset
        execSync("npx changeset", { stdio: "inherit" });

        // Add the changeset files to staging
        execSync("git add .changeset", { stdio: "inherit" });

        console.log("🦋 Changeset added to the commit.");
      } catch (error) {
        console.error("Failed to run changeset:", error);
        process.exit(1);
      }
    } else {
      console.log("🦋 Skipping changeset");
    }
  } catch (error) {
    if (error instanceof Error && error.message.includes("User force closed the prompt")) {
      console.log("Prompt was closed by the user. Exiting gracefully.");
    } else {
      console.error("An unexpected error occurred:", error);
      process.exit(1);
    }
  }
}

run();
