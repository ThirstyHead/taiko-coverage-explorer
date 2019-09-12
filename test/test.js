const { openBrowser, goto, closeBrowser, coverage } = require('taiko');
const {
  runCoverage
} = coverage;

(async () => {
    try {
        await openBrowser();
        await goto("http://thirstyhead.com/groceryworks");
        await runCoverage();
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
