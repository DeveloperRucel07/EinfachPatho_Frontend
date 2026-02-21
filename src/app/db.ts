export const DB = [

    {
        "disease_id": "AP-2026-004",
        "name": "Apoplex (Schlaganfall)",
        "image": "https://googleusercontent.com/image_generation_content/3",
        "category": "Notfallmedizin / Neurologie",
        "durst_data": {
            "definition": "Ein Apoplex ist eine schlagartig auftretende Durchblutungsstörung im Gehirn (ischämisch, ca. 80 %) oder eine intrazerebrale Blutung (hämorrhagisch, ca. 20 %), die zu einem regionalen Mangel an Sauerstoff und Nährstoffen sowie konsekutiven neurologischen Ausfällen führt.",
            "ursachen": {
                "text": "Häufigste Ursache ist der Verschluss einer Hirnarterie durch Thromboembolien (oft bei Vorhofflimmern) oder lokale Arteriosklerose. Seltener sind Gefäßrupturen bei Hypertonie.",
                "keywords": [
                    "Ischämie",
                    "Thromboembolie",
                    "Arteriosklerose",
                    "Vorhofflimmern"
                ]
            },
            "risikofaktoren": [
                "Arterielle Hypertonie (Bluthochdruck) - wichtigster Faktor",
                "Vorhofflimmern (Herzrhythmusstörungen)",
                "Diabetes mellitus",
                "Rauchen und Bewegungsmangel",
                "Hohes Alter"
            ],
            "symptome": {
                "list": [
                    "Plötzliche Hemiparese (halbseitige Lähmung) oder Taubheitsgefühl",
                    "Aphasie (Sprachstörungen) oder Dysarthrie (Sprechstörungen)",
                    "Fazialisparese (hängender Mundwinkel)",
                    "Visusstörungen (Doppelbilder, Gesichtsfeldausfälle)",
                    "Schwindel und Gangunsicherheit"
                ],
                "red_flags": "FAST-Schema positiv (Face, Arms, Speech, Time), Bewusstseinsverlust, stärkste Vernichtungskopfschmerzen (Hinweis auf Blutung)"
            },
            "therapie_massnahmen": {
                "immediate_actions": [
                    "Sofortiger Notruf (112) - 'Time is Brain'",
                    "Oberkörperhochlagerung um 30° (zur Senkung des Hirndrucks, sofern kreislaufstabil)",
                    "Nüchtern lassen (Aspirationsgefahr bei Schluckstörungen!)",
                    "Engmaschige Überwachung (Bewusstsein, Blutdruck, Blutzucker)",
                    "Beruhigende Betreuung und Schutz gelähmter Körperteile"
                ],
                "diagnostic_gold_standard": "Cranial-CT (CCT) zum Ausschluss einer Blutung vor Lyse-Therapie",
                "guideline_link": "https://register.awmf.org/de/leitlinien/detail/030-046"
            }
        },
        "quiz": [
            {
                "id": 1,
                "question": "Wofür steht das 'S' im klinisch angewandten FAST-Schema?",
                "options": [
                    "Schmerz (Pain)",
                    "Sprache (Speech)",
                    "Schwindel (Dizziness)",
                    "Sehstörung (Vision)"
                ],
                "correct_index": 1,
                "explanation": "FAST steht für Face (Gesicht), Arms (Arme), Speech (Sprache) und Time (Zeit). Es dient der schnellen Identifikation von Schlaganfallsymptomen."
            },
            {
                "id": 2,
                "question": "Warum dürfen Patienten mit Schlaganfallverdacht bis zur ärztlichen Klärung nichts essen oder trinken?",
                "options": [
                    "Wegen der anstehenden Operation.",
                    "Um den Blutdruck nicht zu erhöhen.",
                    "Wegen der hohen Aspirationsgefahr durch mögliche Schluckstörungen (Dysphagie).",
                    "Damit die Labortests nicht verfälscht werden."
                ],
                "correct_index": 2,
                "explanation": "Viele Schlaganfallpatienten leiden unter Schluckstörungen. Eine Aspiration kann eine lebensgefährliche Pneumonie auslösen."
            },
            {
                "id": 3,
                "question": "Welches ist die wichtigste pflegerische Maßnahme zur Senkung des intrakraniellen Drucks?",
                "options": [
                    "Flachlagerung ohne Kissen.",
                    "Oberkörperhochlagerung um ca. 30 Grad.",
                    "Beine hochlagern (Schocklagerung).",
                    "Lagerung auf der betroffenen Seite."
                ],
                "correct_index": 1,
                "explanation": "Die 30°-Oberkörperhochlagerung verbessert den venösen Abfluss aus dem Gehirn und reduziert so den Hirndruck."
            },
            {
                "id": 4,
                "question": "Innerhalb welches Zeitfensters ist eine systemische Thrombolyse meist effektiv?",
                "options": [
                    "Innerhalb der ersten 4,5 Stunden nach Symptombeginn.",
                    "Nur in den ersten 30 Minuten.",
                    "Bis zu 24 Stunden nach Symptombeginn.",
                    "Es gibt kein Zeitlimit."
                ],
                "correct_index": 0,
                "explanation": "Die systemische Lyse zur Auflösung des Gerinnsels ist leitliniengemäß meist bis zu 4,5 Stunden nach dem Symptombeginn wirksam."
            },
            {
                "id": 5,
                "question": "Welche Herzrhythmusstörung ist ein Hauptrisikofaktor für ischämische Schlaganfälle?",
                "options": [
                    "Sinusbradykardie",
                    "Extrasystolen",
                    "Vorhofflimmern",
                    "Rechtsschenkelblock"
                ],
                "correct_index": 2,
                "explanation": "Bei Vorhofflimmern können sich Thromben im Herzen bilden, die ins Gehirn wandern und dort Gefäße verschließen."
            }
        ],
        "sources": [
            {
                "source_name": "AWMF S2e-Leitlinie Akuttherapie des ischämischen Schlaganfalls",
                "link": "https://register.awmf.org/de/leitlinien/detail/030-046"
            },
            {
                "source_name": "Pschyrembel Online - Apoplex",
                "link": "https://www.pschyrembel.de/Apoplex/K02G8"
            },
            {
                "source_name": "I care Pflege - Thieme Verlag",
                "link": "https://www.thieme.de/de/pflege/i-care-pflege-150352.htm"
            }
        ]
    },
    {
        "disease_id": "MI-2026-005",
        "name": "Myokardinfarkt (Herzinfarkt)",
        "image": "https://googleusercontent.com/image_generation_content/4",
        "category": "Notfallmedizin / Kardiologie",
        "durst_data": {
            "definition": "Ein Myokardinfarkt ist das Absterben (Nekrose) von Herzmuskelgewebe infolge einer kritischen Minderdurchblutung (Ischämie). Dies wird meist durch einen akuten Verschluss einer Koronararterie (Herzkranzgefäß) verursacht.",
            "ursachen": {
                "text": "Hauptursache ist eine Plaque-Ruptur in einem arteriosklerotisch veränderten Herzkranzgefäß, die zur sofortigen Thrombusbildung führt. Dadurch wird die Sauerstoffversorgung des nachfolgenden Herzmuskelareals unterbrochen.",
                "keywords": [
                    "Plaque-Ruptur",
                    "Koronarthrombose",
                    "Ischämie",
                    "Nekrose"
                ]
            },
            "risikofaktoren": [
                "Arterielle Hypertonie (Bluthochdruck)",
                "Diabetes mellitus",
                "Hypercholesterinämie (hohe Blutfettwerte)",
                "Nikotinabusus (Rauchen)",
                "Positive Familienanamnese (genetische Veranlagung)"
            ],
            "symptome": {
                "list": [
                    "Akuter, retrosternaler Schmerz (hinter dem Brustbein)",
                    "Ausstrahlung in den linken Arm, Kiefer, Hals oder Oberbauch",
                    "Massives Engegefühl ('Elefant auf der Brust')",
                    "Kaltschweißigkeit und blasse Haut (Schocksymptomatik)",
                    "Todesangst"
                ],
                "red_flags": "Stummer Infarkt (schmerzfrei, oft bei Diabetikern), kardiogener Schock, lebensgefährliche Herzrhythmusstörungen (Kammerflimmern)."
            },
            "therapie_massnahmen": {
                "immediate_actions": [
                    "Sofortiger Notruf (112) absetzen",
                    "Herzbetttlagerung (Oberkörper hoch, Beine tief) zur Entlastung des Herzens",
                    "Absolute körperliche Ruhe (keine unnötige Bewegung)",
                    "Sauerstoffgabe (bei Sättigung < 90%)",
                    "Psychische Betreuung ('Keep Calm') zur Senkung des Adrenalinspiegels"
                ],
                "diagnostic_gold_standard": "12-Kanal-EKG (Nachweis von ST-Hebungen) und Labor (Troponin-Anstieg)",
                "guideline_link": "https://register.awmf.org/de/leitlinien/detail/030-120"
            }
        },
        "quiz": [
            {
                "id": 1,
                "question": "Welche Lagerung ist bei einem kreislaufstabilen Infarktpatienten zur Herzentlastung indiziert?",
                "options": [
                    "Flachlagerung ohne Kopfkissen",
                    "Schocklagerung (Beine hoch)",
                    "Oberkörperhochlagerung (Herzbetttlagerung)",
                    "Stabile Seitenlage"
                ],
                "correct_index": 2,
                "explanation": "Durch das Hochlagern des Oberkörpers bei gleichzeitig tiefen Beinen wird der venöse Rückstrom zum Herzen vermindert (Vorlastsenkung), was das Herz entlastet."
            },
            {
                "id": 2,
                "question": "Warum leiden Menschen mit Diabetes mellitus häufig unter einem 'stummen' Infarkt?",
                "options": [
                    "Weil ihr Schmerzempfinden durch Zucker betäubt ist.",
                    "Aufgrund einer diabetischen Polyneuropathie (Nervenschädigung).",
                    "Weil das Herz bei Diabetikern weniger Nerven hat.",
                    "Da sie Schmerzmittel gegen den Diabetes einnehmen."
                ],
                "correct_index": 1,
                "explanation": "Die diabetische Neuropathie schädigt die autonomen Nerven, die Schmerzsignale vom Herzen zum Gehirn leiten. Dadurch fehlt das Warnsignal Brustschmerz."
            },
            {
                "id": 3,
                "question": "Welcher Laborwert gilt als hochspezifisch für den Nachweis einer Herzmuskelschädigung?",
                "options": [
                    "Blutzucker",
                    "Leukozyten",
                    "Kreatinin",
                    "Troponin"
                ],
                "correct_index": 3,
                "explanation": "Troponin ist ein Protein des Herzmuskels, das bei einer Zellschädigung (Infarkt) ins Blut freigesetzt wird und dort präzise gemessen werden kann."
            },
            {
                "id": 4,
                "question": "Was ist das primäre Ziel der 'menschlichen' Betreuung (Beruhigung) beim Infarkt?",
                "options": [
                    "Den Patienten vom Telefonieren abzuhalten.",
                    "Senkung des Adrenalinspiegels zur Reduktion des Sauerstoffverbrauchs.",
                    "Zeitgewinn, bis der Notarzt eintrifft.",
                    "Vermeidung von lautem Geschrei auf der Station."
                ],
                "correct_index": 1,
                "explanation": "Angst schüttet Stresshormone aus, die den Puls und Blutdruck erhöhen. Das steigert den Sauerstoffbedarf des Herzens und vergrößert das Infarktareal."
            },
            {
                "id": 5,
                "question": "Wie lautet der medizinische Leitsatz für die Dringlichkeit bei einem Herzinfarkt?",
                "options": [
                    "Time is Brain",
                    "Wait and See",
                    "Time is Muscle",
                    "Check and Go"
                ],
                "correct_index": 2,
                "explanation": "'Time is Muscle' bedeutet: Je schneller das Gefäß wieder eröffnet wird (z.B. Herzkatheter), desto mehr Herzmuskelgewebe kann gerettet werden."
            }
        ],
        "sources": [
            {
                "source_name": "AWMF S3-Leitlinie Infarkt-Management",
                "link": "https://register.awmf.org/de/leitlinien/detail/030-120"
            },
            {
                "source_name": "I care Pflege - Thieme Verlag",
                "link": "https://www.thieme.de/de/pflege/i-care-pflege-150352.html"
            }
        ]
    }

];
