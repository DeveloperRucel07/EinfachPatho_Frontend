export const DB = [

    /* ===================================================== */
    /* ===================== INFLUENZA ===================== */
    /* ===================================================== */

    {
        "disease_id": "IN-2026-001",
        "name": "Influenza (Grippe)",
        "category": "Infektiologie / Allgemeinmedizin",
        "durst_data": {
            "definition": "Die Influenza ist eine akut verlaufende, hochansteckende Virusinfektion der Atemwege, verursacht durch Influenza-A- oder Influenza-B-Viren.",
            "ursachen": {
                "text": "Übertragung hauptsächlich durch Tröpfcheninfektion; das Virus befällt die Schleimhäute der Atemwege.",
                "keywords": ["Influenza-Virus", "Tröpfcheninfektion", "Atemwege"]
            },
            "risikofaktoren": [
                "Hohes Alter",
                "Chronische Erkrankungen",
                "Immunsuppression",
                "Schwangerschaft",
                "Fehlende Impfung"
            ],
            "symptome": {
                "list": [
                    "Plötzlicher Krankheitsbeginn",
                    "Hohes Fieber",
                    "Trockener Husten",
                    "Kopf- und Gliederschmerzen",
                    "Starke Müdigkeit"
                ],
                "red_flags": "Atemnot, anhaltend hohes Fieber, Bewusstseinsstörung"
            },
            "therapie_massnahmen": {
                "immediate_actions": [
                    "Bettruhe",
                    "Flüssigkeitszufuhr",
                    "Fiebersenkende Maßnahmen",
                    "Isolation"
                ],
                "diagnostic_gold_standard": "PCR-Nachweis aus Nasen-/Rachenabstrich",
                "guideline_link": "https://register.awmf.org/de/leitlinien/detail/113-001"
            }
        },
        "quiz": [
            { "id": 1, "question": "Wie wird Influenza hauptsächlich übertragen?", "options": ["Kontaktinfektion", "Tröpfcheninfektion", "Blutkontakt", "Lebensmittel"], "correct_index": 1, "explanation": "Influenza wird vor allem durch Husten, Niesen und Sprechen übertragen." },
            { "id": 2, "question": "Welcher Erreger verursacht die echte Grippe?", "options": ["Bakterien", "Pilze", "Influenzaviren", "Parasiten"], "correct_index": 2, "explanation": "Die Influenza wird durch Influenza-A- oder B-Viren ausgelöst." },
            { "id": 3, "question": "Was ist typisch für den Beginn einer Influenza?", "options": ["Langsamer Beginn", "Plötzlicher Beginn", "Nur Durchfall", "Nur Hautausschlag"], "correct_index": 1, "explanation": "Die Influenza beginnt meist abrupt mit Fieber und starkem Krankheitsgefühl." },
            { "id": 4, "question": "Welche Personengruppe hat ein besonders hohes Risiko?", "options": ["Jugendliche", "Sportler", "Schwangere", "Gesunde Erwachsene"], "correct_index": 2, "explanation": "Schwangere und chronisch Kranke haben ein erhöhtes Komplikationsrisiko." },
            { "id": 5, "question": "Welche Maßnahme schützt am besten?", "options": ["Antibiotika", "Impfung", "Vitamin C", "Isolierung nur bei Symptomen"], "correct_index": 1, "explanation": "Die jährliche Grippeimpfung ist der effektivste Schutz." }
        ],
        "sources": [
            { "source_name": "RKI Influenza", "link": "https://www.rki.de" }
        ]
    },

    /* ===================== DIABETES TYP 2 ===================== */

    {
        "disease_id": "DM-2026-002",
        "name": "Diabetes mellitus Typ 2",
        "category": "Endokrinologie / Innere Medizin",
        "durst_data": {
            "definition": "Chronische Stoffwechselerkrankung mit Insulinresistenz und dauerhaft erhöhtem Blutzucker.",
            "ursachen": {
                "text": "Kombination aus genetischer Veranlagung, Insulinresistenz und Lebensstilfaktoren.",
                "keywords": ["Insulinresistenz", "Hyperglykämie", "Stoffwechsel"]
            },
            "risikofaktoren": [
                "Adipositas",
                "Bewegungsmangel",
                "Ungesunde Ernährung",
                "Genetische Prädisposition",
                "Hohes Alter"
            ],
            "symptome": {
                "list": [
                    "Vermehrter Durst",
                    "Häufiges Wasserlassen",
                    "Müdigkeit",
                    "Sehstörungen",
                    "Infektanfälligkeit"
                ],
                "red_flags": "Bewusstseinsstörung, Azetongeruch, sehr hohe Blutzuckerwerte"
            },
            "therapie_massnahmen": {
                "immediate_actions": [
                    "Blutzuckermessung",
                    "Ernährungsanpassung",
                    "Bewegungstherapie",
                    "Medikamentöse Therapie"
                ],
                "diagnostic_gold_standard": "HbA1c und Nüchternblutzucker",
                "guideline_link": "https://register.awmf.org/de/leitlinien/detail/057-001"
            }
        },
        "quiz": [
            { "id": 1, "question": "Was ist die Hauptursache von Typ-2-Diabetes?", "options": ["Insulinmangel", "Autoimmunerkrankung", "Insulinresistenz", "Infektion"], "correct_index": 2, "explanation": "Der Körper reagiert nicht mehr ausreichend auf Insulin." },
            { "id": 2, "question": "Welcher Wert zeigt die Langzeiteinstellung?", "options": ["CRP", "HbA1c", "Kalium", "Cholesterin"], "correct_index": 1, "explanation": "HbA1c spiegelt den mittleren Blutzucker der letzten Wochen wider." },
            { "id": 3, "question": "Welches Symptom ist typisch?", "options": ["Durst", "Husten", "Fieber", "Hautausschlag"], "correct_index": 0, "explanation": "Polydipsie ist ein klassisches Diabetes-Symptom." },
            { "id": 4, "question": "Wichtigste nicht-medikamentöse Therapie?", "options": ["Bettruhe", "Bewegung", "Sauerstoff", "Antibiotika"], "correct_index": 1, "explanation": "Bewegung verbessert die Insulinempfindlichkeit." },
            { "id": 5, "question": "Welche Folgeerkrankung ist typisch?", "options": ["Demenz", "Retinopathie", "Asthma", "Epilepsie"], "correct_index": 1, "explanation": "Langfristig kann es zu Gefäß- und Augenschäden kommen." }
        ],
        "sources": [
            { "source_name": "Deutsche Diabetes Gesellschaft", "link": "https://www.ddg.info" }
        ]
    },

    /* ===================== ASTHMA ===================== */

    {
        "disease_id": "AS-2026-003",
        "name": "Asthma bronchiale",
        "category": "Pneumologie",
        "durst_data": {
            "definition": "Chronisch-entzündliche Erkrankung der Atemwege mit anfallsweiser Atemnot.",
            "ursachen": {
                "text": "Überempfindlichkeit der Bronchien gegenüber Reizen.",
                "keywords": ["Bronchokonstriktion", "Entzündung", "Allergie"]
            },
            "risikofaktoren": ["Allergien", "Genetik", "Rauchen", "Luftverschmutzung"],
            "symptome": {
                "list": ["Atemnot", "Pfeifende Atmung", "Husten", "Brustenge"],
                "red_flags": "Zyanose, Erschöpfung, Sprechunfähigkeit"
            },
            "therapie_massnahmen": {
                "immediate_actions": ["Inhalation", "Aufrechte Lagerung", "Notfallplan"],
                "diagnostic_gold_standard": "Spirometrie",
                "guideline_link": "https://register.awmf.org/de/leitlinien/detail/020-009"
            }
        },
        "quiz": [
            { "id": 1, "question": "Was verursacht die Atemnot?", "options": ["Alveolenkollaps", "Bronchienverengung", "Herzstillstand", "Infektion"], "correct_index": 1, "explanation": "Die Bronchien verengen sich krampfartig." },
            { "id": 2, "question": "Typisches Atemgeräusch?", "options": ["Rasseln", "Pfeifen", "Gurgeln", "Klicken"], "correct_index": 1, "explanation": "Pfeifende Atmung ist typisch." },
            { "id": 3, "question": "Wichtigste Akutmedikation?", "options": ["Antibiotika", "Kortison", "Beta-2-Sympathomimetika", "Opiate"], "correct_index": 2, "explanation": "Sie erweitern schnell die Bronchien." },
            { "id": 4, "question": "Wichtige Lagerung?", "options": ["Flach", "Trendelenburg", "Aufrecht", "Seitenlage"], "correct_index": 2, "explanation": "Aufrechte Haltung erleichtert die Atmung." },
            { "id": 5, "question": "Asthma ist meist…", "options": ["heilbar", "infektiös", "chronisch", "einmalig"], "correct_index": 2, "explanation": "Asthma ist eine chronische Erkrankung." }
        ],
        "sources": [{ "source_name": "AWMF Asthma Leitlinie", "link": "https://register.awmf.org" }]
    },

    /* ===================== HYPERTONIE ===================== */

    {
        "disease_id": "HT-2026-004",
        "name": "Arterielle Hypertonie",
        "category": "Kardiologie",
        "durst_data": {
            "definition": "Chronisch erhöhter arterieller Blutdruck.",
            "ursachen": { "text": "Meist multifaktoriell.", "keywords": ["Blutdruck", "Gefäßwiderstand"] },
            "risikofaktoren": ["Adipositas", "Stress", "Salz", "Bewegungsmangel"],
            "symptome": { "list": ["Kopfschmerz", "Schwindel", "Nasenbluten"], "red_flags": "Hypertensive Krise" },
            "therapie_massnahmen": {
                "immediate_actions": ["Blutdruckkontrolle", "Lebensstiländerung", "Medikamente"],
                "diagnostic_gold_standard": "Langzeitmessung",
                "guideline_link": "https://register.awmf.org"
            }
        },
        "quiz": [
            { "id": 1, "question": "Ab wann Hypertonie?", "options": ["120/80", "130/85", "140/90", "100/60"], "correct_index": 2, "explanation": "≥140/90 mmHg." },
            { "id": 2, "question": "Welches Organ ist besonders gefährdet?", "options": ["Haut", "Gehirn", "Milz", "Magen"], "correct_index": 1, "explanation": "Schlaganfallrisiko steigt stark." },
            { "id": 3, "question": "Wichtigste Prävention?", "options": ["Rauchen", "Bewegung", "Salz", "Alkohol"], "correct_index": 1, "explanation": "Bewegung senkt den Blutdruck." },
            { "id": 4, "question": "Hypertonie ist oft…", "options": ["schmerzhaft", "symptomlos", "fieberhaft", "infektiös"], "correct_index": 1, "explanation": "Viele Betroffene merken nichts." },
            { "id": 5, "question": "Langzeitfolge?", "options": ["Asthma", "Nierenversagen", "Migräne", "Anämie"], "correct_index": 1, "explanation": "Gefäßschäden betreffen auch die Nieren." }
        ],
        "sources": [{ "source_name": "Deutsche Hochdruckliga", "link": "https://www.hochdruckliga.de" }]
    },

    /* ===================== PNEUMONIE ===================== */

    {
        "disease_id": "PN-2026-005",
        "name": "Pneumonie",
        "category": "Pneumologie / Infektiologie",
        "durst_data": {
            "definition": "Akute Entzündung des Lungengewebes.",
            "ursachen": { "text": "Bakteriell, viral oder mykotisch.", "keywords": ["Infektion", "Alveolen"] },
            "risikofaktoren": ["Hohes Alter", "Immunschwäche", "Rauchen"],
            "symptome": { "list": ["Fieber", "Husten", "Atemnot"], "red_flags": "Zyanose, Verwirrtheit" },
            "therapie_massnahmen": {
                "immediate_actions": ["Sauerstoff", "Antibiotika", "Überwachung"],
                "diagnostic_gold_standard": "Röntgen-Thorax",
                "guideline_link": "https://register.awmf.org"
            }
        },
        "quiz": [
            { "id": 1, "question": "Was bestätigt die Diagnose?", "options": ["EKG", "Röntgen", "EEG", "MRT Knie"], "correct_index": 1, "explanation": "Infiltrate im Röntgenbild." },
            { "id": 2, "question": "Häufigster Erreger?", "options": ["Pilze", "Bakterien", "Parasiten", "Würmer"], "correct_index": 1, "explanation": "Pneumokokken sind häufig." },
            { "id": 3, "question": "Typisches Symptom?", "options": ["Brustschmerz", "Durchfall", "Sehverlust", "Hautausschlag"], "correct_index": 0, "explanation": "Pleuritischer Schmerz ist typisch." },
            { "id": 4, "question": "Wichtige Akutmaßnahme?", "options": ["Insulin", "Sauerstoff", "Dialyse", "Sedierung"], "correct_index": 1, "explanation": "Verbessert die Oxygenierung." },
            { "id": 5, "question": "Risikogruppe?", "options": ["Kinder", "Ältere Menschen", "Sportler", "Vegetarier"], "correct_index": 1, "explanation": "Ältere haben höheres Risiko." }
        ],
        "sources": [{ "source_name": "AWMF Pneumonie Leitlinie", "link": "https://register.awmf.org" }]
    }

];
