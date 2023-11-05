<div align="center">

<img src="website/static/img/AutoPR_Mark_color.png" alt="AutoPR logo" width=300 />

<h1>🌳 AutoPR 🌳</h1>

[![Discord](https://badgen.net/badge/icon/discord?icon=nope&label&color=purple)](https://discord.gg/ykk7Znt3K6)
[![Docs](https://badgen.net/badge/icon/docs?icon=docs&label&color=blue)](https://docs.autopr.com)

Breathe life into your codebase

</div>

## 🌟 Features

🌳 Living summaries of your code in nested READMEs   
📝 TODOs kept track of in issues  
⏳ Keep history of an API call's result in git    
📄 Summarize changes by adding a "summarize" label to a PR  
🫵 Custom actions configured in YAML

## 🚀 Getting Started

Please see the [installation guide](https://docs.autopr.com/installing/github).

---

Below is an example of AutoPR's Living README:

<!-- Living README Summary -->
## 🌳 Living Summary

This folder contains a collection of files and subfolders for managing and automating tasks in an autonomous agent system. It includes a Dockerfile for setting up a Docker image, a license file specifying usage permissions, a makefile for automating development tasks, a configuration file for an automatic pull request workflow, a shell script for running a Python module, and configuration files for a Python project using Poetry. There is also a folder with Python files and subfolders providing functionality for automating tasks, as well as JSON schema files defining strict workflows and trigger configurations. These files and folders together provide a set of reusable components for automating tasks in different contexts.


### [`Dockerfile`](https://github.com/irgolic/AutoPR/blob/551bf9c940dc6e3e8e133ab31d31d51f02ae26bf/./Dockerfile)

🏗️ Sets up a Docker image based on the `duffn/python-poetry:3.9-bullseye` image    
🔧 Installs git from the bullseye-backports repository    
📥 Copies an entrypoint script and makes it executable    
📥 Copies the `pyproject.toml` and `poetry.lock` files    
🔧 Activates the virtual environment and installs the project dependencies using Poetry    
📥 Copies the rest of the files to the `/app` directory    
🔧 Installs the application using Poetry    
🚀 Sets the entrypoint to `/entrypoint.sh` for running the app    


### [`LICENSE.md`](https://github.com/irgolic/AutoPR/blob/551bf9c940dc6e3e8e133ab31d31d51f02ae26bf/./LICENSE.md)

📄 This file contains the MIT License.  
🔒 The license grants permission to use, modify, and distribute the software.  
📝 The license requires the copyright notice and permission notice to be included in all copies.  
🚫 The software is provided "as is" without warranty.  
📅 The license is valid until 2023.  
💼 The license is owned by Raphael Francis Ltd.  


### [`Makefile`](https://github.com/irgolic/AutoPR/blob/551bf9c940dc6e3e8e133ab31d31d51f02ae26bf/./Makefile)

📝 This file is a makefile-like configuration file.  
🔧 It defines various targets and their associated commands.  
💻 The targets are: `format`, `type`, `test`, `schema`, and `all`.  
🔧 The `format` target runs a command to format code using the `black` tool.  
🔧 The `type` target runs a command to perform type checking using `pyright`.  
🔧 The `test` target runs pytest on the `autopr/tests` directory.  
🔧 The `schema` target runs a command to generate configuration entrypoints using `autopr.models.config`.  
🔧 The `all` target runs all the targets in sequence: `format`, `type`, `test`, and `schema`.  
🔧 This file is meant to automate common development tasks and ensure code quality.  


### [`action.yml`](https://github.com/irgolic/AutoPR/blob/551bf9c940dc6e3e8e133ab31d31d51f02ae26bf/./action.yml)

📄 This file is a configuration file for an automatic pull request workflow.  
🔧 It specifies the details for running the workflow, such as the Docker image to use.  
🎨 It also includes branding information, such as the icon and color to use.  
🔑 The file defines inputs required for the workflow, such as the GitHub token and base branch.  
🎥 It includes a default loading GIF URL to display while the pull request is being generated.  
🌿 The file defines a template for the name of the target branch.  
🔄 It specifies whether to overwrite existing branches and pull requests when creating from issues.  


### [`autopr/`](https://github.com/irgolic/AutoPR/blob/551bf9c940dc6e3e8e133ab31d31d51f02ae26bf/./autopr)

This folder contains a collection of Python files and subfolders that provide functionality for managing and automating tasks in an autonomous agent system. The files include actions and utilities for tasks such as running commands, generating choices, publishing comments, committing and pushing changes, searching for keywords, and more. There are also files for configuring logging settings, defining triggers and workflows, defining data models, implementing services for managing actions, and automating workflow processes. Overall, this folder provides a set of reusable components for automating tasks in different contexts.  


### [`entrypoint.sh`](https://github.com/irgolic/AutoPR/blob/551bf9c940dc6e3e8e133ab31d31d51f02ae26bf/./entrypoint.sh)

📝 The file is a shell script  
🔧 It sets the Git configuration for a specific directory  
✉️ It sets the user email and name for Git commits  
📦 It activates a virtual environment  
🐍 It runs a Python module called `autopr.gh_actions_entrypoint`  


### [`poetry.lock`](https://github.com/irgolic/AutoPR/blob/551bf9c940dc6e3e8e133ab31d31d51f02ae26bf/./poetry.lock)

📄 This file is an executive summary  of a project or report  
🔍 It provides a high-level overview of the main points  
📝 It highlights key findings, conclusions, and recommendations  
📊 It may include a summary of data or analysis  
👥 It is intended for someone who is new to the project or report  
🚫 It does not include trivial details or technical explanations  
💡 It gives a clear understanding of the purpose and scope of the project  
👀 It provides a quick glance at the content without going into depth  
💼 It serves as a starting point for further exploration or discussion  
📌 It is concise and easy to read, even if the file is empty  


### [`pyproject.toml`](https://github.com/irgolic/AutoPR/blob/551bf9c940dc6e3e8e133ab31d31d51f02ae26bf/./pyproject.toml)

📋 This file is a configuration file for a Python project using Poetry.  
🔍 It contains information about the project's name, version, and authors.  
📄 The license of the project is specified as MIT.  
📦 It lists the packages and their dependencies required for the project.  
🧪 There are separate dependencies for testing and development.  
🔧 The build system used is Poetry.  
🔍 The file also includes configuration for the Pyright static type checker.  
🔍 It specifies the line length and target version for the Black code formatter.  


### [`strict_workflow_schema.json`](https://github.com/irgolic/AutoPR/blob/551bf9c940dc6e3e8e133ab31d31d51f02ae26bf/./strict_workflow_schema.json)

📄 The file is a JSON schema describing a strict workflow definition.  
🔍 It defines various actions that can be performed within the workflow.  
🔀 Actions include commenting, setting issue titles, walking files, making API calls, running bash commands, and more.  
📝 Each action has its own set of inputs and outputs.  
🔄 The workflow steps are defined as an array of actions.  
📚 The schema also includes definitions for various data types and declarations used within the actions.  
📝 The purpose of the file is to provide a standardized structure for defining and executing strict workflows.  
🗂️ The schema can be used to validate and ensure the correctness of workflow definitions.  
🧩 It allows for easy integration with other tools and systems that support the schema.  
📚 The file can serve as a reference for understanding the structure and capabilities of strict workflows.  


### [`trigger_schema.json`](https://github.com/irgolic/AutoPR/blob/551bf9c940dc6e3e8e133ab31d31d51f02ae26bf/./trigger_schema.json)

📄 This file is a JSON schema definition.  
🔄 It defines a data structure for a trigger configuration.  
🔀 The trigger configuration can include different types of triggers, such as label triggers, comment triggers, push triggers, and cron triggers.  
📝 Each trigger type has its own set of properties and sub-properties.  
🔀 The trigger configuration is defined within the "TopLevelTriggerConfig" object.  
🔀 The "triggers" property within the "TopLevelTriggerConfig" object is an array that can contain multiple triggers.  
🔀 Each trigger is defined as an object with specific properties based on its type.  
🔀 The schema also defines various models and templates that are used within the trigger configuration.  
🔀 The purpose of this file is to provide a standardized structure for defining trigger configurations in a specific system or application.  
🔀 This file can be used as a reference or guide for creating and validating trigger configurations.  


### [`workflow_schema.json`](https://github.com/irgolic/AutoPR/blob/551bf9c940dc6e3e8e133ab31d31d51f02ae26bf/./workflow_schema.json)

📄 This file is a JSON schema definition for a workflow definition.  
🔧 It defines various types and properties for different actions and declarations used in the workflow.  
📝 The schema includes definitions for actions like commenting, setting issue title, walking files, making API calls, running bash commands, etc.  
📚 It also defines different types of declarations like template, variable, constant, and lambda declarations.  
📋 The workflow definition includes a name, description, inputs, and outputs.  
🔢 It consists of a list of steps which can be actions, workflow invocations, or conditional statements.  
🔀 Conditional statements can have if-else branches and support different conditions like lambda expressions and context checks.  
🔄 Workflow invocations can be either regular or iterable.  
🔑 Overall, this file provides a structured definition for creating and executing workflows with various actions and conditions.  

<!-- Living README Summary -->