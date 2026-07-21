# Prompt-Iteration-Log
A shareable internal tool for documenting prompt evolution, classifying AI failure modes, comparing revisions, and identifying reusable prompts.

## Goal / Purpose

To create a simple, shareable tool that helps institutional research teams document how prompts evolve, understand why revisions were made, and reuse prompts that have produced reliable results. The project was designed especially for non-technical colleagues who may benefit from examples, revision histories, and clear guidance when using LLMs for research tasks.

## My Role

- Identified the need for a systematic way to document and reuse prompt knowledge.
- Defined the project goals, target users, and core use cases.
- Designed the prompt documentation structure and revision workflow.
- Developed the taxonomy for classifying common LLM output issues.
- Determined the application’s required fields, functions, and dashboard summaries.
- Translated user needs into plain-language development requirements for Claude.
- Reviewed, tested, and refined Claude-generated code through multiple iterations.
- Validated data entry, storage, filtering, comparison, and display functions.
- Designed the interface to be accessible to non-technical colleagues.
- Published the application through Google Sites and prepared it for internal sharing.

## Step by Step Process

1. **Identified the problemg** — Recognized that prompts were being revised repeatedly without a consistent way to record what changed, why it changed, or which version worked best.
2. **Defined the users and use cases** — Designed the tool for institutional researchers and non-technical colleagues who use LLMs for survey analysis, data processing, qualitative coding, and report development.
3. **Determined the information to capture** — Defined fields for project name, prompt version, original and revised prompts, reason for revision, issue type, AI model, contributor, validation status, and notes.
4. **Developed an issue-classification framework** — Created a practical taxonomy for common LLM output problems:
- Missing instruction
- Wrong calculation or logic
- Wrong output format
- Overly verbose output
- Incomplete output
- Hallucination
- Other
5. **Designed the interface and workflow** — Planned a form-based interface that allows users to enter prompt revisions, compare versions, classify issues, and identify validated prompts.
6. **Built the application through iterative prompting** — Used Claude to translate plain-language requirements into HTML, CSS, JavaScript, and Google Apps Script. Each version was reviewed and refined based on functionality, clarity, and usability.
7. **Connected the application to a data source** — Used Google Sheets as the underlying datastore and Google Apps Script to save, retrieve, filter, and display prompt records.
8. **Developed the Data Viewer** - Added summary features that display revision histories, issue frequencies, highly revised projects, validated prompts, and searchable prompt records.
9. **Tested and validated the tool** - Entered sample cases, checked whether records were stored and displayed correctly, reviewed filtering and comparison functions, and corrected problems through additional development cycles.
10. **Published and shared the tool** - Embedded the application in Google Sites and prepared it for distribution through Microsoft Teams, allowing colleagues to access it through a web browser without installing software.

## What Claude Did

Claude served as a development partner rather than an independent decision-maker. It:
- Translated plain-language requirements into HTML, CSS, JavaScript, and Google Apps Script.
- Proposed interface structures and technical solutions.
- Generated and revised code for data entry, storage, filtering, search, and display.
- Helped troubleshoot errors and refine application behavior.
- Suggested ways to organize the prompt records and dashboard summaries.
- Supported rapid prototyping as the requirements evolved.

I remained responsible for defining the research problem, deciding what information should be captured, developing the issue taxonomy, evaluating Claude’s suggestions, testing the application, identifying errors, and approving the final design.

## Technology Used

- **Claude:** vAI-assisted application development and code refinement
- **HTML and CSS:** Interface structure and visual design
- **JavaScript:** User interactions, filtering, comparison, and data display
- **Google Apps Script:** Connection between the web interface and stored records
- **Google Sheets:** Data storage and prompt knowledge base
- **Google Sites:** Web publishing and live demonstration
- **Microsoft Teams:** Internal distribution and access

## Methodology

The project used an iterative, human-in-the-loop development approach. Requirements were first defined in plain language and translated into working prototypes with Claude. Each prototype was manually reviewed, tested, and revised before additional functionality was added.

The methodology combined:
- Human-centered design: The interface and workflow were designed around the needs of non-technical users.
- Iterative prototyping: The tool was developed through repeated cycles of requirement definition, code generation, testing, and refinement.
- Human-in-the-loop validation: Claude-generated code and recommendations were reviewed and tested before implementation.
- Failure-mode classification: Recurring LLM problems were organized into a consistent issue taxonomy.
- Knowledge management: Prompt revisions, lessons learned, and validated prompts were structured so they could be searched, shared, and reused.
- AI-assisted development: Claude accelerated technical implementation while human judgment guided the project’s purpose, structure, and quality standards.

