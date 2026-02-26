<!-- Auto-generated guidance for AI coding agents. Edit with care. -->
# Copilot / AI Agent Instructions

**Purpose**: Quickly orient AI coding agents to the repository so they become productive without asking trivial questions.

**Quick repo snapshot**:
- **Minimal repo**: only [README.md](README.md#L1-L3) and a Git history (.git/). No source/CI/build files were discovered.

**First actions for any agent**:
- **Scan the workspace**: list top-level files and common build/config files (`pom.xml`, `build.gradle`, `package.json`, `pyproject.toml`, `requirements.txt`, `.github/workflows`). If none exist, ask the user about the project language and expected build/test commands.
- **Ask before assuming**: this repository currently lacks language indicators — confirm language, build system, and test commands before making code changes.

**What to look for (priority order)**:
- **Project entry points**: files such as `src/`, `app/`, `Main.*`, `index.*`.
- **Build & test manifests**: `pom.xml`, `build.gradle`, `package.json`, `pyproject.toml`, `requirements.txt`.
- **CI workflows**: `.github/workflows/*` for how maintainers run tests/builds.
- **Docs**: `README.md` (start here) and any `docs/` folder.

**Editing & PR guidance**:
- Keep changes minimal and focused. If adding new files, include a short README or a test that demonstrates the change.
- When creating or modifying code, include a short rationale in the PR body and a reproducible test or run command.

**If you need to run commands**:
- Do not execute anything that requires secrets or external services without explicit user permission.
- Preferred approach: ask the user for the exact command to build or test (for example `mvn test`, `gradle test`, `npm test`, `pytest`).

**Common patterns (none detected)**:
- No language-specific patterns were found in this snapshot. If the repo is expanded, prefer to infer patterns from existing files under `src/` and mirror their style (naming, error handling, logging).

**When to ask the user**:
- Always ask before: choosing a programming language, initializing a build system, adding CI workflows, or running tests locally.
- Ask for missing context: sample input/output expectations, API contracts, or acceptance criteria.

**Example agent prompts to the user**:
- "I scanned the repo and found only [README.md](README.md#L1-L3). What language and build/test commands should I use?"
- "Would you like me to initialize a `README.md`-linked project structure (Maven/Gradle/Node/Python)?"

**Where to document discovered conventions**:
- If you add a convention (naming, linting, test command), update `README.md` and this file so future agents see the rule.

---
If any section is unclear or you want me to include more concrete command examples for a specific language/build, tell me the language and I'll update this file.
