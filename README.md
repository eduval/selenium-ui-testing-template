# DevOps Infrastructure
## Introduction to Automation Testing with Selenium

This repository introduces **automation testing** in the context of **DevOps**, focusing on real-world testing using **Selenium WebDriver** with **Node.js**.

Automation testing plays a key role in DevOps pipelines to ensure the reliability and quality of software deployments through CI/CD. Selenium enables automated UI tests that simulate user interactions and validate outcomes programmatically.

---

## 📘 Topics Covered

- What is Automation Testing?
- Importance of Automated Tests in DevOps
- Types of Software Testing
- Where Selenium fits in the testing strategy
- Using Selenium WebDriver with Node.js
- Headless browser testing
- Writing and running automated UI tests
- Integration of tests into CI/CD pipelines

---

## 📂 Project Structure

selenium-automation-template/
├── tests/
│   ├── test1_basic_registration.js
│   └── test2_missing_firstname.js
├── app/
│   └── index.html
├── README.md
├── package.json
└── .gitignore

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js (v16+ recommended)
- Google Chrome browser
- ChromeDriver (`chromedriver` npm package)

### 🔧 Setup

1. Clone the repository
```bash
git clone https://github.com/your-username/selenium-ui-testing-template.git
cd selenium-ui-testing-template
npm install
```

2. Install Dependencies
```bash
npm install
```

3. Run a Local Web Server (Optional)
You can serve the frontend file with a simple server:
```bash
npm install -g serve
serve app
```

4. Run Selenium Tests
Run any test file individually with:
```bash
node tests/test1_basic_registration.js
Or for the second test:
node tests/test2_missing_firstname.js
```

## 🧪 Tests Included

| Test File | Description |
|-----------|-------------|
| `test1_basic_registration.js` | Simulates a complete team registration process and validates correct behavior |
| `test2_missing_firstname.js` | Checks form validation by omitting required input and ensuring no member is added |

---

## 🔧 Technologies Used

- Selenium WebDriver
- Node.js
- ChromeDriver
- Headless Chrome
- HTML (for mock web app)

---

## 🤝 Contributing

Feel free to:
- Fork this repo
- Open issues
- Submit pull requests

---

## 📚 Learning Outcomes

This project is used in SQAE114 - DevOps Infrastructure Level 2 and helps learners:

- Understand the role of UI testing in DevOps
- Implement Selenium-based test automation
- Simulate user interactions with forms
- Validate application behavior through code

---

## 📜 License

This project is open-source and licensed under the [MIT License](LICENSE).

---

## ✨ Instructor Notes

This repository serves both as:
1. A learning tool
2. A template for students to expand on:

Potential expansions:
- Integrate into CI/CD pipelines (Jenkins/GitHub Actions)
- Add more test scenarios (invalid emails, form resets)
- Use assertion libraries (Chai/Mocha) for formal test outcomes

---

👨‍🏫 **Created by Uyen**  
Instructor | Cisco ASC | DevOps & Automation Advocate  
📧 educristo@gmail.com  
🌐 [LinkedIn Profile](https://www.linkedin.com/in/washington-eduardo-valencia-1ab8aa189/)