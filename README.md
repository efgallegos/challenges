# QA Challenge project

## Part 1 - Automated tests of a consent notice
### Build Setup

```bash
# install dependencies
$ yarn
```
### Launch Cypress 
```bash
# install dependencies
$ yarn cypress:open
```
### Run test suite headless

```bash
# install dependencies
$ yarn cypress:run
```

### Libraries

- [Cypress](https://github.com/cypress-io/cypress) - Web Automation framework
- [Cypress Cucumber processsor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor) - The cypress-cucumber-preprocessor adds support for using feature files when testing with Cypress. 



## Part 2 - Test strategy
The consent notices product is made of multiple parts:

SDKs (Web and Mobile) that are deployed on websites and mobile apps to show consent notices
APIs that provide configuration to the SDKs and store events collected by the SDKs
Administration portal ("Didomi Console") used to configure the SDKs through the APIs
In this part, we expect you to present how you would design and execute the entire testing strategy for the consent notices product. The strategy should include:

* How you would manage a database of tests that grows with new features
* What tests would be run manually vs automatically
* How the work of creating and automating test cases would be distributed between product managers, engineers, etc.
* How every component that is part of the product (backend, frontend, SDKs) would be tested and you would test the whole chain


### Proposed test strategy
Having all the test cases, plans and runs in one place centralized will improve the collaboration between developers, testers, product managers and any other stakeholder. A tool that allow you to track results and provide report and metrics of the testing progress and the overall quality of the application under test. I would strongly recommend using [TestRails](https://www.gurock.com/testrail/).
Manual testing is time consuming so we should use it only when it is appropiated, experience tells me that bug fixes, new features, changes requests of features that are still not automated and and the SDKs that can't be automated or are really hard to automated (like OTT SDKs) would be the ones tested manually. Most teams start automating their backends APIs, then they move to web apps and later mobile automation. If the plan is automate as much as possible due critically and priorization I think the key is to select the right set of tools from scratch in order to avoid code rewritting as much as possible. For mobile [Appium](https://appium.io/) would be a good option but it used Selenium and Webdriver under the hood.
The work of creating automating test cases should be a team effort, QA can propose a set of test cases candidates to be automated to the engineers and the product owners/managers in get feedback and set priorities. QA can lead the automation creation and leave in the devs the responsability of the automated test maintenance when new code introduced brakes one of the automated test cases.