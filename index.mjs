import puppeteer from "puppeteer";

const browser = await puppeteer.launch({ headless: false });
const page = await browser.newPage();
await page.goto("http://localhost:3000/");
await new Promise((resolve) => setTimeout(resolve, 2000));
page.on("error", console.error);
page.on("pageerror", console.error);
await page.click("button");
await new Promise((resolve) => setTimeout(resolve, 2000));
await page.close();
await browser.close();
