# ActionRelease
---
![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=flat&logo=pnpm&logoColor=f69220)
![License: MIT](https://img.shields.io/github/license/AstralJaeger/release)
![build](https://github.com/AstralJaeger/foldersorter/actions/workflows/build.yml/badge.svg?branch=master)

**This action is currently under active development**

A GitHub Action to create automatic releases with SemVer or date tagging. 

This repository is published under the MIT license, 
as such please feel free to do whatever you want with it,
but I would like you to stay fair. 
This repository is created using the [Astraljaeger#node](https://github.com/AstralJaeger/node) template.

# Supported Parameters
| Parameter       | Required | Description                               | Default       |
|:----------------|:--------:|:------------------------------------------|:--------------|
| ``token``       |   yes    | GitHub Repo Token                         |               |
| ``tag``         |   yes    | Release tag                               | ``"latest"``  |
| ``title``       |   yes    | Release title                             | ``"Release"`` |
| ``description`` |    no    | Release description                       | ``""``        |
| ``draft``       |    no    | Release marked as draft                   | ``false``     |
| ``prerelease``  |    no    | Release marked as prerelease              | ``false``     |
| ``changelog``   |    no    | Generate a commit-history based changelog | ``true``      |
| ``files``       |    no    | Generate a commit-history based changelog | ``[]``        |

# Sponsor
If you would like to support me for my open source work you can do so through GitHub Sponsorships.
I'm always happy for a coffee.

# License
The source code for this project is released under the MIT License. This project is not associated with GitHub.
