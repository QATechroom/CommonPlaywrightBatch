import { _baseTest, defineConfig } from '@playwright/test';
const ENV = process.env.ENV;

export default defineConfig({
    timeout: 30000, // Set global timeout
    workers:1,
    maxFailures:10,
    use: {
        browserName: 'chromium', // Change to 'firefox' or 'webkit' if needed
        //baseURL : 'https://parabank.parasoft.com/parabank/register.htm',
        headless: false, // Set to true for headless execution
        viewport: { width: 1280, height: 720 },
        screenshot: 'on', // Capture screenshots on failure
        video: 'retain-on-failure', // Capture video on failure
        trace: 'on-first-retry', // Capture tracing data
    },
    //reporter: [['list'], ['html', { open: 'never' }]], // Set reporters
    reporter:[
    ['dot'],
    ['list'], // Display in console
    ['allure-playwright', {
      outputFolder: process.env.ALLURE_RESULTS_DIR || 'allure-results', // Use dynamic folder
    }],
    ['json',{outputFile: 'report.json'}],
    [`html`, { outputFolder: `html-report`, open: 'never' }],["line"], ["allure-playwright"]
  ],

    projects: [
        {
          name: 'Chromium',
          use: { 
            browserName: 'chromium',
            baseURL:'https://the-internet.herokuapp.com/'
           },
        }
        // {
        //   name: 'firefox',
        //   use: { browserName: 'firefox' },
        // },
        // {
        //   name: 'webkit',
        //   use: { browserName: 'webkit' },
        // },
      ],
});