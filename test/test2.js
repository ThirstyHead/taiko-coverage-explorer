const { openBrowser, goto, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto('http://thirstyhead.com/groceryworks');
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
