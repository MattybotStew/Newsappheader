export interface Article {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  timestamp: string;
  imageUrl?: string;
  isBreaking?: boolean;
}

export interface SportsArticle extends Article {
  sportType?: string;
}

export interface Obituary {
  id: string;
  name: string;
  age: number;
  city: string;
  county: string;
  dateOfDeath: string;
  dateOfBirth: string;
  obituaryText: string;
  funeralHome: string;
  serviceDate?: string;
  serviceLocation?: string;
  imageUrl?: string;
}

// Breaking and Top News Articles
export const breakingNews: Article[] = [
  {
    id: 'b1',
    category: 'BREAKING',
    title: 'Severe weather warning issued for Hall County, storms expected through evening',
    excerpt: 'National Weather Service issues severe thunderstorm warning for Hall and surrounding counties with potential for damaging winds and hail.',
    content: 'The National Weather Service has issued a severe thunderstorm warning for Hall County and surrounding areas, effective until 8:00 PM this evening. Meteorologists are tracking a line of storms moving northeast through the region, with the potential for damaging winds up to 60 mph, quarter-sized hail, and heavy rainfall.\n\nHall County Emergency Management is urging residents to monitor weather conditions closely and seek shelter if threatening weather approaches. The storms are expected to impact the Gainesville area during the evening commute, potentially causing hazardous driving conditions.\n\n"We want everyone to take this seriously," said Hall County Emergency Management Director Zach Brackett. "Have multiple ways to receive weather alerts, and don\'t hesitate to take shelter if you hear thunder or see lightning."\n\nLocal school systems have canceled all after-school activities and athletic events as a precaution. Residents are encouraged to secure outdoor furniture and objects that could become projectiles in high winds.',
    author: 'Rob Moore',
    timestamp: '45 minutes ago',
    imageUrl: 'https://images.unsplash.com/photo-1656495782911-06e6a5f9bef5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF2eSUyMHJhaW4lMjB3ZWF0aGVyJTIwc3Rvcm18ZW58MXx8fHwxNzc0Mzc1NzE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    isBreaking: true
  },
  {
    id: 'b2',
    category: 'BREAKING',
    title: 'Traffic accident closes southbound lanes of I-985 at Mundy Mill Road exit',
    excerpt: 'Multi-vehicle collision causes major delays during afternoon rush hour, one person airlifted to hospital.',
    content: 'A multi-vehicle accident has closed all southbound lanes of Interstate 985 at the Mundy Mill Road exit, causing significant traffic delays during the afternoon rush hour.\n\nAccording to the Hall County Sheriff\'s Office, the collision involved four vehicles and occurred around 4:15 PM. One person was airlifted to Northeast Georgia Medical Center with serious injuries, while three others were transported by ambulance with non-life-threatening injuries.\n\nGeorgia Department of Transportation crews are on scene working to clear the wreckage. Traffic is being diverted off the interstate at Spout Springs Road, and motorists are advised to use alternate routes.\n\n"We expect the lanes to remain closed for at least another two hours while we complete the investigation and clear the scene," said Sgt. Stephen Wilbanks of the Hall County Sheriff\'s Office.\n\nSouthbound traffic is backed up for approximately 5 miles. The northbound lanes remain open but are experiencing slow-downs due to rubbernecking.',
    author: 'Caleb Hutchins',
    timestamp: '1 hour ago',
    imageUrl: 'https://images.unsplash.com/photo-1671834214729-0bc0561ec4f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFmZmljJTIwaGlnaHdheSUyMGNhcnN8ZW58MXx8fHwxNzc0MzAxODk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    isBreaking: true
  },
  {
    id: 'b3',
    category: 'BREAKING',
    title: 'Gainesville City Council approves major downtown revitalization project',
    excerpt: 'Council votes 5-2 to move forward with $18 million mixed-use development on Washington Street.',
    content: 'The Gainesville City Council voted 5-2 Tuesday night to approve a major downtown revitalization project that will transform a full city block on Washington Street into a mixed-use development.\n\nThe $18 million project, proposed by Atlanta-based developer Rearden Properties, will include 75 residential units, 12,000 square feet of retail space, and a public plaza. Construction is expected to begin in summer 2026 and take approximately 18 months to complete.\n\n"This is a transformational project for downtown Gainesville," said Mayor Sam Couvillon. "It will bring new residents, new businesses, and new vitality to our city center."\n\nThe development will occupy the current site of the old Quinlan Building and adjacent parking lot. The city has agreed to provide infrastructure improvements and a parking variance to make the project feasible.\n\nOpponents raised concerns about increased traffic, the loss of existing parking spaces, and whether the development\'s design fits the historic character of downtown. The project now moves to the planning and zoning phase.',
    author: 'AccessWDUN Staff',
    timestamp: '2 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1758022959220-3f082ac0fd11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb3dudG93biUyMGNpdHklMjBidWlsZGluZ3N8ZW58MXx8fHwxNzc0MzAxODk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    isBreaking: true
  }
];

// Local News Articles
export const localNews: Article[] = [
  {
    id: 'n1',
    category: 'Local',
    title: 'New elementary school planned for South Hall to address growing enrollment',
    excerpt: 'Hall County School Board approves plans for $45 million facility expected to open fall 2027.',
    content: 'The Hall County School Board unanimously approved plans Tuesday night for a new elementary school in South Hall, responding to continued population growth in the Flowery Branch and Braselton areas.\n\nThe $45 million facility will be built on a 30-acre site off Friendship Road and is expected to accommodate 850 students when it opens in fall 2027. The school will be the district\'s 30th elementary school and the first new elementary facility built in South Hall in over a decade.\n\n"Our enrollment in South Hall continues to grow at a rapid pace," said Superintendent Will Schofield. "This new school will help alleviate overcrowding at Friendship Elementary and Matt Elementary, both of which are currently operating above capacity."\n\nThe school will feature modern learning spaces, a full-size gymnasium, media center, cafeteria, and dedicated spaces for special education and STEM programs. The design will incorporate energy-efficient features and outdoor learning areas.\n\nConstruction is expected to begin in summer 2026. The school board is expected to name the facility and hire a principal by fall 2026.',
    author: 'Madison Alder',
    timestamp: '3 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1601339434203-130259102db6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVtZW50YXJ5JTIwc2Nob29sJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3NDMwMTg5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'n2',
    category: 'Local',
    title: 'Lake Lanier water levels rise following weekend rainfall',
    excerpt: 'Lake gains nearly two feet after storms bring over 3 inches of rain to watershed.',
    content: 'Lake Lanier\'s water level rose nearly two feet over the past three days following significant rainfall across the Chattahoochee River watershed, providing welcome relief after months of below-normal levels.\n\nAs of Wednesday morning, the lake stood at 1,069.2 feet above sea level, still about two feet below the normal full pool of 1,071 feet but significantly improved from the 1,067.4 level recorded last Friday.\n\nThe U.S. Army Corps of Engineers reported that rainfall totals across the watershed ranged from 2.5 to 4.5 inches over the weekend, with the heaviest amounts falling in the northern portions of the basin.\n\n"This rain was certainly beneficial for the lake," said Corps hydrologist Jennifer Moody. "We\'ll continue to monitor conditions and adjust releases as needed to maintain appropriate levels."\n\nThe improved water levels are good news for the lake\'s 12 million annual visitors and the region\'s water supply. However, Corps officials caution that Lake Lanier remains in a deficit for this time of year and additional rainfall will be needed to reach normal levels.\n\nThe forecast calls for scattered showers through the weekend, which could add another half-foot to the lake\'s level.',
    author: 'Rob Moore',
    timestamp: '5 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1696528917312-dbdd5694455e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWtlJTIwd2F0ZXIlMjBuYXR1cmV8ZW58MXx8fHwxNzc0MzAxODk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'n3',
    category: 'Local',
    title: 'Historic Gainesville theater to undergo $2.5 million renovation',
    excerpt: 'Pearce Auditorium restoration project aims to preserve 1930s architectural details while modernizing facilities.',
    content: 'The historic Pearce Auditorium in downtown Gainesville will undergo a comprehensive $2.5 million renovation that aims to preserve the building\'s 1930s character while updating it for modern performances and events.\n\nThe Gainesville Theatre Alliance announced the renovation plans Wednesday, with work scheduled to begin in May and conclude by December 2026. The project is funded through a combination of city funds, private donations, and historic preservation grants.\n\n"Pearce Auditorium is a cultural gem that has served our community for nearly 90 years," said Theatre Alliance Executive Director Susan Vreeland. "This renovation will ensure it continues to serve generations to come."\n\nThe renovation will include restoration of the original ornate plasterwork, installation of new seating and sound systems, upgrades to backstage facilities, and accessibility improvements throughout the building. The distinctive art deco facade will also be carefully restored.\n\nDuring construction, Theatre Alliance performances will be held at alternative venues including the Brenau University Downtown Center and the Smithgall Arts Center.\n\nPearce Auditorium originally opened in 1937 and was added to the National Register of Historic Places in 1989.',
    author: 'AccessWDUN Staff',
    timestamp: '6 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1725221058145-a328cd011f66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMHRoZWF0ZXIlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzQzMDE4OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'n4',
    category: 'Business',
    title: 'Major logistics company to open distribution center in Oakwood, bringing 300 jobs',
    excerpt: 'DHL Supply Chain announces 500,000 square foot facility at Oakwood Industrial Park.',
    content: 'DHL Supply Chain announced Wednesday it will open a new distribution center in Oakwood, creating approximately 300 jobs over the next 18 months.\n\nThe 500,000-square-foot facility will be located in the Oakwood Industrial Park off Thurmon Tanner Parkway and will serve as a regional distribution hub for a major retail client. The company expects to begin hiring in early 2027, with the facility becoming operational by summer 2027.\n\n"This is a significant economic development win for Hall County," said Hall County Commission Chairman Richard Higgins. "DHL is a world-class company, and these 300 jobs will provide excellent opportunities for our residents."\n\nPositions will range from warehouse associates and forklift operators to logistics coordinators and management roles. Starting wages for warehouse positions are expected to begin at $18 per hour, with full benefits packages.\n\nThe Greater Hall Chamber of Commerce worked with the company for over a year to secure the project. DHL cited Hall County\'s strategic location near Interstate 985 and Highway 365, strong workforce, and competitive business environment as key factors in the decision.\n\nThe company will host job fairs closer to the opening date.',
    author: 'Staff Reports',
    timestamp: '8 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1768796372610-f844d490a734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBkaXN0cmlidXRpb24lMjBjZW50ZXJ8ZW58MXx8fHwxNzc0MjU0MjYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'n5',
    category: 'Politics',
    title: 'Hall County Commissioners debate property tax millage rate for 2026-27 budget',
    excerpt: 'Public hearings scheduled as board considers maintaining current rate versus rollback.',
    content: 'The Hall County Board of Commissioners will hold three public hearings next month as they debate whether to maintain the current property tax millage rate or roll it back for the 2026-27 fiscal year budget.\n\nProperty values in Hall County increased an average of 8.5% this year, which means the county would collect significantly more tax revenue even if the millage rate is lowered. County Administrator Jock Connell presented options ranging from maintaining the current 8.97 mills rate to rolling it back to a revenue-neutral 8.25 mills.\n\n"We want to hear from our citizens about what they value and what their priorities are," said Commission Chairman Richard Higgins. "Property values have increased substantially, and we need to balance providing essential services with being good stewards of taxpayer dollars."\n\nThe county\'s preliminary budget includes increased funding for public safety, road improvements, and parks and recreation. However, some commissioners have indicated they favor a millage rate rollback to provide tax relief to residents facing higher assessments.\n\nPublic hearings are scheduled for April 8, April 15, and April 22 at 6:00 PM at the Hall County Government Center. The commission must adopt a final budget and millage rate by June 30.\n\nResidents can submit written comments through the county website or attend the hearings to speak during the public comment period.',
    author: 'Caleb Hutchins',
    timestamp: 'Yesterday',
    imageUrl: 'https://images.unsplash.com/photo-1768353083126-be88cda590ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmclMjBtZWV0aW5nfGVufDF8fHx8MTc3NDMwMTg5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'n6',
    category: 'Local',
    title: 'Chicopee Woods Nature Preserve adds new mountain bike trails',
    excerpt: 'Three miles of new intermediate trails now open to riders, with additional trails planned for fall.',
    content: 'Mountain bikers can now explore three miles of new intermediate trails at Chicopee Woods Nature Preserve, with Hall County Parks & Leisure announcing the completion of the latest expansion to the popular trail system.\n\nThe new "Ridgeline Loop" trails offer flowing singletrack with moderate climbs and technical features designed for intermediate riders. The trails connect to the existing network, bringing the total trail system to over 20 miles.\n\n"We\'re thrilled to offer these new trails to our mountain biking community," said Parks & Leisure Director Mike Caldwell. "The response to our trails has been overwhelming, with riders coming from across the Southeast to ride Chicopee."\n\nThe trails were built by professional trail builders and volunteers from the Georgia Mountain Bike Association over six months. Additional trails designed for beginner and advanced riders are planned for later this year.\n\nChicopee Woods Nature Preserve is open daily from dawn to dusk. The preserve also features hiking trails, fishing, and environmental education programs. All trails are free to use, though donations to support trail maintenance are encouraged.\n\nThe preserve is located at 5600 Chicopee Woods Trail in Gainesville.',
    author: 'Staff Reports',
    timestamp: 'Yesterday',
    imageUrl: 'https://images.unsplash.com/photo-1645520719499-6856445fe4ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGJpa2UlMjB0cmFpbCUyMGZvcmVzdHxlbnwxfHx8fDE3NzQyOTY3MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'n7',
    category: 'Education',
    title: 'Brenau University announces new engineering program partnership with Georgia Tech',
    excerpt: 'Dual-degree program allows students to earn bachelor\'s from Brenau and engineering degree from Tech.',
    content: 'Brenau University announced a new partnership with Georgia Institute of Technology that will allow students to earn a dual degree in liberal arts and engineering through a 3+2 program.\n\nUnder the agreement, students will complete three years at Brenau taking foundational courses in mathematics, science, and liberal arts, then transfer to Georgia Tech for two years of specialized engineering study. Upon completion, students receive a bachelor\'s degree from Brenau and a bachelor\'s of science in engineering from Georgia Tech.\n\n"This partnership opens exciting new possibilities for our students," said Brenau President Anne Skleder. "They get the close-knit, personalized education of Brenau combined with the world-class engineering program at Georgia Tech."\n\nThe program is open to students pursuing any engineering discipline offered at Georgia Tech, including mechanical, electrical, civil, biomedical, and computer engineering. Qualified students must maintain a minimum 3.3 GPA in required courses and complete specified prerequisites.\n\nBrenau will offer enhanced advising and support services for students in the program, including dedicated faculty mentors and transfer assistance. The first cohort of students will begin this fall, with the first Georgia Tech transfers expected in 2029.\n\nInterested students should contact the Brenau admissions office for more information.',
    author: 'Madison Alder',
    timestamp: '2 days ago',
    imageUrl: 'https://images.unsplash.com/photo-1693608231470-25e1b16a23b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzc0Mjk3MjkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

// Sports Articles
export const sportsArticles: SportsArticle[] = [
  {
    id: 's1',
    category: 'High School',
    sportType: 'Football',
    title: 'North Hall defeats Dawson County 42-14 to clinch Region 7-3A championship',
    excerpt: 'Trojans dominant on both sides of the ball, rushing for over 300 yards in rivalry game victory.',
    content: 'North Hall made a statement Friday night, rolling over rival Dawson County 42-14 to clinch the Region 7-3A championship in front of a packed home crowd.\n\nThe Trojans (9-1, 6-0) dominated from the opening kickoff, with senior running back Tyler Johnson rushing for 187 yards and three touchdowns on just 18 carries. The offensive line created huge holes all night, and North Hall finished with 347 rushing yards as a team.\n\n"Our guys played physical football tonight," said North Hall head coach David Bishop. "The offensive line set the tone, and our defense was outstanding. This is what championship football looks like."\n\nThe Trojan defense held Dawson County to just 214 total yards and forced three turnovers, including a pick-six by junior cornerback Marcus Williams in the third quarter that put the game out of reach.\n\nNorth Hall will host a first-round playoff game next week as they seek their third consecutive state playoff appearance. The region championship is the program\'s first since 2021.\n\nJohnson added: "We\'re not done yet. This was a great win, but we have bigger goals ahead."',
    author: 'Jeff Hart',
    timestamp: '3 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1763479197379-93d1dcd229d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwc2Nob29sJTIwZm9vdGJhbGwlMjBnYW1lJTIwYWN0aW9ufGVufDF8fHx8MTc3NDMwMTg5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 's2',
    category: 'High School',
    sportType: 'Basketball',
    title: 'Flowery Branch girls basketball advances to state semifinals with upset win',
    excerpt: 'Lady Falcons knock off top-seeded Kell 58-54 in Elite Eight matchup.',
    content: 'The Flowery Branch girls basketball team is headed to the state semifinals after pulling off a stunning 58-54 upset over top-seeded Kell Tuesday night in the Elite Eight.\n\nJunior guard Aaliyah Thompson scored a game-high 24 points, including the go-ahead three-pointer with 1:37 remaining that gave the Lady Falcons a lead they would not relinquish. Senior forward Madison Brooks added 16 points and 11 rebounds for Flowery Branch (26-5).\n\n"I just saw an opening and took my shot," Thompson said. "My teammates got me the ball in the right spot, and I knew I had to be aggressive."\n\nFlowery Branch trailed by nine points midway through the fourth quarter before mounting a furious comeback. The Lady Falcons\' full-court press forced six turnovers in the final period, leading to easy baskets in transition.\n\n"These girls showed incredible heart and determination," said head coach Rebecca Henson. "To come back on the road against the No. 1 seed says everything about their character."\n\nFlowery Branch will face Marist in the state semifinals Saturday at Georgia Tech. A win would send the program to its first state championship game since 2019.',
    author: 'Jeff Hart',
    timestamp: '4 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1621132457848-d48062b86c85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwcGxheWVyJTIwc2hvb3Rpbmd8ZW58MXx8fHwxNzc0MzAxNTY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 's3',
    category: 'High School',
    sportType: 'Baseball',
    title: 'Cherokee Bluff baseball opens season with convincing 8-2 victory over East Forsyth',
    excerpt: 'Bears offense explodes for 12 hits, junior pitcher throws six strong innings in season opener.',
    content: 'The Cherokee Bluff baseball team opened its 2026 season in style Tuesday, defeating East Forsyth 8-2 behind a balanced offensive attack and a strong pitching performance from junior Colton Hayes.\n\nHayes pitched six innings, allowing just two runs on five hits while striking out seven. The Bears\' offense provided plenty of support, collecting 12 hits including three doubles and a home run.\n\nSenior catcher Blake Morrison went 3-for-4 with a home run and three RBIs, while leadoff hitter Jake Patterson reached base four times and scored three runs. The Bears scored in five different innings, showing offensive consistency that pleased head coach Shane Wilbanks.\n\n"Great way to start the season," Wilbanks said. "Colton set the tone on the mound, and we swung the bats well up and down the lineup. If we can pitch and play defense like that, we\'ll be tough to beat."\n\nCherokee Bluff entered the season ranked No. 8 in the preseason Class 4A poll and returns most of its starting lineup from last year\'s team that advanced to the second round of the state playoffs.\n\nThe Bears (1-0) will host West Hall on Thursday in their home opener.',
    author: 'AccessWDUN Sports',
    timestamp: '5 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1700772280970-4b148e7c9f08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNlYmFsbCUyMGdhbWUlMjBwaXRjaGVyfGVufDF8fHx8MTc3NDMwMTg5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 's4',
    category: 'College Signing',
    sportType: 'Multi-Sport',
    title: 'Six Gainesville High athletes sign letters of intent on National Signing Day',
    excerpt: 'Red Elephants celebrate student-athletes continuing careers at collegiate level across multiple sports.',
    content: 'Gainesville High School celebrated six student-athletes Wednesday who signed National Letters of Intent to continue their athletic and academic careers at the collegiate level.\n\nThe signees included:\n\n• Marcus Davis - Football, Mercer University\n• Emma Sullivan - Softball, University of North Georgia\n• Jordan Mitchell - Soccer, Georgia Southern University\n• Taylor Anderson - Volleyball, Kennesaw State University\n• Cameron Wright - Baseball, Shorter University\n• Alyssa Johnson - Track & Field, Georgia State University\n\n"This is a proud day for Gainesville High School," said Athletic Director Tim Jones. "These six young people have excelled in the classroom and in competition. They represent what our athletic program is all about."\n\nDavis, a three-year starter at linebacker, chose Mercer over offers from several FCS programs. He recorded 98 tackles and 12 sacks as a senior, earning first-team All-Region honors.\n\nSullivan, a two-time All-State pitcher, will join the Nighthawks\' softball program after leading Gainesville to the region championship with a 1.87 ERA and 184 strikeouts.\n\nAll six athletes maintained GPAs above 3.5 while competing at the varsity level.',
    author: 'AccessWDUN Sports',
    timestamp: '6 hours ago'
  },
  {
    id: 's5',
    category: 'Friday Game Night',
    sportType: 'Football',
    title: 'Week 10 scoreboard: Northeast Georgia high school football results and highlights',
    excerpt: 'Complete scores and game summaries from Friday night action across the region.',
    content: 'Here are the scores and highlights from Week 10 high school football action across Northeast Georgia:\n\n**Region 7-3A**\nNorth Hall 42, Dawson County 14 - Tyler Johnson rushes for 187 yards and 3 TDs as Trojans claim region title\nWhite County 28, East Hall 21 - Warriors score 14 unanswered in 4th quarter to secure comeback win\n\n**Region 8-4A**\nFlowery Branch 35, Loganville 21 - Falcons control game from start to finish, improve to 8-2\nCherokee Bluff 31, Madison County 17 - Bears defense forces 4 turnovers in road victory\n\n**Region 6-6A**\nGainesville 24, Lanier 20 - Red Elephants hold off late rally to remain undefeated in region\nJohnson 45, Dacula 28 - Knights score 31 second-half points to pull away\n\n**Region 7-A (D-I)**\nCommerce 56, Washington-Wilkes 7 - Tigers dominate in all phases, clinch region championship\nRabun County 35, Elbert County 14 - Wildcats win 6th straight\n\n**Region 8-A (D-II)**\nTrinity Christian 38, Prince Avenue 21 - Lions stay perfect in region play\n\nPlayoff pairings will be announced Sunday.',
    author: 'AccessWDUN Sports',
    timestamp: 'Yesterday'
  },
  {
    id: 's6',
    category: 'Youth Sports',
    sportType: 'Soccer',
    title: 'Hall County youth soccer league announces spring registration now open',
    excerpt: 'Registration available for players ages 4-14, with season beginning in April.',
    content: 'The Hall County Youth Soccer League announced that registration is now open for the spring 2026 season, with programs available for players ages 4-14.\n\nThe recreational league offers co-ed divisions for younger age groups (U6-U8) and separate boys and girls divisions for older players (U10-U14). Games will be played on Saturdays at various fields throughout Hall County beginning in mid-April.\n\n"Youth soccer continues to grow in Hall County, and we\'re excited to offer quality programs for players of all skill levels," said league president David Martinez. "Our focus is on player development, sportsmanship, and having fun."\n\nRegistration costs $85 per player and includes a jersey, shorts, and socks. Players must provide their own shin guards and cleats. Volunteer coaches are needed for all age groups, and the league provides free training for new coaches.\n\nThe league also offers a competitive travel program for experienced players ages 9-14 who want to compete against teams from other counties. Travel team tryouts will be held in late March.\n\nRegistration closes on March 31 or when divisions fill up. Visit hallcountysoccer.org to register online.',
    author: 'Staff Reports',
    timestamp: '2 days ago'
  },
  {
    id: 's7',
    category: 'Basketball',
    sportType: 'Basketball',
    title: 'East Hall boys basketball wins overtime thriller against Habersham Central, 67-65',
    excerpt: 'Vikings overcome 12-point fourth quarter deficit to force OT, secure region victory.',
    content: 'East Hall mounted a furious comeback from a 12-point fourth-quarter deficit, then pulled out a 67-65 overtime victory over Habersham Central Tuesday night in a critical region game.\n\nSenior guard Jaylen Parker scored 11 of his game-high 28 points in the fourth quarter and overtime, including the game-winning free throws with 4.2 seconds remaining. Junior forward Darius Coleman added 18 points and 13 rebounds for the Vikings (15-8, 8-4).\n\n"That\'s as gutsy a performance as I\'ve seen from this group," said East Hall head coach Mike Davis. "We could have folded when we got down, but these guys kept believing and kept fighting."\n\nEast Hall trailed 52-40 with 6:30 remaining in regulation before unleashing a devastating press that forced six consecutive Habersham Central turnovers. The Vikings tied the game at 58-58 on a Parker three-pointer with 12 seconds left, sending it to overtime.\n\nIn the extra period, the teams traded baskets until Parker drew a foul on a drive to the basket with 4.2 seconds left. He calmly sank both free throws to give East Hall the lead for good.\n\nThe victory keeps East Hall in contention for a top-three region finish and a first-round home playoff game.',
    author: 'Jeff Hart',
    timestamp: '2 days ago'
  }
];

// Obituaries
export const obituaries: Obituary[] = [
  {
    id: 'o1',
    name: 'Margaret Louise Henderson',
    age: 87,
    city: 'Gainesville',
    county: 'Hall',
    dateOfBirth: 'June 12, 1938',
    dateOfDeath: 'March 20, 2026',
    obituaryText: 'Margaret Louise Henderson, 87, of Gainesville, passed away peacefully on Thursday, March 20, 2026, at her home surrounded by her loving family.\n\nMrs. Henderson was born on June 12, 1938, in Hall County to the late Robert and Sarah Thompson. She was a lifelong resident of Gainesville and a 1956 graduate of Gainesville High School. Margaret retired from Northeast Georgia Medical Center after 35 years of dedicated service as a registered nurse.\n\nShe was a devoted member of First Baptist Church of Gainesville for over 60 years, where she taught Sunday School and sang in the choir. Margaret had a servant\'s heart and volunteered countless hours with Meals on Wheels and the local food bank. She loved gardening, quilting, and spending time with her grandchildren.\n\nMargaret is survived by her husband of 65 years, James "Jim" Henderson of Gainesville; three children, Robert Henderson (Susan) of Flowery Branch, Linda Patterson (Mark) of Cumming, and David Henderson (Jennifer) of Oakwood; eight grandchildren; twelve great-grandchildren; and numerous nieces and nephews.\n\nShe was preceded in death by her parents and her brother, Thomas Thompson.',
    funeralHome: 'Memorial Park Funeral Home',
    serviceDate: 'Monday, March 24, 2026 at 2:00 PM',
    serviceLocation: 'First Baptist Church of Gainesville, 751 Green Street, Gainesville, GA 30501',
    imageUrl: 'https://images.unsplash.com/photo-1547199315-ddabe87428ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQyNTI1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'o2',
    name: 'Robert "Bobby" James Mitchell',
    age: 72,
    city: 'Flowery Branch',
    county: 'Hall',
    dateOfBirth: 'September 3, 1953',
    dateOfDeath: 'March 21, 2026',
    obituaryText: 'Robert "Bobby" James Mitchell, 72, of Flowery Branch, went to be with his Lord and Savior on Friday, March 21, 2026.\n\nBobby was born September 3, 1953, in Atlanta to the late James and Betty Mitchell. He was a 1971 graduate of North Hall High School and attended the University of Georgia. Bobby owned and operated Mitchell\'s Hardware in Flowery Branch for 40 years, serving the community with integrity and a friendly smile.\n\nHe was an active member of Chestnut Mountain Church, where he served as a deacon and helped with various mission projects. Bobby was an avid outdoorsman who loved fishing on Lake Lanier, hunting, and watching Georgia Bulldogs football. He never met a stranger and will be remembered for his generous spirit and quick wit.\n\nBobby is survived by his loving wife of 48 years, Carol Mitchell of Flowery Branch; two sons, Jason Mitchell (Amy) of Buford and Michael Mitchell (Lisa) of Braselton; one daughter, Ashley Reynolds (Brad) of Flowery Branch; seven grandchildren; one sister, Nancy Williams (Tom) of Dahlonega; and many beloved nieces, nephews, and friends.\n\nHe was preceded in death by his parents and one brother, Kenneth Mitchell.',
    funeralHome: 'Little & Davenport Funeral Home',
    serviceDate: 'Tuesday, March 25, 2026 at 11:00 AM',
    serviceLocation: 'Chestnut Mountain Church, 5150 McEver Road, Flowery Branch, GA 30542',
    imageUrl: 'https://images.unsplash.com/photo-1758686253859-8ef7e940096e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwbWFuJTIwc21pbGluZ3xlbnwxfHx8fDE3NzQyOTg2NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'o3',
    name: 'Sarah Elizabeth Williams',
    age: 65,
    city: 'Oakwood',
    county: 'Hall',
    dateOfBirth: 'November 28, 1960',
    dateOfDeath: 'March 22, 2026',
    obituaryText: 'Sarah Elizabeth Williams, 65, of Oakwood, passed away unexpectedly on Saturday, March 22, 2026.\n\nSarah was born November 28, 1960, in Hall County to the late William and Dorothy Baker. She was a 1978 graduate of Johnson High School and earned her bachelor\'s degree in education from Brenau University in 1982. Sarah dedicated her life to education, teaching second grade at Lyman Hall Elementary School for 38 years before retiring in 2020.\n\nShe touched countless young lives and was beloved by students, parents, and colleagues. Sarah was known for her creativity in the classroom, her patience, and her ability to make every child feel special. She received the Hall County Teacher of the Year award in 2015.\n\nSarah was a faithful member of Lakewood Baptist Church and enjoyed reading, traveling, and spoiling her grandchildren. She will be deeply missed by all who knew her.\n\nShe is survived by her husband, Thomas Williams of Oakwood; two children, Emily Carter (Josh) of Gainesville and Matthew Williams (Rebecca) of Buford; four grandchildren; one brother, Daniel Baker (Karen) of Murraysville; and many loving nieces and nephews.',
    funeralHome: 'Memorial Park Funeral Home',
    serviceDate: 'Wednesday, March 26, 2026 at 3:00 PM',
    serviceLocation: 'Lakewood Baptist Church, 3320 Old Cornelia Highway, Gainesville, GA 30507',
    imageUrl: 'https://images.unsplash.com/photo-1657670716702-01a6bc82c67f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR1cmUlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDMwMTkwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'o4',
    name: 'James Edward "Eddie" Turner',
    age: 58,
    city: 'Clermont',
    county: 'Hall',
    dateOfBirth: 'February 14, 1968',
    dateOfDeath: 'March 19, 2026',
    obituaryText: 'James Edward "Eddie" Turner, 58, of Clermont, passed away Tuesday, March 19, 2026, after a courageous battle with illness.\n\nEddie was born February 14, 1968, in Gainesville to the late Edward and Martha Turner. He was a 1986 graduate of East Hall High School and worked as a master electrician for over 35 years, owning Turner Electric Services.\n\nHe was known throughout Hall County for his exceptional work ethic, honest business practices, and willingness to help anyone in need. Eddie loved the outdoors, especially fishing and camping with his family. He was a proud supporter of local youth sports and coached Little League baseball for many years.\n\nEddie had a heart for serving others and was active in his church and community. His infectious laugh, kind heart, and generous nature touched many lives.\n\nHe is survived by his wife of 35 years, Patricia Turner of Clermont; three children, James Turner Jr. of Dahlonega, Amanda Collins (Ryan) of Lula, and Christopher Turner of Clermont; six grandchildren; two sisters, Karen Morrison and Linda Hayes, both of Gainesville; and numerous nieces and nephews.',
    funeralHome: 'Ward\'s Funeral Home',
    serviceDate: 'Friday, March 28, 2026 at 1:00 PM',
    serviceLocation: 'Ward\'s Chapel, 110 Whelchel Street, Clermont, GA 30527',
    imageUrl: 'https://images.unsplash.com/photo-1764173039313-1422b53003a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBtYW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc0MzAxOTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'o5',
    name: 'Dorothy Mae Jackson',
    age: 93,
    city: 'Gainesville',
    county: 'Hall',
    dateOfBirth: 'April 5, 1932',
    dateOfDeath: 'March 18, 2026',
    obituaryText: 'Dorothy Mae Jackson, 93, of Gainesville, entered into eternal rest on Monday, March 18, 2026.\n\nDorothy was born April 5, 1932, in Rabun County to the late John and Emma Wilson. She moved to Gainesville as a young woman and worked in the poultry industry for over 30 years before retiring.\n\nShe was a faithful member of Mount Vernon Baptist Church for 55 years and had a deep love for her church family. Dorothy enjoyed cooking for others, working in her flower garden, and watching hummingbirds on her back porch. She was known for her delicious pecan pies and her warm, welcoming smile.\n\nDorothy cherished her family above all else and leaves behind a legacy of faith, love, and kindness.\n\nShe is survived by her three children, Michael Jackson (Brenda) of Murraysville, Patricia Smith of Gainesville, and Donald Jackson (Teresa) of Flowery Branch; nine grandchildren; eighteen great-grandchildren; four great-great-grandchildren; and many nieces and nephews.\n\nShe was preceded in death by her husband of 60 years, Willie Jackson; two brothers; and three sisters.',
    funeralHome: 'Hamilton Mill Memorial Chapel',
    serviceDate: 'Saturday, March 29, 2026 at 11:00 AM',
    serviceLocation: 'Mount Vernon Baptist Church, 4181 Winder Highway, Flowery Branch, GA 30542',
    imageUrl: 'https://images.unsplash.com/photo-1547199315-ddabe87428ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQyNTI1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'o6',
    name: 'William "Bill" Charles Anderson',
    age: 79,
    city: 'Braselton',
    county: 'Jackson',
    dateOfBirth: 'July 22, 1946',
    dateOfDeath: 'March 21, 2026',
    obituaryText: 'William "Bill" Charles Anderson, 79, of Braselton, passed away peacefully on Friday, March 21, 2026, with his family by his side.\n\nBill was born July 22, 1946, in Athens, Georgia, to the late Charles and Ruth Anderson. He proudly served his country in the United States Army during the Vietnam War. After his military service, Bill worked as a mechanical engineer for over 40 years, retiring from Kubota Manufacturing in 2011.\n\nHe was a devoted husband, father, and grandfather who treasured time with his family. Bill enjoyed woodworking, restoring classic cars, and was an avid golfer. He was a longtime member of the Braselton Rotary Club and volunteered with various community organizations.\n\nBill will be remembered for his integrity, strong work ethic, and the love he showed to everyone around him.\n\nHe is survived by his beloved wife of 55 years, Barbara Anderson of Braselton; two sons, William Anderson Jr. (Michelle) of Hoschton and David Anderson (Sarah) of Auburn; one daughter, Jennifer Morgan (Steve) of Buford; eight grandchildren; two great-grandchildren; and one sister, Elizabeth Cooper of Athens.',
    funeralHome: 'Flanigan Funeral Home',
    serviceDate: 'Sunday, March 30, 2026 at 2:00 PM',
    serviceLocation: 'Flanigan Funeral Home, 4400 S Lee Street, Buford, GA 30518',
    imageUrl: 'https://images.unsplash.com/photo-1764173039313-1422b53003a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBtYW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc0MzAxOTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];