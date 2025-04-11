const { By, Key, Builder, until } = require("selenium-webdriver");
const chrome = require("chromedriver");

// === TEST FUNCTION ===
async function testMissingFirstName() {
    let driver = await new Builder()
        .forBrowser("chrome")
        .build();

    try {
        await driver.get("http://localhost:5500/index.html");

        // Leave First Name blank
        await driver.findElement(By.id("lastname")).sendKeys("Doe");
        await driver.sleep(1000); // Wait 1 second after typing the last name

        await driver.findElement(By.id("GroupSize")).sendKeys("2");
        await driver.sleep(1000); // Wait 1 second after typing the group size

        // Click the Add Member button
        await driver.findElement(By.id("addMemberBtn")).click();

        // Wait briefly to check for the alert before continuing
        await driver.sleep(1000);

        // Handle the alert if it appears
        try {
            await driver.wait(until.alertIsPresent(), 1000); // Wait for the alert
            const alert = await driver.switchTo().alert();
            await alert.accept(); // Dismiss the alert
            console.log("⚠️ Alert dismissed");
        } catch (alertErr) {
            console.log("⚠️ No alert appeared");
        }

        // Wait for the form processing after clicking the button
        await driver.sleep(1000); // Wait for any UI updates

        // Check if the member was added or not by looking at the members list
        const optionsList = await driver.findElements(By.css("#members option"));

        // If no members are added, the test passed
        if (optionsList.length === 0) {
            console.log("✅ Test passed: No members added without first name.");
        } else {
            console.log("❌ Test failed: Members were added despite missing field.");
        }
    } catch (err) {
        console.error("⚠️ Test Error:", err);
    } finally {
        await driver.quit();
    }
}

// Run the test
testMissingFirstName();
