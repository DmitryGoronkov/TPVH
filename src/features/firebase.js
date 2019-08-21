import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/storage';
// const firebase = require("firebase");

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;



// const cards = [
//   {
//     "Role": "SuperWalk Day-Of Volunteers",
//     "Deadline": "2019-09-08T04:00:00Z",
//     "Keywords": "seniors, disability, parkinsons, fundraiser",
//     "Location": "M2P 2A9",
//     "Duration": "2 days",
//     "Categories": "Events",
//     "Organization": "Parkinson Canada",
//     "ID": "8dd2f5d1-0b31-499f-afc8-8924168e9068",
//     "Createddate": "2019-08-15T16:24:20Z",
//     "Updateddate": "2019-08-17T16:04:29Z",
//     "Commitment": "4",
//     "Description": "<p class=\"p3\"><span style=\"font-weight:bold;\">VOLUNTEER OPPORTUNITY</span></p>\n\n<p class=\"p3\">?</p>\n\n<p class=\"p3\">Parkinson Canada SuperWalk - Toronto East</p>\n\n<p class=\"p3\">Saturday, September 7, 2019</p>\n\n<p class=\"p3\">Ashbridges Bay Park, 1561 Lake Shore Blvd. E, Toronto</p>\n\n<p class=\"p3\">?</p>\n\n<p class=\"p3\">Parkinson Canada SuperWalk - Toronto North</p>\n\n<p class=\"p3\">Sunday, September 8, 2019</p>\n\n<p class=\"p3\">Earl Bales Park, 4169 Bathurst St., North York</p>\n\n<p class=\"p3\">?</p>\n\n<p class=\"p3\">The vision of Parkinson Canada is a better life today for people living with Parkinson&rsquo;s and a world without Parkinson&rsquo;s tomorrow. Our mission is to transform the lives of people living with Parkinson&rsquo;s through: research leading to the end of Parkinson&rsquo;s; advocacy bringing the voices of Parkinson&rsquo;s to the forefront; and support helping people living with Parkinson&rsquo;s live well through education.</p>\n\n<p class=\"p3\"><span class=\"wixGuard\">?</span></p>\n\n<p class=\"p3\">At Parkinson Canada, we strive to cultivate a collaborative environment among an integrated work force of volunteers and staff. The role of SuperWalk Event Day volunteer provides the opportunity to support Parkinson&rsquo;s signature event, raising funds help make a better life for those impacted by Parkinson&rsquo;s and their caregivers.</p>\n\n<p class=\"p3\"><span class=\"wixGuard\">?</span></p>\n\n<p class=\"p3\">SuperWalk Event Day volunteers take on a variety of roles at the Toronto SuperWalk which is being held Saturday, September 7th, 2019 at Ashbridges Bay Park and Sunday, September 8th, 2019 at Earl Bales Park. Training is provided. Shifts and time commitment vary according to role. Please refer to below.</p>",
//     "Website": "",
//     "ApplicationInstructions": "<p class=\"p3\"><br />\nIf you are interested in becoming an Event Day Volunteer at SuperWalk Toronto, please e-mail <span style=\"font-weight:bold;\"><a href=\"mailto:volunteertoronto@parkinson.ca\">volunteertoronto@parkinson.ca</a></span>. Additional details will be provided based on confirmation of role.</p>",
//     "Logo": "image://v1/dfc7fc_9a0bc802ac8e439685fc4143080ccd23~mv2_d_2048_2048_s_2.jpg/2048_2048/dfc7fc_9a0bc802ac8e439685fc4143080ccd23~mv2_d_2048_2048_s_2.jpg",
//     "Featured": "",
//     "MobileName": "SuperWalk Day-Of Volunteers - Parkinson Canada",
//     "Show": "true",
//     "LogoValidate": "true",
//     "CharityValidate": "true",
//     "Name": "Alison Li",
//     "Email": "volunteertoronto@parkinson.ca",
//     "LegalOrganization": "Parkinson Canada",
//     "Agree": "true",
//     "PostingDate": "2019-08-15T04:00:00Z",
//     "SearchCode": "superwalk day-of volunteers, parkinson canada, seniors, disability, parkinsons, fundraiser, Events10197",
//     "QuickApplyEmail": "",
//     "QuickApplyLink": "",
//     "DeadlineText": "08-Sep-19",
//     "Virtual": "false"
//   },
//   {
//     "Role": "imagineNATIVE Film + Media Arts Festival volunteer",
//     "Deadline": "2019-10-01T04:00:00Z",
//     "Keywords": "Indigenous Culture, Film, Media, Events",
//     "Location": "Downtown Toronto",
//     "Duration": "Oct 22 - 27, 2019",
//     "Categories": "Events",
//     "Organization": "The Centre for Aboriginal Media",
//     "ID": "44387c38-d08e-4d56-99ce-4d9992b787b0",
//     "Createddate": "2019-08-13T00:52:33Z",
//     "Updateddate": "2019-08-13T00:59:34Z",
//     "Commitment": "null",
//     "Description": "<p class=\"p3\">imagineNATIVE is the world&#39;s largest presenter of Indigenous screen content. The organisation is recognised locally, nationally, and internationally for excellence and innovation in programming and as the global centre for Indigenous media arts. imagineNATIVE (legal entity: The Centre for Aboriginal Media) is a registered charity committed to creating a greater understanding of Indigenous peoples and cultures through the presentation of contemporary Indigenous-made media art including film, video, audio and digital media.</p>\n\n<p class=\"p3\"><span class=\"wixGuard\">?</span></p>\n\n<p class=\"p3\">We are an Indigenous-run organisation located on the territory of the Mississaugas of the Credit, the Anishinaabe, the Haudenosaunee, and the Huron-Wendat nations. We acknowledge the Dish With One Spoon covenant, a treaty whose spirit is one based in collective stewardship and sharing of land and resources, and one which extends to all nations living in present-day Toronto.</p>\n\n<p class=\"p3\"><span class=\"wixGuard\">?</span></p>\n\n<p class=\"p3\">imagineNATIVE presents the world&rsquo;s largest Indigenous film festival, a national Tour focused on reconciliation, as well as the Institute among many other initiatives throughout the year. imagineNATIVE is one of the leading arts organisations in Canada and won the highly competitive and prestigious Premier&rsquo;s Award for Excellence in the Arts (Ontario) in 2018 (finalist in 2009 and 2015).</p>\n\n<p class=\"p3\"><span class=\"wixGuard\">?</span></p>\n\n<p class=\"p3\">imagineNATIVE is committed to public education and strives towards dispelling stereotypical notions of Indigenous peoples through diverse media presentations from within our communities. To this end, we conduct professional development workshops and panels, public education initiatives, research projects, and curriculum/educators&rsquo; packages for secondary schools created from Indigenous pedagogies.&nbsp;&nbsp;</p>",
//     "Website": "http://www.imaginenative.org",
//     "ApplicationInstructions": "<p class=\"p3\">Interested applicants need to fill out our application form:&nbsp;<a href=\"https://www.volgistics.com/ex/portal.dll/ap?ap=1120820528\">https://www.volgistics.com/ex/portal.dll/ap?ap=1120820528</a></p>",
//     "Logo": "wix:image://v1/7473a8_f3ddceffcf49446f95aebd268ac7bf11~mv2.jpg/anniversary_thumb.jpg#originWidth=430&originHeight=321",
//     "Featured": "",
//     "MobileName": "imagineNATIVE Film + Media Arts Festival volunteer - The Centre for Aboriginal Media",
//     "Show": "true",
//     "LogoValidate": "false",
//     "CharityValidate": "true",
//     "Name": "Amanda Clarke",
//     "Email": "volunteer@imaginenative.org",
//     "LegalOrganization": "The Centre for Aboriginal Media",
//     "Agree": "true",
//     "PostingDate": "2019-07-31T04:00:00Z",
//     "SearchCode": "imaginenative film + media arts festival volunteer, the centre for aboriginal media, Indigenous Culture, Film, Media, Events, Events10196",
//     "QuickApplyEmail": "",
//     "QuickApplyLink": "https://www.volgistics.com/ex/portal.dll/ap?ap=1120820528",
//     "DeadlineText": "01-Oct-19",
//     "Virtual": "null"
//   },
//   {
//     "Role": "Walk Day Volunteer - Parkinson SuperWalk Toronto East",
//     "Deadline": "2019-09-07T04:00:00Z",
//     "Keywords": "disabilities, seniors, events, fundraising, community, awareness, advocacy, research",
//     "Location": "1561 Lake Shore Blvd E, Toronto, ON M4L 3W6",
//     "Duration": "07-Sep-19",
//     "Categories": "Events",
//     "Organization": "Parkinson Canada",
//     "ID": "fc284d4e-2026-413e-aaa0-2199c4b4959d",
//     "Createddate": "2019-07-03T14:08:41Z",
//     "Updateddate": "2019-07-07T18:31:42Z",
//     "Commitment": "null",
//     "Description": "<p class=\"p3\"><span style=\"font-weight:bold;\">WALK DAY VOLUNTEER &ndash; PARKINSON SUPERWALK TORONTO EAST</span></p>\n\n<p class=\"p3\"><span style=\"font-weight:bold;\"><span class=\"wixGuard\">?</span></span></p>\n\n<p class=\"p3\"><span style=\"font-weight:bold;\">About Parkinson Canada:</span></p>\n\n<p class=\"p3\">Parkinson Canada is the national voice of Canadians living with Parkinson&rsquo;s disease. From diagnosis to discovery, we guide the way for Canadians to live well with Parkinson&rsquo;s disease through education, advocacy and support services. Our National Research Program funds innovative research to search for better treatments and a cure. A national registered charity, Parkinson Canada fulfils its mission through the generosity of donors and is an accredited organization under the Imagine Canada Standards Program.</p>\n\n<p class=\"p3\"><span class=\"wixGuard\">?</span></p>\n\n<p class=\"p3\"><span style=\"font-weight:bold;\">What We Need:</span></p>\n\n<p class=\"p3\">Have you, your family, or friends been touched by Parkinson&rsquo;s disease? Are you interested in meeting new people, working as a team and spreading the awareness of Parkinson&rsquo;s disease? Then we&rsquo;re looking for you! Parkinson Canada is looking for Day-of Volunteers to assist with the execution of Parkinson SuperWalk Toronto East.</p>\n\n<p class=\"p3\">Responsibilities:</p>\n\n<ul class=\"font_9\" style=\"\">\n\t<li>\n\t<p class=\"p3\">Attend and/or review registration and banking training session (if applicable).</p>\n\t</li>\n\t<li>\n\t<p class=\"p3\">Work with volunteers to coordinate services needed for the day-of (which may include: registration, food and drink, guest speakers, t-shirt distribution, route marshals, etc.).</p>\n\t</li>\n\t<li>\n\t<p class=\"p3\">Be onsite on the day of the event to facilitate a successful event. Must be available for Parkinson SuperWalk Toronto East on Saturday, September 7, 2019 at Ashbridges Bay Park.</p>\n\t</li>\n</ul>\n\n<p class=\"p3\">&nbsp;</p>\n\n<p class=\"p3\"><span style=\"font-weight:bold;\">Qualifications:</span></p>\n\n<ul class=\"font_9\" style=\"\">\n\t<li>\n\t<p class=\"p3\">Possess exceptional leadership capabilities and enjoy working as part of a team.</p>\n\t</li>\n\t<li>\n\t<p class=\"p3\">Excellent organizational skills.</p>\n\t</li>\n\t<li>\n\t<p class=\"p3\">Excellent interpersonal skills.</p>\n\t</li>\n\t<li>\n\t<p class=\"p3\">Be available for the time commitment needed to ensure the success of the event.</p>\n\t</li>\n\t<li>\n\t<p class=\"p3\">Mature, responsible and dependable.</p>\n\t</li>\n\t<li>\n\t<p class=\"p3\">Ability to meet deadlines.</p>\n\t</li>\n\t<li>\n\t<p class=\"p3\">Must have a volunteer police check.</p>\n\t</li>\n</ul>",
//     "Website": "http://www.parkinson.ca",
//     "ApplicationInstructions": "<p><span style=\"font-family:times new roman\">Our SuperWalk volunteer positions are available to all ages and include flexible time commitments, mentorship for new members, education and training, and excellent leadership experience.</span></p>\n\n<p><span style=\"font-family:times new roman\">If you like an opportunity to be a part of something that supports a great cause, this is the position for you.</span></p>\n\n<p><span style=\"font-family:times new roman\"><span class=\"wixGuard\">?</span></span></p>\n\n<p><span style=\"font-family:times new roman\">Please contact us at <span style=\"font-weight:bold\">volunteertoronto@parkinson.ca</span> if you are interested in volunteering with Parkinson Canada SuperWalk!</span></p>",
//     "Logo": "image://v1/743c3f_577d7dcd66ff4412b1278c51238c30bb~mv2_d_2048_2048_s_2.jpg/2048_2048/743c3f_577d7dcd66ff4412b1278c51238c30bb~mv2_d_2048_2048_s_2.jpg",
//     "Featured": "",
//     "MobileName": "Walk Day Volunteer - Parkinson SuperWalk Toronto East - Parkinson Canada",
//     "Show": "true",
//     "LogoValidate": "true",
//     "CharityValidate": "true",
//     "Name": "Alison Li",
//     "Email": "volunteertoronto@parkinson.ca",
//     "LegalOrganization": "Parkinson Canada",
//     "Agree": "true",
//     "PostingDate": "2019-07-03T04:00:00Z",
//     "SearchCode": "walk day volunteer - parkinson superwalk toronto east, parkinson canada, disabilities, seniors, events, fundraising, community, awareness, advocacy, research, Events10194",
//     "QuickApplyEmail": "",
//     "QuickApplyLink": "",
//     "DeadlineText": "07-Sep-19",
//     "Virtual": "false"
//   }
//  ]
//  var db = firebase.firestore();
//  cards.forEach(function(obj) {
//   db.collection("cards").add({
//     role: obj.Role,
//     deadline: obj.Deadline,
//     keywords: obj.Keywords,
//     location: obj.Location,
//     duration: obj.Duration,
//     categories: obj.Categories,
//     organization: obj.Organization,
//     id: obj.ID,
//     createdDate: obj.Createddate,
//     updatedDate: obj.Updateddate,
//     commitment: obj.Commitment,
//     description: obj.Description,
//     website: obj.Website,
//     appInstructions: obj.ApplicationInstructions,
//     logo: obj.Logo,
//     featured: obj.Featured,
//     mobileName: obj.MobileName,
//     show: obj.Show,
//     logoValidate: obj.LogoValidate,
//     charityValidate: obj.CharityValidate,
//     name: obj.Name,
//     email: obj.Email,
//     legalOrg: obj.LegalOrganization,
//     agree: obj.Agree,
//     postingDate: obj.PostingDate,
//     searchCode: obj.SearchCode,
//     quickApplyEmail: obj.QuickApplyEmail,
//     quickApplyLink: obj.QuickApplyLink,
//     deadlineText: obj.DeadlineText,
//     Virtual: obj.Virtual

//   }).then(function(docRef) {
//       console.log("Document written with ID: ", docRef.id);
//   })
//   .catch(function(error) {
//       console.error("Error adding document: ", error);
//   });
// });