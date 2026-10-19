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
        "title": "Samuel I Cabell death register (highlighted)"
      },
      {
        "file": "1855-annual-catalogue-albany manual-labor university-1855-56.pdf",
        "title": "1855\u201356 catalogue: Albany Manual Labor University",
        "note": "PDF",
        "desc": "Annual catalogue of the officers and students of the Albany Manual Labor University in Athens County, Ohio, printed in 1856. The highlighted student list shows Mary J., Sydney, Eunice and Seelah Barnes and Lucy M. Cabell, all of \u201cKanawha, Virginia.\u201d Samuel I. Cabell\u2019s will provided for his children\u2019s education, and if Sam Barnes went to college, this is the best evidence that it was here. Sam himself does not appear on this year\u2019s list. Other highlighted names, including T. J. Furgerson and Milton Holland, connect to the 1879 Athens County convention where Sam Barnes spoke."
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
        "desc": "Mary J. Ross, age 15, listed in a household in the 1850 census. She later became Sam Barnes\u2019s wife."
      },
      {
        "file": "sam-mary-wedding.jpg",
        "title": "1853 marriage record: Samuel Barnes and Mary J. Ross",
        "desc": "Marriage return from Hamilton County, Ohio, recording the marriage of Samuel Barnes and Mary J. Ross on October 1, 1853. The record above it, for another couple, is unrelated."
      },
      {
        "file": "1860-census.jpg",
        "title": "1860 Census: Portsmouth, Ohio",
        "desc": "Sam Barnes, listed as a boatman, with his wife Mary J. and their young son Sam in Portsmouth, Scioto County, Ohio. The page was enumerated June 21, 1860."
      },
      {
        "file": "1870-census.jpg",
        "title": "1870 Census: Union Township, Kanawha County, West Virginia",
        "desc": "Five years after Samuel I. Cabell\u2019s death. Sam Barnes (spelled \u201cBarns\u201d on this page), a farmer, lives with his wife Mary J. and their son Samuel next to his mother, Mary, and her younger children, on the land they inherited."
      },
      {
        "file": "1880-census-little-rock-arkansas-upright.pdf",
        "title": "1880 Census: Mary J. Barnes, Little Rock, Arkansas",
        "desc": "Mary J. Barnes, wife of Sam Barnes, on her own with three of her daughters in Little Rock, Pulaski County, Arkansas, enumerated June 4, 1880. Sam is not listed. The handwritten label at the bottom of the page identifies her."
      },
      {
        "file": "1886-arkansas-city-directory.png",
        "title": "1886 Little Rock city directory, pages 136\u2013137",
        "desc": "Mary J. Barnes and Josie Barnes are both listed as laundresses living at 1314 W. 6th Street in Little Rock, Arkansas (highlighted). Josie is likely Josephine, Mary\u2019s daughter from the 1880 census."
      },
      {
        "file": "1880-census-marina-a.jpg",
        "title": "1880 Census: Marina, Kanawha County",
        "desc": "A page from Union South District, Kanawha County, West Virginia, enumerated in June 1880. Marina appears here with her husband, Elijah Hurtt, and their children."
      },
      {
        "file": "1880-census-marina b.png",
        "title": "1880 Census: Marina (close-up)",
        "desc": "A close-up of the same page, showing Marina\u2019s household. Her husband\u2019s surname is written \u201cHart\u201d by the census taker."
      },
      {
        "file": "1900_marina_census_highlighted.png",
        "title": "1900 Census: Marina",
        "desc": "Marina and her husband, Elijah Hurtt, on their own farm in 1900, with their grown sons (highlighted). The census taker\u2019s spellings of the names differ from other records."
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
        "desc": "The court orders Samuel I. Cabell\u2019s land divided into eleven equal parts. Sam, Mary and nine of the children each receive one share, and commissioners are appointed to survey and allot them."
      },
      {
        "file": "Transcription_of_Sam_Barnes_Vs_Mary_Barnes_.pdf",
        "title": "Transcription: Samuel Barnes vs. Mary Barnes and others, 1867",
        "note": "PDF",
        "desc": "A typed transcription of the three court entries above, with notes on uncertain readings and on how the names are spelled."
      },
      {
        "file": "mary-petition-b.jpg",
        "title": "October 25, 1869: the children\u2019s surname becomes Cabell",
        "desc": "On Mary Barnes\u2019s petition, the court orders that her minor children\u2019s surname be changed from Barns to Cabell."
      },
      {
        "file": "mary-petition-a.jpg",
        "title": "March 24, 1870: Mary Barnes becomes Mary Cabell",
        "desc": "The court orders Mary Barnes\u2019s surname changed to Cabell, as she asked in her petition."
      },
      {
        "file": "sam-sells-land-1.jpg",
        "title": "1880 deed: Sam Barnes sells his land, page 1",
        "desc": "Deed dated February 28, 1880, in which Samuel Barnes and his wife Mary J., \u201cof the County of Athens, State of Ohio,\u201d sell lot No. 10 (the land allotted to Sam in the partition) to the Overseers of the Poor of Kanawha County for $1,700. The top of the page is the end of an unrelated deed."
      },
      {
        "file": "sam-sells-land-2.jpg",
        "title": "1880 deed: Sam Barnes sells his land, page 2",
        "desc": "The signatures of Samuel and Mary J. Barnes, the county committee\u2019s report, and the certificates of acknowledgment. Sam signs in Kanawha County on March 1, 1880, and Mary J. in Athens County, Ohio, on March 6. The deed is recorded March 11, 1880. This is the last known public record of Sam Barnes. By June 1880, his wife appears in the census in Little Rock, Arkansas, on her own with three of her daughters."
      },
      {
        "file": "Transcription_of_Sam_Barnes_land_sale.pdf",
        "title": "Transcription: Sam Barnes land sale, 1880",
        "note": "PDF",
        "desc": "A typed transcription of the 1880 deed and its certificates. This is the last known public record of Sam Barnes. By June 1880, his wife appears in the census in Little Rock, Arkansas, on her own with three of her daughters."
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
        "title": "Athens Messenger, July 29, 1869",
        "note": "PDF",
        "desc": "A barn belonging to Mr. Samuel Barnes of Albany was destroyed by fire on a Tuesday afternoon, and the cause of the fire was unknown. Albany is in Athens County, Ohio. We believe this is the same Sam Barnes."
      },
      {
        "file": "athens-messenger-sep-04-1879-highlight.pdf",
        "title": "Athens Messenger, September 4, 1879: the Nelsonville convention",
        "note": "PDF",
        "desc": "A report on the first convention of Black voters in Athens County, held at Nelsonville, Ohio, on August 30, 1879. Samuel Barnes called the convention to order, served on the committee on resolutions, was named for York Township on the committee of fourteen, and spoke near the close. T. J. Ferguson, who presided, and M. M. Holland, an honorary member, share names with students highlighted in the 1855\u201356 Albany Manual Labor University catalogue, linking Sam\u2019s later years to the school."
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
