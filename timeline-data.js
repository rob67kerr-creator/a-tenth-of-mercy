/* =====================================================================
   SAM BARNES TIMELINE
   ---------------------------------------------------------------------
   Each entry is one block. Keep blocks separated by commas and keep
   text inside straight quotes (do not type a straight double quote
   inside your text).

     date:  the heading in gold ("About 1832-1835", "July 1870")
     title: a short headline
     text:  the explanation
     links: documents to open, as { label, folder, file }.
            folder is the folder id: samuel-i-cabell, census, chancery,
            newspapers, cemetery.  file is the exact file name.
     key:   true gives the entry a gold highlight (use sparingly)
   ===================================================================== */

const TIMELINE = [
  {
    date: "About 1832",
    title: "Born in Virginia",
    text: "Sam was born in Virginia, in what is now West Virginia, the son of Samuel I. Cabell and Mary Barnes. The 1860 census gives his age as 28 and the 1870 census gives it as 38, both pointing to about 1832.",
    links: [
      { label: "1860 Census", folder: "census", file: "1860-census.jpg" },
      { label: "1870 Census", folder: "census", file: "1870-census.jpg" }
    ]
  },
  {
    date: "October 1, 1853",
    title: "Marries Mary J. Ross",
    text: "Sam marries Mary J. Ross in Hamilton County, Ohio. Mary had been listed at age 15 in the 1850 census, which gives us her age with confidence.",
    links: [
      { label: "Marriage record", folder: "census", file: "sam-mary-wedding.jpg" },
      { label: "1850 Census", folder: "census", file: "mary-J-ross-1850.png" }
    ]
  },
  {
    date: "1855\u201356",
    title: "His siblings are students in Ohio",
    text: "Five of Sam\u2019s brothers and sisters are enrolled at the Albany Manual Labor University in Athens County, Ohio, almost ten years before their father\u2019s death. Sam is not on the list, and his census entries say he could not read or write, but he was already living in Ohio, and the index includes names he would later meet in politics.",
    links: [ { label: "Albany catalogue", folder: "samuel-i-cabell", file: "1855-annual-catalogue-albany manual-labor university-1855-56.pdf" } ]
  },
  {
    date: "May 9, 1859",
    title: "His father\u2019s will names him",
    text: "Samuel I. Cabell\u2019s will leaves Sam, Mary Barnes and each of the children a sum of money, $2,000 in Sam\u2019s case.",
    links: [ { label: "Will, page 4", folder: "samuel-i-cabell", file: "will4.jpg" } ]
  },
  {
    date: "June 21, 1860",
    title: "A boatman in Portsmouth, Ohio",
    text: "The 1860 census lists Sam as a boatman in Portsmouth, Scioto County, Ohio, with his wife Mary J. and their three children, Samuel, Sarah and Pochahontas.",
    links: [ { label: "1860 Census", folder: "census", file: "1860-census.jpg" } ]
  },
  {
    date: "July 1865",
    title: "His father is killed",
    text: "Samuel I. Cabell is killed near his home in Kanawha County. His will is admitted to probate that September and October.",
    links: [
      { label: "West Virginia Journal", folder: "newspapers", file: "west_virginia_journal_1865_b_highlighted.png" },
      { label: "Will, page 3", folder: "samuel-i-cabell", file: "will3.jpg" }
    ]
  },
  {
    date: "October\u2013December 1867",
    title: "Sues to divide the estate",
    text: "Sam sues his mother and the other heirs to partition his father\u2019s land. On December 13 the court orders it divided into eleven equal shares, one of them his.",
    links: [
      { label: "The decree", folder: "chancery", file: "sam-petition-c.jpg" },
      { label: "Transcription", folder: "chancery", file: "Transcription_of_Sam_Barnes_Vs_Mary_Barnes_.pdf" }
    ]
  },
  {
    date: "July 1869",
    title: "A barn burns in Albany, Ohio",
    text: "A barn belonging to Mr. Samuel Barnes of Albany is destroyed by fire. We believe this is the same Sam Barnes.",
    links: [ { label: "Athens Messenger, 1869", folder: "newspapers", file: "athens-messenger-jul-29-1869-highlight.pdf" } ]
  },
  {
    date: "July 1870",
    title: "Farming in Kanawha County",
    text: "The 1870 census finds Sam, listed as a farmer, in Union Township, Kanawha County, with his wife and son, next door to his mother and her younger children.",
    links: [ { label: "1870 Census", folder: "census", file: "1870-census.jpg" } ]
  },
  {
    date: "August 30, 1879",
    title: "Speaks at the Nelsonville convention",
    text: "At a convention of Black voters at Nelsonville, in Athens County, Ohio, Sam calls the meeting to order, serves on the committee on resolutions, is named to the committee of fourteen, and speaks near the close.",
    links: [ { label: "Athens Messenger, 1879", folder: "newspapers", file: "athens-messenger-sep-04-1879-highlight.pdf" } ]
  },
  {
    date: "February 28 \u2013 March 11, 1880",
    title: "Sells his land",
    text: "Sam and Mary J., \u201cof the County of Athens, State of Ohio,\u201d sell lot No. 10 to the overseers of the poor of Kanawha County for $1,700. Sam signs in Kanawha County on March 1, and Mary signs in Athens County on March 6. The deed is recorded March 11. This is the last known public record of Sam Barnes.",
    key: true,
    links: [
      { label: "Deed, page 2", folder: "chancery", file: "sam-sells-land-2.jpg" },
      { label: "Transcription", folder: "chancery", file: "Transcription_of_Sam_Barnes_land_sale.pdf" }
    ]
  },
  {
    date: "June 4, 1880",
    title: "His wife is in Little Rock",
    text: "Mary J. Barnes appears in the census in Little Rock, Arkansas, on her own with four of their children, three daughters and a son. Sam is not listed.",
    links: [ { label: "1880 Census, Little Rock", folder: "census", file: "1880-census-little-rock-arkansas-upright.pdf" } ]
  },
  {
    date: "1886",
    title: "Still no sign of Sam",
    text: "Mary J. and her daughter Josie (Josephine) are both listed as laundresses at the same Little Rock address. Sam is not listed.",
    links: [ { label: "1886 city directory", folder: "census", file: "1886-arkansas-city-directory.png" } ]
  },
  {
    date: "November 4, 1904",
    title: "Mary has prospered in Little Rock",
    text: "A Little Rock newspaper reports a $5,000 real estate transfer from Mary Barnes to Josephine Barnes: two lots in Braddock\u2019s Addition and a quarter-quarter section of land. The 15-year-old who appears in someone else\u2019s household in the 1850 census now owns valuable property in Little Rock. (The paper prints Mary\u2019s middle initial as T.)",
    links: [ { label: "Gazette, 1904", folder: "newspapers", file: "mary-barnes-1904-real-estate.jpg" } ]
  }
];
