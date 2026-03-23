#!/bin/bash
# Download unique public domain artwork for biblical figures
# Each image is a different artwork - no duplicates
# Sources: Artvee CDN, Rijksmuseum API, Met Museum, Wikipedia Commons

ART_DIR="/Users/travisk/bible-family-tree/public/art"
mkdir -p "$ART_DIR"

TOTAL=0
OK=0
MISS=0

download() {
    local id="$1"
    local url="$2"
    local title="$3"
    local artist="$4"
    local dest="$ART_DIR/${id}.jpg"

    TOTAL=$((TOTAL + 1))

    # Skip if already exists and > 5000 bytes
    if [ -f "$dest" ] && [ $(stat -f%z "$dest" 2>/dev/null || stat -c%s "$dest" 2>/dev/null) -gt 5000 ] 2>/dev/null; then
        echo "SKIP: $id — already exists"
        OK=$((OK + 1))
        return 0
    fi

    curl -sL --max-time 30 -o "$dest" "$url" 2>/dev/null

    if [ -f "$dest" ]; then
        local size=$(stat -f%z "$dest" 2>/dev/null || stat -c%s "$dest" 2>/dev/null)
        if [ "$size" -gt 5000 ] 2>/dev/null; then
            echo "OK: $id — $title | $artist ($size bytes)"
            OK=$((OK + 1))
            return 0
        else
            rm -f "$dest"
        fi
    fi

    echo "MISS: $id — $title | $artist"
    MISS=$((MISS + 1))
    return 1
}

# Try multiple URLs for a single figure
try_download() {
    local id="$1"
    local title="$2"
    local artist="$3"
    shift 3
    # Remaining args are URLs to try in order

    local dest="$ART_DIR/${id}.jpg"

    # Skip if already exists and > 5000 bytes
    if [ -f "$dest" ] && [ $(stat -f%z "$dest" 2>/dev/null || stat -c%s "$dest" 2>/dev/null) -gt 5000 ] 2>/dev/null; then
        echo "SKIP: $id — already exists"
        TOTAL=$((TOTAL + 1))
        OK=$((OK + 1))
        return 0
    fi

    TOTAL=$((TOTAL + 1))

    for url in "$@"; do
        curl -sL --max-time 30 -o "$dest" "$url" 2>/dev/null
        if [ -f "$dest" ]; then
            local size=$(stat -f%z "$dest" 2>/dev/null || stat -c%s "$dest" 2>/dev/null)
            if [ "$size" -gt 5000 ] 2>/dev/null; then
                echo "OK: $id — $title | $artist ($size bytes)"
                OK=$((OK + 1))
                return 0
            else
                rm -f "$dest"
            fi
        fi
    done

    echo "MISS: $id — $title | $artist"
    MISS=$((MISS + 1))
    return 1
}

echo "========================================="
echo "Downloading biblical figure artwork..."
echo "========================================="
echo ""

# ===== GROUP 1: Specific biblical figures =====

# ASHER - The Tribe of Asher (Marc Chagall)
try_download "asher" "The Tribe of Asher" "Marc Chagall" \
    "https://mdl.artvee.com/sftb/207601ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Figures_The_camp_of_the_tribe_of_Asher_%28right%29%2C_the_camp_of_the_tribe_of_Dan_%28center%29%2C_the_camp_of_the_tribe_of_Naphtali_%28left%29.jpg/800px-Figures_The_camp_of_the_tribe_of_Asher_%28right%29%2C_the_camp_of_the_tribe_of_Dan_%28center%29%2C_the_camp_of_the_tribe_of_Naphtali_%28left%29.jpg"

# GAD - Gad on the Battlefield (historical Bible illustration)
try_download "gad" "Gad, Son of Jacob" "Bible Illustration" \
    "https://mdl.artvee.com/sftb/207603ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/The_Phillip_Medhurst_Picture_Torah_542._The_camp_of_Gad._Numbers_cap_2_vv_14-15._De_Hooghe.jpg/597px-The_Phillip_Medhurst_Picture_Torah_542._The_camp_of_Gad._Numbers_cap_2_vv_14-15._De_Hooghe.jpg"

# ISSACHAR - The Tribe of Issachar
try_download "issachar" "The Tribe of Issachar" "Chagall" \
    "https://mdl.artvee.com/sftb/207602ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Figures_The_camp_of_the_tribe_of_Issachar_%28right%29%2C_the_camp_of_the_tribe_of_Judah_%28center%29%2C_the_camp_of_the_tribe_of_Zebulun_%28left%29.jpg/800px-Figures_The_camp_of_the_tribe_of_Issachar_%28right%29%2C_the_camp_of_the_tribe_of_Judah_%28center%29%2C_the_camp_of_the_tribe_of_Zebulun_%28left%29.jpg"

# ZEBULUN - The Tribe of Zebulun
try_download "zebulun" "The Tribe of Zebulun" "Bible Illustration" \
    "https://mdl.artvee.com/sftb/207604ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Zebulun_%28Capernaum%29_by_Chagall.jpg/440px-Zebulun_%28Capernaum%29_by_Chagall.jpg"

# ENOSH - Antediluvian patriarch
try_download "enosh" "Enosh, Son of Seth" "Old Master" \
    "https://mdl.artvee.com/sftb/206217ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Nuremberg_chronicles_f_7v_1.png/440px-Nuremberg_chronicles_f_7v_1.png"

# JARED - Antediluvian patriarch
try_download "jared" "Jared, Father of Enoch" "Old Master" \
    "https://mdl.artvee.com/sftb/206218ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Nuremberg_chronicles_f_8r_1.png/440px-Nuremberg_chronicles_f_8r_1.png"

# KENAN - Antediluvian patriarch
try_download "kenan" "Kenan, Son of Enosh" "Old Master" \
    "https://mdl.artvee.com/sftb/206219ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Nuremberg_chronicles_f_7v_2.png/440px-Nuremberg_chronicles_f_7v_2.png"

# MAHALALEL - Antediluvian patriarch
try_download "mahalalel" "Mahalalel, Son of Kenan" "Old Master" \
    "https://mdl.artvee.com/sftb/206220ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Nuremberg_chronicles_f_7v_3.png/440px-Nuremberg_chronicles_f_7v_3.png"

# ARAM - Arameans / Damascus
try_download "aram" "Ancient Damascus" "Orientalist" \
    "https://mdl.artvee.com/sftb/208753ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Syria%2C_the_Holy_Land%2C_Asia_Minor%2C_%26c._illustrated._%281836-1838%29_%2814778996532%29.jpg/640px-Syria%2C_the_Holy_Land%2C_Asia_Minor%2C_%26c._illustrated._%281836-1838%29_%2814778996532%29.jpg"

# ELAM - Ancient Persia / Susa
try_download "elam" "Palace of Susa" "Archaeological" \
    "https://mdl.artvee.com/sftb/208754ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Illustrerad_Verldshistoria_band_I_Ill_029.jpg/640px-Illustrerad_Verldshistoria_band_I_Ill_029.jpg"

# HEZRON - Ancestor of tribe of Judah
try_download "hezron" "Patriarch of Judah" "Bible Illustration" \
    "https://mdl.artvee.com/sftb/207158ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Nuremberg_chronicles_-_Hezron_%28LXXIIIv%29.jpg/440px-Nuremberg_chronicles_-_Hezron_%28LXXIIIv%29.jpg"

# NAHOR1 - Nahor, father of Terah
try_download "nahor1" "Nahor the Elder" "Nuremberg Chronicle" \
    "https://mdl.artvee.com/sftb/206221ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Nuremberg_chronicles_f_14r_2.png/440px-Nuremberg_chronicles_f_14r_2.png"

# NAHOR2 - Nahor, brother of Abraham
try_download "nahor2" "Nahor, Brother of Abraham" "Bible Illustration" \
    "https://mdl.artvee.com/sftb/206222ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Nuremberg_chronicles_f_17r_1.png/440px-Nuremberg_chronicles_f_17r_1.png"

# BETHUEL - Father of Rebekah
try_download "bethuel" "Bethuel, Father of Rebekah" "Old Master" \
    "https://mdl.artvee.com/sftb/207159ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Nuremberg_chronicles_-_Nachor%2C_Bathuel_and_Laban_%28XXIIIv%29.jpg/440px-Nuremberg_chronicles_-_Nachor%2C_Bathuel_and_Laban_%28XXIIIv%29.jpg"

# ENOCH-C - Enoch, city of Cain
try_download "enoch-c" "Building the City of Enoch" "Bible Illustration" \
    "https://mdl.artvee.com/sftb/206266ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Cain_Building_the_City_of_Enoch_%28Philip_James_de_Loutherbourg%29.jpg/640px-Cain_Building_the_City_of_Enoch_%28Philip_James_de_Loutherbourg%29.jpg"

# LAMECH-C - Lamech, descendant of Cain
try_download "lamech-c" "Lamech and His Two Wives" "Old Master" \
    "https://mdl.artvee.com/sftb/207160ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Lamech_and_his_two_wives_%28c._1795-1800%29.jpg/640px-Lamech_and_his_two_wives_%28c._1795-1800%29.jpg"

# REU - Patriarch in genealogy
try_download "reu" "Reu, Son of Peleg" "Nuremberg Chronicle" \
    "https://mdl.artvee.com/sftb/206223ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Nuremberg_chronicles_f_13v_4.png/440px-Nuremberg_chronicles_f_13v_4.png"

# SERUG - Patriarch in genealogy
try_download "serug" "Serug, Son of Reu" "Nuremberg Chronicle" \
    "https://mdl.artvee.com/sftb/206224ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Nuremberg_chronicles_f_14r_1.png/440px-Nuremberg_chronicles_f_14r_1.png"

# SHELAH - Patriarch in genealogy
try_download "shelah" "Shelah, Son of Arphaxad" "Nuremberg Chronicle" \
    "https://mdl.artvee.com/sftb/206225ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Nuremberg_chronicles_f_13r_4.png/440px-Nuremberg_chronicles_f_13r_4.png"

# EBER - Father of Hebrews (UNIQUE image, not Tower of Babel)
try_download "eber" "Eber, Patriarch of the Hebrews" "Nuremberg Chronicle" \
    "https://mdl.artvee.com/sftb/206226ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Nuremberg_chronicles_f_13v_1.png/440px-Nuremberg_chronicles_f_13v_1.png"

# ===== GROUP 2: Sons of Japheth and descendants =====

# GOMER - Son of Japheth (Cimmerians)
try_download "gomer" "Cimmerian Warriors" "Ancient Art" \
    "https://mdl.artvee.com/sftb/208001ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Scythian_Warriors.jpg/640px-Scythian_Warriors.jpg"

# MAGOG - Son of Japheth
try_download "magog" "Gog and Magog" "Medieval Illustration" \
    "https://mdl.artvee.com/sftb/208002ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Gog_and_Magog.jpg/640px-Gog_and_Magog.jpg"

# MADAI - Son of Japheth (Medes)
try_download "madai" "Median Warrior" "Ancient Art" \
    "https://mdl.artvee.com/sftb/208003ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Mede_soldier%2C_Persepolis.JPG/414px-Mede_soldier%2C_Persepolis.JPG"

# JAVAN - Son of Japheth (Greeks/Ionians)
try_download "javan" "Greek Warriors" "Ancient Art" \
    "https://mdl.artvee.com/sftb/208004ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Greek_Soldiers_of_Greco%E2%80%93Persian_Wars.jpg/640px-Greek_Soldiers_of_Greco%E2%80%93Persian_Wars.jpg"

# TUBAL - Son of Japheth
try_download "tubal" "Tubal, Son of Japheth" "Bible Illustration" \
    "https://mdl.artvee.com/sftb/208005ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Nuremberg_chronicles_-_Descendants_of_Japheth_%28XIIIr%29.jpg/640px-Nuremberg_chronicles_-_Descendants_of_Japheth_%28XIIIr%29.jpg"

# MESHECH - Son of Japheth
try_download "meshech" "Ancient Anatolian People" "Archaeological" \
    "https://mdl.artvee.com/sftb/208006ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Hittite_Chariot.jpg/640px-Hittite_Chariot.jpg"

# TIRAS - Son of Japheth (Thracians)
try_download "tiras" "Thracian Warrior" "Ancient Art" \
    "https://mdl.artvee.com/sftb/208007ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Thracian_tomb_of_Kazanlak_detail_from_wall_paintings.jpg/640px-Thracian_tomb_of_Kazanlak_detail_from_wall_paintings.jpg"

# ASHKENAZ - Grandson of Japheth
try_download "ashkenaz" "Scythian Horseman" "Ancient Art" \
    "https://mdl.artvee.com/sftb/208008ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Scythians_shooting_with_bows_Kertch_antique_Panticapeum_Taman_peninsula_%28detail%29.jpg/640px-Scythians_shooting_with_bows_Kertch_antique_Panticapeum_Taman_peninsula_%28detail%29.jpg"

# RIPHATH - Grandson of Japheth
try_download "riphath" "Ancient Caucasus" "19th Century" \
    "https://mdl.artvee.com/sftb/208009ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Thomas_Cole_-_The_Course_of_Empire_The_Arcadian_or_Pastoral_State_-_Google_Art_Project.jpg/640px-Thomas_Cole_-_The_Course_of_Empire_The_Arcadian_or_Pastoral_State_-_Google_Art_Project.jpg"

# TOGARMAH - Grandson of Japheth (Armenia)
try_download "togarmah" "Armenian Warriors" "Ancient Art" \
    "https://mdl.artvee.com/sftb/208010ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Urartu_warriors.jpg/640px-Urartu_warriors.jpg"

# ELISHAH - Son of Javan
try_download "elishah" "Ancient Ships at Cyprus" "Classical Art" \
    "https://mdl.artvee.com/sftb/208011ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Ship_mural%2C_Akrotiri%2C_Greece.jpg/640px-Ship_mural%2C_Akrotiri%2C_Greece.jpg"

# TARSHISH - Son of Javan (Tartessus/ships)
try_download "tarshish" "Ships of Tarshish" "Maritime Art" \
    "https://mdl.artvee.com/sftb/208012ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Phoenician_ship.jpg/640px-Phoenician_ship.jpg"

# KITTIM - Son of Javan (Cyprus)
try_download "kittim" "Ancient Cyprus" "Classical Art" \
    "https://mdl.artvee.com/sftb/208013ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Kition_Tombs%2C_Larnaca%2C_Cyprus.jpg/640px-Kition_Tombs%2C_Larnaca%2C_Cyprus.jpg"

# DODANIM - Son of Javan (Rhodes)
try_download "dodanim" "Ancient Rhodes Harbor" "Classical Art" \
    "https://mdl.artvee.com/sftb/208014ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Colossus_of_Rhodes.jpg/424px-Colossus_of_Rhodes.jpg"

# ===== Sons of Mizraim (Egypt) - each needs unique Egyptian art =====

# MIZRAIM - Son of Ham (Egypt)
try_download "mizraim" "Ancient Egypt" "Egyptian Art" \
    "https://mdl.artvee.com/sftb/208100ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/All_Gizah_Pyramids.jpg/640px-All_Gizah_Pyramids.jpg"

# LUDIM - Son of Mizraim
try_download "ludim" "Egyptian Warriors" "Ancient Art" \
    "https://mdl.artvee.com/sftb/208101ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Ramses_II_at_Kadesh.jpg/573px-Ramses_II_at_Kadesh.jpg"

# ANAMIM - Son of Mizraim
try_download "anamim" "Nile Scene" "Orientalist" \
    "https://mdl.artvee.com/sftb/208102ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/David_Roberts_-_The_Great_Temple_of_Abu_Simbel%2C_from_%27Egypt_and_Nubia%27.jpg/640px-David_Roberts_-_The_Great_Temple_of_Abu_Simbel%2C_from_%27Egypt_and_Nubia%27.jpg"

# LEHABIM - Son of Mizraim (Libyans)
try_download "lehabim" "Libyan Tributaries of Egypt" "Ancient Art" \
    "https://mdl.artvee.com/sftb/208103ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Ancient_Libyan.png/371px-Ancient_Libyan.png"

# NAPHTUHIM - Son of Mizraim
try_download "naphtuhim" "Egyptian Temple Scene" "Orientalist" \
    "https://mdl.artvee.com/sftb/208104ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Temple_of_Philae%2C_seen_from_the_water%2C_Egypt._Coloured_lithograph_Wellcome_V0049337.jpg/640px-Temple_of_Philae%2C_seen_from_the_water%2C_Egypt._Coloured_lithograph_Wellcome_V0049337.jpg"

# PATHRUSIM - Son of Mizraim (Upper Egypt)
try_download "pathrusim" "Upper Egypt Scene" "David Roberts" \
    "https://mdl.artvee.com/sftb/208105ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/David_Roberts_003.jpg/640px-David_Roberts_003.jpg"

# CASLUHIM - Son of Mizraim
try_download "casluhim" "Egyptian Desert Scene" "Orientalist" \
    "https://mdl.artvee.com/sftb/208106ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Jean-L%C3%A9on_G%C3%A9r%C3%B4me_-_Napoleon_and_the_Sphinx_-_Google_Art_Project.jpg/640px-Jean-L%C3%A9on_G%C3%A9r%C3%B4me_-_Napoleon_and_the_Sphinx_-_Google_Art_Project.jpg"

# CAPHTORIM - Son of Mizraim (Crete)
try_download "caphtorim" "Minoan Crete Fresco" "Ancient Art" \
    "https://mdl.artvee.com/sftb/208107ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Knossos_fresco_women.jpg/640px-Knossos_fresco_women.jpg"

# PHUT - Son of Ham (Libya/Put)
try_download "phut" "Ancient Libya" "Classical Art" \
    "https://mdl.artvee.com/sftb/208200ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Libya_ancient.jpg/640px-Libya_ancient.jpg"

# HETH - Son of Canaan (Hittites)
try_download "heth" "Hittite Empire" "Archaeological" \
    "https://mdl.artvee.com/sftb/208201ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Lion_Gate%2C_Hattusa_01.jpg/640px-Lion_Gate%2C_Hattusa_01.jpg"

# JEBUSITE - Canaanite people
try_download "jebusite" "Ancient Jerusalem" "Biblical Art" \
    "https://mdl.artvee.com/sftb/208202ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/1455_Travels_in_the_Holy_Land_-_View_of_the_City_of_Jerusalem.jpg/640px-1455_Travels_in_the_Holy_Land_-_View_of_the_City_of_Jerusalem.jpg"

# AMORITE - Canaanite people
try_download "amorite" "Amorite People" "Archaeological" \
    "https://mdl.artvee.com/sftb/208203ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Ebla_clay_tablet.jpg/479px-Ebla_clay_tablet.jpg"

# ARKITE - Phoenician city
try_download "arkite" "Ancient Phoenicia" "Classical Art" \
    "https://mdl.artvee.com/sftb/208204ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Sidon_Sea_Castle.jpg/640px-Sidon_Sea_Castle.jpg"

# SINITE - Canaanite tribe
try_download "sinite" "Mount Lebanon Landscape" "Orientalist" \
    "https://mdl.artvee.com/sftb/208205ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Frederic_Edwin_Church_-_Syria_by_the_Sea_-_Google_Art_Project.jpg/640px-Frederic_Edwin_Church_-_Syria_by_the_Sea_-_Google_Art_Project.jpg"

# ARVADITE - Island people (Arwad)
try_download "arvadite" "Ancient Island City" "Maritime Art" \
    "https://mdl.artvee.com/sftb/208206ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Arwad_island.jpg/640px-Arwad_island.jpg"

# ZEMARITE - Canaanite tribe
try_download "zemarite" "Ancient Levant" "Orientalist" \
    "https://mdl.artvee.com/sftb/208207ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Roberts%2C_David_-_Baalbec_-_1841.png/640px-Roberts%2C_David_-_Baalbec_-_1841.png"

# HAMATHITE - People of Hamath
try_download "hamathite" "City of Hamath" "Orientalist" \
    "https://mdl.artvee.com/sftb/208208ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Hama-Syrie.jpg/640px-Hama-Syrie.jpg"

# ===== Sons of Cush (Arabia/Africa) =====

# SEBA - Son of Cush
try_download "seba" "Kingdom of Seba" "African Art" \
    "https://mdl.artvee.com/sftb/208300ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Meroe_Pyramids.jpg/640px-Meroe_Pyramids.jpg"

# HAVILAH-C - Son of Cush
try_download "havilah-c" "Land of Havilah" "Landscape" \
    "https://mdl.artvee.com/sftb/208301ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Frederic_Edwin_Church_-_Morning_in_the_Tropics_-_Google_Art_Project.jpg/640px-Frederic_Edwin_Church_-_Morning_in_the_Tropics_-_Google_Art_Project.jpg"

# SABTAH - Son of Cush
try_download "sabtah" "Ancient Arabian Peninsula" "Orientalist" \
    "https://mdl.artvee.com/sftb/208302ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Lewis_John_Frederick_-_In_the_Bezestein%2C_El_Khan_Khalil%2C_Cairo_1872.jpg/519px-Lewis_John_Frederick_-_In_the_Bezestein%2C_El_Khan_Khalil%2C_Cairo_1872.jpg"

# SABTECHA - Son of Cush
try_download "sabtecha" "Arabian Landscape" "Orientalist" \
    "https://mdl.artvee.com/sftb/208303ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Jean-L%C3%A9on_G%C3%A9r%C3%B4me_-_The_Slave_Market_-_Google_Art_Project.jpg/459px-Jean-L%C3%A9on_G%C3%A9r%C3%B4me_-_The_Slave_Market_-_Google_Art_Project.jpg"

# RAAMAH - Son of Cush (Arabian trade)
try_download "raamah" "Arabian Caravan" "Orientalist" \
    "https://mdl.artvee.com/sftb/208304ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Alexandre-Gabriel_Decamps_-_The_Caravan_-_Walters_3764.jpg/640px-Alexandre-Gabriel_Decamps_-_The_Caravan_-_Walters_3764.jpg"

# DEDAN-R - Son of Raamah
try_download "dedan-r" "Dedan Trade Route" "Orientalist" \
    "https://mdl.artvee.com/sftb/208305ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Petra_Jordan_BW_36.JPG/640px-Petra_Jordan_BW_36.JPG"

# ===== Sons of Ishmael (Arabian/Bedouin themes) =====

# NEBAJOTH - Son of Ishmael
try_download "nebajoth" "Bedouin Encampment" "Orientalist" \
    "https://mdl.artvee.com/sftb/208400ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/David_Roberts_-_An_Encampment_of_the_Oulad-Said_-_Google_Art_Project.jpg/640px-David_Roberts_-_An_Encampment_of_the_Oulad-Said_-_Google_Art_Project.jpg"

# KEDAR - Son of Ishmael
try_download "kedar" "Kedar Desert Camp" "Orientalist" \
    "https://mdl.artvee.com/sftb/208401ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/A_Bedouin_Encampment_-_Alexandre-Gabriel_Decamps.jpg/640px-A_Bedouin_Encampment_-_Alexandre-Gabriel_Decamps.jpg"

# ADBEEL - Son of Ishmael
try_download "adbeel" "Arabian Desert Scene" "Orientalist" \
    "https://mdl.artvee.com/sftb/208402ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Jean-L%C3%A9on_G%C3%A9r%C3%B4me_-_Rider_and_His_Steed_in_the_Desert.jpg/454px-Jean-L%C3%A9on_G%C3%A9r%C3%B4me_-_Rider_and_His_Steed_in_the_Desert.jpg"

# MIBSAM - Son of Ishmael
try_download "mibsam" "Desert Oasis" "Orientalist" \
    "https://mdl.artvee.com/sftb/208403ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Jean-L%C3%A9on_G%C3%A9r%C3%B4me_-_Oasis.jpg/640px-Jean-L%C3%A9on_G%C3%A9r%C3%B4me_-_Oasis.jpg"

# MISHMA - Son of Ishmael
try_download "mishma" "Arabian Tents" "Orientalist" \
    "https://mdl.artvee.com/sftb/208404ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/John_Singer_Sargent_-_Bedouins_-_Google_Art_Project.jpg/640px-John_Singer_Sargent_-_Bedouins_-_Google_Art_Project.jpg"

# DUMAH - Son of Ishmael
try_download "dumah" "Fortress in Desert" "Orientalist" \
    "https://mdl.artvee.com/sftb/208405ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Qasr_Marid%2C_Dumat_al-Jandal.jpg/640px-Qasr_Marid%2C_Dumat_al-Jandal.jpg"

# MASSA - Son of Ishmael
try_download "massa" "Desert Landscape Arabia" "Orientalist" \
    "https://mdl.artvee.com/sftb/208406ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/David_Roberts_-_The_Approach_to_Mount_Sinai._1839.jpg/640px-David_Roberts_-_The_Approach_to_Mount_Sinai._1839.jpg"

# HADAD-I - Son of Ishmael
try_download "hadad-i" "Arabian Night Camp" "Orientalist" \
    "https://mdl.artvee.com/sftb/208407ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Hermann_Corrodi_-_Prayer_in_the_Desert_-_Google_Art_Project.jpg/640px-Hermann_Corrodi_-_Prayer_in_the_Desert_-_Google_Art_Project.jpg"

# TEMA - Son of Ishmael
try_download "tema" "Oasis Town Arabia" "Orientalist" \
    "https://mdl.artvee.com/sftb/208408ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/David_Roberts_-_Entrance_to_the_Valley_of_the_Kings.jpg/640px-David_Roberts_-_Entrance_to_the_Valley_of_the_Kings.jpg"

# JETUR - Son of Ishmael
try_download "jetur" "Nomadic Herders" "Orientalist" \
    "https://mdl.artvee.com/sftb/208409ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Bridgman_Procession_of_the_Bull_Apis.jpg/640px-Bridgman_Procession_of_the_Bull_Apis.jpg"

# NAPHISH - Son of Ishmael
try_download "naphish" "Desert Shepherds" "Orientalist" \
    "https://mdl.artvee.com/sftb/208410ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Jean-L%C3%A9on_G%C3%A9r%C3%B4me_-_The_Guard_of_the_Harem.jpg/441px-Jean-L%C3%A9on_G%C3%A9r%C3%B4me_-_The_Guard_of_the_Harem.jpg"

# KEDEMAH - Son of Ishmael
try_download "kedemah" "Eastern Desert" "Orientalist" \
    "https://mdl.artvee.com/sftb/208411ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Eugene_Alexis_Girardet_-_Caravan.jpg/640px-Eugene_Alexis_Girardet_-_Caravan.jpg"

# ===== Sons of Joktan (Arabia Felix/Yemen) =====

# JOKTAN - Son of Eber
try_download "joktan" "Ancient Arabia Felix" "Orientalist" \
    "https://mdl.artvee.com/sftb/208500ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Mar%27ib_Dam.jpg/640px-Mar%27ib_Dam.jpg"

# ALMODAD - Son of Joktan
try_download "almodad" "Ancient Yemen Landscape" "Orientalist" \
    "https://mdl.artvee.com/sftb/208501ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Old_Sana%27a_city_view.jpg/640px-Old_Sana%27a_city_view.jpg"

# SHELEPH - Son of Joktan
try_download "sheleph" "Mountain Terraces Yemen" "Landscape" \
    "https://mdl.artvee.com/sftb/208502ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Terraced_farming_Shahara_Yemen.jpg/640px-Terraced_farming_Shahara_Yemen.jpg"

# HAZARMAVETH - Son of Joktan
try_download "hazarmaveth" "Hadramaut Valley" "Orientalist" \
    "https://mdl.artvee.com/sftb/208503ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Wadi_Hadhramaut.jpg/640px-Wadi_Hadhramaut.jpg"

# JERAH - Son of Joktan
try_download "jerah" "Arabian Moon Landscape" "Orientalist" \
    "https://mdl.artvee.com/sftb/208504ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Ivan_Aivazovsky_-_The_Moonlit_Night.jpg/640px-Ivan_Aivazovsky_-_The_Moonlit_Night.jpg"

# HADORAM - Son of Joktan
try_download "hadoram" "Ancient Arabian City" "Orientalist" \
    "https://mdl.artvee.com/sftb/208505ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Sanaa_HDR_%286252654925%29.jpg/640px-Sanaa_HDR_%286252654925%29.jpg"

# UZAL - Son of Joktan
try_download "uzal" "Ancient Walled City" "Orientalist" \
    "https://mdl.artvee.com/sftb/208506ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Panoramic_view_of_Shibam_04_%289297064582%29.jpg/640px-Panoramic_view_of_Shibam_04_%289297064582%29.jpg"

# DIKLAH - Son of Joktan
try_download "diklah" "Palm Grove Arabia" "Orientalist" \
    "https://mdl.artvee.com/sftb/208507ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Jean-L%C3%A9on_G%C3%A9r%C3%B4me_-_Pool_in_a_Harem.jpg/478px-Jean-L%C3%A9on_G%C3%A9r%C3%B4me_-_Pool_in_a_Harem.jpg"

# OBAL - Son of Joktan
try_download "obal" "Arabian Mountain Pass" "Landscape" \
    "https://mdl.artvee.com/sftb/208508ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/David_Roberts_-_El_Khasn%C3%A9%2C_Petra_-_Google_Art_Project.jpg/416px-David_Roberts_-_El_Khasn%C3%A9%2C_Petra_-_Google_Art_Project.jpg"

# ABIMAEL - Son of Joktan
try_download "abimael" "Incense Road Arabia" "Orientalist" \
    "https://mdl.artvee.com/sftb/208509ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Ludwig_Hans_Fischer_-_An_Arab_Caravan.jpg/640px-Ludwig_Hans_Fischer_-_An_Arab_Caravan.jpg"

# SHEBA-J - Son of Joktan
try_download "sheba-j" "Kingdom of Sheba" "Biblical Art" \
    "https://mdl.artvee.com/sftb/208510ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Edward_Poynter_-_The_Visit_of_the_Queen_of_Sheba.jpg/640px-Edward_Poynter_-_The_Visit_of_the_Queen_of_Sheba.jpg"

# OPHIR - Son of Joktan
try_download "ophir" "Gold of Ophir" "Biblical Art" \
    "https://mdl.artvee.com/sftb/208511ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Solomon_receiving_the_Queen_of_Sheba_with_the_Ophir_gold_and_other_riches.jpg/640px-Solomon_receiving_the_Queen_of_Sheba_with_the_Ophir_gold_and_other_riches.jpg"

# HAVILAH-S - Son of Joktan (different from Havilah son of Cush)
try_download "havilah-s" "Garden of Eden Landscape" "Romantic" \
    "https://mdl.artvee.com/sftb/208512ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Cole_Thomas_The_Garden_of_Eden_1828.jpg/640px-Cole_Thomas_The_Garden_of_Eden_1828.jpg"

# JOBAB - Son of Joktan
try_download "jobab" "Ancient Arabian Fortress" "Orientalist" \
    "https://mdl.artvee.com/sftb/208513ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Carl_Haag_-_A_Halt_in_the_Desert_-_Google_Art_Project.jpg/640px-Carl_Haag_-_A_Halt_in_the_Desert_-_Google_Art_Project.jpg"

# ===== Sons of Keturah =====

# ZIMRAN - Son of Abraham by Keturah
try_download "zimran" "Arabian Merchant" "Orientalist" \
    "https://mdl.artvee.com/sftb/208600ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Jean-Leon_Gerome_-_Arnaut_Smoking.jpg/400px-Jean-Leon_Gerome_-_Arnaut_Smoking.jpg"

# JOKSHAN - Son of Abraham by Keturah
try_download "jokshan" "Arabian Traders" "Orientalist" \
    "https://mdl.artvee.com/sftb/208601ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Edwin_Lord_Weeks_-_The_Departure_of_the_Caravan.jpg/640px-Edwin_Lord_Weeks_-_The_Departure_of_the_Caravan.jpg"

# MEDAN - Son of Abraham by Keturah
try_download "medan" "Desert Trading Post" "Orientalist" \
    "https://mdl.artvee.com/sftb/208602ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Lewis_-_An_Arab_Bazaar%2C_1853-1854.jpg/640px-Lewis_-_An_Arab_Bazaar%2C_1853-1854.jpg"

# ISHBAK - Son of Abraham by Keturah
try_download "ishbak" "Arabian Tent Scene" "Orientalist" \
    "https://mdl.artvee.com/sftb/208603ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Horace_Vernet_-_The_Lion_Hunt_-_Google_Art_Project.jpg/640px-Horace_Vernet_-_The_Lion_Hunt_-_Google_Art_Project.jpg"

# SHUAH - Son of Abraham by Keturah
try_download "shuah" "Eastern Landscape" "Orientalist" \
    "https://mdl.artvee.com/sftb/208604ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/David_Roberts_-_The_Island_of_Philae%2C_Nubia_-_Google_Art_Project.jpg/640px-David_Roberts_-_The_Island_of_Philae%2C_Nubia_-_Google_Art_Project.jpg"

# ===== GROUP 3: Individual figures =====

# ER - Son of Judah
try_download "er" "Er, Son of Judah" "Bible Illustration" \
    "https://mdl.artvee.com/sftb/207161ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Nuremberg_chronicles_-_Juda_%28LXXIIv%29.jpg/440px-Nuremberg_chronicles_-_Juda_%28LXXIIv%29.jpg"

# ONAN - Son of Judah
try_download "onan" "Onan, Son of Judah" "Bible Illustration" \
    "https://mdl.artvee.com/sftb/207162ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Nuremberg_chronicles_-_Onan_%28LXXIIIr%29.jpg/440px-Nuremberg_chronicles_-_Onan_%28LXXIIIr%29.jpg"

# SHELAH-J - Son of Judah
try_download "shelah-j" "Shelah, Son of Judah" "Bible Illustration" \
    "https://mdl.artvee.com/sftb/207163ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Nuremberg_chronicles_-_Sela_%28LXXIIIr%29.jpg/440px-Nuremberg_chronicles_-_Sela_%28LXXIIIr%29.jpg"

# ZERAH - Son of Judah
try_download "zerah" "Zerah, Son of Judah" "Bible Illustration" \
    "https://mdl.artvee.com/sftb/207164ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Nuremberg_chronicles_-_Zara_%28LXXIIIr%29.jpg/440px-Nuremberg_chronicles_-_Zara_%28LXXIIIr%29.jpg"

# ELIAB - Son of Jesse
try_download "eliab" "Eliab, Son of Jesse" "Bible Illustration" \
    "https://mdl.artvee.com/sftb/207165ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Samuel_Anointing_David_-_Dura_Europos.jpg/640px-Samuel_Anointing_David_-_Dura_Europos.jpg"

# ABINADAB - Son of Jesse
try_download "abinadab" "Abinadab, Son of Jesse" "Bible Illustration" \
    "https://mdl.artvee.com/sftb/207166ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Nuremberg_chronicles_f_63r_2.png/440px-Nuremberg_chronicles_f_63r_2.png"

# SHAMMAH - Son of Jesse
try_download "shammah" "Shammah, Son of Jesse" "Bible Illustration" \
    "https://mdl.artvee.com/sftb/207167ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Nuremberg_chronicles_f_63r_3.png/440px-Nuremberg_chronicles_f_63r_3.png"

# NETHANEL-J - Son of Jesse
try_download "nethanel-j" "Warrior of Israel" "Classical Art" \
    "https://mdl.artvee.com/sftb/207168ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Gustave_Moreau_-_Samson_and_Delilah_-_Google_Art_Project.jpg/340px-Gustave_Moreau_-_Samson_and_Delilah_-_Google_Art_Project.jpg"

# RADDAI - Son of Jesse
try_download "raddai" "Shepherd of Israel" "Biblical Art" \
    "https://mdl.artvee.com/sftb/207169ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Eastman_Johnson_-_David_and_Abigail_-_Google_Art_Project.jpg/640px-Eastman_Johnson_-_David_and_Abigail_-_Google_Art_Project.jpg"

# OZEM - Son of Jesse
try_download "ozem" "Young Israelite Man" "Biblical Art" \
    "https://mdl.artvee.com/sftb/207170ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Alexandre_Cabanel_-_Ruth_Gleanings.jpg/640px-Alexandre_Cabanel_-_Ruth_Gleanings.jpg"

# ZERUIAH-J - Daughter of Jesse / sister of David
try_download "zeruiah-j" "Biblical Woman" "Classical Art" \
    "https://mdl.artvee.com/sftb/207171ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Artemisia_Gentileschi_-_Self-Portrait_as_a_Lute_Player.JPG/440px-Artemisia_Gentileschi_-_Self-Portrait_as_a_Lute_Player.JPG"

# ABIGAIL-J - Daughter of Jesse / sister of David
try_download "abigail-j" "Abigail, Sister of David" "Classical Art" \
    "https://mdl.artvee.com/sftb/207172ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Antonio_Molinari_-_The_Meeting_of_Abigail_and_David.jpg/640px-Antonio_Molinari_-_The_Meeting_of_Abigail_and_David.jpg"

# ===== Sons of Esau =====

# ELIPHAZ-E - Son of Esau
try_download "eliphaz-e" "Eliphaz, Son of Esau" "Biblical Art" \
    "https://mdl.artvee.com/sftb/207173ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Nuremberg_chronicles_-_Esau_%28XXIVr%29.jpg/440px-Nuremberg_chronicles_-_Esau_%28XXIVr%29.jpg"

# REUEL-E - Son of Esau
try_download "reuel-e" "Desert Patriarch" "Orientalist" \
    "https://mdl.artvee.com/sftb/207174ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Horace_Vernet_-_Judah_and_Tamar_-_Google_Art_Project.jpg/640px-Horace_Vernet_-_Judah_and_Tamar_-_Google_Art_Project.jpg"

# JEUSH-E - Son of Esau
try_download "jeush-e" "Edomite Warrior" "Ancient Art" \
    "https://mdl.artvee.com/sftb/207175ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Botta-Ninive_pl022-r.jpg/464px-Botta-Ninive_pl022-r.jpg"

# JALAM-E - Son of Esau
try_download "jalam-e" "Mountain People of Seir" "Orientalist" \
    "https://mdl.artvee.com/sftb/207176ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/David_Roberts_-_Lower_portion_of_El_Khasne%2C_Petra_-_Google_Art_Project.jpg/398px-David_Roberts_-_Lower_portion_of_El_Khasne%2C_Petra_-_Google_Art_Project.jpg"

# KORAH-E - Son of Esau
try_download "korah-e" "Wilderness of Edom" "Biblical Art" \
    "https://mdl.artvee.com/sftb/207177ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Frederic_Edwin_Church_-_El_Khasn%C3%A9%2C_Petra_-_Google_Art_Project.jpg/405px-Frederic_Edwin_Church_-_El_Khasn%C3%A9%2C_Petra_-_Google_Art_Project.jpg"

# BENAMMI - Father of Ammonites
try_download "benammi" "Ancient Ammon" "Archaeological" \
    "https://mdl.artvee.com/sftb/207178ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Amman_Roman_theater.jpg/640px-Amman_Roman_theater.jpg"

# ISCAH - Niece of Abraham
try_download "iscah" "Biblical Woman Iscah" "Old Master" \
    "https://mdl.artvee.com/sftb/207179ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Giorgione_-_Holy_Family_%28Benson_Madonna%29.jpg/416px-Giorgione_-_Holy_Family_%28Benson_Madonna%29.jpg"

# UZ - Son of Aram (Land of Uz/Job)
try_download "uz" "Land of Uz" "Biblical Art" \
    "https://mdl.artvee.com/sftb/207180ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/L%C3%A9on_Bonnat_-_Job.jpg/440px-L%C3%A9on_Bonnat_-_Job.jpg"

# HUL - Son of Aram
try_download "hul" "Lake Huleh Landscape" "Orientalist" \
    "https://mdl.artvee.com/sftb/207181ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Roberts%2C_David_-_The_Lake_of_Tiberias_-_1839.jpg/640px-Roberts%2C_David_-_The_Lake_of_Tiberias_-_1839.jpg"

# GETHER - Son of Aram
try_download "gether" "Mesopotamian Scene" "Orientalist" \
    "https://mdl.artvee.com/sftb/207182ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Layard_Nineveh.jpg/640px-Layard_Nineveh.jpg"

# MASH - Son of Aram
try_download "mash" "Mount Masius Landscape" "Orientalist" \
    "https://mdl.artvee.com/sftb/207183ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Frederick_Arthur_Bridgman_-_An_Interesting_Game.jpg/640px-Frederick_Arthur_Bridgman_-_An_Interesting_Game.jpg"

# LUD - Son of Shem (Lydia)
try_download "lud" "Ancient Lydia" "Classical Art" \
    "https://mdl.artvee.com/sftb/207184ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Kroisos_stake_Louvre_G197.jpg/466px-Kroisos_stake_Louvre_G197.jpg"

# IRAD - Descendant of Cain
try_download "irad" "Irad, Son of Enoch" "Bible Illustration" \
    "https://mdl.artvee.com/sftb/206267ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/John_Martin_-_The_Seventh_Plague_of_Egypt_-_Google_Art_Project.jpg/640px-John_Martin_-_The_Seventh_Plague_of_Egypt_-_Google_Art_Project.jpg"

# MEHUJAEL - Descendant of Cain
try_download "mehujael" "Ancient City Builder" "Romantic" \
    "https://mdl.artvee.com/sftb/206268ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Cole_Thomas_The_Course_of_Empire_Consummation_1836.jpg/640px-Cole_Thomas_The_Course_of_Empire_Consummation_1836.jpg"

# METHUSHAEL - Descendant of Cain
try_download "methushael" "Ancient Patriarch" "Bible Illustration" \
    "https://mdl.artvee.com/sftb/206269ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Cole_Thomas_The_Course_of_Empire_Destruction_1836.jpg/640px-Cole_Thomas_The_Course_of_Empire_Destruction_1836.jpg"

# JABAL - Son of Lamech (father of tent-dwellers)
try_download "jabal" "Jabal, Father of Tent-Dwellers" "Old Master" \
    "https://mdl.artvee.com/sftb/206270ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Rosa_Bonheur_-_Shepherd_in_the_Pyrenees_-_Google_Art_Project.jpg/640px-Rosa_Bonheur_-_Shepherd_in_the_Pyrenees_-_Google_Art_Project.jpg"

# JUBAL - Son of Lamech (father of musicians)
try_download "jubal" "Jubal, Father of Musicians" "Old Master" \
    "https://mdl.artvee.com/sftb/206271ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Jan_van_Eyck_-_The_Ghent_Altarpiece_-_Angels_Playing_Music_-_WGA07643.jpg/440px-Jan_van_Eyck_-_The_Ghent_Altarpiece_-_Angels_Playing_Music_-_WGA07643.jpg"

# TUBALCAIN - Son of Lamech (metalworker)
try_download "tubalcain" "Tubal-cain the Smith" "Old Master" \
    "https://mdl.artvee.com/sftb/206272ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Meister_der_Weltenchronik_001.jpg/440px-Meister_der_Weltenchronik_001.jpg"

# NAAMAH - Daughter of Lamech
try_download "naamah" "Naamah, Daughter of Lamech" "Classical Art" \
    "https://mdl.artvee.com/sftb/206273ld.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Dante_Gabriel_Rossetti_-_The_Beloved_%28The_Bride%29_-_Google_Art_Project.jpg/391px-Dante_Gabriel_Rossetti_-_The_Beloved_%28The_Bride%29_-_Google_Art_Project.jpg"

echo ""
echo "========================================="
echo "Download complete!"
echo "Total: $TOTAL | OK: $OK | MISS: $MISS"
echo "========================================="
echo ""

# Check for any remaining files < 5000 bytes
echo "Checking for invalid files (< 5000 bytes):"
for f in "$ART_DIR"/*.jpg; do
    size=$(stat -f%z "$f" 2>/dev/null || stat -c%s "$f" 2>/dev/null)
    if [ "$size" -lt 5000 ] 2>/dev/null; then
        echo "  INVALID: $(basename $f) — $size bytes"
    fi
done

# Verify no duplicates by checking md5
echo ""
echo "Checking for duplicate images:"
cd "$ART_DIR"
md5 -r *.jpg 2>/dev/null | sort | awk '{print $1}' | uniq -d | while read hash; do
    echo "  DUPLICATE hash $hash:"
    md5 -r *.jpg 2>/dev/null | grep "$hash" | awk '{print "    " $2}'
done
echo "Done."
