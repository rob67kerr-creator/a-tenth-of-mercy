/* =====================================================================
   ARCHIVE ROOM CONTENTS
   ---------------------------------------------------------------------
   To add a document: copy one { ... } line inside a folder's "items",
   change "file" to the exact file name in your GitHub repo, and give it
   a "title". Optional: "note" adds a small caption.

   Previews: for each image, a small preview is looked for at
   thumbs/<file name without extension>.jpg  (PDFs and Word files just
   get an icon). If no preview exists, the card shows an icon instead.

   To move a document to a different folder, cut its line and paste it
   into the other folder's "items". The files themselves never have to
   move on GitHub.
   ===================================================================== */

const ARCHIVE = [

  {
    id: "samuel-i-cabell",
    name: "Samuel I. Cabell",
    items: [
      { file: "will1.jpg", title: "Will & Codicils, page 1" },
      { file: "will2.jpg", title: "Will & Codicils, page 2" },
      { file: "will3.jpg", title: "Will & Codicils, page 3" },
      { file: "will4.jpg", title: "Will & Codicils, page 4" },
      { file: "will5.jpg", title: "Will & Codicils, page 5" },
      { file: "Samuel_I_Cabell_Will_Transcription_corrected.docx", title: "Will transcription", note: "Word document" },
      { file: "samuel-i-cabell-death-certificate-highlited.png", title: "Death certificate (highlighted)" }
    ]
  },

  {
    id: "census",
    name: "Census",
    items: [
      { file: "mary-J-ross-1850.png", title: "Mary J. Ross, 1850" },
      { file: "1860-census.jpg", title: "1860 Census" },
      { file: "1870-census.jpg", title: "1870 Census" },
      { file: "1880-census-little-rock-arkansas-upright.pdf", title: "1880 Census, Little Rock, Arkansas" },
      { file: "1880-census-marina-a.jpg", title: "1880 Census, Marina (a)" },
      { file: "1880-census-marina b.png", title: "1880 Census, Marina (b)" },
      { file: "1900_marina_census_highlighted.png", title: "1900 Census, Marina (highlighted)" }
    ]
  },

  {
    id: "chancery",
    name: "Chancery",
    items: [
      { file: "Transcription_of_Sam_Barnes_Vs_Mary_Barnes_.pdf", title: "Transcription: Sam Barnes vs. Mary Barnes" },
      { file: "Transcription_of_Sam_Barnes_land_sale.pdf", title: "Transcription: Sam Barnes land sale" },
      { file: "sam-petition-a.jpg", title: "Sam's petition, page a" },
      { file: "sam-petition-b.jpg", title: "Sam's petition, page b" },
      { file: "sam-petition-c.jpg", title: "Sam's petition, page c" },
      { file: "mary-petition-a.jpg", title: "Mary's petition, page a" },
      { file: "mary-petition-b.jpg", title: "Mary's petition, page b" },
      { file: "sam-sells-land-1.jpg", title: "Sam sells land, page 1" },
      { file: "sam-sells-land-2.jpg", title: "Sam sells land, page 2" }
    ]
  },

  {
    id: "newspapers",
    name: "Newspapers",
    items: [
      { file: "west-virginia-journal-1865-a.png", title: "West Virginia Journal, 1865 (a)" },
      { file: "west-virginia-journal-1865-b.png", title: "West Virginia Journal, 1865 (b)" },
      { file: "west_virginia_journal_1865_b_highlighted.png", title: "West Virginia Journal, 1865 (b, highlighted)" },
      { file: "athens-messenger-jul-29-1869-highlight.pdf", title: "Athens Messenger, July 29, 1869" },
      { file: "athens-messenger-sep-04-1879-highlight.pdf", title: "Athens Messenger, September 4, 1879" },
      { file: "murder-article.jpg", title: "Murder article" }
    ]
  },

  {
    id: "photos",
    name: "Photos",
    items: [
      { file: "cemetery1.jpg", title: "Cemetery 1" },
      { file: "cemetery2.jpg", title: "Cemetery 2" },
      { file: "cemetery3.jpg", title: "Cemetery 3" },
      { file: "cemetery4.jpg", title: "Cemetery 4" },
      { file: "cemetery5.jpg", title: "Cemetery 5" },
      { file: "grave1.jpg", title: "Grave 1" },
      { file: "grave2.jpg", title: "Grave 2" },
      { file: "grave3.jpg", title: "Grave 3" },
      { file: "20260803_111940.jpg", title: "Photo, August 3, 2026" },
      { file: "20260804_120442.jpg", title: "Photo, August 4, 2026" }
    ]
  },

  {
    id: "misc",
    name: "Miscellaneous",
    items: [
      { file: "sam-mary-wedding.jpg", title: "Sam & Mary wedding" },
      { file: "1886-arkansas-city-directory.png", title: "1886 Arkansas city directory" },
      { file: "1855-annual-catalogue-albany manual-labor university-1855-56.pdf", title: "Albany Manual Labor University, annual catalogue 1855–56" }
    ]
  }

];
