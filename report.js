function printReport(pages) {
  console.log("==========");
  console.log("REPORT");
  console.log("==========");

  const sortedPages = sortPages(pages);

  for (const sortedPage of sortedPages) {
    const url = sortedPage[0];
    const hits = sortedPage[1];
    console.log(`Fount ${hits} links to page: ${url}`);
  }

  console.log("==========");
  console.log("REPORT");
  console.log("==========");
}

function sortPages(pages) {
  const pagesArr = Object.entries(pages);
  pagesArr.sort((a, b) => {
    const pageHitsA = a[1];
    const pageHitsB = b[1];
    return pageHitsB - pageHitsA;
  });
  return pagesArr;
}

module.exports = { sortPages, printReport };
