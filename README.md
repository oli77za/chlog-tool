# CHLogTool

CHLogTool is a small opensource CLI tool to initialise, parse and update `CHANGELOG` files in projects.

This program works on changelog files that are in the format specified by [keep a changelog](https://keepachangelog.com/)

The reason for developing this tool is to automate the update of the changelog (adding the version number) when releasing a software project.

### Releasing a project

Typically, a release of project would be done in the following steps (which should be automated):
- Create a release branch
- Update the version in `package.json` or any other project configuraion (like `pom.xml`)
- Update the `CHANGELOG` moving the `Unreleased` section to the new version (by using this tool)
- And then merge into the main branch ... and tag appropriately

## Installation

The CLI can be installed as an NPM module in you project using yarn or npm

```
npm i --save-dev chlog-tool
```

```
yarn add --dev chlog-tool
```

or as a globally

```
npm i -g chlog-tool
```

```
yarn global add chlog-tool
```

## Usage

```
Parses and updates changelog files

Usage: chlogtool <command> [options]

Commands:
  chlogtool init           Creates a new CHANGELOG.md file
  chlogtool parse          Parses a changelog file and returns the JSON document
                           that represents it
  chlogtool release <ver>  Updates a CHANGELOG to a new release, pushes the
                           content of Unreleased into a version section

Options:
      --version  Show version number                                   [boolean]
  -i, --input    The input file to be used by the tool           [default: null]
      --help     Show help                                             [boolean]
```

### Init

Produces a skeleton `CHANGELOG` file using the repo URL.

```
$ chlogtool init --giturl https://github.com/test/testproject
```
The output is sent to `stdout`
```
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added 

- Initial implementation

[unreleased]: https://github.com/test/testproject
```

### Release

The `release` command is used to update a `CHANGELOG` by moving all the `Unreleased` content into a new released version.

## Contributing

In general, we follow the "fork-and-pull" Git workflow.

 1. **Fork** the repo on GitHub
 2. **Clone** the project to your own machine
 3. **Commit** changes to your own branch
 4. **Push** your work back up to your fork
 5. Submit a **Pull request** so that we can review your changes

**NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

### Linting

Please make sure your changes pass `eslint`. This will help make sure code is consistent throughout
the project. After installing the node dependencies for this project you can run `yarn lint`

### Testing

Please make sure your changes are covered by testing and don't break existing tests. Testing is
essential for determining backward compatibility and catching breaking changes. You can run
tests with `yarn test`