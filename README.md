# QA Playwright Automation Portfolio - Aline Santos

Welcome to the **QA Automation Portfolio** repository!  
This project showcases a collection of automated tests and examples built using [Playwright](https://playwright.dev/) with **TypeScript**. It demonstrates the implementation of test frameworks, organized test structure, and usage of modern automation practices. This portfolio is primarily for demonstration and personal development.

## 🧰 Tech Stack

- **Automation Framework**: [Playwright](https://playwright.dev/)
- **Language**: TypeScript
- **Package Manager**: npm

---

## 📁 Project Structure

qa-automation-portfolio/
├── tests/ # Core test cases
├── tests-examples/ # Sample and demo test cases
├── test-results/ # Playwright test result output
├── playwright.config.ts
├── package.json
└── tsconfig.json

---

## 🚀 Getting Started

### 1. Clone the Repository

git clone https://github.com/alinesantosts/qa-automation-portfolio-playwright.git
cd qa-automation-portfolio-playwright

## Install Dependencies
Make sure you have Node.js installed (v16 or higher is recommended).

npm install

## Install Playwright Browsers

npx playwright install

## 🧪 Running Tests

### Run All Tests

npx playwright test

### Run Tests from a Specific Folder

npx playwright test tests/

### Run a Specific Test File

npx playwright test tests/your-test-file.spec.ts

### Run regression tests
npx playwright test --project="Regression"

### Run smoke tests
npx playwright test --project="Smoke"

## View Test Results
After running tests, results are stored in the test-results/ directory.

To open the HTML report:

npx playwright show-report

## ✅ Example Test Cases
Sample test cases and automation concepts can be found in the tests-examples/ folder. These are useful for learning and demonstration purposes.

## 📌 Notes
Tests are written in TypeScript for type safety and clarity.

Playwright configuration is managed via playwright.config.ts.

Supports parallel test execution, retries, and rich reporting.
