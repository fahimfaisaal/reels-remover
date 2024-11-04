
const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      let reelElement = document.evaluate(
        `//*[contains(text(), 'Reels and short videos')]`,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue

      if (reelElement) {
        let height = 7

        while (height--) {
          reelElement = reelElement.parentElement
        }

        reelElement.remove()
        console.info("Reels removed")
      }
    }
  }
});

// Start observing the entire document for added nodes
observer.observe(document.body, { childList: true, subtree: true });
