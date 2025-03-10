const { Builder, By, until } = require("selenium-webdriver");

async function testLogin() {
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        await driver.get("file:///D:/Web Dev/index.html");

        await driver.findElement(By.id("username")).sendKeys("testuser");
        await driver.findElement(By.id("password")).sendKeys("password123");
        let loginButton = await driver.findElement(By.id("loginButton"));
        loginButton.click();


        await driver.wait(until.elementLocated(By.id("loginButton")), 5000);


        await driver.wait(until.stalenessOf(loginButton), 10000);


        await driver.executeScript("alert('Login Test Passed!');");
        console.log("Login Test Passed");

    } catch (error) {
        console.error("Login Test Failed", error);
    } finally {
        await driver.sleep(5000);
        await driver.quit();
    }
}

testLogin();
