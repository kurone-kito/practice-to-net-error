import puppeteer from "puppeteer";

const browser = await puppeteer.launch({ headless: false });
const page = await browser.newPage();
await page.goto("http://localhost:3000/");
await new Promise((resolve) => setTimeout(resolve, 2000));
const [res] = await Promise.all([
  page.waitForNavigation(),
  page.click("button"),
]);
if (!res) {
  console.error("No response");
}
await new Promise((resolve) => setTimeout(resolve, 2000));
await page.close();
await browser.close();
