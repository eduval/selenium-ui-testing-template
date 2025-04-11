const { By, Key, Builder, until } = require("selenium-webdriver");
const chrome = require("chromedriver");

// === TEST FUNCTION ===
async function testTeamRegistration() {
    let driver = await new Builder()
        .forBrowser("chrome")
        .build();

    try {
        // Step 1: Open the application URL
        await driver.get("http://localhost:5500/index.html");

        // Step 2: Fill in First Name
        await driver.findElement(By.id("firstname")).sendKeys("John");
        await driver.sleep(1000); // Wait 1 second after typing the first name

        // Step 3: Fill in Last Name
        await driver.findElement(By.id("lastname")).sendKeys("Doe");
        await driver.sleep(1000); // Wait 1 second after typing the first name

        // Step 4: Enter Group Size
        await driver.findElement(By.id("GroupSize")).sendKeys("3");
        await driver.sleep(1000); // Wait 1 second after typing the first name

        // Step 5: Click 'Add Member' Button
        await driver.findElement(By.id("addMemberBtn")).click();
        await driver.sleep(1000); // Wait 1 second after typing the first name

        // Step 6: Wait for the list to be populated with members
        await driver.wait(until.elementsLocated(By.css("#members option")), 1000);
        await driver.sleep(1000); // Wait 1 second after typing the first name

        // Step 7: Count the members added
        const optionsList = await driver.findElements(By.css("#members option"));
        await driver.sleep(1000); // Wait 1 second after typing the first name

        if (optionsList.length === 3) {
            console.log("✅ Test passed: 3 members were added.");
        } else {
            console.log(`❌ Test failed: Expected 3 members, but got ${optionsList.length}.`);
        }
    } catch (err) {
        console.error("⚠️ Test Error:", err);
    } finally {
        // Close the browser after 2 seconds to observe the result
        setTimeout(async function () {
            await driver.quit();
        }, 2000);  // Wait for 2 seconds before closing the browser
    }
}

// Run the test
testTeamRegistration();