export interface TreePerson {
  id: string;
  name: string;
  info: string;
  branch: string;
  children?: TreePerson[];
}

// ─── Helper ──────────────────────────────────────────────────────────────────
const leaf = (id: string, name: string, branch: string, info: string): TreePerson => ({ id, name, branch, info });

// ─── Joktan's 13 sons ───────────────────────────────────────────────────────
const joktanKids: TreePerson[] = [
  leaf("almodad", "Almodad", "shem", "Son of Joktan. Associated with Yemen (Gen 10:26)."),
  leaf("sheleph", "Sheleph", "shem", "Son of Joktan. Associated with the Salif region of Yemen (Gen 10:26)."),
  leaf("hazarmaveth", "Hazarmaveth", "shem", "Son of Joktan. Name preserved in Hadramawt, Yemen — major frankincense territory (Gen 10:26)."),
  leaf("jerah", "Jerah", "shem", "Son of Joktan. Name means 'moon.' Associated with moon-worshipping peoples of southern Arabia (Gen 10:26)."),
  leaf("hadoram", "Hadoram", "shem", "Son of Joktan. Associated with an Arabian tribe (Gen 10:27)."),
  leaf("uzal", "Uzal", "shem", "Son of Joktan. Associated with Sana'a, ancient capital of Yemen. Mentioned in Ezek 27:19 (Gen 10:27)."),
  leaf("diklah", "Diklah", "shem", "Son of Joktan. Name means 'palm tree.' Associated with a palm-growing region of Arabia (Gen 10:27)."),
  leaf("obal", "Obal", "shem", "Son of Joktan. Called Ebal in 1 Chr 1:22. Location uncertain (Gen 10:28)."),
  leaf("abimael", "Abimael", "shem", "Son of Joktan. Name means 'my father is God (El).' Ancestor of an Arabian people in southern Arabia (Gen 10:28)."),
  leaf("sheba-j", "Sheba (son of Joktan)", "shem", "Son of Joktan. Also appears as son of Raamah (Ham). Associated with the Sabaean kingdom of SW Arabia — home of the Queen of Sheba who visited Solomon (1 Kings 10:1-13) (Gen 10:28)."),
  leaf("ophir", "Ophir", "shem", "Son of Joktan. Famous for gold — 'the gold of Ophir' was the finest in the ancient world (1 Kings 9:28; Ps 45:9). Solomon's navy sailed there every 3 years (Gen 10:29)."),
  leaf("havilah-s", "Havilah (son of Joktan)", "shem", "Son of Joktan. Also appears as son of Cush. Associated with a gold-rich region of Arabia (Gen 2:11-12; 10:29)."),
  leaf("jobab", "Jobab", "shem", "Son of Joktan. Some Jewish traditions identify him with Job the patriarch, though debated (Gen 10:29)."),
];

// ─── Ishmael's 12 sons ──────────────────────────────────────────────────────
const ishmaelKids: TreePerson[] = [
  leaf("nebajoth", "Nebajoth", "ishmael", "Firstborn of Ishmael. Ancestor of the Nabataeans — famous Arab traders who built Petra. Mentioned in Isa 60:7. His sister married Esau (Gen 28:9; 36:3)."),
  leaf("kedar", "Kedar", "ishmael", "Second son of Ishmael. Ancestor of the Kedarite Bedouin tribes of the Syrian/Arabian desert. Famous archers (Isa 21:17). The Prophet Muhammad traced his lineage specifically through Kedar, making this son of Ishmael the direct ancestor of the founder of Islam (Gen 25:13)."),
  leaf("adbeel", "Adbeel", "ishmael", "Son of Ishmael. Ancestor of an Arab tribe in NW Arabia. Known from Assyrian records as the Idibi'il tribe near Egypt (Gen 25:13)."),
  leaf("mibsam", "Mibsam", "ishmael", "Son of Ishmael. The name also appears among the descendants of Simeon (1 Chr 4:25) (Gen 25:13)."),
  leaf("mishma", "Mishma", "ishmael", "Son of Ishmael. Name also appears in the tribe of Simeon (1 Chr 4:25-26) (Gen 25:14)."),
  leaf("dumah", "Dumah", "ishmael", "Son of Ishmael. Name preserved in the oasis of Dumat al-Jandal in NW Saudi Arabia, an important ancient trade hub. Isaiah 21:11 contains an oracle against Dumah (Gen 25:14)."),
  leaf("massa", "Massa", "ishmael", "Son of Ishmael. Agur and Lemuel in Proverbs 30-31 are described as 'kings of Massa' (Gen 25:14)."),
  leaf("hadad-i", "Hadad", "ishmael", "Son of Ishmael. Called Hadar in some manuscripts (Gen 25:15; 1 Chr 1:30)."),
  leaf("tema", "Tema", "ishmael", "Son of Ishmael. Ancestor of the Temeans at the oasis of Tayma in NW Arabia. Mentioned in Job 6:19; Isa 21:14; Jer 25:23 (Gen 25:15)."),
  leaf("jetur", "Jetur", "ishmael", "Son of Ishmael. Ancestor of the Itureans east of the Jordan. Mentioned in 1 Chr 5:19 (Gen 25:15)."),
  leaf("naphish", "Naphish", "ishmael", "Son of Ishmael. His descendants fought against the Israelite tribes east of the Jordan (1 Chr 5:18-22) (Gen 25:15)."),
  leaf("kedemah", "Kedemah", "ishmael", "Twelfth and last son of Ishmael. Name means 'eastward' or 'ancient.' Ancestor of a tribe in the eastern/Syrian desert (Gen 25:15)."),
];

// ─── Keturah's 6 sons ───────────────────────────────────────────────────────
const keturahKids: TreePerson[] = [
  leaf("zimran", "Zimran", "ishmael", "Firstborn of Abraham by Keturah (after Sarah's death). Ancestor of an Arabian people. Name may mean 'celebrated' (Gen 25:1-2)."),
  leaf("jokshan", "Jokshan", "ishmael", "Second son of Abraham by Keturah. Father of Sheba and Dedan. Descendants settled in Arabia (Gen 25:2-3)."),
  leaf("medan", "Medan", "ishmael", "Third son of Abraham by Keturah. Ancestor of an Arabian people (Gen 25:2)."),
  leaf("midian", "Midian", "ishmael", "Fourth son of Abraham by Keturah. Ancestor of the Midianites. The traders who bought Joseph brought him to Egypt (Gen 37:28). Moses fled to Midian and married Zipporah, daughter of Jethro the Midianite priest (Exod 2:15-21). The Midianites later oppressed Israel until Gideon defeated them (Judg 6-7) (Gen 25:2)."),
  leaf("ishbak", "Ishbak", "ishmael", "Fifth son of Abraham by Keturah. Ancestor of an Arabian tribe (Gen 25:2)."),
  leaf("shuah", "Shuah", "ishmael", "Sixth son of Abraham by Keturah. Job's friend Bildad was a 'Shuhite' — possibly descended from Shuah (Job 2:11) (Gen 25:2)."),
];

// ─── Esau's children ────────────────────────────────────────────────────────
const esauKids: TreePerson[] = [
  {
    id: "eliphaz-e", name: "Eliphaz (son of Esau)", branch: "esau",
    info: "Son of Esau by his Hittite wife Adah. One of the chiefs of Edom (Gen 36:10-12). His sons by his wife were Teman, Omar, Zepho, Gatam, and Kenaz. He also had a concubine named Timna, who bore him Amalek. Note: Eliphaz the Temanite, Job's friend, is likely descended from him through his son Teman.",
    children: [
      leaf("amalek", "Amalek", "esau", "Son of Eliphaz by his concubine Timna (Gen 36:12). Ancestor of the Amalekites — one of Israel's most persistent enemies. ─── FIRST ATTACK (Exod 17): The Amalekites were the first nation to attack Israel after the Exodus. Joshua led Israel in battle while Moses stood on the hill with his staff raised — when raised Israel prevailed; when it dropped Amalek prevailed. Aaron and Hur held Moses's arms until sunset. ─── SAUL'S FAILURE (1 Sam 15): God commanded Saul to completely destroy the Amalekites. Saul spared King Agag and the best livestock. Samuel: 'To obey is better than sacrifice.' This cost Saul his dynasty. ─── HAMAN THE AGAGITE (Esther 3): The villain Haman, who plotted to exterminate every Jew in Persia, is identified as an Agagite — a descendant of the very Amalekite royal line Saul failed to destroy. Had Saul obeyed, Haman may never have existed."),
    ],
  },
  leaf("reuel-e", "Reuel (son of Esau)", "esau", "Son of Esau by his wife Basemath (daughter of Ishmael). Father of Nahath, Zerah, Shammah, and Mizzah — all chiefs of Edom (Gen 36:13,17)."),
  leaf("jeush-e", "Jeush", "esau", "Son of Esau by his Hivite wife Oholibamah. One of the chiefs/clans of Edom (Gen 36:14,18)."),
  leaf("jalam-e", "Jalam", "esau", "Son of Esau by his Hivite wife Oholibamah. One of the chiefs/clans of Edom (Gen 36:14,18)."),
  leaf("korah-e", "Korah (son of Esau)", "esau", "Son of Esau by his Hivite wife Oholibamah. One of the chiefs/clans of Edom (Gen 36:14,18). Not to be confused with Korah son of Izhar who rebelled against Moses (Num 16)."),
];

// ─── 12 Tribes + Dinah ──────────────────────────────────────────────────────
const tribeKids: TreePerson[] = [
  leaf("reuben", "Reuben", "tribes", "Firstborn of Jacob & Leah. Tried to rescue Joseph — suggested the pit, intending to return and save him. When he returned and found Joseph gone, he tore his clothes in grief; he had not been present when his brothers sold Joseph. Forfeited his birthright by sleeping with Bilhah, his father's concubine (Gen 35:22). Jacob's blessing was withering: 'Unstable as water, you shall not excel' (Gen 49:3-4). 1 Chr 5:1-2 explicitly records: the birthright passed to Joseph and leadership to Judah — because of Reuben's sin. The tribe settled east of the Jordan and never produced a single judge, prophet, or significant leader. The firstborn who should have led faded into the background of the story he was born to shape."),
  leaf("simeon", "Simeon", "tribes", "Second son of Jacob & Leah. With Levi, masterminded the Shechem massacre (Gen 34). When Joseph demanded a hostage in Egypt, he chose Simeon — likely recognizing him as a ringleader in his own sale into slavery. Jacob's curse: 'Cursed be their anger... I will divide them in Jacob and scatter them in Israel' (Gen 49:5-7). The tribe received no independent territory — only cities within Judah's allotment (Josh 19:1-9). Over time Simeon disappeared entirely, absorbed into Judah. Of the twelve tribes, Simeon alone vanished without trace."),
  leaf("levi", "Levi", "tribes", "Third son of Jacob & Leah. With Simeon, masterminded the Shechem massacre. Jacob's curse threatened scattering. ─── THE GOLDEN CALF TURNING POINT (Exod 32): When Israel worshipped the golden calf, Moses called out: 'Who is on the LORD's side?' The Levites alone rallied — and executed judgment on the idolaters, killing ~3,000 men. Moses declared: 'Today you have been ordained for the service of the LORD.' This single act completely reversed Levi's destiny. The scattering that was a curse became the mechanism of priestly service — Levites distributed throughout all Israel's territories. Levi received no land: 'I am your portion and your inheritance' (Num 18:20). Moses, Aaron, and Miriam were Levites. So was Zechariah, father of John the Baptist. A tribe born under a curse for violence, transformed into the bearers of God's presence."),
  {
    id: "judah", name: "Judah", branch: "judah",
    info: "Fourth son of Jacob & Leah. Initially one of the more morally compromised brothers — yet became the most historically and prophetically significant of all twelve. ─── KEY MOMENTS OF COMPROMISE: Suggested selling Joseph to the Ishmaelites (Gen 37:26-27). Married a Canaanite woman — the daughter of a man named Shua — in direct contrast to the care Abraham and Isaac had taken to avoid Canaanite marriages. By her he had three sons: Er, Onan, and Shelah. After Er and Onan both died under God's judgment, Judah withheld Shelah from Tamar. Tamar disguised herself, slept with Judah, and conceived twins. Judah's honest confession: 'She is more righteous than I' (Gen 38:26). ─── THE TRANSFORMATION (Gen 44): When Joseph threatened to keep Benjamin as a slave, Judah stepped forward and offered himself as a substitute slave. The man who had sold his own brother for twenty pieces of silver now offered himself into slavery to spare another. This broke Joseph and moved him to reveal himself. ─── THE BLESSING (Gen 49:8-12): 'The scepter shall not depart from Judah... until Shiloh comes.' One of the clearest messianic prophecies in the Torah. From Judah came David and ultimately Jesus. Jesus is called the 'Lion of the tribe of Judah' (Rev 5:5). The very word 'Jew' derives from Judah.",
    children: [
      leaf("er", "Er", "judah", "Firstborn of Judah by his Canaanite wife Shua. Married Tamar. 'Was wicked in the sight of the LORD, and the LORD put him to death' (Gen 38:7)."),
      leaf("onan", "Onan", "judah", "Second son of Judah. Required by levirate custom to provide an heir for Tamar through marriage, but refused to fully fulfill this duty. 'What he did was wicked in the LORD's sight; so the LORD put him to death' (Gen 38:9-10)."),
      leaf("shelah-j", "Shelah (son of Judah)", "judah", "Third son of Judah. Judah withheld him from Tamar fearing he too would die. Eventually became the father of the clan of Shela (Num 26:20; 1 Chr 4:21-22)."),
      leaf("zerah", "Zerah (twin of Perez)", "judah", "Twin son of Judah and Tamar (Gen 38:27-30). The midwife tied a scarlet thread on his hand as it appeared first — but his brother Perez burst out ahead. The scarlet thread echoes Rahab's scarlet cord in Jericho (Josh 2:18) — both marking someone set apart for preservation. Zerah's descendants included Achan, whose theft at Jericho brought judgment on all Israel (Josh 7:1), and also Ethan, Heman, Calcol, and Darda — wise men Solomon was compared to (1 Kings 4:31)."),
      {
        id: "perez", name: "Perez", branch: "judah",
        info: "Son of Judah by Tamar. Tamar had been widowed twice (Er, then Onan), and Judah withheld his third son Shelah. Left with no heir, Tamar veiled herself, posed as a prostitute, and slept with Judah. When discovered, Judah ordered her burned — until she produced his seal and staff as proof. 'She is more righteous than I' (Gen 38:26). During the birth a midwife tied a scarlet thread on one twin's hand — but his brother burst out first. 'What a breach you have made!' — he was named Perez ('breaking out'). ─── THE LINE: Perez → Hezron → Ram → Amminadab → Nahshon → Salmon → Boaz → Obed → Jesse → David → Jesus (Ruth 4:18-22; Matt 1:3). God's redemptive purposes run straight through the most broken of stories.",
        children: [
          {
            id: "hezron", name: "Hezron", branch: "judah",
            info: "Son of Perez. His family went to Egypt with Jacob (Gen 46:12). Ancestor of David and Jesus through his son Ram (Ruth 4:18-19; Matt 1:3). Father of four sons: Ram (the messianic line), Jerahmeel, Caleb (Chelubai), and Segub (1 Chr 2:9,21).",
            children: [
              leaf("jerahmeel", "Jerahmeel", "judah", "Firstborn of Hezron (1 Chr 2:9,25). Head of the Jerahmeelite clan in southern Judah. Mentioned in 1 Sam 27:10 alongside the Kenites as a people David dealt with. His descendants are listed in extensive detail in 1 Chr 2:25-41 — one of the most thorough non-royal genealogies in Chronicles."),
              {
                id: "caleb-h", name: "Caleb (Chelubai)", branch: "judah",
                info: "Son of Hezron, also called Chelubai (1 Chr 2:9,18). Not to be confused with the famous Caleb son of Jephunneh who spied out Canaan with Joshua. His line produced Hur → Uri → Bezalel — the master craftsman God filled with His Spirit to build the Tabernacle (Exod 31:1-5; 1 Chr 2:18-20). Hezron's son Caleb thus produced the man who built the dwelling place of God. Among the families connected to Caleb's line were the Kenites — specifically the family of Rechab, whose descendants the Rechabites became famous for extraordinary faithfulness in Jeremiah 35.",
                children: [{
                  id: "hur", name: "Hur", branch: "judah",
                  info: "Son of Caleb (Chelubai) and his wife Ephrath (1 Chr 2:19-20). Father of Uri and grandfather of Bezalel. Hur is also likely the same man who helped Aaron hold up Moses's hands during the battle against Amalek (Exod 17:10-12) — making him both a military hero and the grandfather of the craftsman who built the Tabernacle. He was also one of the leaders left in charge of Israel when Moses went up Mt. Sinai (Exod 24:14).",
                  children: [{
                    id: "uri", name: "Uri", branch: "judah",
                    info: "Son of Hur, grandson of Caleb (1 Chr 2:20). Father of Bezalel. His name means 'my light' or 'my flame.' Beyond being Bezalel's father, little else is recorded about Uri — yet his son became one of the most significant craftsmen in all of Scripture.",
                    children: [{
                      id: "bezalel", name: "Bezalel", branch: "judah",
                      info: "Son of Uri, grandson of Hur, great-grandson of Caleb. The master craftsman appointed by God to design and build the Tabernacle — the most sacred construction project in Israel's history (Exod 31:1-5; 35:30-35; 1 Chr 2:20). ─── THE FIRST FILLED WITH THE SPIRIT: Bezalel holds a unique distinction — he is the first person in all of Scripture explicitly described as filled with the Spirit of God: 'I have filled him with the Spirit of God, with wisdom, with understanding, with knowledge and with all kinds of skills — to make artistic designs for work in gold, silver and bronze, to cut and set stones, to work in wood, and to engage in all kinds of crafts' (Exod 31:3-5). This is remarkable: before a prophet, before a king, before a priest — God first poured out His Spirit on an artist and craftsman. ─── HIS WORK: Bezalel oversaw the construction of the Ark of the Covenant, the Tabernacle itself, the altars, the menorah, the priestly garments, and every sacred object within Israel's worship space. He worked alongside Oholiab of the tribe of Dan. The Tabernacle was the dwelling place of God among His people — and Bezalel built it. ─── HIS LINEAGE: He came from the tribe of Judah — the royal tribe — making him a precursor in a line that would eventually produce David and Jesus. The Spirit that filled Bezalel to build God's earthly dwelling is the same Spirit that would later fill the builders of God's spiritual temple.",
                    }],
                  }],
                }],
              },
              {
                id: "segub", name: "Segub", branch: "judah",
                info: "Son of Hezron by his later marriage to the daughter of Machir son of Manasseh — a cross-tribal union connecting Judah's line to Joseph's line through Manasseh (1 Chr 2:21-22). Father of Jair.",
                children: [
                  leaf("jair", "Jair", "judah", "Son of Segub, grandson of Hezron. Inherited territory in Gilead from his mother's Manassite line — a rare cross-tribal inheritance. He controlled 23 cities in Gilead called Havvoth-jair in his honor (1 Chr 2:22; Num 32:41; Deut 3:14). A later judge named Jair the Gileadite (Judg 10:3-5) who also had 30 cities called Havvoth-jair was likely a descendant."),
                ],
              },
              {
                id: "ram", name: "Ram", branch: "judah",
                info: "Son of Hezron. In the direct ancestral line of David and Jesus (Ruth 4:19; Matt 1:3-4; Luke 3:33). Father of Amminadab (1 Chr 2:9-10).",
                children: [{
                  id: "amminadab", name: "Amminadab", branch: "judah",
                  info: "Son of Ram. His son Nahshon was leading prince of the tribe of Judah during the Exodus (Num 1:7; 2:3). In the genealogy of Jesus (Matt 1:4; Luke 3:33).",
                  children: [
                    leaf("elisheba", "Elisheba (daughter)", "judah", "Daughter of Amminadab; sister of Nahshon (Exod 6:23). She married Aaron — the brother of Moses and first High Priest of Israel. This marriage united two of the most significant lines in Israel's history: the royal/messianic line of Judah with the priestly line of Levi. This union foreshadows Jesus as both King and High Priest forever in the order of Melchizedek (Heb 7)."),
                    {
                      id: "nahshon", name: "Nahshon", branch: "judah",
                      info: "Son of Amminadab. Leader/prince of the tribe of Judah during the Exodus (Num 1:7; 2:3; 10:14). Presented the first offering at the dedication of the Tabernacle (Num 7:12-17). Jewish tradition says he was the first to step into the Red Sea, prompting it to part. Brother-in-law of Aaron. In the messianic genealogy (Matt 1:4; Ruth 4:20).",
                      children: [{
                        id: "salmon", name: "Salmon", branch: "judah",
                        info: "Son of Nahshon. Father of Boaz by Rahab (Matt 1:5). ─── RAHAB: A Canaanite woman and prostitute living in Jericho. When Joshua sent two spies into Jericho, Rahab hid them and helped them escape, declaring: 'I know that the LORD has given you this land... for the LORD your God is God in heaven above and on earth below' (Josh 2:11). She hung a scarlet cord from her window as the agreed sign of protection. When Jericho fell, Rahab and her household were spared. She married Salmon of Judah and became the mother of Boaz. Her inclusion in the messianic line is one of Scripture's most remarkable grace stories — a Canaanite prostitute placed in the direct ancestry of David and Jesus. Named in Matt 1:5, listed in Hebrews 11:31 among heroes of faith, cited in James 2:25 as proof faith without works is dead. The scarlet cord echoes the scarlet thread on Zerah's wrist and the blood on the Passover doorposts — a thread of grace running through the whole story.",
                        children: [{
                          id: "boaz", name: "Boaz", branch: "judah",
                          info: "Son of Salmon and Rahab. Wealthy landowner in Bethlehem — the city that would produce David and Jesus. Central male figure of the book of Ruth. ─── THE KINSMAN-REDEEMER (go'el): A close male relative responsible for: redeeming property a poor relative had sold; marrying a widow to continue her husband's family line; avenging a murdered relative. There was a closer relative who declined when he realized it meant marrying Ruth the Moabitess. Boaz did not. ─── HIS CHARACTER (Ruth 2): Noticed Ruth gleaning and went out of his way: told workers to leave extra grain deliberately; invited her to eat at his table; instructed men to protect her from harassment. When Ruth asked why, his answer: he had heard of her loyalty to Naomi. 'The LORD repay you... under whose wings you have come to take refuge.' ─── THE PICTURE: Boaz is widely seen as a type of Christ — the willing kinsman-redeemer who pays the price another would not. His mother was Rahab the Canaanite; his wife was Ruth the Moabitess. Grace ran in his blood and defined his life.",
                          children: [{
                            id: "obed", name: "Obed", branch: "judah",
                            info: "Son of Boaz and Ruth. Name means 'servant/worshiper.' Born in Bethlehem. Laid in the arms of Naomi — the women of Bethlehem celebrated his birth (Ruth 4:13-17). Father of Jesse, grandfather of David. In the genealogy of Jesus (Matt 1:5; Luke 3:32).",
                            children: [{
                              id: "jesse", name: "Jesse", branch: "judah",
                              info: "Son of Obed. An Ephrathite from Bethlehem. Father of 8 sons and 2 daughters. David, the youngest, was born of a different mother than his older brothers. ─── THE ANOINTING (1 Sam 16): Samuel assembled seven sons before him and none was chosen. Samuel asked: 'Are all your sons here?' Jesse's reply: 'There remains yet the youngest, but he is keeping the sheep.' The boy deemed too insignificant to call in from the fields was the one God had already chosen. ─── THE MESSIANIC TITLE (Isa 11:1): 'There shall come forth a shoot from the stump of Jesse, and a branch from his roots shall bear fruit.' Not a flourishing tree but a stump — the royal line cut down before the Messiah emerged. Isaiah 11:10 and Romans 15:12 reference 'the root of Jesse' as a title for the Messiah himself. Jesse's name became a messianic title carried into the New Testament.",
                              children: [
                                leaf("eliab", "Eliab", "judah", "Firstborn of Jesse. Tall and impressive in appearance. When Samuel first saw Eliab he was immediately convinced: 'Surely the LORD's anointed is before him' (1 Sam 16:6). But God stopped him with one of Scripture's most famous declarations: 'Do not look on his appearance or the height of his stature, because I have rejected him. For the LORD sees not as man sees: man looks on the outward appearance, but the LORD looks on the heart' (1 Sam 16:7). ─── THE GOLIATH CONFRONTATION (1 Sam 17): Eliab appears again when young David arrived at the battlefield and began asking questions about Goliath. Eliab turned on him with contempt: 'Why have you come down? And with whom have you left those few sheep in the wilderness? I know your presumption and the evil of your heart, for you have come down to see the battle.' It is a striking moment — the brother God had rejected for his outward appearance now accuses the brother God had chosen of having a corrupt inner heart. He could not have been more wrong. ─── RALLYING TO DAVID: Despite this early contempt, Eliab later followed his brother. When David was a fugitive from King Saul and hiding in the cave of Adullam, his brothers came to him (1 Sam 22:1). When David's life was in genuine danger, his family rallied to him. Whatever rivalry or resentment had existed at the battlefield, it did not define them in the end."),
                                leaf("abinadab", "Abinadab (son of Jesse)", "judah", "Second son of Jesse. Presented before Samuel for anointing but not chosen (1 Sam 16:8). Served in Saul's army when David came to the camp (1 Sam 17:13)."),
                                {
                                  id: "shammah", name: "Shammah (son of Jesse)", branch: "judah",
                                  info: "Third son of Jesse (also called Shimea or Shimeah). Presented before Samuel but not chosen (1 Sam 16:9). Father of Jonathan, one of David's mighty men (2 Sam 21:21), and of Jonadab — whose cunning would leave a dark mark on David's household.",
                                  children: [
                                    leaf("jonadab", "Jonadab", "judah", "Son of Shammah; nephew of King David. Described in 2 Samuel 13:3 as 'a very crafty man' — one of the more unsettling character descriptions in Scripture. He was Amnon's closest friend. When Amnon was lovesick over his half-sister Tamar, it was Jonadab who devised the scheme by which Amnon lured Tamar to his house under the pretense of illness — leading to the rape that tore David's family apart and set in motion Absalom's years of rage, the murder of Amnon, his flight from David, and ultimately the rebellion that nearly destroyed the kingdom. Jonadab later reappears after Absalom kills Amnon, coolly informing David that only Amnon was dead — not all his sons — as if this were somehow reassuring news (2 Sam 13:32-33). He is a man who used his intelligence entirely in the service of destruction. A reminder that wisdom and craftiness are not the same thing, and that proximity to the king does not mean proximity to righteousness."),
                                  ],
                                },
                                leaf("nethanel-j", "Nethanel (son of Jesse)", "judah", "Fourth son of Jesse (1 Chr 2:14). Presented before Samuel."),
                                leaf("raddai", "Raddai", "judah", "Fifth son of Jesse (1 Chr 2:14)."),
                                leaf("ozem", "Ozem", "judah", "Sixth son of Jesse (1 Chr 2:15). Note: 1 Chr 2:15 lists 7 sons while 1 Sam 16:10 implies 8, which has led to scholarly discussion."),
                                leaf("david", "David", "david", "Seventh/eighth son of Jesse. The greatest king Israel ever had — and the ancestor of Jesus Christ (Matt 1:1). ─── OVERLOOKED (1 Sam 16): When Samuel came to Jesse's house to anoint a new king, Jesse did not even bring David in for consideration. He presented seven sons before the prophet and none was chosen. Samuel asked: 'Are all your sons here?' Jesse's answer revealed everything: 'There remains yet the youngest, but behold, he is keeping the sheep.' The boy his own father did not think worth calling in was the one God had already chosen. ─── THE SHEPHERD YEARS: David spent years as a shepherd — years that looked like obscurity but were actually preparation. He developed the courage to fight, killing both a lion and a bear with his hands to protect his flock (1 Sam 17:34-36). He developed solitude and intimacy with God — the Psalms bear witness to a man who had learned to speak to God alone in the dark. He developed patience. He learned to protect the vulnerable. When David stood before Goliath and the entire Israelite army was paralyzed with fear, his confidence came directly from those years in the fields: 'Your servant has struck down both lions and bears, and this uncircumcised Philistine shall be like one of them, for he has defied the armies of the living God' (1 Sam 17:36). The shepherd became the giant-slayer not despite his years with the flock, but because of them. ─── THREE ANOINTINGS: David was anointed king three times — each marking a progressive stage of his kingship. First, privately by Samuel in Jesse's house (1 Sam 16) — only his family present, no fanfare, no crown. Second, by the men of Judah as king over Judah after Saul's death (2 Sam 2:4). Third, by all the tribes of Israel as king over the united kingdom (2 Sam 5:3). The gap between the first and third anointing was approximately 15 years of waiting, suffering, fleeing, and trusting — during which God was forging the character of the man He had chosen. ─── HIS REIGN: Anointed king over all Israel at age 30. Captured Jerusalem from the Jebusites and made it his capital. Brought the Ark of God to Jerusalem, dancing before it with abandon. God made an eternal covenant with him (2 Sam 7): his throne would last forever — fulfilled ultimately in Jesus. Called 'a man after God's own heart' (1 Sam 13:14; Acts 13:22). Musician and poet — credited with writing many of the Psalms. His failures — including adultery with Bathsheba and the arranged death of her husband Uriah — are recorded without softening, yet his repentance (Ps 51) became a model of genuine contrition. He died at approximately 70 years old, having reigned 40 years: 7 over Judah, 33 over all Israel (2 Sam 5:4-5)."),
                                {
                                  id: "zeruiah-j", name: "Zeruiah (daughter)", branch: "judah",
                                  info: "Daughter of Jesse; sister of David. Mother of three of David's most powerful military commanders — Joab, Abishai, and Asahel (1 Chr 2:16). Her sons were described by David as 'too hard' for him to control (2 Sam 3:39). She is one of the few women in the OT consistently identified by her own name rather than her husband's — her sons are always called 'sons of Zeruiah,' not sons of their father, suggesting she was the dominant figure of the family.",
                                  children: [
                                    leaf("joab", "Joab", "judah", "Son of Zeruiah; nephew of David. David's general and the most powerful military figure in the kingdom — brilliant, ruthless, and nearly impossible to control. He won David's greatest victories and committed David's greatest embarrassments. ─── HIS DEEDS: Conquered Jerusalem for David (2 Sam 5). Led Israel's armies through virtually every major campaign of David's reign. But he also took matters into his own hands when David would not: he killed Abner — the rival general of Saul's house — in cold blood while David was negotiating peace, avenging his brother Asahel but destroying the reconciliation (2 Sam 3:27). He killed Absalom, David's beloved son, despite David's explicit command to deal gently with him — driving three spears through Absalom as he hung helpless in an oak tree (2 Sam 18:14). He killed Amasa, David's newly appointed general, with a sword thrust to the belly while pretending to greet him (2 Sam 20:10). ─── THE PARADOX: David wept bitterly over each of these deaths. He publicly mourned Abner and Absalom. Yet he kept Joab as his general because he could not do without him. On his deathbed David finally gave Solomon instructions to deal with Joab — 'do not let his gray head go down to Sheol in peace' (1 Kings 2:6). Solomon had him executed at the altar of the Tabernacle. Joab is one of Scripture's most complex figures — the man who built David's kingdom and repeatedly broke David's heart."),
                                    leaf("abishai", "Abishai", "judah", "Son of Zeruiah; nephew of David. One of Israel's most ferocious warriors — fiercely loyal to David and utterly fearless. ─── HIS DEEDS: When David snuck into Saul's camp at night and stood over the sleeping king, it was Abishai who whispered: 'God has given your enemy into your hand today. Let me pin him to the earth with one stroke of the spear' (1 Sam 26:8). David refused. Abishai killed 300 men with his spear in a single engagement, making him one of the chief of the Three Mighty Men (2 Sam 23:18-19). When Shimei cursed David during Absalom's rebellion, Abishai wanted to cut off his head on the spot — David again restrained him (2 Sam 16:9). He rescued David in battle when the king grew exhausted fighting a Philistine giant (2 Sam 21:17). ─── HIS CHARACTER: Abishai was the kind of man who solved every problem with a sword. He was completely devoted to David, but his loyalty expressed itself as violence first and judgment second. David trusted him — but always had to hold him back."),
                                    leaf("asahel", "Asahel", "judah", "Son of Zeruiah; nephew of David. Described as 'as swift of foot as a wild gazelle' — the fastest runner in Israel's army (2 Sam 2:18). ─── HIS DEATH: After the battle of Gibeon between the forces of David and the forces of Saul's son Ish-bosheth, Asahel pursued Abner — the opposing general — with relentless speed. Abner warned him twice to turn aside and pursue someone else. Asahel refused. Abner struck him with the butt end of his spear so hard it came out through his back. Asahel died on the spot. ─── THE BLOOD FEUD: Every man who came to the place where Asahel fell, stopped. His death was not forgotten. His brothers Joab and Abishai swore blood vengeance against Abner. When Abner later came to David in peace, Joab called him back privately and killed him — 'because he had shed the blood of Asahel his brother' (2 Sam 3:30). Asahel never held a sword in the story — yet his death set in motion events that shaped the entire early reign of David. He is listed among David's Thirty Mighty Men (2 Sam 23:24)."),
                                  ],
                                },
                                leaf("abigail-j", "Abigail (daughter of Jesse)", "judah", "Daughter of Jesse; sister of David (1 Chr 2:16-17). Mother of Amasa, who became commander of Absalom's army during the rebellion against David (2 Sam 17:25)."),
                              ],
                            }],
                          }],
                        }],
                      }],
                    },
                  ],
                }],
              },
            ],
          },
        ],
      },
    ],
  },
  leaf("dan", "Dan", "tribes", "Fifth son of Jacob, firstborn of Bilhah. Name means 'he judged.' Jacob's blessing: 'Dan shall be a serpent in the way, a viper by the path' (Gen 49:17) — cunning, striking from shadows. ─── SAMSON (Judg 13-16): Dan's most famous son. A Nazirite from birth with supernatural strength. His fatal weakness for foreign women led to catastrophic choices. Delilah pressured him until he revealed his strength lay in his uncut hair. The Philistines shaved it, blinded him, and imprisoned him. But his hair grew back. Brought to the temple of Dagon to be mocked, Samson pushed the pillars apart and brought the entire structure down — killing more Philistines in his death than in his life. ─── THE DARK EPISODE (Judg 17-18): Dan conquered the peaceful city of Laish in the far north, renamed it Dan, and established an idolatrous worship center — later one of Jeroboam's two golden calf sites. ─── OMITTED FROM REVELATION (Rev 7): Dan is entirely absent from the 144,000 — the only tribe not mentioned. Manasseh replaces Dan in the list. A tribe whose name meant 'judge' became defined instead by the idols it set up."),
  leaf("naphtali", "Naphtali", "tribes", "Sixth son of Jacob, second son of Bilhah. Name means 'my struggle.' Jacob's blessing: 'Naphtali is a doe set free that bears beautiful fawns' (Gen 49:21). Settled in northern Galilee. ─── BARAK (Judg 4): Naphtali's most notable son. Deborah summoned Barak to lead Israel against Sisera. Barak agreed only if Deborah came with him — so the honor of victory went to Jael, a Kenite woman, who drove a tent peg through Sisera's temple while he slept. Despite his hesitancy, Barak is listed among the heroes of faith in Hebrews 11:32. ─── THE GREAT LIGHT: Naphtali's territory is where Isaiah prophesied 'the people who walked in darkness have seen a great light' (Isa 9:1-2) — fulfilled when Jesus began his ministry in Galilee (Matt 4:15-16)."),
  leaf("gad", "Gad", "tribes", "Seventh son of Jacob, firstborn of Zilpah. Name means 'good fortune.' Jacob's blessing: 'Gad will be attacked by a band of raiders, but he will attack them at their heels' (Gen 49:19). Settled east of the Jordan in Gilead. ─── MOSES'S BLESSING (Deut 33:20-21): 'He chose the best of the land... he executed the justice of the LORD' — a commendation of leadership and covenant faithfulness. ─── ELIJAH: The prophet Elijah came from Tishbe in Gilead — Gad's territory (1 Kings 17:1). Elijah confronted King Ahab, called down fire on Mt. Carmel against the prophets of Baal, heard the still small voice of God at Horeb, and was taken to heaven in a chariot of fire without dying. He appears alongside Moses at the Transfiguration of Jesus (Matt 17:3). A tribe of warriors produced one of God's most fearless voices."),
  leaf("asher", "Asher", "tribes", "Eighth son of Jacob, second son of Zilpah. Name means 'happy' or 'blessed.' Jacob's blessing: 'Asher's food will be rich; he will provide delicacies fit for a king' (Gen 49:20). Settled along the Mediterranean coast in northern Israel. The prophetess Anna who greeted the infant Jesus at the Temple was from the tribe of Asher (Luke 2:36)."),
  leaf("issachar", "Issachar", "tribes", "Ninth son of Jacob, fifth son of Leah. Name means 'reward.' Jacob's blessing: 'a rawboned donkey lying down between two saddlebags... he bowed his shoulder to the burden' (Gen 49:14-15). Settled in the fertile Jezreel Valley. ─── THE COMMENDATION (1 Chr 12:32): Among all the tribes who rallied to David at Hebron, Issachar received the most distinctive commendation: 'men who had understanding of the times to know what Israel ought to do.' Not the largest contingent, not the most feared warriors — but the tribe that understood the moment they were living in. Their legacy was not power but perception."),
  leaf("zebulun", "Zebulun", "tribes", "Tenth son of Jacob, sixth and last son of Leah. Name means 'honor.' Jacob's blessing: 'Zebulun shall dwell at the shore of the sea; he shall become a haven for ships' (Gen 49:13). Settled in lower Galilee. ─── THE PROPHECY FULFILLED: Nazareth — the hometown where Jesus grew up — sat within the territory of Zebulun. Isaiah 9:1-2 prophesied: 'The land of Zebulun and the land of Naphtali... the people who walked in darkness have seen a great light.' Matthew 4:15-16 applies this directly to Jesus beginning his ministry in Galilee. A tribe that seemed unremarkable in Israel's history became the ground on which the Light of the World first proclaimed the Kingdom of God."),
  {
    id: "joseph", name: "Joseph", branch: "tribes",
    info: "Eleventh son of Jacob, firstborn of Rachel. The most detailed biography of any individual in Genesis. ─── THE BETRAYAL (Gen 37): Beloved by his father — given a richly ornamented coat. His brothers' jealousy curdled into hatred. They threw him into a pit, sold him to Ishmaelite traders for twenty pieces of silver, dipped his coat in goat's blood, and brought it to Jacob. ─── POTIPHAR'S HOUSE (Gen 39): Sold to Potiphar, officer of Pharaoh. Rose to manage his entire household. When Potiphar's wife repeatedly tried to seduce him he refused: 'How then can I do this great wickedness and sin against God?' She accused him of assault and he was thrown into prison. ─── PRISON (Gen 39-40): God was with Joseph and he rose to manage the prison. He interpreted dreams for Pharaoh's cupbearer and baker — both fulfilled exactly as predicted. The cupbearer forgot him for two full years. ─── PHARAOH'S DREAMS (Gen 41): Joseph interpreted Pharaoh's dreams: seven years of abundance followed by seven years of devastating famine. He recommended storing twenty percent of grain during the good years. Pharaoh appointed him second-in-command over all Egypt. Joseph was thirty years old — thirteen years after being sold as a slave. ─── THE REUNION (Gen 42-45): When famine hit Canaan, Jacob sent his sons to Egypt. Joseph recognized them, tested them, and when Judah offered himself as a slave in Benjamin's place, Joseph wept and revealed himself: 'You meant evil against me, but God meant it for good' (Gen 50:20). ─── LEGACY: Died at 110, requesting his bones be carried back to the Promised Land — honored by Moses four centuries later (Exod 13:19; Josh 24:32).",
    children: [
      leaf("manasseh", "Manasseh", "tribes", "Firstborn of Joseph and Asenath (Egyptian priest's daughter). Along with Ephraim, formally adopted by grandfather Jacob on his deathbed — elevated to full tribal status (Gen 48). This gave Joseph the double portion the firstborn Reuben had forfeited, and preserved twelve land-inheriting tribes after Levi was set apart for priestly service. ─── THE CROSSED HANDS (Gen 48): Joseph positioned Manasseh at Jacob's right hand for the greater blessing. Jacob deliberately crossed his hands, placing his right hand on Ephraim the younger. When Joseph tried to correct him Jacob refused: 'I know, my son, I know. Nevertheless his younger brother shall be greater.' Once again in Genesis, God bypassed the firstborn. ─── THE INHERITANCE — DIVIDED: Half tribe west of the Jordan in the hill country of Canaan; half tribe east in Gilead and Bashan. ─── ZELOPHEHAD'S DAUGHTERS (Num 27): A Manassite named Zelophehad died leaving five daughters — Mahlah, Noah, Hoglah, Milcah, and Tirzah — and no sons. God told Moses: 'The daughters of Zelophehad are right.' He established that daughters could inherit when there were no male heirs — a remarkably progressive ruling for the ancient world. ─── NOTABLE MANASSITES: Gideon — who defeated the vast Midianite army with only 300 men (Judg 6-8). Jephthah — the outcast son of a prostitute who became a military leader and made a rash vow that cost him dearly (Judg 11)."),
      leaf("ephraim", "Ephraim", "tribes", "Second son of Joseph. Formally adopted by grandfather Jacob — elevated to full tribal status (Gen 48). ─── THE CROSSED HANDS: Jacob deliberately placed his right hand on Ephraim the younger. When Joseph tried to correct him Jacob refused: 'Nevertheless his younger brother shall be greater than he, and his offspring shall become a multitude of nations.' In the pattern running throughout Genesis — Isaac over Ishmael, Jacob over Esau, Perez breaking out ahead of Zerah — God again chose the younger. ─── THE DOMINANT TRIBE: Ephraim became so dominant among the northern tribes that 'Ephraim' is used throughout the prophets as a synonym for the entire northern kingdom — particularly in Hosea and Isaiah. When you read 'Ephraim' in the prophets it almost always means the whole northern kingdom. Joshua, who led Israel into the Promised Land as Moses's successor, was an Ephraimite. The tabernacle at Shiloh sat in Ephraim's territory for centuries. ─── THE DARK SIDE — JEROBOAM (1 Kings 11-12): Jeroboam son of Nebat — an official under Solomon who rebelled — became the first king of the northern kingdom after Solomon's death. He erected two golden calves at Bethel and Dan: 'Here are your gods who brought you out of Egypt.' He invented his own priesthood and festivals. The phrase 'the sin of Jeroboam' echoes through all of Kings as a measuring stick of wickedness. The tribe that produced Joshua, who led Israel into the land, also produced Jeroboam, who led them into the idolatry that eventually cost them the land."),
    ],
  },
  leaf("benjamin", "Benjamin", "tribes", "Twelfth and youngest son of Jacob, second son of Rachel. Born as Rachel died on the road to Bethlehem — she named him Ben-Oni ('son of my sorrow') but Jacob renamed him Benjamin ('son of my right hand') (Gen 35:18). Jacob's blessing: 'Benjamin is a ravenous wolf; in the morning he devours the prey' (Gen 49:27). Jerusalem straddled the Benjamin/Judah border. ─── THE NEAR EXTINCTION (Judg 19-20): A Levite's concubine was gang-raped and murdered by men of Gibeah, a Benjaminite city. When Israel demanded justice, Benjamin refused — triggering a civil war. Only 600 Benjaminite men survived. ─── NOTABLE BENJAMINITES: Ehud — the left-handed judge who assassinated the Moabite king Eglon (Judg 3). King Saul — Israel's first king (1 Sam 9). Mordecai and Esther — who saved the Jewish people from Haman's genocide. The Apostle Paul — who identified himself as 'of the tribe of Benjamin, a Hebrew of Hebrews' (Phil 3:5) — the man who carried the gospel to the Gentile world. From 600 survivors to the apostle who wrote half the New Testament — Benjamin's story is one of the Bible's most remarkable reversals."),
  leaf("dinah", "Dinah", "tribes", "Daughter of Jacob and Leah. Only daughter of Jacob mentioned by name (Gen 30:21). Violated by Shechem the Hivite, who then asked to marry her. Her brothers Simeon and Levi killed every male in Shechem in revenge (Gen 34). Jacob rebuked them: 'You have brought trouble on me by making me stink to the inhabitants of the land' (Gen 34:30). The episode made Jacob's family appear dangerous in the eyes of the surrounding Canaanite peoples. God responded immediately, commanding Jacob to move to Bethel, effectively relocating the family before the consequences could catch up with them (Gen 35:1)."),
];

// ─── Jacob ───────────────────────────────────────────────────────────────────
const jacobNode: TreePerson = {
  id: "jacob", name: "Jacob (Israel)", branch: "abraham",
  info: "Second twin son of Isaac and Rebekah. ─── BEFORE BIRTH — THE ORACLE (Gen 25:22-23): Rebekah felt the twins struggling so violently she went to inquire of God. His answer was theologically explosive: 'Two nations are in your womb... the older shall serve the younger.' Before either child had drawn a breath, God reversed the natural birth order. Paul points to this as the clearest illustration of divine election by grace rather than merit (Rom 9:11-13). ─── BIRTH & CHARACTER: Esau emerged first — red and hairy. Jacob came second grasping Esau's heel — his name means 'he grasps the heel' or supplanter. Isaac favored Esau; Rebekah favored Jacob. This parental favoritism would fracture the family for decades. ─── THE BIRTHRIGHT (Gen 25:29-34): Esau returned from the field famished. Jacob was cooking red lentil stew. Jacob said: 'Sell me your birthright first.' Esau: 'I am about to die — what use is a birthright to me?' He traded the bekorah — double inheritance, family leadership, and spiritual headship — for a single meal. ─── THE STOLEN BLESSING (Gen 27): Rebekah dressed Jacob in Esau's clothes and covered his arms with goatskin to mimic Esau. Isaac was suspicious: 'The voice is Jacob's voice, but the hands are the hands of Esau' — yet he gave the blessing. Esau vowed to kill Jacob. Jacob fled. ─── JACOB'S LADDER — BETHEL (Gen 28): Alone and a fugitive, sleeping with a stone for a pillow, Jacob dreamed of a stairway reaching from earth to heaven with angels ascending and descending — and God at the top reaffirming the Abrahamic covenant. He named the place Bethel — 'House of God.' His vow was notably conditional: 'If God will be with me... then the LORD shall be my God.' Jesus referenced this dream directly: 'You will see heaven opened and the angels of God ascending and descending on the Son of Man' (John 1:51) — identifying himself as the ladder. ─── LABAN, LEAH & RACHEL (Gen 29): Jacob arrived at Laban's household and met Rachel at a well. He worked 7 years for her — 'they seemed but a few days because of his love.' Laban brought the veiled Leah to Jacob on the wedding night instead. The man who had deceived his own blind father was now himself deceived in the dark — measure for measure. He worked another 7 years for Rachel. Leah was unloved but God opened her womb; Rachel was loved but barren. ─── WRESTLING WITH GOD — PENIEL (Gen 32): The night before facing Esau, Jacob wrestled with a mysterious figure until daybreak. The figure struck his hip, dislocating it, yet Jacob would not let go: 'I will not let you go unless you bless me.' He was renamed Israel — 'for you have striven with God and with men and have prevailed.' He crossed into Canaan limping — changed, marked, broken and blessed at once. ─── RECONCILIATION: Esau ran to meet him, embraced him, and they wept together. ─── EGYPT & DEATH: Moved his entire family — 70 people — to Egypt at Joseph's invitation, age 130. Blessed his sons prophetically (Gen 49). Died at 147; buried in Machpelah.",
  children: tribeKids,
};

// ─── Esau & Jacob under Isaac ────────────────────────────────────────────────
const isaacKids: TreePerson[] = [
  {
    id: "esau", name: "Esau (Edom)", branch: "esau",
    info: "Firstborn twin of Isaac and Rebekah. ─── CHARACTER: Physically the opposite of Jacob — rugged, outdoorsman, skilled hunter. Physically the opposite of the quiet domestic Jacob. ─── THE BIRTHRIGHT & THE BLESSING: Sold his birthright — double inheritance, family leadership, and spiritual headship — to Jacob for a single bowl of red lentil stew (Gen 25:29-34), earning the nickname Edom ('red'). Lost the covenantal blessing to Jacob's deception (Gen 27). Vowed to kill his brother but later embraced him tearfully (Gen 33). ─── THE WIVES (Gen 26:34-35; 28:9): At age 40 Esau took two Hittite (Canaanite) wives: Judith daughter of Beeri, and Basemath daughter of Elon. Genesis 26:35 records simply: 'They made life bitter for Isaac and Rebekah.' Abraham had gone to extraordinary lengths to ensure Isaac did not marry a Canaanite woman — Esau ignored this entirely. Later, realizing his Canaanite wives displeased his parents, Esau added a third wife: Mahalath, daughter of Ishmael — an attempt to reconnect with the covenant family that came too late. ─── 400 MEN (Gen 32-33): By the time Jacob returned, Esau rode out to meet him at the head of 400 men — essentially a small private army. ─── MOUNT SEIR & EDOM: Esau settled in Mount Seir — the rugged mountainous terrain southeast of the Dead Sea — and his descendants became the Edomites. In one of history's great ironies, the Herods — the ruling dynasty of Judea at the time of Jesus — were Idumean/Edomite by descent. Herod the Great, who ordered the massacre of infant boys in Bethlehem trying to kill the newborn King of the Jews, was himself a descendant of Esau. The firstborn who despised his birthright ultimately produced a king who tried to destroy the one born to hold it forever.",
    children: esauKids,
  },
  jacobNode,
];

// ─── Abraham's children ─────────────────────────────────────────────────────
const abrahamKids: TreePerson[] = [
  {
    id: "ishmael", name: "Ishmael", branch: "ishmael",
    info: "Firstborn son of Abraham by Hagar, Sarah's Egyptian servant. ─── HAGAR & THE FIRST ENCOUNTER (Gen 16): Hagar was Egyptian — a foreigner, a servant, among the most marginalized figures imaginable. When she fled Sarah's harsh treatment while pregnant, God found her alone at a spring in the wilderness. One of Scripture's earliest statements that God's care extends beyond the covenant people to the forgotten. God named her son Ishmael — 'God hears.' Hagar gave God a name in return: El Roi, 'the God who sees me.' ─── THE HEIR APPARENT: Ishmael was born when Abraham was 86. For 13 years he was Abraham's only son and presumably the heir apparent. Then Isaac was born. ─── THE EXPULSION (Gen 21): Sarah saw Ishmael mocking Isaac and demanded Abraham drive out both Hagar and the boy. Abraham was deeply grieved. God told him to listen to Sarah but immediately added: 'I will make a nation of him also, because he is your offspring' (Gen 21:13). When their water ran out in the wilderness Hagar laid Ishmael under a bush and walked away weeping. God heard the boy crying, called to Hagar, and revealed a well nearby. ─── GOD WITH ISHMAEL: 'God was with the boy as he grew up' (Gen 21:20). He settled in the wilderness of Paran, became a skilled archer, and his mother took an Egyptian wife for him. ─── HIS LEGACY: His 12 sons became princes and tribal leaders across Arabia (Gen 25:16). The Prophet Muhammad himself claimed direct descent from Ishmael — specifically through his son Kedar — making this branch of Abraham's family the root of Islam. God blessed Ishmael greatly — but the covenant passed through Isaac alone. ─── BURYING THEIR FATHER: 'Isaac and Ishmael his sons buried him in the cave of Machpelah' (Gen 25:9). The two brothers — separated since childhood — came together one last time to honor their father. Ishmael died at age 137.",
    children: ishmaelKids,
  },
  {
    id: "isaac", name: "Isaac", branch: "abraham",
    info: "Son of Abraham and Sarah. ─── THE SON OF LAUGHTER (Gen 17-21): When God promised Abraham and Sarah a son, both laughed in sheer disbelief — Abraham was 99 and Sarah was 90. God named the child Isaac, meaning 'he laughs,' turning their incredulous laughter into a permanent reminder that nothing is too hard for God. ─── THE OFFERING ON MORIAH (Gen 22): God commanded Abraham to offer Isaac on Mt. Moriah. Jewish tradition suggests Isaac was between 25 and 37 years old — certainly strong enough to carry the heavy wood up a mountain. When Abraham bound him Isaac was fully capable of resisting his aging father — yet he did not. Isaac was not a passive victim. He was an active participant in an act of faith, willingly submitting to his father's obedience to God. God stopped Abraham's hand and provided a ram caught in a thicket. ─── THE SEARCH FOR A WIFE (Gen 24): Abraham was determined Isaac must not marry a Canaanite woman — a conviction that proved wise, as Canaanite marriages later led many kings in David's line into idolatry. Abraham's servant prayed a specific prayer: that the appointed woman would volunteer to water his camels. Offering to water ten camels was enormous — up to 250 gallons drawn by hand. Before the servant finished praying, Rebekah appeared and did exactly that without hesitation. She then proved to be the granddaughter of Nahor, Abraham's own brother. The answer arrived before the prayer was complete. ─── THE COVENANT REAFFIRMED (Gen 26): God appeared to Isaac at Beersheba: 'I am the God of Abraham your father. Fear not, for I am with you.' Isaac built an altar and called on the name of the LORD — one of the few times the text records him in direct personal worship. Isaac is the only patriarch who never left the Promised Land. ─── THE STOLEN BLESSING (Gen 27): Nearly blind in old age, Isaac prepared to bless Esau. Rebekah and Jacob conspired to deceive him — Jacob dressed in Esau's clothes, covered his arms with goatskin. Isaac was suspicious: 'The voice is Jacob's voice, but the hands are the hands of Esau' — yet he gave the blessing. When the truth emerged the blessing could not be revoked. Died at 180; buried in Machpelah by both Esau and Jacob together (Gen 35:29).",
    children: isaacKids,
  },
  ...keturahKids,
];

// ─── Nahor II ────────────────────────────────────────────────────────────────
const nahor2Node: TreePerson = {
  id: "nahor2", name: "Nahor II", branch: "abraham",
  info: "Son of Terah; Abraham's brother. Married his niece Milcah. Stayed behind in Haran when Abraham continued to Canaan. Father of Bethuel, grandfather of Rebekah and Laban. Abraham's servant went to Nahor's city to find a wife for Isaac (Gen 24).",
  children: [{
    id: "bethuel", name: "Bethuel", branch: "abraham",
    info: "Son of Nahor II and Milcah. Father of Rebekah and Laban. Called 'Bethuel the Aramean of Paddan-Aram' (Gen 25:20).",
    children: [
      leaf("rebekah", "Rebekah", "abraham", "Daughter of Bethuel; sister of Laban. Became wife of Isaac after Abraham's servant sought her out (Gen 24). Drew water for the servant's ten camels — up to 250 gallons by hand. Mother of twins Esau and Jacob. Favored Jacob and helped him deceive Isaac for the blessing (Gen 27). Buried in the cave of Machpelah (Gen 49:31)."),
      {
        id: "laban", name: "Laban", branch: "abraham",
        info: "Son of Bethuel; brother of Rebekah. Father of Leah and Rachel. Lived in Paddan-Aram. Welcomed Jacob when he fled Esau. Jacob worked 7 years for Rachel but Laban tricked him into marrying Leah first, then another 7 years for Rachel. Changed Jacob's wages 10 times (Gen 31:7). Eventually made a covenant with Jacob at Gilead (Gen 31).",
        children: [
          leaf("leah", "Leah", "abraham", "Firstborn daughter of Laban; elder sister of Rachel. Described as having 'weak/tender eyes' while Rachel was beautiful (Gen 29:17). Laban secretly substituted her for Rachel on Jacob's wedding night. Though unloved by Jacob, God saw her pain and opened her womb: she bore 6 of Jacob's 12 sons (Reuben, Simeon, Levi, Judah, Issachar, Zebulun) and daughter Dinah. Her son Judah carries the messianic line to David and Jesus. Her son Levi is the ancestor of all priests and Moses himself. Despite being the 'unloved wife,' Leah's legacy surpasses almost any other. She was buried in the cave of Machpelah — the only one of Jacob's wives given that honor (Gen 49:31)."),
          leaf("rachel", "Rachel", "abraham", "Second daughter of Laban; beloved wife of Jacob. 'Beautiful in form and appearance' (Gen 29:17). Jacob worked 7 years for her — 'they seemed but a few days because of his love' (Gen 29:20). Laban deceived Jacob on the wedding night by substituting Leah. Jacob worked another 7 years for Rachel. She struggled with barrenness while Leah bore children: 'Give me children or I will die!' (Gen 30:1). God eventually opened her womb — she bore Joseph and Benjamin. Died giving birth to Benjamin on the road to Bethlehem (Gen 35:19). Her tomb near Bethlehem became a landmark. Jer 31:15 pictures Rachel weeping for her children — quoted in Matt 2:18 at Herod's massacre of the innocents."),
        ],
      },
    ],
  }],
};

// ─── Haran ───────────────────────────────────────────────────────────────────
const haranNode: TreePerson = {
  id: "haran", name: "Haran", branch: "abraham",
  info: "Son of Terah. Died before his father in Ur — the first recorded death of a son before his father (Gen 11:28). Father of Lot, Milcah, and Iscah.",
  children: [
    {
      id: "lot", name: "Lot", branch: "abraham",
      info: "Son of Haran; nephew of Abraham. ─── TRAVELS WITH ABRAHAM: Lot accompanied Abraham from Ur to Canaan. As both men's flocks grew the land could not support them. Abraham generously gave Lot first choice of land. Lot chose the fertile Jordan valley — 'like the garden of the LORD' (Gen 13:10) — and pitched his tents near Sodom. The narrator adds: 'the men of Sodom were wicked, great sinners against the LORD' (Gen 13:13). ─── ABRAHAM RESCUES LOT (Gen 14): Four kings raided Sodom and carried off Lot and his household. Abraham armed 318 trained men, launched a night raid, and rescued his nephew. ─── THE ANGELS VISIT SODOM (Gen 19): Lot was sitting at the city gate — meaning he had become a prominent citizen of this ungodly place. He urgently took two angels in. A mob of men — old and young, showing the moral corruption ran through every generation — surrounded the house demanding Lot hand over his guests. In a deeply troubling response Lot offered his two virgin daughters to the mob instead. The angels struck the mob blind. ─── THE ESCAPE: The angels commanded Lot to flee. Yet the text records: 'he lingered.' The angels had to physically grab him and his family and drag them out. ─── DESTRUCTION: God rained burning sulfur on Sodom and Gomorrah. The angels gave one command: do not look back. Lot's wife looked back and was turned into a pillar of salt. Jesus later warned: 'Remember Lot's wife' (Luke 17:32). ─── AFTERMATH: Lot's daughters concluded they were the last survivors on earth. On two successive nights they made their father drunk and slept with him. From these unions came Moab and Ben-Ammi.",
      children: [
        leaf("moab", "Moab", "abraham", "Son of Lot by his elder daughter (Gen 19:37). Ancestor of the Moabites, east of the Dead Sea. Israel was forbidden to conquer Moab (Deut 2:9) — a recognition that God still honored His covenant with Abraham, whose nephew Lot was Moab's grandfather. That covenant protection extended even to this people born of such a broken beginning. Ruth the Moabitess, great-grandmother of David, came from this line — a remarkable reminder that God's redemptive purposes can run through the most unlikely of origins."),
        leaf("benammi", "Ben-Ammi", "abraham", "Son of Lot by his younger daughter. Name means 'son of my people.' Ancestor of the Ammonites, who settled east of the Jordan River (Gen 19:38). The Ammonites were frequent enemies of Israel. Their capital was Rabbah (modern Amman, Jordan)."),
      ],
    },
    leaf("milcah", "Milcah", "abraham", "Daughter of Haran; niece of Abraham. Married her uncle Nahor II. Grandmother of Rebekah (who married Isaac) and Laban. Name means 'queen' (Gen 11:29; 22:20-23)."),
    leaf("iscah", "Iscah", "abraham", "Daughter of Haran. Mentioned only once in Gen 11:29. Some early Jewish traditions identify Iscah with Sarah (Abraham's wife), though this is debated."),
  ],
};

// ─── Terah ───────────────────────────────────────────────────────────────────
const terahNode: TreePerson = {
  id: "terah", name: "Terah", branch: "abraham",
  info: "Son of Nahor I. Father of Abraham, Nahor II, and Haran. Left Ur of the Chaldeans to travel to Canaan but settled in Haran, where he died at age 205 (Gen 11:31-32). Joshua 24:2 notes Terah 'served other gods.' Ur and Haran — the two cities where Terah lived — were both major centers of moon god worship. In Ur the moon god was called Nanna (Sumerian) and in Haran he was called Sin (Akkadian). The God of Abraham was not the moon, but the maker of it. ─── MIDRASHIC STORY (The Idol Shop): A famous Jewish Midrash tells that Terah ran an idol shop in Ur. One day young Abraham was left minding the shop. He took a hammer and smashed every idol except the largest, then placed the hammer in its hands. When Terah returned and demanded an explanation, Abraham said: 'The big idol got angry and smashed all the others.' Terah replied: 'That's impossible — they're just clay and wood!' Abraham answered: 'Then why do you worship them?' God chose a man who was already seeking truth.",
  children: [
    haranNode,
    nahor2Node,
    {
      id: "abraham", name: "Abraham", branch: "abraham",
      info: "Son of Terah. Born in Ur of the Chaldeans. Central to all three Abrahamic faiths — Judaism, Christianity, and Islam all claim Abraham as their spiritual father. ─── THE CALL (Gen 12): At age 75, God told Abram to leave his country and his father's household — without telling him where he was going. Hebrews 11:8 says he obeyed 'not knowing where he was going.' Pure faith. ─── THE THREE STAGES OF THE COVENANT: [Stage 1 — Initial Promise, Gen 12] Three foundational promises: land (Canaan), a great nation, and blessing — 'all peoples on earth will be blessed through you.' No conditions, no ceremony — just a promise. [Stage 2 — Covenant of Pieces, Gen 15] God formalized the covenant: Abram cut animals in half. Only God — represented by a smoking firepot and blazing torch — passed between the pieces, making this an unconditional covenant. God also revealed that Abram's descendants would be enslaved for 400 years. [Stage 3 — Covenant of Circumcision, Gen 17] At age 99: renamed Abram ('exalted father') to Abraham ('father of many nations'); renamed Sarai to Sarah ('princess'); instituted circumcision as the covenant sign; promised Sarah specifically would bear the son; and named the son Isaac. ─── HAGAR & ISHMAEL (Gen 16): Sarah urged Abraham to take Hagar as a secondary wife. Hagar conceived and despised Sarah. Hagar fled — God met her in the wilderness. Ishmael was born and is regarded as the patriarch of the Arab peoples. The Prophet Muhammad himself claimed direct descent through Ishmael's son Kedar. God blessed Ishmael — but the covenant passed through Isaac alone. ─── THE OFFERING OF ISAAC (Gen 22): God commanded Abraham to offer Isaac on Mt. Moriah. Abraham obeyed. Isaac carried the wood and did not resist. As Abraham raised the knife, God stopped him. A ram caught in a thicket was sacrificed instead. Mt. Moriah is traditionally identified as the hill where Solomon's Temple was built and where Jesus was crucified nearby. ─── MELCHIZEDEK (Gen 14): After rescuing Lot, Abraham was met by Melchizedek — king of Salem and 'priest of God Most High' — who brought bread and wine and blessed Abraham. Abraham gave him a tenth of everything: the first tithe in Scripture. Hebrews identifies Melchizedek as a prophetic type of Christ's eternal priesthood (Heb 7). ─── SARAH'S BURIAL (Gen 23): Sarah died at 127. Abraham purchased the cave of Machpelah from Ephron the Hittite — the first piece of the Promised Land he legally owned. ─── KETURAH & LATER SONS: After Sarah's death Abraham married Keturah and had 6 more sons — ancestors of various Arabian peoples. He sent them eastward, ensuring Isaac remained sole heir of the covenant. ─── FATHER OF FAITH: Died at 175. Called 'God's friend' (Isa 41:8; Jas 2:23). Declared righteous by faith (Gen 15:6; Rom 4:3; Heb 11).",
      children: abrahamKids,
    },
  ],
};

// ─── Shem line from Nahor I up to Terah ─────────────────────────────────────
const nahor1Node: TreePerson = { id: "nahor1", name: "Nahor I", branch: "shem", info: "Son of Serug. Grandfather of Abraham. Lived 148 years (Gen 11:24-25).", children: [terahNode] };
const serugNode: TreePerson = { id: "serug", name: "Serug", branch: "shem", info: "Son of Reu. Ancestor of Abraham. Name preserved in the town of Sarug near Haran in Mesopotamia. Lived 230 years (Gen 11:22-23).", children: [nahor1Node] };
const reuNode: TreePerson = { id: "reu", name: "Reu", branch: "shem", info: "Son of Peleg. Name means 'friend' or 'shepherd.' In the direct ancestral line of Abraham. Lived 239 years (Gen 11:20-21).", children: [serugNode] };
const pelegNode: TreePerson = {
  id: "peleg", name: "Peleg", branch: "shem",
  info: "Son of Eber. Name means 'division' — 'for in his days the earth was divided' (Gen 10:25). Lived 239 years (Gen 11:18-19). ─── THE DIVISION: The most widely held interpretation among Jewish and Christian scholars is that 'the earth was divided' refers to the scattering of peoples at the Tower of Babel (Gen 11:1-9). Peleg's name would serve as a permanent memorial to this momentous event. The historian Josephus held this view (Antiquities 1.6). ─── BABEL & RELIGIOUS DRIFT: The scattering at Babel was a catastrophic spiritual disruption. Before Babel, humanity still shared a unified tradition and collective memory of God, the Flood, and Noah's covenant. When God divided the languages, each group was cut off from that shared foundation. In isolation, each culture began developing its own religious understanding independently. This is why we see the same deep archetypes — a creator god, a great flood, a sky/sun/moon pantheon, blood sacrifice — appearing across cultures worldwide, yet increasingly distorted. What began as memory of the true God gradually became mythology. Terah's moon god worship in Ur is itself a product of this drift. The calling of Abraham out of Ur (Gen 12) can be seen as God's direct response to Babel.",
  children: [reuNode],
};
const eberNode: TreePerson = {
  id: "eber", name: "Eber", branch: "shem",
  info: "Son of Shelah. Ancestor of the Hebrews — 'Hebrew' (Ibri) likely derives from his name. Shem is specifically called 'father of all the children of Eber' (Gen 10:21). Lived 464 years — the longest lifespan in the post-Flood genealogy. Had two sons: Peleg and Joktan.",
  children: [
    { id: "joktan", name: "Joktan", branch: "shem", info: "Son of Eber and brother of Peleg. Father of 13 sons — ancestors of the Arabian tribes. His descendants settled 'from Mesha toward Sephar, the eastern hill country' — Arabia (Gen 10:25-30).", children: joktanKids },
    pelegNode,
  ],
};
const shelahNode: TreePerson = { id: "shelah", name: "Shelah", branch: "shem", info: "Son of Arphaxad. Ancestor of Eber and the Hebrew line. Lived 403 years after fathering Eber (Gen 11:14-15).", children: [eberNode] };
const arphaxadNode: TreePerson = { id: "arphaxad", name: "Arphaxad", branch: "shem", info: "Son of Shem. Born 2 years after the Flood (Gen 11:10). Direct ancestor of Abraham and the Hebrew people (Gen 10:22; 11:10-26).", children: [shelahNode] };

// ─── Shem's children ─────────────────────────────────────────────────────────
const shemKids: TreePerson[] = [
  leaf("elam", "Elam", "shem", "Firstborn of Shem. Ancestor of the Elamites — an ancient powerful civilization east of Babylon in modern SW Iran (Khuzestan). Capital: Susa. King Chedorlaomer of Elam fought Abraham's allies (Gen 14). Mentioned frequently in prophetic books (Isa 11:11; Jer 49:34-39; Dan 8:2) (Gen 10:22)."),
  leaf("asshur", "Asshur", "shem", "Son of Shem. Ancestor and eponym of the Assyrians — one of the greatest empires of the ancient world, centered on the Tigris River (modern N Iraq). Built Nineveh (Gen 10:11). The Assyrian Empire conquered the northern kingdom of Israel in 722 BC (2 Kings 17). Nineveh was the city Jonah was sent to preach to (Jon 1:2) (Gen 10:22)."),
  arphaxadNode,
  leaf("lud", "Lud", "shem", "Son of Shem. Ancestor of the Lydians of western Anatolia (modern Turkey), credited with inventing coinage. Capital: Sardis. King Croesus of Lydia was famous for his riches. Lud's warriors mentioned as archers in Isa 66:19 and Ezek 27:10 (Gen 10:22)."),
  {
    id: "aram", name: "Aram", branch: "shem",
    info: "Son of Shem. Ancestor of the Arameans — a major Semitic people whose language (Aramaic) became the lingua franca of the ancient Near East and was spoken by Jesus. They settled in Syria and Mesopotamia. Father of Uz, Hul, Gether, and Mash/Meshech (Gen 10:22-23).",
    children: [
      leaf("uz", "Uz", "shem", "Son of Aram. Ancestor of the people of Uz — a region east of Canaan, likely in Edom/Arabia. The land of Uz is where Job lived and suffered (Job 1:1). Mentioned in Jer 25:20 and Lam 4:21 (Gen 10:23)."),
      leaf("hul", "Hul", "shem", "Son of Aram. Associated with a region around Lake Huleh in northern Israel/Syria, which preserved his name (Gen 10:23)."),
      leaf("gether", "Gether", "shem", "Son of Aram. Ancestor of an Aramean people. Some ancient traditions place his descendants between Mesopotamia and the Arabian desert (Gen 10:23)."),
      leaf("mash", "Mash (Meshech)", "shem", "Son of Aram. Called Meshech in 1 Chr 1:17 — not to be confused with Meshech son of Japheth. Possibly associated with Mt. Masius in upper Mesopotamia (modern SE Turkey) (Gen 10:23)."),
    ],
  },
];

// ─── Noah's children ─────────────────────────────────────────────────────────
const hamKids: TreePerson[] = [
  {
    id: "cush", name: "Cush", branch: "ham",
    info: "Firstborn of Ham. Hebrew name for Ethiopia/Nubia. Ancestor of the Cushites/Ethiopians. Some descendants migrated to Mesopotamia (Gen 10:7-8).",
    children: [
      leaf("seba", "Seba", "ham", "Son of Cush. Ancestor of the Sabaeans near the upper Nile/Ethiopia. Mentioned in Ps 72:10 and Isa 43:3 (Gen 10:7)."),
      leaf("havilah-c", "Havilah (son of Cush)", "ham", "Son of Cush. Ancestor of an Arabian tribe near the Persian Gulf. Gold and precious stones were found in the land of Havilah (Gen 2:11-12; 10:7)."),
      leaf("sabtah", "Sabtah", "ham", "Son of Cush. Ancestors likely settled in Arabia Felix (modern Yemen). Ptolemy mentions the city Sabbatha as metropolis of Arabia Felix (Gen 10:7)."),
      {
        id: "raamah", name: "Raamah", branch: "ham",
        info: "Son of Cush. Descendants settled near the Persian Gulf in Arabia (Gen 10:7; Ezek 27:22).",
        children: [
          leaf("sheba-r", "Sheba (son of Raamah)", "ham", "Son of Raamah. Associated with the Sabaean kingdom of SW Arabia — likely homeland of the Queen of Sheba who visited Solomon (1 Kings 10) (Gen 10:7)."),
          leaf("dedan-r", "Dedan (son of Raamah)", "ham", "Son of Raamah. Ancestor of the Dedanites, traders in Arabia. Mentioned in Isa 21:13 and Ezek 27:20 (Gen 10:7)."),
        ],
      },
      leaf("sabtecha", "Sabtecha", "ham", "Fifth son of Cush. Likely settled in Arabia Felix or near the Persian Gulf (Gen 10:7)."),
      leaf("nimrod", "Nimrod", "ham", "Son of Cush. 'The first mighty warrior on earth' and 'a mighty hunter before the LORD' (Gen 10:8-9). Founded Babel, Erech, Akkad, and Calneh in Shinar. Built Nineveh, Rehoboth-Ir, Calah, and Resen in Assyria. Many traditions link him to the Tower of Babel. Some scholars identify him with Tukulti-Ninurta I of Assyria."),
    ],
  },
  {
    id: "mizraim", name: "Mizraim", branch: "ham",
    info: "Son of Ham. Hebrew name for Egypt. Ancestor of Egyptians and several North African/Aegean peoples. His 7 sons represent ethnic groups in and around Egypt (Gen 10:13-14).",
    children: [
      leaf("ludim", "Ludim", "ham", "Son of Mizraim. Ancestor of a North African people. Mentioned as warriors in Jer 46:9 and Ezek 27:10 (Gen 10:13)."),
      leaf("anamim", "Anamim", "ham", "Son of Mizraim. Likely an Egyptian or Libyan people. Exact location uncertain (Gen 10:13)."),
      leaf("lehabim", "Lehabim", "ham", "Son of Mizraim. Associated with the Libyans (Hebrew: Lubim). Name means 'flames' (Gen 10:13)."),
      leaf("naphtuhim", "Naphtuhim", "ham", "Son of Mizraim. Probably the people of Lower Egypt or the Nile Delta (Gen 10:13)."),
      leaf("pathrusim", "Pathrusim", "ham", "Son of Mizraim. Ancestor of the people of Pathros — Upper (southern) Egypt. Mentioned in Isa 11:11, Jer 44:1, Ezek 29:14 (Gen 10:14)."),
      leaf("casluhim", "Casluhim", "ham", "Son of Mizraim. The Philistines are said to have come from the Casluhim (Gen 10:14)."),
      leaf("caphtorim", "Caphtorim", "ham", "Son of Mizraim. Ancestor of the people of Caphtor — identified with Crete or the Aegean. Also linked to the Philistines (Deut 2:23; Amos 9:7) (Gen 10:14)."),
    ],
  },
  leaf("phut", "Put (Phut)", "ham", "Son of Ham. Ancestor of the Libyans or peoples of North Africa west of Egypt. Associated with Libya in Ezek 27:10; 38:5 and Nahum 3:9 as warriors and mercenaries (Gen 10:6)."),
  {
    id: "canaan", name: "Canaan", branch: "ham",
    info: "Fourth son of Ham. Cursed by Noah to be 'servant of servants' after Ham's sin (Gen 9:25). Father of 11 sons representing the nations Israel later encountered (Gen 10:15-18). ─── THE CANAANITE RELIGION: The children of Canaan collectively became the ancestors of the Canaanite peoples occupying the Promised Land. Canaanite religion centered on Baal (storm/fertility god — name means 'Lord') and Asherah (his consort), involving ritual prostitution and child sacrifice. This is precisely why God commanded Israel to drive them out. The Baal thread connects all the way to Beelzebub — Baal-Zebub, 'lord of the flies' — a name for Satan himself.",
    children: [
      leaf("sidon", "Sidon", "ham", "Firstborn of Canaan. Founded the great Phoenician city of Sidon on the Mediterranean coast (modern Lebanon). The Sidonians/Phoenicians were famous seafarers and traders (Gen 10:15)."),
      leaf("heth", "Heth", "ham", "Son of Canaan. Ancestor of the Hittites — a major ancient empire in Anatolia (modern Turkey). Skeptics once called the Hittites mythical until archaeologist Hugo Winkler discovered 40 Hittite cities. ─── Abraham bought the cave of Machpelah from Ephron the Hittite for 400 shekels of silver (Gen 23) — a descendant of Heth sold Abraham the first piece of the Promised Land. A remarkable intersection of Ham's line and the covenant family of Shem (Gen 10:15)."),
      leaf("jebusite", "Jebusite", "ham", "Son of Canaan. Ancestor of the Jebusites who inhabited Jerusalem (then called Jebus). David conquered Jebus and made it his capital (2 Sam 5:6-9). Araunah the Jebusite sold David the threshing floor on which the Temple was later built (Gen 10:16)."),
      leaf("amorite", "Amorite", "ham", "Son of Canaan. Ancestor of the Amorites, one of the most powerful peoples in Canaan and Mesopotamia. Kings Sihon and Og were Amorite rulers defeated by Moses (Num 21) (Gen 10:16)."),
      leaf("girgashite", "Girgashite", "ham", "Son of Canaan. One of the seven nations Israel was commanded to drive out (Deut 7:1) (Gen 10:16)."),
      leaf("hivite", "Hivite", "ham", "Son of Canaan. The Hivites lived around Shechem and Gibeon. The Gibeonites tricked Joshua into a peace treaty (Josh 9). Shechem the Hivite violated Dinah, Jacob's daughter (Gen 34) (Gen 10:17)."),
      leaf("arkite", "Arkite", "ham", "Son of Canaan. Associated with ancient Arqa in Lebanon, north of Tripoli. Hushai 'the Arkite' was David's trusted counselor (2 Sam 15:32) (Gen 10:17)."),
      leaf("sinite", "Sinite", "ham", "Son of Canaan. Possibly associated with the area of Sin/Sinu in northern Lebanon (Gen 10:17)."),
      leaf("arvadite", "Arvadite", "ham", "Son of Canaan. Ancestor of people from Arvad (modern Ruad Island off Syria). Mentioned as trading partner of Tyre in Ezek 27:8 (Gen 10:18)."),
      leaf("zemarite", "Zemarite", "ham", "Son of Canaan. Associated with Zemar/Sumur (Amurru) on the Syrian coast (Gen 10:18)."),
      leaf("hamathite", "Hamathite", "ham", "Son of Canaan. Ancestor of the people of Hamath on the Orontes River in Syria — the northern border of the Promised Land (Num 34:8). King Tou of Hamath sent his son to congratulate David (2 Sam 8:9-10) (Gen 10:18)."),
    ],
  },
];

const japhethKids: TreePerson[] = [
  {
    id: "gomer", name: "Gomer", branch: "japheth",
    info: "Eldest son of Japheth. Ancestor of the Cimmerians (Gimirru to Assyrians) — warlike nomads north of the Black Sea. Josephus placed the Gomerites in Galatia (Anatolia). Jews traditionally identified Gomer with Germany. ─── GOG COALITION: Gomer is explicitly named as one of Gog's allies in Ezekiel 38:6 — 'Gomer with all its troops, and Beth-Togarmah from the far north.' Like the other members of Gog's coalition, Gomer represents a people from the far north associated with Baal-type religious culture. See Meshech's entry for the full Gog & Magog prophetic breakdown. Father of Ashkenaz, Riphath, and Togarmah.",
    children: [
      leaf("ashkenaz", "Ashkenaz", "japheth", "Son of Gomer (Gen 10:3). Linked to the Scythians — a fierce Indo-European people from the Eurasian steppes, well documented by the Greek historian Herodotus (c. 460 BC) as practicing brutal warfare including scalping enemies. ─── SCYTHIANS & GOG: The Scythians occupied at minimum the same geographic region as Magog (north of the Black/Caspian Seas), likely mingled with or neighboring the people of Magog — supporters of Gog in Ezekiel's end-times coalition. ─── BIBLICAL ROLE: Mentioned in Jer 51:27 as a kingdom summoned to fight Babylon — the empire that conquered Judah in ~600 BC. ─── ASHKENAZI JEWS: From medieval times 'Ashkenaz' was applied to Germanic lands, and Jewish communities there became known as Ashkenazi Jews. Jewish scholars believed these communities descended from Ashkenaz who settled in Germany. However this is debated — genetic and historical research suggests Ashkenazi Jews may primarily descend from the ancient tribe of Judah who migrated into Europe, rather than being biological descendants of Ashkenaz."),
      leaf("riphath", "Riphath", "japheth", "Son of Gomer. Called Diphath in 1 Chr 1:6. Josephus associated him with the Paphlagonians of Asia Minor. Others link him to the Riphean/Carpathian Mountains and Celtic peoples of Europe (Gen 10:3)."),
      leaf("togarmah", "Togarmah", "japheth", "Son of Gomer. Associated with Armenia — Armenians claim descent from Torgom son of Gomer. In Ezek 27:14 his house traded horses and mules with Tyre; in Ezek 38:6 he marches with Gog against Israel. Named alongside Gomer as part of Gog's northern coalition (Gen 10:3)."),
    ],
  },
  leaf("magog", "Magog", "japheth", "Son of Japheth. Associated with the Scythians north of the Black and Caspian Seas. Famous from Ezekiel 38-39 as the land of 'Gog and Magog' — a great end-times enemy. Also mentioned in Rev 20:8. Josephus identified Magog with the Scythians (Gen 10:2)."),
  leaf("madai", "Madai", "japheth", "Son of Japheth. Ancestor of the Medes, who settled south of the Caspian Sea (modern NW Iran). The Medes allied with Babylon to destroy Assyria (612 BC) and later formed the Medo-Persian Empire. Daniel interpreted visions concerning them (Dan 5:28) (Gen 10:2)."),
  {
    id: "javan", name: "Javan", branch: "japheth",
    info: "Son of Japheth. Hebrew name for Greece/Ionia. Ancestor of the Greeks. Hebrew 'Yavan' is still the word for Greece today. Mentioned in Isa 66:19, Ezek 27:13, Dan 8:21. Father of 4 sons representing Mediterranean maritime peoples (Gen 10:4).",
    children: [
      leaf("elishah", "Elishah", "japheth", "Son of Javan. Associated with Elis or Hellas (Greece), possibly Cyprus. Purple and blue dye from Elishah is mentioned in Ezek 27:7 (Gen 10:4)."),
      leaf("tarshish", "Tarshish", "japheth", "Son of Javan. Ancestor of a seafaring people — probably Tartessus in southern Spain. Jonah fled toward Tarshish (Jon 1:3). Solomon's fleet brought gold, silver, ivory, apes and peacocks from Tarshish (1 Kings 10:22) (Gen 10:4)."),
      leaf("kittim", "Kittim", "japheth", "Son of Javan. Associated with Cyprus (Kition/Citium). In Dan 11:30 'ships of Kittim' oppose the king of the North. The Dead Sea Scrolls use 'Kittim' for Rome (Gen 10:4)."),
      leaf("dodanim", "Dodanim (Rodanim)", "japheth", "Son of Javan. Called Rodanim in 1 Chr 1:7 — associated with the island of Rhodes. Connected to Aegean island peoples and maritime trade (Gen 10:4)."),
    ],
  },
  leaf("tubal", "Tubal", "japheth", "Son of Japheth. Linked to the Tabal of Assyrian records in central/eastern Anatolia. Consistently paired with Meshech throughout Ezekiel (chs. 27, 32, 38, 39) — always associated with the far north, trade in slaves and bronze, and military prowess. In Gog's coalition Gog is described as 'chief prince of Meshech and Tubal.' See Meshech's entry for the full Gog & Magog and end-times detail (Gen 10:2)."),
  leaf("meshech", "Meshech (son of Japheth)", "japheth", "Son of Japheth, grandson of Noah (Gen 10:2). Also called Mosoch; connected to the historical Moschi people of the Caucasus/eastern Anatolia. Josephus (Antiquities 1.6) identified Meshech with the Cappadocians of central Anatolia. ─── BIBLICAL APPEARANCES: Consistently paired with Tubal throughout Ezekiel (chs. 27, 32, 38, 39). Always associated with: the far north, trade in slaves and bronze, military prowess and barbarism (Ezek 27:13). ─── GOG & MAGOG PROPHECY (Ezek 38-39): Gog is 'chief prince of Meshech and Tubal' — Gog is their ruler, not a descendant. Gog's coalition includes Persia, Cush, Put, Gomer, Beth-Togarmah — all cultures practicing Baal-type religion. 'Gog' = 'prince/lord'; 'Baal' also = 'lord' — in Revelation this culminates: Satan as the ultimate false lord leads the final Gog and Magog (Rev 20:7-9). Baal-Zebub (Beelzebub) became a name for Satan himself. God destroys Gog's army with earthquakes, pestilence, torrential rain, hailstones, fire and brimstone. ─── END TIMES SIGNIFICANCE: Ezekiel uses 'in the latter years/days' (38:8,16). Jewish tradition: the War of Gog and Magog is central to messianic expectation (Talmud, Sanhedrin 97-98). Christian tradition: Revelation 20:7-9 reuses Gog and Magog as symbols of final satanic rebellion. Islamic tradition: known as Ya'juj and Ma'juj — their release is a major sign of the Day of Judgment. ─── WHO IS 'ISRAEL'? Israel was the name God gave Jacob after he wrestled with the angel (Gen 32:28). Paul teaches true descent from Abraham is by faith not biology (Gal 3:7,29). Jesus challenged physical descent as sufficient (John 8:39). The 'Israel' in this prophecy may refer not to the modern state but to all who are under the covenant of Abraham, Isaac, and Jacob. ─── Not to be confused with Mash/Meshech son of Aram."),
  leaf("tiras", "Tiras", "japheth", "Youngest son of Japheth. Josephus linked him to the Thracians. Others associate him with the Tyrsenians (Etruscans) west of the Black Sea. Little else recorded (Gen 10:2)."),
];

// ─── Noah ────────────────────────────────────────────────────────────────────
const noahNode: TreePerson = {
  id: "noah", name: "Noah", branch: "noah",
  info: "Son of Lamech. Found favor with God in a corrupt generation. Built the ark. Survived the Flood with his wife, 3 sons, and their wives. Made a covenant with God (the rainbow). First to plant a vineyard. Lived 950 years (Gen 9:29).",
  children: [
    { id: "ham", name: "Ham", branch: "ham", info: "Second (or youngest) son of Noah. Saw his father's nakedness and told his brothers — leading to Canaan being cursed. Name associated with Egypt. Father of Cush, Mizraim, Put, and Canaan (Gen 9:22, 10:6).", children: hamKids },
    { id: "japheth", name: "Japheth", branch: "japheth", info: "Eldest (or second) son of Noah. Blessed by Noah: 'May God enlarge Japheth' (Gen 9:27). Ancestor of the Indo-European peoples — nations of Europe and western/central Asia. Father of 7 sons (Gen 10:2).", children: japhethKids },
    { id: "shem", name: "Shem", branch: "shem", info: "Eldest son of Noah (or second — debated). Blessed by Noah: 'Blessed be the LORD, the God of Shem' (Gen 9:26). Ancestor of the Hebrew, Arab, Assyrian, Aramean, and Elamite peoples. Described as 'father of all the children of Eber' (Gen 10:21) — source of the word 'Hebrew.' Lived 600 years, surviving well into Abraham's lifetime.", children: shemKids },
  ],
};

// ─── Seth line ───────────────────────────────────────────────────────────────
const lamechSNode: TreePerson = { id: "lamech-s", name: "Lamech (of Seth)", branch: "seth", info: "Son of Methuselah. Father of Noah. Said at Noah's birth: 'This one will comfort us in the labor and painful toil of our hands' (Gen 5:29). Lived 777 years — died 5 years before the Flood.", children: [noahNode] };
const methuselahN: TreePerson = { id: "methuselah", name: "Methuselah", branch: "seth", info: "Son of Enoch. Oldest person in the Bible — 969 years (Gen 5:27). His name may mean 'his death shall bring' — he died the year of the Flood. Father of Lamech, grandfather of Noah.", children: [lamechSNode] };
const enochSNode: TreePerson = { id: "enoch-s", name: "Enoch (son of Jared)", branch: "seth", info: "Son of Jared. 'Walked with God' for 300 years. Did NOT die — 'God took him' (Gen 5:24). Lived 365 years. Mentioned in Hebrews 11:5 as a man of faith. Father of Methuselah.", children: [methuselahN] };
const jaredNode: TreePerson = { id: "jared", name: "Jared", branch: "seth", info: "Son of Mahalalel. Name may mean 'descent.' Father of Enoch who walked with God. Lived 962 years (Gen 5:20).", children: [enochSNode] };
const mahalalelN: TreePerson = { id: "mahalalel", name: "Mahalalel", branch: "seth", info: "Son of Kenan. Name means 'praise of God.' Lived 895 years (Gen 5:17).", children: [jaredNode] };
const kenanNode: TreePerson = { id: "kenan", name: "Kenan (Cainan)", branch: "seth", info: "Son of Enosh. Lived 910 years (Gen 5:14). Also spelled Cainan in Luke 3:37 in the genealogy of Jesus.", children: [mahalalelN] };
const enoshNode: TreePerson = { id: "enosh", name: "Enosh", branch: "seth", info: "Son of Seth. Name means 'mortal man.' In his time people began calling on the name of the LORD (Gen 4:26). Lived 905 years.", children: [kenanNode] };
const sethNode: TreePerson = { id: "seth", name: "Seth", branch: "seth", info: "Third son of Adam & Eve, given as replacement for Abel (Gen 4:25). Name means 'appointed.' Ancestor of Noah and the line to David. In his time men began calling on the name of the LORD (Gen 4:26). Lived 912 years.", children: [enoshNode] };

// ─── Cain line ───────────────────────────────────────────────────────────────
const lamechCNode: TreePerson = {
  id: "lamech-c", name: "Lamech (of Cain)", branch: "cain",
  info: "First recorded polygamist — had two wives Adah and Zillah. Boasted of killing a man (Gen 4:23-24). Father of Jabal, Jubal, Tubal-Cain, and Naamah.",
  children: [
    leaf("jabal", "Jabal", "cain", "Son of Lamech & Adah. 'Father of those who dwell in tents and raise livestock' — ancestor of nomadic herders (Gen 4:20)."),
    leaf("jubal", "Jubal", "cain", "Son of Lamech & Adah. 'Father of all who play the harp and flute' — ancestor of musicians (Gen 4:21)."),
    leaf("tubalcain", "Tubal-Cain", "cain", "Son of Lamech & Zillah. 'Forger of all instruments of bronze and iron' — ancestor of metalworkers (Gen 4:22)."),
    leaf("naamah", "Naamah", "cain", "Daughter of Lamech & Zillah. Name means 'pleasant.' Only daughter mentioned in Cain's line. Some Jewish traditions identify her as Noah's wife (Gen 4:22)."),
  ],
};
const methushael: TreePerson = { id: "methushael", name: "Methushael", branch: "cain", info: "Son of Mehujael. Father of Lamech. Name may mean 'man of God' (Gen 4:18).", children: [lamechCNode] };
const mehujael: TreePerson = { id: "mehujael", name: "Mehujael", branch: "cain", info: "Son of Irad. Name may mean 'smitten of God' (Gen 4:18).", children: [methushael] };
const iradNode: TreePerson = { id: "irad", name: "Irad", branch: "cain", info: "Son of Enoch (of Cain's line) (Gen 4:18).", children: [mehujael] };
const enochCNode: TreePerson = { id: "enoch-c", name: "Enoch (son of Cain)", branch: "cain", info: "Son of Cain. A city was named after him by Cain (Gen 4:17). Not to be confused with Enoch son of Jared.", children: [iradNode] };
const cainNode: TreePerson = { id: "cain", name: "Cain", branch: "cain", info: "Firstborn of Adam & Eve. Farmer. Murdered his brother Abel out of jealousy. Marked by God for protection. Built the first city, named Enoch after his son (Gen 4:17). Lived east of Eden in the land of Nod.", children: [enochCNode] };
const abelNode: TreePerson = leaf("abel", "Abel", "abel", "Second son of Adam & Eve. Shepherd. Offered a pleasing sacrifice. Murdered by Cain — the first person to die. Jesus called him 'righteous Abel' (Matt 23:35). No children recorded.");

// ─── ROOT: Adam ──────────────────────────────────────────────────────────────
export const data: TreePerson = {
  id: "adam", name: "Adam", branch: "seth",
  info: "First man, formed from dust by God (Gen 2:7). Named all animals. Expelled from Eden after the Fall. Lived 930 years (Gen 5:5).",
  children: [cainNode, abelNode, sethNode],
};

// ─── Branch metadata ─────────────────────────────────────────────────────────
export const branchMeta: Record<string, { label: string; color: string; bg: string }> = {
  cain:     { label: "Line of Cain",      color: "#f87171", bg: "rgba(248,113,113,0.08)" },
  abel:     { label: "Abel",              color: "#f9a8d4", bg: "rgba(249,168,212,0.08)" },
  seth:     { label: "Seth to Noah",      color: "#60a5fa", bg: "rgba(96,165,250,0.08)" },
  noah:     { label: "Noah",              color: "#34d399", bg: "rgba(52,211,153,0.08)" },
  ham:      { label: "Line of Ham",       color: "#fb923c", bg: "rgba(251,146,60,0.08)" },
  japheth:  { label: "Line of Japheth",   color: "#c084fc", bg: "rgba(192,132,252,0.08)" },
  shem:     { label: "Line of Shem",      color: "#38bdf8", bg: "rgba(56,189,248,0.08)" },
  abraham:  { label: "Abraham's Line",    color: "#a78bfa", bg: "rgba(167,139,250,0.08)" },
  ishmael:  { label: "Ishmael & Keturah", color: "#fbbf24", bg: "rgba(251,191,36,0.08)" },
  esau:     { label: "Esau (Edom)",       color: "#f97316", bg: "rgba(249,115,22,0.08)" },
  tribes:   { label: "12 Tribes",         color: "#4ade80", bg: "rgba(74,222,128,0.08)" },
  judah:    { label: "Judah to David",    color: "#c084fc", bg: "rgba(192,132,252,0.08)" },
  david:    { label: "King David",        color: "#fbbf24", bg: "rgba(251,191,36,0.12)" },
};

export const keyFigureIds = new Set([
  "adam", "noah", "abraham", "isaac", "jacob", "david", "shem", "ham", "japheth", "joseph", "judah",
]);
