export interface TreePerson {
  id: string;
  name: string;
  info: string;
  branch: string;
  children?: TreePerson[];
}

export const data: TreePerson = {
  id: "adam", name: "Adam", info: "First man, formed from dust by God (Gen 2:7). Named all animals. Expelled from Eden after the Fall. Lived 930 years (Gen 5:5).", branch: "seth",
  children: [
    {
      id: "cain", name: "Cain", info: "Firstborn of Adam & Eve. Farmer. Murdered his brother Abel out of jealousy. Marked by God for protection. Built the first city, named Enoch after his son (Gen 4:17). Lived east of Eden in the land of Nod.", branch: "cain",
      children: [{
        id: "enoch-c", name: "Enoch (son of Cain)", info: "Son of Cain. A city was named after him by his father Cain (Gen 4:17). Not to be confused with Enoch son of Jared.", branch: "cain",
        children: [{
          id: "irad", name: "Irad", info: "Son of Enoch (of Cain's line). Little else is recorded about him in Scripture (Gen 4:18).", branch: "cain",
          children: [{
            id: "mehujael", name: "Mehujael", info: "Son of Irad in Cain's line. Name may mean 'smitten of God.' Little else is recorded (Gen 4:18).", branch: "cain",
            children: [{
              id: "methushael", name: "Methushael", info: "Son of Mehujael in Cain's line. Father of Lamech. Name may mean 'man of God' (Gen 4:18).", branch: "cain",
              children: [{
                id: "lamech-c", name: "Lamech (of Cain)", info: "First recorded polygamist in the Bible — had two wives, Adah and Zillah. Boasted of killing a man (Gen 4:23-24). Father of Jabal, Jubal, Tubal-Cain, and Naamah.", branch: "cain",
                children: [
                  { id: "jabal", name: "Jabal", info: "Son of Lamech & Adah. 'Father of those who dwell in tents and raise livestock' — the ancestor of nomadic herders (Gen 4:20).", branch: "cain" },
                  { id: "jubal", name: "Jubal", info: "Son of Lamech & Adah. 'Father of all who play the harp and flute' — ancestor of musicians (Gen 4:21).", branch: "cain" },
                  { id: "tubalcain", name: "Tubal-Cain", info: "Son of Lamech & Zillah. 'Forger of all instruments of bronze and iron' — ancestor of metalworkers and blacksmiths (Gen 4:22).", branch: "cain" },
                  { id: "naamah", name: "Naamah", info: "Daughter of Lamech & Zillah. Name means 'pleasant.' Only daughter mentioned in Cain's line (Gen 4:22). Some Jewish traditions identify her as Noah's wife.", branch: "cain" },
                ]
              }]
            }]
          }]
        }]
      }]
    },
    { id: "abel", name: "Abel", info: "Second son of Adam & Eve. Shepherd. Offered a pleasing sacrifice to God. Murdered by his brother Cain, becoming the first person to die. Jesus called him 'righteous Abel' (Matt 23:35). No children recorded.", branch: "abel", children: [] },
    {
      id: "seth", name: "Seth", info: "Third son of Adam & Eve, given as a replacement for Abel (Gen 4:25). Name means 'appointed.' Ancestor of Noah and the line leading to Abraham and David. In his time men began calling on the name of the LORD (Gen 4:26). Lived 912 years.", branch: "seth",
      children: [{
        id: "enosh", name: "Enosh", info: "Son of Seth. Name means 'mortal man' or 'frail.' In his time people began calling on the name of the LORD (Gen 4:26). Lived 905 years (Gen 5:11).", branch: "seth",
        children: [{
          id: "kenan", name: "Kenan (Cainan)", info: "Son of Enosh. Lived 910 years (Gen 5:14). Also spelled Cainan in Luke 3:37 in the genealogy of Jesus.", branch: "seth",
          children: [{
            id: "mahalalel", name: "Mahalalel", info: "Son of Kenan. Name means 'praise of God.' Lived 895 years (Gen 5:17). Ancestor of Noah.", branch: "seth",
            children: [{
              id: "jared", name: "Jared", info: "Son of Mahalalel. Name may mean 'descent.' Father of Enoch who walked with God. One of the longest-lived patriarchs — 962 years (Gen 5:20).", branch: "seth",
              children: [{
                id: "enoch-s", name: "Enoch (son of Jared)", info: "Son of Jared. 'Walked with God' faithfully for 300 years. Did NOT die — 'God took him' (Gen 5:24). Lived 365 years. Mentioned in Hebrews 11:5 as a man of faith. The Book of Enoch (non-canonical) is attributed to him. Father of Methuselah.", branch: "seth",
                children: [{
                  id: "methuselah", name: "Methuselah", info: "Son of Enoch. The oldest person in the Bible — lived 969 years (Gen 5:27). His name may mean 'his death shall bring' — he died the year of the Flood. Father of Lamech, grandfather of Noah.", branch: "seth",
                  children: [{
                    id: "lamech-s", name: "Lamech (of Seth)", info: "Son of Methuselah. Father of Noah. Said of Noah at birth: 'This one will comfort us in the labor and painful toil of our hands' (Gen 5:29). Lived 777 years — died 5 years before the Flood.", branch: "seth",
                    children: [{
                      id: "noah", name: "Noah", info: "Son of Lamech. Found favor with God in a corrupt generation. Built the ark per God's instructions. Survived the great Flood with his wife, 3 sons, and their wives. After the Flood made a covenant with God (rainbow). First to plant a vineyard. Lived 950 years (Gen 9:29).", branch: "noah",
                      children: [
                        {
                          id: "ham", name: "Ham", info: "Second (or youngest) son of Noah. Saw his father Noah's nakedness and told his brothers, leading to Canaan being cursed. Name associated with 'hot' or Egypt. Father of Cush, Mizraim, Put, and Canaan — ancestors of African and some Near Eastern peoples (Gen 9:22, 10:6).", branch: "ham",
                          children: [
                            {
                              id: "cush", name: "Cush", info: "Firstborn of Ham. Name is Hebrew for Ethiopia/Nubia. Ancestor of the Cushites/Ethiopians. His descendants settled in Arabia and East Africa. Some also migrated to Mesopotamia (Gen 10:7-8).", branch: "ham",
                              children: [
                                { id: "seba", name: "Seba", info: "Son of Cush. Ancestor of the Sabaeans near the upper Nile/Ethiopia. Mentioned in Ps 72:10 and Isa 43:3. Name preserved in the region of Meroe (Gen 10:7).", branch: "ham" },
                                { id: "havilah-c", name: "Havilah (son of Cush)", info: "Son of Cush. Ancestor of an Arabian tribe near the Persian Gulf — the Chaulotaeans of Strabo. Gold and precious stones were found in the land of Havilah (Gen 2:11-12; 10:7).", branch: "ham" },
                                { id: "sabtah", name: "Sabtah", info: "Son of Cush. Ancestors likely settled in Arabia Felix (modern Yemen). Josephus calls his descendants the 'Sabathenes.' Ptolemy mentions the city Sabbatha as metropolis of Arabia Felix (Gen 10:7).", branch: "ham" },
                                {
                                  id: "raamah", name: "Raamah", info: "Son of Cush. His descendants settled near the Persian Gulf in Arabia. A trading city called Regma/Rhegma is associated with his name (Gen 10:7; Ezek 27:22).", branch: "ham",
                                  children: [
                                    { id: "sheba-r", name: "Sheba (son of Raamah)", info: "Son of Raamah. Ancestor of the Sabaeans of southwest Arabia — the likely homeland of the Queen of Sheba who visited Solomon (1 Kings 10). Also listed under Shem's line (Gen 10:28), reflecting dual tradition.", branch: "ham" },
                                    { id: "dedan-r", name: "Dedan (son of Raamah)", info: "Son of Raamah. Ancestor of the Dedanites, traders in Arabia. Mentioned in Isaiah 21:13 and Ezekiel 27:20 as trading caravans (Gen 10:7).", branch: "ham" },
                                  ]
                                },
                                { id: "sabtecha", name: "Sabtecha", info: "Fifth son of Cush. Likely settled in Arabia Felix or near the Persian Gulf. Associated with the ancient Sachalitae by some scholars (Gen 10:7).", branch: "ham" },
                                { id: "nimrod", name: "Nimrod", info: "Son of Cush. 'The first mighty warrior on earth' and 'a mighty hunter before the LORD' (Gen 10:8-9). Founded the kingdom of Babel, Erech, Akkad, and Calneh in Shinar (Babylonia). Also built Nineveh, Rehoboth-Ir, Calah, and Resen in Assyria. Many traditions identify him as the builder of the Tower of Babel. Some scholars link him to the Assyrian king Tukulti-Ninurta I.", branch: "ham" },
                              ]
                            },
                            {
                              id: "mizraim", name: "Mizraim", info: "Son of Ham. Hebrew name for Egypt (used throughout the OT). Ancestor of the Egyptians and several North African/Aegean peoples. His 7 sons represent ethnic groups in and around Egypt (Gen 10:13-14).", branch: "ham",
                              children: [
                                { id: "ludim", name: "Ludim", info: "Son of Mizraim. Ancestor of the Ludim, a North African people. Mentioned as warriors in Jer 46:9 and Ezek 27:10. Distinct from Lud son of Shem (Gen 10:13).", branch: "ham" },
                                { id: "anamim", name: "Anamim", info: "Son of Mizraim. Likely an Egyptian or Libyan people. Their exact location is uncertain — possibly near the Libyan oases (Gen 10:13).", branch: "ham" },
                                { id: "lehabim", name: "Lehabim", info: "Son of Mizraim. Associated with the Libyans (Hebrew: Lubim). Name means 'flames,' possibly referring to fair-skinned peoples of North Africa (Gen 10:13).", branch: "ham" },
                                { id: "naphtuhim", name: "Naphtuhim", info: "Son of Mizraim. Probably the people of Lower Egypt or the Nile Delta region. Some identify them with the natron-producing regions of Egypt (Gen 10:13).", branch: "ham" },
                                { id: "pathrusim", name: "Pathrusim", info: "Son of Mizraim. Ancestor of the people of Pathros — Upper (southern) Egypt. Mentioned in Isaiah 11:11, Jeremiah 44:1, and Ezekiel 29:14 as a distinct Egyptian region (Gen 10:14).", branch: "ham" },
                                { id: "casluhim", name: "Casluhim", info: "Son of Mizraim. The Philistines are said to have come from the Casluhim (Gen 10:14). Possibly settled in northeastern Africa before migrating to the Aegean coast of Canaan.", branch: "ham" },
                                { id: "caphtorim", name: "Caphtorim", info: "Son of Mizraim. Ancestor of the people of Caphtor — identified with Crete or the Aegean region. Also linked to the origins of the Philistines (Deut 2:23; Amos 9:7; Jer 47:4) (Gen 10:14).", branch: "ham" },
                              ]
                            },
                            { id: "phut", name: "Put (Phut)", info: "Son of Ham. Ancestor of the Libyans or peoples of North Africa west of Egypt. Associated with Libya in Ezekiel 27:10; 38:5 and Nahum 3:9 as warriors and mercenaries (Gen 10:6).", branch: "ham" },
                            {
                              id: "canaan", name: "Canaan", info: "Fourth son of Ham. Cursed by Noah to be 'servant of servants' to his brothers after Ham's sin (Gen 9:25). Ancestor of the Canaanites who occupied the Promised Land. Father of 11 sons representing the nations Israel later conquered (Gen 10:15-18).", branch: "ham",
                              children: [
                                { id: "sidon", name: "Sidon", info: "Firstborn of Canaan. Founded the great Phoenician city of Sidon on the Mediterranean coast (modern Lebanon). The Sidonians/Phoenicians were famous seafarers and traders. Mentioned by Homer. Later overshadowed by Tyre (Gen 10:15).", branch: "ham" },
                                { id: "heth", name: "Heth", info: "Son of Canaan. Ancestor of the Hittites, a major ancient empire in Anatolia (modern Turkey). For centuries skeptics claimed the Hittites were mythical until archaeologist Hugo Winkler discovered 40 Hittite cities. Abraham bought a burial cave from a Hittite (Gen 23) (Gen 10:15).", branch: "ham" },
                                { id: "jebusite", name: "Jebusite", info: "Son of Canaan. Ancestor of the Jebusites who inhabited Jerusalem (then called Jebus). David conquered Jebus and made it his capital city (2 Sam 5:6-9). Araunah the Jebusite sold David the threshing floor on which the Temple was later built (Gen 10:16).", branch: "ham" },
                                { id: "amorite", name: "Amorite", info: "Son of Canaan. Ancestor of the Amorites, one of the most powerful peoples in Canaan and Mesopotamia. They occupied the hill country of Canaan and the Transjordan. Kings Sihon and Og were Amorite rulers defeated by Moses (Num 21) (Gen 10:16).", branch: "ham" },
                                { id: "girgashite", name: "Girgashite", info: "Son of Canaan. One of the seven nations in the Promised Land that Israel was commanded to drive out (Deut 7:1). Their exact location in Canaan is uncertain (Gen 10:16).", branch: "ham" },
                                { id: "hivite", name: "Hivite", info: "Son of Canaan. The Hivites lived around Shechem and Gibeon. The Gibeonites (Hivites) tricked Joshua into a peace treaty (Josh 9). Shechem the Hivite violated Dinah, Jacob's daughter (Gen 34) (Gen 10:17).", branch: "ham" },
                                { id: "arkite", name: "Arkite", info: "Son of Canaan. Associated with the ancient city of Arqa (Tell Arqa) in Lebanon, north of Tripoli. Hushai 'the Arkite' was David's trusted counselor and friend (2 Sam 15:32) (Gen 10:17).", branch: "ham" },
                                { id: "sinite", name: "Sinite", info: "Son of Canaan. Possibly associated with the area of Sin/Sinu in northern Lebanon near Ugarit and Arvad. Some scholars have controversially linked this name to ancestors of the Chinese ('Sinim' in Isa 49:12) (Gen 10:17).", branch: "ham" },
                                { id: "arvadite", name: "Arvadite", info: "Son of Canaan. Ancestor of people from Arvad (modern Ruad Island off Syria), a Phoenician island-city. Arvad is mentioned as a trading partner of Tyre in Ezek 27:8 (Gen 10:18).", branch: "ham" },
                                { id: "zemarite", name: "Zemarite", info: "Son of Canaan. Associated with the city of Zemar/Sumur (Amurru) on the Syrian coast, mentioned in Egyptian and Assyrian texts. One of the nations in Canaan (Gen 10:18).", branch: "ham" },
                                { id: "hamathite", name: "Hamathite", info: "Son of Canaan. Ancestor of the people of Hamath, a major city on the Orontes River in Syria. Hamath marks the northern border of the Promised Land (Num 34:8). King Tou of Hamath sent his son to congratulate David (2 Sam 8:9-10) (Gen 10:18).", branch: "ham" },
                              ]
                            },
                          ]
                        },
                        {
                          id: "japheth", name: "Japheth", info: "Eldest (or second) son of Noah. Blessed by Noah: 'May God enlarge Japheth' (Gen 9:27). Ancestor of the Indo-European peoples — the nations of Europe and western/central Asia. He and Shem respectfully covered their father's nakedness. Father of 7 sons (Gen 10:2).", branch: "japheth",
                          children: [
                            {
                              id: "gomer", name: "Gomer", info: "Eldest son of Japheth. Ancestor of the Cimmerians (Gimirru to Assyrians) — warlike nomads north of the Black Sea in the Pontic-Caspian steppe. Josephus placed the Gomerites in Galatia (Anatolia). Jews traditionally identified Gomer with Germany. Mentioned in Ezek 38:6 as ally of Gog. Father of Ashkenaz, Riphath, and Togarmah.", branch: "japheth",
                              children: [
                                { id: "ashkenaz", name: "Ashkenaz", info: "Son of Gomer. Linked to the Scythians (Assyrian: Ishkuza) and the region near Armenia. Mentioned in Jer 51:27 as a kingdom called to fight Babylon. After the 11th century CE, Jews called Germany 'Ashkenaz,' giving rise to the term Ashkenazi Jews (Gen 10:3).", branch: "japheth" },
                                { id: "riphath", name: "Riphath", info: "Son of Gomer. Called Diphath in 1 Chr 1:6. Josephus associated him with the Paphlagonians of Asia Minor. Others link him to the Riphean/Carpathian Mountains and the Celtic peoples of Europe (Gen 10:3).", branch: "japheth" },
                                { id: "togarmah", name: "Togarmah", info: "Son of Gomer. Associated with Armenia — Armenians claim descent from Torgom son of Gomer. Also linked to the Phrygians and horse-trading peoples. In Ezek 27:14 his house traded horses and mules with Tyre; in Ezek 38:6 he marches with Gog against Israel (Gen 10:3).", branch: "japheth" },
                              ]
                            },
                            { id: "magog", name: "Magog", info: "Son of Japheth. Associated with the Scythians north of the Black and Caspian Seas. Famous from Ezekiel 38-39 as the land of 'Gog and Magog' — a great end-times enemy. Also mentioned in Rev 20:8. Josephus identified Magog with the Scythians (Gen 10:2).", branch: "japheth" },
                            { id: "madai", name: "Madai", info: "Son of Japheth. Ancestor of the Medes, who settled south of the Caspian Sea (modern NW Iran). The Medes allied with Babylon to destroy Assyria (612 BC) and later formed the Medo-Persian Empire. Daniel interpreted visions concerning them (Dan 5:28) (Gen 10:2).", branch: "japheth" },
                            {
                              id: "javan", name: "Javan", info: "Son of Japheth. Hebrew name for Greece/Ionia. Ancestor of the Greeks (Ionians). Hebrew 'Yavan' is still the word for Greece today. Mentioned in Isa 66:19, Ezek 27:13, Dan 8:21 (where 'the goat' = Greece). Father of 4 sons representing Mediterranean maritime peoples (Gen 10:4).", branch: "japheth",
                              children: [
                                { id: "elishah", name: "Elishah", info: "Son of Javan. Associated with Elis or Hellas (Greece), possibly Cyprus (Alashiya in Assyrian texts). Purple and blue dye from Elishah is mentioned in Ezek 27:7 as a trade good (Gen 10:4).", branch: "japheth" },
                                { id: "tarshish", name: "Tarshish", info: "Son of Javan. Ancestor of an important seafaring people — probably Tartessus in southern Spain or possibly Sardinia/Cilicia. Jonah fled toward Tarshish (Jon 1:3). Solomon's fleet brought gold, silver, ivory, apes and peacocks from Tarshish (1 Kings 10:22) (Gen 10:4).", branch: "japheth" },
                                { id: "kittim", name: "Kittim", info: "Son of Javan. Associated with Cyprus (Kition/Citium). In Daniel 11:30 'ships of Kittim' oppose the king of the North. The Dead Sea Scrolls use 'Kittim' for Rome. Linked to Mediterranean island peoples (Gen 10:4).", branch: "japheth" },
                                { id: "dodanim", name: "Dodanim (Rodanim)", info: "Son of Javan. Called Rodanim in 1 Chr 1:7 — associated with the island of Rhodes. Connected to Aegean island peoples and maritime trade (Gen 10:4).", branch: "japheth" },
                              ]
                            },
                            { id: "tubal", name: "Tubal", info: "Son of Japheth. Linked to the Tabal of Assyrian records — a people in central/eastern Anatolia (modern Turkey). Traded slaves and bronze with Tyre (Ezek 27:13). Often paired with Meshech in Ezekiel (27:13; 38:2-3; 39:1) as future enemies of Israel (Gen 10:2).", branch: "japheth" },
                            { id: "meshech", name: "Meshech (son of Japheth)", info: "Son of Japheth. Linked to the Mushki/Moschi in Anatolia, near the Black Sea. Some traditions connect him to Moscow (Russia). Traded slaves with Tyre (Ezek 27:13). Paired with Tubal and Gog in Ezekiel's prophecy of end-times war (Ezek 38:2) (Gen 10:2). Not to be confused with Mash/Meshech son of Aram.", branch: "japheth" },
                            { id: "tiras", name: "Tiras", info: "Youngest son of Japheth. Josephus linked him to the Thracians. Others associate him with the Tyrsenians (Etruscans) west of the Black Sea, or the island of Thasos. Little else is recorded in Scripture (Gen 10:2).", branch: "japheth" },
                          ]
                        },
                        {
                          id: "shem", name: "Shem", info: "Eldest son of Noah (or second — debated). Blessed by Noah as father of the Semitic peoples: 'Blessed be the LORD, the God of Shem' (Gen 9:26). Ancestor of the Hebrew, Arab, Assyrian, Aramean, and Elamite peoples. Described as 'father of all the children of Eber' (Gen 10:21) — source of the word 'Hebrew.' Lived 600 years, surviving well into Abraham's lifetime.", branch: "shem",
                          children: [
                            { id: "elam", name: "Elam", info: "Firstborn of Shem. Ancestor of the Elamites — an ancient and powerful civilization east of Babylon in modern SW Iran (Khuzestan). Capital: Susa. Spoke a non-Semitic language despite Semitic lineage. King Chedorlaomer of Elam fought Abraham's allies (Gen 14). Mentioned frequently in prophetic books (Isa 11:11; Jer 49:34-39; Dan 8:2) (Gen 10:22).", branch: "shem" },
                            { id: "asshur", name: "Asshur", info: "Son of Shem. Ancestor and eponym of the Assyrians — one of the greatest empires of the ancient world, centered on the Tigris River (modern N Iraq). Built Nineveh, the great capital city (Gen 10:11). The Assyrian Empire conquered the northern kingdom of Israel in 722 BC (2 Kings 17). Nineveh was the city Jonah was sent to preach to (Jon 1:2) (Gen 10:22).", branch: "shem" },
                            {
                              id: "arphaxad", name: "Arphaxad", info: "Son of Shem. Born 2 years after the Flood (Gen 11:10). Direct ancestor of Abraham and the Hebrew people. The line from Arphaxad to Abraham spans 8 generations through Shelah, Eber, Peleg, Reu, Serug, Nahor, and Terah (Gen 10:22; 11:10-26).", branch: "shem",
                              children: [{
                                id: "shelah", name: "Shelah", info: "Son of Arphaxad (or of Cainan in Luke 3:35-36). Ancestor of Eber and the Hebrew line. Lived 403 years after fathering Eber (Gen 11:14-15). An important link in the genealogy from Noah to Abraham.", branch: "shem",
                                children: [{
                                  id: "eber", name: "Eber", info: "Son of Shelah. Considered the ancestor of the Hebrews — the word 'Hebrew' (Ibri) likely derives from his name. Shem is specifically called 'father of all the children of Eber' (Gen 10:21). Lived 464 years — the longest lifespan in the post-Flood genealogy. Had two sons: Peleg and Joktan (Gen 10:24-25).", branch: "shem",
                                  children: [
                                    {
                                      id: "joktan", name: "Joktan", info: "Son of Eber and brother of Peleg. Father of 13 sons — ancestors of the Arabian tribes. His descendants settled 'from Mesha toward Sephar, the eastern hill country' — Arabia. Name may mean 'he will be made small' (Gen 10:25-30).", branch: "shem",
                                      children: [
                                        { id: "almodad", name: "Almodad", info: "Son of Joktan. Ancestor of an Arabian people. Name possibly means 'God is a friend.' Associated with Yemen (Gen 10:26).", branch: "shem" },
                                        { id: "sheleph", name: "Sheleph", info: "Son of Joktan. Associated with the Salif region of Yemen. Name may relate to 'drawing out.' An Arabian tribe (Gen 10:26).", branch: "shem" },
                                        { id: "hazarmaveth", name: "Hazarmaveth", info: "Son of Joktan. Name preserved in Hadramawt — a region of Yemen still known today. A major frankincense trading territory in ancient Arabia (Gen 10:26).", branch: "shem" },
                                        { id: "jerah", name: "Jerah", info: "Son of Joktan. Name means 'moon.' Associated with the moon-worshipping peoples of southern Arabia (Gen 10:26).", branch: "shem" },
                                        { id: "hadoram", name: "Hadoram", info: "Son of Joktan. Associated with an Arabian tribe. Name may relate to the god Hadad. Distinct from Hadoram son of Tou of Hamath (2 Sam 8:10) (Gen 10:27).", branch: "shem" },
                                        { id: "uzal", name: "Uzal", info: "Son of Joktan. Associated with Sana'a, the ancient capital of Yemen (called Awzal/Uzal in old Arabian records). Mentioned in Ezek 27:19 as a trading partner with Tyre (Gen 10:27).", branch: "shem" },
                                        { id: "diklah", name: "Diklah", info: "Son of Joktan. Name means 'palm tree.' Associated with a palm-growing region of Arabia, possibly in the Tigris-Euphrates area (Gen 10:27).", branch: "shem" },
                                        { id: "obal", name: "Obal", info: "Son of Joktan. Called Ebal in 1 Chr 1:22. Associated with a people in Arabia. Location uncertain (Gen 10:28).", branch: "shem" },
                                        { id: "abimael", name: "Abimael", info: "Son of Joktan. Name means 'my father is God (El).' Ancestor of an Arabian people. Location uncertain but likely in southern Arabia (Gen 10:28).", branch: "shem" },
                                        { id: "sheba-j", name: "Sheba (son of Joktan)", info: "Son of Joktan. Also appears as son of Raamah (Ham's line) — two distinct peoples may share the name. Associated with the Sabaean kingdom of SW Arabia — the famous Kingdom of Sheba, home of the Queen of Sheba who visited Solomon (1 Kings 10:1-13) (Gen 10:28).", branch: "shem" },
                                        { id: "ophir", name: "Ophir", info: "Son of Joktan. Famous for gold — 'the gold of Ophir' was the finest in the ancient world (1 Kings 9:28; Job 22:24; Ps 45:9). Solomon's navy sailed there every 3 years. Location debated: Arabia, India, or East Africa (Gen 10:29).", branch: "shem" },
                                        { id: "havilah-s", name: "Havilah (son of Joktan)", info: "Son of Joktan. Also appears as son of Cush (Ham's line). Associated with a region of Arabia rich in gold (Gen 2:11-12). Saul fought the Amalekites 'from Havilah to Shur' (1 Sam 15:7) (Gen 10:29).", branch: "shem" },
                                        { id: "jobab", name: "Jobab", info: "Son of Joktan. Last of Joktan's 13 sons. Some Jewish traditions identify him with Job the patriarch of the book of Job, though this is debated. His descendants settled in eastern Arabia (Gen 10:29).", branch: "shem" },
                                      ]
                                    },
                                    {
                                      id: "peleg", name: "Peleg", info: "Son of Eber. Name means 'division' — 'for in his days the earth was divided' (Gen 10:25). This may refer to the dispersion at Babel or a geographical event. He is in the direct line from Shem to Abraham. Lived 239 years (Gen 11:18-19).", branch: "shem",
                                      children: [{
                                        id: "reu", name: "Reu", info: "Son of Peleg. Name means 'friend' or 'shepherd.' In the direct ancestral line of Abraham. Lived 239 years (Gen 11:20-21).", branch: "shem",
                                        children: [{
                                          id: "serug", name: "Serug", info: "Son of Reu. Ancestor of Abraham. Name preserved in the town of Sarug near Haran in Mesopotamia. Lived 230 years (Gen 11:22-23).", branch: "shem",
                                          children: [{
                                            id: "nahor1", name: "Nahor I", info: "Son of Serug. Grandfather of Abraham. Lived 148 years (Gen 11:24-25). Named after him: his grandson Nahor II (Abraham's brother).", branch: "shem",
                                            children: [{
                                              id: "terah", name: "Terah", info: "Son of Nahor I. Father of Abraham, Nahor II, and Haran. Left Ur of the Chaldeans to travel to Canaan but settled in Haran, where he died at age 205 (Gen 11:31-32). Joshua 24:2 notes Terah 'served other gods.'", branch: "abraham",
                                              children: [
                                                {
                                                  id: "haran", name: "Haran", info: "Son of Terah. Died before his father in Ur of the Chaldeans — the first recorded death of a son before his father (Gen 11:28). Father of Lot, Milcah, and Iscah.", branch: "abraham",
                                                  children: [
                                                    {
                                                      id: "lot", name: "Lot", info: "Son of Haran; nephew of Abraham. Traveled with Abraham from Ur. Chose the fertile Jordan valley near Sodom (Gen 13:10-11). Rescued by Abraham from Chedorlaomer (Gen 14). Visited by two angels; escaped Sodom's destruction. His wife looked back and became a pillar of salt (Gen 19:26). Lived in a cave with his daughters after Sodom's fall.", branch: "abraham",
                                                      children: [
                                                        { id: "moab", name: "Moab", info: "Son of Lot by his elder daughter. Born after the destruction of Sodom (Gen 19:37). Ancestor of the Moabites, east of the Dead Sea. Ruth the Moabitess (great-grandmother of David) came from this line. Israel was forbidden to conquer Moab (Deut 2:9).", branch: "abraham" },
                                                        { id: "benammi", name: "Ben-Ammi", info: "Son of Lot by his younger daughter. Name means 'son of my people.' Ancestor of the Ammonites, who settled east of the Jordan River (Gen 19:38). The Ammonites were frequent enemies of Israel. Their capital was Rabbah (modern Amman, Jordan).", branch: "abraham" },
                                                      ]
                                                    },
                                                    { id: "milcah", name: "Milcah", info: "Daughter of Haran; niece of Abraham. Married her uncle Nahor II (Abraham's brother). Grandmother of Rebekah (who married Isaac) and Laban (Gen 11:29; 22:20-23). Her name means 'queen.'", branch: "abraham" },
                                                    { id: "iscah", name: "Iscah", info: "Daughter of Haran; sister of Lot and Milcah. Mentioned only once in Gen 11:29. Some early Jewish traditions identify Iscah with Sarah (Abraham's wife), though this is debated.", branch: "abraham" },
                                                  ]
                                                },
                                                {
                                                  id: "nahor2", name: "Nahor II", info: "Son of Terah; Abraham's brother. Married his niece Milcah (daughter of Haran). Stayed behind in Haran when Abraham continued to Canaan. Father of Bethuel, grandfather of Rebekah and Laban. Abraham's servant went to Nahor's city to find a wife for Isaac (Gen 24) (Gen 11:27).", branch: "abraham",
                                                  children: [{
                                                    id: "bethuel", name: "Bethuel", info: "Son of Nahor II and Milcah. Father of Rebekah and Laban. Called 'Bethuel the Aramean of Paddan-Aram' (Gen 25:20). He played a secondary role when Abraham's servant came to find a wife for Isaac — his son Laban took the lead (Gen 24:50).", branch: "abraham",
                                                    children: [
                                                      { id: "rebekah", name: "Rebekah", info: "Daughter of Bethuel; sister of Laban. Became wife of Isaac after Abraham's servant sought her out (Gen 24). Kind and hardworking — drew water for the servant's camels. Mother of twins Esau and Jacob. Favored Jacob and helped him deceive Isaac for the blessing (Gen 27). Died in Canaan and was buried in the cave of Machpelah (Gen 49:31).", branch: "abraham" },
                                                      { id: "laban", name: "Laban", info: "Son of Bethuel; brother of Rebekah. Father of Leah and Rachel. Lived in Paddan-Aram (Haran). Welcomed Jacob when he fled from Esau. Jacob worked 7 years for Rachel, but Laban tricked him into marrying Leah first, then another 7 years for Rachel. Known for his trickery. Changed Jacob's wages 10 times (Gen 31:7). Eventually made a covenant with Jacob at Gilead (Gen 31).", branch: "abraham" },
                                                    ]
                                                  }]
                                                },
                                                {
                                                  id: "abraham", name: "Abraham", info: "Son of Terah. Originally called Abram ('exalted father'), renamed Abraham ('father of many nations') by God (Gen 17:5). Left Ur and Haran at God's call (Gen 12). Received the covenant of circumcision. Offered his son Isaac on Mt. Moriah (Gen 22). Father of faith — declared righteous by faith (Gen 15:6; Rom 4:3; Heb 11:8-19). Purchased the cave of Machpelah for burial. Died at 175 years old.", branch: "abraham",
                                                  children: [
                                                    {
                                                      id: "ishmael", name: "Ishmael", info: "Son of Abraham by Hagar (Sarah's Egyptian servant). Name means 'God hears' — named because God heard Hagar's distress. An angel promised he would be 'a wild donkey of a man' and father of a great nation (Gen 16:12). Circumcised at age 13. Expelled with Hagar after Isaac's birth. Blessed by God with 12 sons who became princes (Gen 17:20). Died at age 137. Considered the ancestor of the Arab peoples.", branch: "ishmael",
                                                      children: [
                                                        { id: "nebajoth", name: "Nebajoth", info: "Firstborn of Ishmael. Ancestor of the Nabataeans — famous Arab traders who built the city of Petra (in modern Jordan). Mentioned in Isa 60:7 as offering rams to God. His sister Mahalath/Basemath married Esau (Gen 28:9; 36:3) (Gen 25:13).", branch: "ishmael" },
                                                        { id: "kedar", name: "Kedar", info: "Second son of Ishmael. Ancestor of the Kedarites — powerful Arab Bedouin tribes of the Syrian/Arabian desert. Famous archers (Isa 21:17). Solomon's bride is compared to the 'tents of Kedar' (Song 1:5). Mentioned in Jer 49:28 as attacked by Nebuchadnezzar (Gen 25:13).", branch: "ishmael" },
                                                        { id: "adbeel", name: "Adbeel", info: "Son of Ishmael. Ancestor of an Arab tribe in NW Arabia. Name means 'disciplined of God.' Known from Assyrian records as the Idibi'il tribe near Egypt (Gen 25:13).", branch: "ishmael" },
                                                        { id: "mibsam", name: "Mibsam", info: "Son of Ishmael. Ancestor of an Arabian tribe. The name also appears among the descendants of Simeon (1 Chr 4:25), possibly through intermarriage (Gen 25:13).", branch: "ishmael" },
                                                        { id: "mishma", name: "Mishma", info: "Son of Ishmael. Ancestor of an Arabian tribe. Name also appears in the tribe of Simeon (1 Chr 4:25-26), suggesting blending of lineages over generations (Gen 25:14).", branch: "ishmael" },
                                                        { id: "dumah", name: "Dumah", info: "Son of Ishmael. Ancestor of an Arab people. His name is preserved in the oasis of Dumat al-Jandal (Duma) in NW Saudi Arabia, an important ancient trade hub. Isaiah 21:11 contains an oracle against Dumah (Gen 25:14).", branch: "ishmael" },
                                                        { id: "massa", name: "Massa", info: "Son of Ishmael. Ancestor of an Arabian tribe in NW Arabia. Agur and Lemuel in Proverbs 30-31 are described as 'kings of Massa,' suggesting a wisdom tradition (Gen 25:14).", branch: "ishmael" },
                                                        { id: "hadad-i", name: "Hadad", info: "Son of Ishmael. Called Hadar in some manuscripts (Gen 25:15; 1 Chr 1:30). Ancestor of an Arabian tribe. The name Hadad was also a common Semitic storm-god name (Gen 25:15).", branch: "ishmael" },
                                                        { id: "tema", name: "Tema", info: "Son of Ishmael. Ancestor of the Temeans — a tribe at the oasis of Tayma in NW Arabia, an important caravan stop on the ancient incense route. Job's friend Eliphaz was a Temanite. Mentioned in Job 6:19; Isa 21:14; Jer 25:23 (Gen 25:15).", branch: "ishmael" },
                                                        { id: "jetur", name: "Jetur", info: "Son of Ishmael. Ancestor of the Itureans — a people in the region of Hauran/Bashan east of the Jordan. Mentioned in 1 Chr 5:19 as fighting with the Israelite tribes. In NT times the Itureans occupied parts of modern Lebanon/Syria (Gen 25:15).", branch: "ishmael" },
                                                        { id: "naphish", name: "Naphish", info: "Son of Ishmael. His descendants fought against the Israelite tribes of Reuben, Gad, and Manasseh east of Jordan (1 Chr 5:18-22). His people were taken captive along with the Itureans (Gen 25:15).", branch: "ishmael" },
                                                        { id: "kedemah", name: "Kedemah", info: "Twelfth and last son of Ishmael. Name means 'eastward' or 'ancient.' Ancestor of a tribe in the eastern/Syrian desert. The 'people of the East' (Kedem) may be connected to his descendants (Gen 25:15).", branch: "ishmael" },
                                                      ]
                                                    },
                                                    {
                                                      id: "isaac", name: "Isaac", info: "Son of Abraham and Sarah, born when Abraham was 100 (Gen 21:5). Name means 'he laughs' — his parents both laughed at God's promise of a son in old age. Bound on Mt. Moriah but spared (Gen 22). Married Rebekah. Inherited all Abraham's possessions. Father of Esau and Jacob. Tricked by Jacob into giving the birthright blessing. Died at 180 years (Gen 35:28).", branch: "abraham",
                                                      children: [
                                                        {
                                                          id: "esau", name: "Esau (Edom)", info: "Firstborn twin of Isaac and Rebekah. A skilled hunter, 'a man of the open country.' Sold his birthright to Jacob for a bowl of stew (Gen 25:29-34). Lost the blessing of the firstborn to Jacob's deception. Name Edom ('red') came from the red stew and his red complexion. Ancestor of the Edomites who settled in the hill country of Seir (Gen 36). Showed forgiveness when he embraced Jacob on his return (Gen 33). Married Hittite and Ishmaelite women, grieving his parents.", branch: "esau",
                                                          children: [
                                                            { id: "eliphaz-e", name: "Eliphaz (son of Esau)", info: "Son of Esau by his Hittite wife Adah. Father of Teman, Omar, Zepho, Gatam, Kenaz, and Amalek (by his concubine Timna). One of the chiefs of Edom (Gen 36:10-12). Note: distinct from Eliphaz the Temanite, Job's friend (though Job's friend is likely descended from him via Teman).", branch: "esau" },
                                                            { id: "reuel-e", name: "Reuel (son of Esau)", info: "Son of Esau by his wife Basemath (daughter of Ishmael). Father of Nahath, Zerah, Shammah, and Mizzah — all chiefs of Edom (Gen 36:13, 17). Note: Moses's father-in-law was also named Reuel/Jethro (Exod 2:18).", branch: "esau" },
                                                            { id: "jeush-e", name: "Jeush", info: "Son of Esau by his Hivite wife Oholibamah. One of the chiefs/clans of Edom (Gen 36:14,18).", branch: "esau" },
                                                            { id: "jalam-e", name: "Jalam", info: "Son of Esau by his Hivite wife Oholibamah. One of the chiefs/clans of Edom (Gen 36:14,18).", branch: "esau" },
                                                            { id: "korah-e", name: "Korah (son of Esau)", info: "Son of Esau by his Hivite wife Oholibamah. One of the chiefs/clans of Edom (Gen 36:14,18). Not to be confused with Korah son of Izhar who rebelled against Moses (Num 16).", branch: "esau" },
                                                          ]
                                                        },
                                                        {
                                                          id: "jacob", name: "Jacob (Israel)", info: "Second twin son of Isaac and Rebekah. Name means 'he grasps the heel' (or 'supplanter'). Bought Esau's birthright; stole his blessing. Fled to Haran; worked for Laban 14 years for his daughters. Had 12 sons (the 12 tribes) by Leah, Rachel, Bilhah, and Zilpah. Wrestled with God at Peniel; renamed Israel ('he struggles with God') (Gen 32:28). Reconciled with Esau. Moved to Egypt with his whole family at age 130. Blessed his sons prophetically (Gen 49). Died in Egypt at 147; embalmed and buried in Machpelah.", branch: "abraham",
                                                          children: [
                                                            { id: "reuben", name: "Reuben", info: "Firstborn of Jacob & Leah. Name means 'see, a son.' Lost birthright for sleeping with Bilhah, his father's concubine (Gen 35:22). Tried to rescue Joseph from his brothers (Gen 37:22). Jacob's blessing: unstable as water, will not excel (Gen 49:3-4). Tribe settled east of the Jordan River.", branch: "tribes" },
                                                            { id: "simeon", name: "Simeon", info: "Second son of Jacob & Leah. With Levi, killed all men of Shechem to avenge Dinah (Gen 34). Held as hostage by Joseph in Egypt (Gen 42:24). Jacob's blessing: 'instruments of cruelty' — scattered in Israel (Gen 49:5-7). Tribe absorbed into Judah's territory.", branch: "tribes" },
                                                            { id: "levi", name: "Levi", info: "Third son of Jacob & Leah. With Simeon, avenged Dinah. His descendants became the priestly tribe — no land inheritance, serving God in the tabernacle/temple. Moses, Aaron, and Miriam were Levites. Jacob's blessing: scattered in Israel (Gen 49:5-7), later fulfilled in priestly service.", branch: "tribes" },
                                                            {
                                                              id: "judah", name: "Judah", info: "Fourth son of Jacob & Leah. Suggested selling Joseph rather than killing him (Gen 37:26-27). Offered himself as surety for Benjamin in Egypt (Gen 44:18-34). Jacob's blessing: 'lion of Judah' — the scepter shall not depart from Judah (Gen 49:8-12). The messianic line runs through Judah to David and ultimately to Jesus (Rev 5:5).", branch: "judah",
                                                              children: [
                                                                { id: "er", name: "Er", info: "Firstborn of Judah by his Canaanite wife Shua. Married Tamar. 'Was wicked in the sight of the LORD, and the LORD put him to death' — no details given as to the nature of his sin (Gen 38:7).", branch: "judah" },
                                                                { id: "onan", name: "Onan", info: "Second son of Judah. Required by custom (levirate marriage) to produce children for his dead brother Er through Tamar. Refused to fully fulfill this duty. 'What he did was wicked in the LORD's sight; so the LORD put him to death also' (Gen 38:9-10).", branch: "judah" },
                                                                { id: "shelah-j", name: "Shelah (son of Judah)", info: "Third son of Judah. Judah withheld him from Tamar, fearing he too would die. Eventually became the father of the clan of Shela (Num 26:20; 1 Chr 4:21-22). His descendants included craftsmen at Beth-Ashbea (Gen 38:11,26).", branch: "judah" },
                                                                {
                                                                  id: "perez", name: "Perez", info: "Son of Judah by Tamar (who posed as a prostitute). Twin with Zerah. Name means 'breaking out' — he broke out first at birth despite his brother's hand appearing first. In the direct messianic line: Perez → Hezron → Ram → Amminadab → Nahshon → Salmon → Boaz → Obed → Jesse → David → Jesus (Ruth 4:18-22; Matt 1:3) (Gen 38:29).", branch: "judah",
                                                                  children: [
                                                                    { id: "zerah", name: "Zerah (twin)", info: "Son of Judah by Tamar. Twin with Perez. His hand came out first with a scarlet thread tied on it (Gen 38:28-30). Ancestor of Achan, who took forbidden plunder at Jericho (Josh 7:1; 1 Chr 2:6-7). Ancestor of Ethan, Heman, Calcol, and Darda — wise men Solomon was compared to (1 Kings 4:31).", branch: "judah" },
                                                                    {
                                                                      id: "hezron", name: "Hezron", info: "Son of Perez. His family went to Egypt with Jacob (Gen 46:12). Ancestor of David and Jesus (Ruth 4:18-19; Matt 1:3; Luke 3:33). Father of Ram (ancestor of David), Caleb (ancestor of Bezalel the craftsman), and Jerahmeel (1 Chr 2:9).", branch: "judah",
                                                                      children: [{
                                                                        id: "ram", name: "Ram", info: "Son of Hezron. In the direct ancestral line of David and Jesus (Ruth 4:19; Matt 1:3-4; Luke 3:33). Father of Amminadab (1 Chr 2:9-10).", branch: "judah",
                                                                        children: [{
                                                                          id: "amminadab", name: "Amminadab", info: "Son of Ram. His daughter Elisheba married Aaron the High Priest (Exod 6:23). His son Nahshon was the leading prince of the tribe of Judah during the Exodus (Num 1:7; 2:3). In the genealogy of Jesus (Matt 1:4; Luke 3:33).", branch: "judah",
                                                                          children: [{
                                                                            id: "nahshon", name: "Nahshon", info: "Son of Amminadab. Leader/prince of the tribe of Judah during the Exodus (Num 1:7; 2:3; 10:14). Presented the first offering at the dedication of the tabernacle (Num 7:12-17). Jewish tradition says he was the first to step into the Red Sea, prompting it to part. Brother-in-law of Aaron. In the messianic genealogy (Matt 1:4; Ruth 4:20).", branch: "judah",
                                                                            children: [{
                                                                              id: "salmon", name: "Salmon", info: "Son of Nahshon. Father of Boaz by Rahab (Matt 1:5). Rahab was the Canaanite innkeeper of Jericho who hid the Israelite spies and was saved when Jericho fell (Josh 2; 6). One of the few Gentile women in the genealogy of Jesus.", branch: "judah",
                                                                              children: [{
                                                                                id: "boaz", name: "Boaz", info: "Son of Salmon and Rahab. 'A man of standing' in Bethlehem from the tribe of Judah (Ruth 2:1). Showed great kindness to Ruth the Moabitess. Acted as kinsman-redeemer (go'el), marrying Ruth to preserve Elimelech's family line and property. A picture of Christ as Redeemer. Featured in the entire book of Ruth (Ruth 2-4; Matt 1:5).", branch: "judah",
                                                                                children: [{
                                                                                  id: "obed", name: "Obed", info: "Son of Boaz and Ruth. Name means 'servant/worshiper.' Born in Bethlehem. Laid in the arms of Naomi, who became his nurse — the women of Bethlehem celebrated his birth (Ruth 4:13-17). Father of Jesse, grandfather of David. In the genealogy of Jesus (Matt 1:5; Luke 3:32).", branch: "judah",
                                                                                  children: [{
                                                                                    id: "jesse", name: "Jesse", info: "Son of Obed. Father of 8 sons and 2 daughters. An Ephrathite from Bethlehem. When Samuel came to anoint a king, Jesse presented 7 sons before David was brought in from the fields (1 Sam 16:1-13). Known as the 'root of Jesse' in messianic prophecy (Isa 11:1,10; Rom 15:12). Father of David the king.", branch: "judah",
                                                                                    children: [
                                                                                      { id: "eliab", name: "Eliab", info: "Firstborn of Jesse. Tall and impressive in appearance — Samuel almost anointed him king, but God said 'man looks at the outward appearance, but the LORD looks at the heart' (1 Sam 16:6-7). Later appeared with David when Goliath challenged Israel and rebuked David for coming to watch the battle (1 Sam 17:28).", branch: "judah" },
                                                                                      { id: "abinadab", name: "Abinadab (son of Jesse)", info: "Second son of Jesse. Presented before Samuel for anointing but not chosen (1 Sam 16:8). Served in Saul's army when David came to the camp (1 Sam 17:13). Not to be confused with Abinadab in whose house the ark of God was kept (1 Sam 7:1).", branch: "judah" },
                                                                                      { id: "shammah", name: "Shammah (son of Jesse)", info: "Third son of Jesse (also called Shimea or Shimeah). Presented before Samuel for anointing but not chosen (1 Sam 16:9). Was at the battle when Goliath was challenging Israel (1 Sam 17:13). Father of Jonathan, one of David's mighty men (2 Sam 21:21).", branch: "judah" },
                                                                                      { id: "nethanel-j", name: "Nethanel (son of Jesse)", info: "Fourth son of Jesse (1 Chr 2:14). Presented before Samuel. Not individually mentioned in narrative accounts beyond the genealogy.", branch: "judah" },
                                                                                      { id: "raddai", name: "Raddai", info: "Fifth son of Jesse (1 Chr 2:14). Little is recorded about him beyond being listed in Jesse's family.", branch: "judah" },
                                                                                      { id: "ozem", name: "Ozem", info: "Sixth son of Jesse (1 Chr 2:15). Little recorded beyond the genealogy. Note: 1 Chronicles 2:15 lists only 7 sons of Jesse, while 1 Samuel 16:10 implies 8, which has led to some scholarly discussion.", branch: "judah" },
                                                                                      { id: "david", name: "David", info: "Seventh/eighth son of Jesse. Youngest — was tending sheep when Samuel came to anoint him. Anointed king of Israel by Samuel (1 Sam 16). Killed Goliath with a sling and stone (1 Sam 17). Musician and poet — wrote many Psalms. Served under Saul; fled his jealousy. Made king of Judah then all Israel. Captured Jerusalem; made it his capital. Brought the Ark of God to Jerusalem. God made an eternal covenant with him (2 Sam 7): his throne would last forever. Called 'a man after God's own heart' (1 Sam 13:14; Acts 13:22). Ancestor of Jesus Christ (Matt 1:1).", branch: "david" },
                                                                                      { id: "zeruiah-j", name: "Zeruiah (daughter)", info: "Daughter of Jesse (or possibly of Nahash — 2 Sam 17:25, a debated passage). Sister of David. Mother of Joab, Abishai, and Asahel — three of David's greatest military commanders (1 Chr 2:16). Her sons were described as 'too hard' for David to control (2 Sam 3:39).", branch: "judah" },
                                                                                      { id: "abigail-j", name: "Abigail (daughter of Jesse)", info: "Daughter of Jesse; sister of David (1 Chr 2:16-17). Mother of Amasa, who became commander of Absalom's army during the rebellion against David (2 Sam 17:25). Not to be confused with Abigail, the wife of David (1 Sam 25).", branch: "judah" },
                                                                                    ]
                                                                                  }]
                                                                                }]
                                                                              }]
                                                                            }]
                                                                          }]
                                                                        }]
                                                                      }]
                                                                    },
                                                                  ]
                                                                },
                                                              ]
                                                            },
                                                            { id: "dan", name: "Dan", info: "Fifth son of Jacob, firstborn of Bilhah (Rachel's servant). Name means 'he judged.' Samson was from the tribe of Dan. Jacob's blessing: 'Dan will be a snake by the roadside' (Gen 49:17). Tribe settled in the north — the expression 'from Dan to Beersheba' denoted the full extent of Israel.", branch: "tribes" },
                                                            { id: "naphtali", name: "Naphtali", info: "Sixth son of Jacob, second son of Bilhah. Name means 'my struggle.' Jacob's blessing: 'a doe set free that bears beautiful fawns' (Gen 49:21). Tribe settled in northern Galilee — 'Galilee of the nations' (Isa 9:1). Jesus began his ministry in Naphtali's territory (Matt 4:13-16).", branch: "tribes" },
                                                            { id: "gad", name: "Gad", info: "Seventh son of Jacob, firstborn of Zilpah (Leah's servant). Name means 'good fortune.' Jacob's blessing: 'Gad will be attacked by a band of raiders, but he will attack them at their heels' (Gen 49:19). Tribe settled east of the Jordan River, famous warriors.", branch: "tribes" },
                                                            { id: "asher", name: "Asher", info: "Eighth son of Jacob, second son of Zilpah. Name means 'happy' or 'blessed.' Jacob's blessing: 'Asher's food will be rich; he will provide delicacies fit for a king' (Gen 49:20). Tribe settled along the Mediterranean coast in northern Israel. The prophetess Anna who greeted the infant Jesus was from the tribe of Asher (Luke 2:36).", branch: "tribes" },
                                                            { id: "issachar", name: "Issachar", info: "Ninth son of Jacob, fifth son of Leah. Name means 'reward.' Jacob's blessing: 'a rawboned donkey lying down between two saddlebags... he bowed his shoulder to the burden' (Gen 49:14-15). Tribe settled in the fertile Jezreel Valley. Described in 1 Chr 12:32 as men 'who understood the times.'", branch: "tribes" },
                                                            { id: "zebulun", name: "Zebulun", info: "Tenth son of Jacob, sixth son of Leah. Name means 'honor.' Jacob's blessing: 'will live by the seashore and become a haven for ships' (Gen 49:13). Tribe settled in lower Galilee. Mentioned alongside Naphtali as in the region where Jesus ministered (Matt 4:13-16; Isa 9:1).", branch: "tribes" },
                                                            {
                                                              id: "joseph", name: "Joseph", info: "Eleventh son of Jacob, firstborn of Rachel. Beloved by his father (coat of many colors). His brothers sold him to Ishmaelite traders out of jealousy (Gen 37). Taken to Egypt; served in Potiphar's house. Falsely accused by Potiphar's wife; imprisoned. Interpreted Pharaoh's dreams; became second-in-command of Egypt (Gen 41). Saved Egypt and his family from famine. Revealed himself to his brothers with forgiveness (Gen 45). His two sons Manasseh and Ephraim were adopted as tribes by Jacob, giving Joseph a double portion.", branch: "tribes",
                                                              children: [
                                                                { id: "manasseh", name: "Manasseh", info: "Firstborn of Joseph & Asenath (Egyptian priest's daughter). Jacob crossed his hands, giving the greater blessing to Ephraim the younger (Gen 48:14-20). Half-tribe settled west of Jordan; half east. Gideon was from the tribe of Manasseh (Judg 6:15).", branch: "tribes" },
                                                                { id: "ephraim", name: "Ephraim", info: "Second son of Joseph. Received the greater blessing from Jacob despite being younger (Gen 48:19): 'his younger brother will be greater.' Became the dominant northern tribe — the northern kingdom of Israel is often simply called 'Ephraim' in the prophets (Isa 7:2; Hos 5:3). Joshua was an Ephraimite.", branch: "tribes" },
                                                              ]
                                                            },
                                                            { id: "benjamin", name: "Benjamin", info: "Twelfth and youngest son of Jacob, second son of Rachel. Born as Rachel died on the road — she named him Ben-Oni ('son of my sorrow') but Jacob called him Benjamin ('son of my right hand') (Gen 35:18). Jacob's blessing: 'a ravenous wolf' (Gen 49:27). The tribe of Benjamin produced Saul, Israel's first king. The apostle Paul was from Benjamin (Phil 3:5). Jerusalem straddled the Benjamin/Judah border.", branch: "tribes" },
                                                            { id: "dinah", name: "Dinah", info: "Daughter of Jacob and Leah. Only daughter of Jacob mentioned by name (Gen 30:21). Violated by Shechem the Hivite, who then asked to marry her. Her brothers Simeon and Levi killed all the men of Shechem in revenge (Gen 34). Jacob rebuked them for it (Gen 34:30; 49:5-7).", branch: "tribes" },
                                                          ]
                                                        }
                                                      ]
                                                    },
                                                    { id: "zimran", name: "Zimran", info: "Firstborn of Abraham by his wife Keturah (married after Sarah's death). Ancestor of an Arabian people. Name may mean 'celebrated' or 'musician.' Settled in Arabia (Gen 25:1-2; 1 Chr 1:32).", branch: "ishmael" },
                                                    { id: "jokshan", name: "Jokshan", info: "Second son of Abraham by Keturah. Father of Sheba and Dedan. His descendants settled in Arabia. Sheba is associated with the famous Sabaean kingdom; Dedan with trading tribes of NW Arabia (Gen 25:2-3; 1 Chr 1:32).", branch: "ishmael" },
                                                    { id: "medan", name: "Medan", info: "Third son of Abraham by Keturah. Ancestor of an Arabian people. May be connected to the Madan tribe of Arabia. Little else is recorded (Gen 25:2; 1 Chr 1:32).", branch: "ishmael" },
                                                    { id: "midian", name: "Midian", info: "Fourth son of Abraham by Keturah. Ancestor of the Midianites — a trading and pastoral people east of the Gulf of Aqaba and in the Sinai/Arabian desert. The Midianite traders who bought Joseph brought him to Egypt (Gen 37:28,36). Moses fled to Midian and married Zipporah, daughter of Jethro (Reuel) the Midianite priest (Exod 2:15-21). The Midianites later oppressed Israel until Gideon defeated them (Judg 6-7) (Gen 25:2).", branch: "ishmael" },
                                                    { id: "ishbak", name: "Ishbak", info: "Fifth son of Abraham by Keturah. Ancestor of an Arabian tribe, possibly the Iasabus mentioned by ancient geographers. Little else recorded (Gen 25:2; 1 Chr 1:32).", branch: "ishmael" },
                                                    { id: "shuah", name: "Shuah", info: "Sixth and last son of Abraham by Keturah. His name may be preserved in the Shuites of Arabia. Job's friend Bildad was a 'Shuhite' — possibly descended from Shuah (Job 2:11; 8:1) (Gen 25:2).", branch: "ishmael" },
                                                  ]
                                                },
                                              ]
                                            }]
                                          }]
                                        }]
                                      }]
                                    },
                                  ]
                                }]
                              }]
                            },
                            { id: "lud", name: "Lud", info: "Son of Shem. Ancestor of the Lydians — a people of western Anatolia (modern Turkey) known for their wealth and credited with inventing coinage. Capital: Sardis. King Croesus of Lydia was famous for his riches. Lud's warriors are mentioned as archers in Isa 66:19 and Ezek 27:10 (Gen 10:22).", branch: "shem" },
                            {
                              id: "aram", name: "Aram", info: "Son of Shem. Ancestor of the Arameans — a major Semitic people whose language (Aramaic) became the lingua franca of the ancient Near East and was spoken by Jesus. They settled in Syria and Mesopotamia. The region is called Aram-Naharaim (Gen 24:10) and Paddan-Aram. Father of Uz, Hul, Gether, and Mash/Meshech (Gen 10:22-23).", branch: "shem",
                              children: [
                                { id: "uz", name: "Uz", info: "Son of Aram. Ancestor of the people of Uz — a region east of Canaan, likely in Edom/Arabia. The land of Uz is where Job lived and suffered (Job 1:1). Jeremiah mentions 'the land of Uz' alongside Egypt and Edom (Jer 25:20; Lam 4:21) (Gen 10:23).", branch: "shem" },
                                { id: "hul", name: "Hul", info: "Son of Aram. Associated with a region around Lake Huleh (Waters of Merom) in northern Israel/Syria, which preserved his name. Little else is recorded in Scripture (Gen 10:23).", branch: "shem" },
                                { id: "gether", name: "Gether", info: "Son of Aram. Ancestor of an Aramean people. Some ancient traditions place his descendants in the region between Mesopotamia and the Arabian desert. Little else recorded (Gen 10:23).", branch: "shem" },
                                { id: "mash", name: "Mash (Meshech)", info: "Son of Aram. Called Meshech in 1 Chr 1:17 — not to be confused with Meshech son of Japheth. Possibly associated with Mt. Masius (Tur Abdin) in upper Mesopotamia (modern SE Turkey). His descendants settled in the Syrian/Mesopotamian region (Gen 10:23).", branch: "shem" },
                              ]
                            },
                          ]
                        },
                      ]
                    }]
                  }]
                }]
              }]
            }]
          }]
        }]
      }]
    },
  ]
};

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
  "adam","noah","abraham","isaac","jacob","david","shem","ham","japheth","joseph","judah",
]);
