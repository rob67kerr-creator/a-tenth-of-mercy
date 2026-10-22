/* =====================================================================
   ARCHIVE ROOM CONTENTS
   ---------------------------------------------------------------------
   Each document is one block like this, inside a folder's "items":

     {
       "file": "exact-file-name-in-GitHub.jpg",
       "title": "The title people see",
       "desc": "The explanation shown in the text box when clicked"
     },

   Keep every block separated by a comma, and keep text inside straight
   quotes. Do not type a straight double quote inside your text.
   Optional: "note" adds a small caption under the thumbnail.

   Previews: each item looks for a small picture at
   thumbs/<file name without extension>.jpg ; if none exists, an icon
   is shown instead.

   To move a document to another folder, cut its whole block and paste
   it into that folder's "items". Files never have to move on GitHub.
   ===================================================================== */

const ARCHIVE = [
  {
    "id": "samuel-i-cabell",
    "name": "Samuel I. Cabell",
    "items": [
      {
        "file": "will1.jpg",
        "title": "Samuel I Cabell will, page 1",
        "desc": "The opening of Samuel I. Cabell\u2019s will, written in his own hand in Kanawha County, Virginia. It directs that his enslaved people be hired out for a term of years and then freed, and it declares Mary Barnes and all her children free immediately at his death."
      },
      {
        "file": "will2.jpg",
        "title": "Samuel I Cabell will, page 2",
        "desc": "The close of the first will, naming its executors, followed by a codicil dated September 12, 1863, which cancels freedom for those who had absconded or been taken by the Federal Army. Below it begins a separate statement declaring Mary Barnes and her children to be free."
      },
      {
        "file": "will3.jpg",
        "title": "Samuel I Cabell will, page 3",
        "desc": "The end of the statement dated April 6, 1858, followed by the Kanawha County Recorder\u2019s Office entry of September 11, 1865, when the will and its codicils were admitted to probate."
      },
      {
        "file": "will4.jpg",
        "title": "Samuel I Cabell will, page 4",
        "desc": "The start of the will dated May 9, 1859: Samuel emancipates the people he enslaved and leaves sums of money to Mary Barnes and each of her children."
      },
      {
        "file": "will5.jpg",
        "title": "Samuel I Cabell will, page 5",
        "desc": "The remainder of the 1859 will, with Samuel\u2019s signature and seal, and the Recorder\u2019s probate entry of October 10, 1865."
      },
      {
        "file": "Samuel_I_Cabell_Will_Transcription_corrected.docx",
        "title": "Samuel I Cabell will, transcription",
        "note": "Word document",
        "desc": "A typed transcription of the will and codicils shown in these pages, with notes where the handwriting is unclear."
      },
      {
        "file": "samuel-i-cabell-death-certificate-highlited.png",
        "title": "Samuel I Cabell death register (highlighted)",
        "desc": "Samuel I. Cabell\u2019s entry in the death register. Note that the cause of death is given as \u201cMurdered, shot.\u201d"
      },
      {
        "file": "1855-annual-catalogue-albany manual-labor university-1855-56.pdf",
        "title": "1855\u201356 student index: Albany Manual Labor University",
        "note": "PDF",
        "desc": "Five of Samuel I. Cabell\u2019s children (Mary J., Sydney, Eunice and Seelah Barnes, and Lucy M. Cabell, all of \u201cKanawha, Virginia\u201d) are enrolled at the Albany Manual Labor University in Ohio almost ten years before their father\u2019s death. This changes the assumption that his children were educated only after his death, as his will directed. Several other names in the index connect to Sam Barnes\u2019s later life. Two are highlighted: T. J. Furgerson and Milton Holland match T. J. Ferguson, who presided, and M. M. Holland at the 1879 Nelsonville convention. The index also lists a Nathaniel Wiley of Lee, and the 1867 chancery decree names Lucy\u2019s husband as Nathaniel Wiley. We don\u2019t have proof that Sam Barnes went to school here, but he was already living in Ohio at the time, and he later became connected with these men through his political life. However, his census entries state that he could not read or write, so it is quite possible he never took advantage of the provision in Cabell\u2019s will."
      }
    ]
  },
  {
    "id": "census",
    "name": "Census & Records",
    "items": [
      {
        "file": "mary-J-ross-1850.png",
        "title": "1850 Census: Mary J. Ross",
        "desc": "Mary J. Ross, age 15, would become Mrs. Sam Barnes about three years later. She is not living with her parents. She is living, or boarding, at the home of Thompkins Cane and his wife. Mary went from these humble beginnings to become a shrewd businesswoman, and by the end of her life she owned a great deal of valuable real estate in Arkansas."
      },
      {
        "file": "sam-mary-wedding.jpg",
        "title": "1853 marriage record: Samuel Barnes and Mary J. Ross",
        "desc": "Marriage return from Hamilton County, Ohio, recording the marriage of Samuel Barnes and Mary J. Ross on October 1, 1853. The record above it, for another couple, is unrelated."
      },
      {
        "file": "1860-census.jpg",
        "title": "1860 Census: Portsmouth, Ohio",
        "desc": "Portsmouth, Scioto County, Ohio, enumerated June 21, 1860. Sam and Mary have three children, Samuel, Sarah and Pochahontas (as the census spells it), and Sam is listed as a boatman."
      },
      {
        "file": "1870-census.jpg",
        "title": "1870 Census: Union Township, Kanawha County, West Virginia",
        "desc": "Sam is back in Kanawha with his family, living right next to his mother, Mary Cabell. He is now listed as a farmer, working the family land he inherited. (The page spells his surname \u201cBarns.\u201d)"
      },
      {
        "file": "1880-census-little-rock-arkansas-upright.pdf",
        "title": "1880 Census: Mary J. Barnes, Little Rock, Arkansas",
        "desc": "Sam\u2019s wife, Mary, is now living in Little Rock, Arkansas, enumerated June 4, 1880, with four of their children, three daughters and a son. Her occupation is listed as \u201cKeeping Restaurant.\u201d She is listed as married, but Sam Barnes is not living there. This is corroborated by the 1886 city directory, which also shows no sign of him."
      },
      {
        "file": "1886-arkansas-city-directory.png",
        "title": "1886 Little Rock city directory, pages 136\u2013137",
        "desc": "We see Mary and her daughter Josephine (listed as \u201cJosie\u201d) both listed as laundresses at 1314 W. 6th Street, and still no sign of Sam Barnes (highlighted)."
      },
      {
        "file": "1880-census-marina-a.jpg",
        "title": "1880 Census: Marina, Kanawha County",
        "desc": "A page from Union South District, Kanawha County, West Virginia, enumerated in June 1880. We see Sam\u2019s sister, Marina, living with her husband, Elijah Hurtt, and their children in Kanawha. The census taker writes the surname \u201cHart.\u201d"
      },
      {
        "file": "1880-census-marina b.png",
        "title": "1880 Census: Marina (close-up)",
        "desc": "A close-up of the same page, showing Marina\u2019s household with her husband, Elijah Hurtt."
      },
      {
        "file": "1900_marina_census_highlighted.png",
        "title": "1900 Census: Marina",
        "desc": "Sam\u2019s sister Marina and her family in 1900 (highlighted), living on their own farm with her husband, Elijah Hurtt, and their grown sons. The census taker spells the surname \u201cHurst.\u201d"
      }
    ]
  },
  {
    "id": "chancery",
    "name": "Chancery",
    "items": [
      {
        "file": "sam-petition-a.jpg",
        "title": "Chancery suit: Samuel Barnes vs. Mary Barnes and others, October 5, 1867",
        "desc": "Court entry in the suit Sam Barnes brought against his mother and the other heirs of Samuel I. Cabell. The court names Napoleon B. Cabell guardian for the younger children so he can defend their interests."
      },
      {
        "file": "sam-petition-b.jpg",
        "title": "Chancery suit: guardian files for the children, December 10, 1867",
        "desc": "Napoleon B. Cabell is allowed to file an answer on behalf of the minor defendants Eunice, Alice, Marina, James B., Betty and William Clifford Barnes."
      },
      {
        "file": "sam-petition-c.jpg",
        "title": "Chancery suit: the decree dividing the land, December 13, 1867",
        "desc": "After the death of Samuel I. Cabell, Sam Barnes brought this suit against his mother and the other heirs to have the land divided. The court orders it split into eleven equal shares: one each for Sam, his mother Mary, and nine of his brothers and sisters, with commissioners appointed to survey and allot them."
      },
      {
        "file": "Transcription_of_Sam_Barnes_Vs_Mary_Barnes_.pdf",
        "title": "Transcription: Samuel Barnes vs. Mary Barnes and others, 1867",
        "note": "PDF",
        "desc": "A typed transcription of the three court entries above, with notes on uncertain readings and on how the names are spelled."
      },
      {
        "file": "mary-petition-b.jpg",
        "title": "October 25, 1869: Mary\u2019s youngest children become Cabell",
        "desc": "Mary Barnes successfully petitions the court to have her youngest children\u2019s surname changed from Barns to Cabell. This is an important document, because it shows that only her youngest children took the name, which dispels the previously held belief that all of her children had their names changed."
      },
      {
        "file": "mary-petition-a.jpg",
        "title": "March 24, 1870: Mary Barnes becomes Mary Cabell",
        "desc": "Mary Barnes successfully petitions the court to have her own last name legally changed to Cabell."
      },
      {
        "file": "sam-sells-land-1.jpg",
        "title": "1880 deed: Sam Barnes sells his land, page 1",
        "desc": "Deed dated February 28, 1880. Sam and his wife Mary, \u201cof the County of Athens, State of Ohio,\u201d sell their Parcel 10 (lot No. 10 in the partition of Samuel I. Cabell\u2019s land) to the Overseers of the Poor of Kanawha County for $1,700. The land adjoins the county\u2019s Poor House farm, and it became part of it. The top of the page is the end of an unrelated deed."
      },
      {
        "file": "sam-sells-land-2.jpg",
        "title": "1880 deed: Sam Barnes sells his land, page 2",
        "desc": "The signatures of Samuel and Mary J. Barnes, the county committee\u2019s report, and the certificates of acknowledgment. Sam signs in Kanawha County on March 1, 1880, and Mary J. in Athens County, Ohio, on March 6. The deed is recorded March 11, 1880. This is the last known written document of Sam Barnes. A few months later, in June 1880, his wife turns up in the Little Rock census as married, but living with their children only."
      },
      {
        "file": "Transcription_of_Sam_Barnes_land_sale.pdf",
        "title": "Transcription: Sam Barnes land sale, 1880",
        "note": "PDF",
        "desc": "A typed transcription of the 1880 deed and its certificates. This is the last known written document of Sam Barnes. A few months later, in June 1880, his wife turns up in the Little Rock census as married, but living with their children only."
      }
    ]
  },
  {
    "id": "newspapers",
    "name": "Newspapers",
    "items": [
      {
        "file": "west-virginia-journal-1865-a.png",
        "title": "West Virginia Journal, July 26, 1865: front page",
        "desc": "The front page of the Charleston, West Virginia, newspaper for Wednesday, July 26, 1865 (Volume I, Number 40). The story about Samuel I. Cabell is on the inside page."
      },
      {
        "file": "west-virginia-journal-1865-b.png",
        "title": "West Virginia Journal, July 26, 1865: Local Matters",
        "desc": "The inside page of the same issue, where the paper\u2019s report on the death of Samuel I. Cabell appears."
      },
      {
        "file": "west_virginia_journal_1865_b_highlighted.png",
        "title": "West Virginia Journal, July 26, 1865: \u201cThe Killing of Samuel I. Cabell\u201d (highlighted)",
        "desc": "The paper reports the excitement in Charleston over news of Cabell\u2019s death the Thursday before, and says seven men had been arrested and were being examined before two justices. It calls the rumors about the cause so contradictory that no reliable account can be given. Cabell\u2019s friends call it premeditated murder; the prisoners\u2019 friends say he had insulted them for their Union loyalty and came at them with a knife, and that he was shot in self-defense. The paper says it will give no opinion until the evidence is out."
      },
      {
        "file": "murder-article.jpg",
        "title": "Newspaper clipping on Samuel Cabell\u2019s killing, 1865",
        "desc": "A clipping reporting that Samuel Cabell, a citizen of Kanawha County, West Virginia, was killed near his own house. The writer says he does not know the facts but presumes the killing came from hostility toward men of Cabell\u2019s Southern principles, and describes Cabell as one of the wealthiest men on the Kanawha, with a large family of children by his enslaved women. The name of the newspaper and the date are not known."
      },
      {
        "file": "athens-messenger-jul-29-1869-highlight.pdf",
        "title": "Athens Messenger, July 29, 1869, page 3",
        "note": "PDF",
        "desc": "A barn belonging to Mr. Samuel Barnes of Albany was destroyed by fire on a Tuesday afternoon, and the origin of the fire is unknown. We believe this story is about Sam Barnes, who at this point was living in Albany, Athens County, Ohio. By the 1870 census he is back in Kanawha."
      },
      {
        "file": "athens-messenger-sep-04-1879-highlight.pdf",
        "title": "Athens Messenger, September 4, 1879, page 1: the Nelsonville convention",
        "note": "PDF",
        "desc": "The \u201cColored Convention\u201d at Nelsonville, Ohio, on August 30, 1879, was a very high-profile event, and Sam Barnes played a large role in it. He called the convention to order, served on the committee on resolutions, was named for York Township on the committee of fourteen, and spoke near the close. Several names in this article match names in the Albany student index, including T. J. Ferguson, who presided, and M. M. Holland, an honorary member. This shows a possible connection Sam might have had with them for years."
      },
      {
        "file": "mary-barnes-1904-real-estate.jpg",
        "title": "Daily Arkansas Gazette, November 4, 1904: Mary Barnes\u2019s property transfer",
        "desc": "In the \u201cReal Estate Transfers\u201d column, Mary Barnes (the paper prints her middle initial as \u201cT.\u201d) transfers to Josephine Barnes two lots in Braddock\u2019s Addition and a quarter-quarter section of land, for $5,000 (highlighted). Josephine is presumably her daughter, the Josie of the 1886 directory. Daily Arkansas Gazette, Little Rock, November 4, 1904, page 4. Mary, a 15-year-old living in someone else\u2019s household in the 1850 census, had by now prospered greatly in Little Rock."
      }
    ]
  },
  {
    "id": "cemetery",
    "name": "Cabell Cemetery",
    "items": [
      {
        "file": "grave1.jpg",
        "title": "The Cabell Cemetery",
        "desc": "The Cabell Cemetery on the campus of West Virginia State University, in Institute, West Virginia."
      },
      {
        "file": "grave2.jpg",
        "title": "Samuel I. Cabell\u2019s monument",
        "desc": "The obelisk marking Samuel I. Cabell\u2019s grave in the Cabell Cemetery."
      },
      {
        "file": "grave3.jpg",
        "title": "The historic marker",
        "desc": "The historic marker at the Cabell Cemetery, headed \u201cAn Epic Love Story\u201d That Enabled the Foundation of West Virginia State University."
      },
      {
        "file": "cemetery1.jpg",
        "title": "Cabell Cemetery dedication program: cover",
        "desc": "Cover of the program for the Cabell Cemetery dedication at West Virginia State University, held May 10, 2024, at 11:30 a.m."
      },
      {
        "file": "cemetery3.jpg",
        "title": "Cabell Cemetery dedication program: the ceremony",
        "desc": "The order of the ceremony: a welcome, greetings from the chair of the WVSU Board of Governors, \u201cThe Cabell Family and WVSU\u201d by Dr. Langley A. Spurlock \u201959, a great-great-grandson of Mary Barnes Cabell and Samuel I. Cabell, and remarks by the university president."
      },
      {
        "file": "cemetery4.jpg",
        "title": "Cabell Cemetery dedication program: history of the project",
        "desc": "The program\u2019s history of the project: how the Cabell family\u2019s land became the site of West Virginia State University, and how graves from the nearby Brown Cemetery, including those of Eunice Cabell Brown and her husband, were moved to join the Cabell Cemetery in 2024."
      },
      {
        "file": "cemetery2.jpg",
        "title": "Cabell Cemetery dedication program: graves relocated from the Brown Cemetery",
        "desc": "The list of graves moved from the Brown Cemetery, numbered 25 to 41. Number 30 is Eunice Cabell Brown (1850\u20131932), daughter of Samuel and Mary Barnes Cabell."
      }
    ]
  }
];
