const languages = [
    { code: 'ab', name: 'Abkhazian' },
    { code: 'aa', name: 'Afar' },
    { code: 'af', name: 'Afrikaans' },
    { code: 'ak', name: 'Akan' },
    { code: 'sq', name: 'Albanian' },
    { code: 'am', name: 'Amharic' },
    { code: 'ar', name: 'Arabic' },
    { code: 'an', name: 'Aragonese' },
    { code: 'hy', name: 'Armenian' },
    { code: 'as', name: 'Assamese' },
    { code: 'av', name: 'Avaric' },
    { code: 'ae', name: 'Avestan' },
    { code: 'ay', name: 'Aymara' },
    { code: 'az', name: 'Azerbaijani' },
    { code: 'bm', name: 'Bambara' },
    { code: 'ba', name: 'Bashkir' },
    { code: 'eu', name: 'Basque' },
    { code: 'be', name: 'Belarusian' },
    { code: 'bn', name: 'Bengali' },
    { code: 'bh', name: 'Bihari languages' },
    { code: 'bi', name: 'Bislama' },
    { code: 'bs', name: 'Bosnian' },
    { code: 'br', name: 'Breton' },
    { code: 'bg', name: 'Bulgarian' },
    { code: 'my', name: 'Burmese' },
    { code: 'ca', name: 'Catalan, Valencian' },
    { code: 'km', name: 'Central Khmer' },
    { code: 'ch', name: 'Chamorro' },
    { code: 'ce', name: 'Chechen' },
    { code: 'ny', name: 'Chichewa, Chewa, Nyanja' },
    { code: 'zh', name: 'Chinese' },
    { code: 'cu', name: 'Church Slavonic, Old Bulgarian, Old Church Slavonic' },
    { code: 'cv', name: 'Chuvash' },
    { code: 'kw', name: 'Cornish' },
    { code: 'co', name: 'Corsican' },
    { code: 'cr', name: 'Cree' },
    { code: 'hr', name: 'Croatian' },
    { code: 'cs', name: 'Czech' },
    { code: 'da', name: 'Danish' },
    { code: 'dv', name: 'Divehi, Dhivehi, Maldivian' },
    { code: 'nl', name: 'Dutch, Flemish' },
    { code: 'dz', name: 'Dzongkha' },
    { code: 'en', name: 'English' },
    { code: 'eo', name: 'Esperanto' },
    { code: 'et', name: 'Estonian' },
    { code: 'ee', name: 'Ewe' },
    { code: 'fo', name: 'Faroese' },
    { code: 'fj', name: 'Fijian' },
    { code: 'fi', name: 'Finnish' },
    { code: 'fr', name: 'French' },
    { code: 'ff', name: 'Fulah' },
    { code: 'gd', name: 'Gaelic, Scottish Gaelic' },
    { code: 'gl', name: 'Galician' },
    { code: 'lg', name: 'Ganda' },
    { code: 'ka', name: 'Georgian' },
    { code: 'de', name: 'German' },
    { code: 'ki', name: 'Gikuyu, Kikuyu' },
    { code: 'el', name: 'Greek (Modern)' },
    { code: 'kl', name: 'Greenlandic, Kalaallisut' },
    { code: 'gn', name: 'Guarani' },
    { code: 'gu', name: 'Gujarati' },
    { code: 'ht', name: 'Haitian, Haitian Creole' },
    { code: 'ha', name: 'Hausa' },
    { code: 'he', name: 'Hebrew' },
    { code: 'hz', name: 'Herero' },
    { code: 'hi', name: 'Hindi' },
    { code: 'ho', name: 'Hiri Motu' },
    { code: 'hu', name: 'Hungarian' },
    { code: 'is', name: 'Icelandic' },
    { code: 'io', name: 'Ido' },
    { code: 'ig', name: 'Igbo' },
    { code: 'id', name: 'Indonesian' },
    // { code: 'ia', name: 'Interlingua (International Auxiliary Language Association)' },
    { code: 'ie', name: 'Interlingue' },
    { code: 'iu', name: 'Inuktitut' },
    { code: 'ik', name: 'Inupiaq' },
    { code: 'ga', name: 'Irish' },
    { code: 'it', name: 'Italian' },
    { code: 'jp', name: 'Japanese' },
    { code: 'jv', name: 'Javanese' },
    { code: 'kn', name: 'Kannada' },
    { code: 'kr', name: 'Kanuri' },
    { code: 'ks', name: 'Kashmiri' },
    { code: 'kk', name: 'Kazakh' },
    { code: 'rw', name: 'Kinyarwanda' },
    { code: 'kv', name: 'Komi' },
    { code: 'kg', name: 'Kongo' },
    { code: 'ko', name: 'Korean' },
    { code: 'kj', name: 'Kwanyama, Kuanyama' },
    { code: 'ku', name: 'Kurdish' },
    { code: 'ky', name: 'Kyrgyz' },
    { code: 'lo', name: 'Lao' },
    { code: 'la', name: 'Latin' },
    { code: 'lv', name: 'Latvian' },
    { code: 'lb', name: 'Letzeburgesch, Luxembourgish' },
    { code: 'li', name: 'Limburgish, Limburgan, Limburger' },
    { code: 'ln', name: 'Lingala' },
    { code: 'lt', name: 'Lithuanian' },
    { code: 'lu', name: 'Luba-Katanga' },
    { code: 'mk', name: 'Macedonian' },
    { code: 'mg', name: 'Malagasy' },
    { code: 'ms', name: 'Malay' },
    { code: 'ml', name: 'Malayalam' },
    { code: 'mt', name: 'Maltese' },
    { code: 'gv', name: 'Manx' },
    { code: 'mi', name: 'Maori' },
    { code: 'mr', name: 'Marathi' },
    { code: 'mh', name: 'Marshallese' },
    { code: 'ro', name: 'Moldovan, Moldavian, Romanian' },
    { code: 'mn', name: 'Mongolian' },
    { code: 'na', name: 'Nauru' },
    { code: 'nv', name: 'Navajo, Navaho' },
    { code: 'nd', name: 'Northern Ndebele' },
    { code: 'ng', name: 'Ndonga' },
    { code: 'ne', name: 'Nepali' },
    { code: 'se', name: 'Northern Sami' },
    { code: 'no', name: 'Norwegian' },
    { code: 'nb', name: 'Norwegian Bokmål' },
    { code: 'nn', name: 'Norwegian Nynorsk' },
    { code: 'ii', name: 'Nuosu, Sichuan Yi' },
    { code: 'oc', name: 'Occitan (post 1500)' },
    { code: 'oj', name: 'Ojibwa' },
    { code: 'or', name: 'Oriya' },
    { code: 'om', name: 'Oromo' },
    { code: 'os', name: 'Ossetian, Ossetic' },
    { code: 'pi', name: 'Pali' },
    { code: 'pa', name: 'Panjabi, Punjabi' },
    { code: 'ps', name: 'Pashto, Pushto' },
    { code: 'fa', name: 'Persian' },
    { code: 'pl', name: 'Polish' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'qu', name: 'Quechua' },
    { code: 'rm', name: 'Romansh' },
    { code: 'rn', name: 'Rundi' },
    { code: 'ru', name: 'Russian' },
    { code: 'sm', name: 'Samoan' },
    { code: 'sg', name: 'Sango' },
    { code: 'sa', name: 'Sanskrit' },
    { code: 'sc', name: 'Sardinian' },
    { code: 'sr', name: 'Serbian' },
    { code: 'sn', name: 'Shona' },
    { code: 'sd', name: 'Sindhi' },
    { code: 'si', name: 'Sinhala, Sinhalese' },
    { code: 'sk', name: 'Slovak' },
    { code: 'sl', name: 'Slovenian' },
    { code: 'so', name: 'Somali' },
    { code: 'st', name: 'Sotho, Southern' },
    { code: 'nr', name: 'South Ndebele' },
    { code: 'es', name: 'Spanish, Castilian' },
    { code: 'su', name: 'Sundanese' },
    { code: 'sw', name: 'Swahili' },
    { code: 'ss', name: 'Swati' },
    { code: 'sv', name: 'Swedish' },
    { code: 'tl', name: 'Tagalog' },
    { code: 'ty', name: 'Tahitian' },
    { code: 'tg', name: 'Tajik' },
    { code: 'ta', name: 'Tamil' },
    { code: 'tt', name: 'Tatar' },
    { code: 'te', name: 'Telugu' },
    { code: 'th', name: 'Thai' },
    { code: 'bo', name: 'Tibetan' },
    { code: 'ti', name: 'Tigrinya' },
    { code: 'to', name: 'Tonga (Tonga Islands)' },
    { code: 'ts', name: 'Tsonga' },
    { code: 'tn', name: 'Tswana' },
    { code: 'tr', name: 'Turkish' },
    { code: 'tk', name: 'Turkmen' },
    { code: 'tw', name: 'Twi' },
    { code: 'ug', name: 'Uighur, Uyghur' },
    { code: 'uk', name: 'Ukrainian' },
    { code: 'ur', name: 'Urdu' },
    { code: 'uz', name: 'Uzbek' },
    { code: 've', name: 'Venda' },
    { code: 'vi', name: 'Vietnamese' },
    { code: 'vo', name: 'Volap_k' },
    { code: 'wa', name: 'Walloon' },
    { code: 'cy', name: 'Welsh' },
    { code: 'fy', name: 'Western Frisian' },
    { code: 'wo', name: 'Wolof' },
    { code: 'xh', name: 'Xhosa' },
    { code: 'yi', name: 'Yiddish' },
    { code: 'yo', name: 'Yoruba' },
    { code: 'za', name: 'Zhuang, Chuang' },
    { code: 'zu', name: 'Zulu' }
];

var languageConversionTable = {};
languages.forEach(i => languageConversionTable[i.name + ` [${i.code}]`] = i);

languages.sort((a, b) => a.code - b.code);

function runLiveTL() {
    switchChat();
    setTimeout(() => {
        let style = document.createElement('style');
        style.innerHTML = `
            .livetl {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: var(--yt-live-chat-background-color);
                color: var(--yt-live-chat-primary-text-color);
                z-index: 0;
                word-wrap: break-word;
                word-break: break-word;
                font-size: 20px;
                overflow: hidden;
                padding-left: 10px;
                min-height: 0px !important;
                min-width 0px !important;
            }
            .livetl * {
                vertical-align: top;
            }
            .navbar{
                margin-top: 10px;
                min-height: 25px;
                z-index: 69420;
            }
            input {
                padding: 5px;
                width: "auto !important";
            }
            .dropdown-check-list {
                display: inline-block;
                background-color: white;
                color: black;
                font-size: 14px;
            }
            .dropdown-check-list .anchor {
                position: relative;
                cursor: pointer;
                display: inline-block;
                padding: 5px 50px 5px 10px;
                border: 1px solid #ccc;
            }
            .dropdown-check-list .anchor:after {
                position: absolute;
                content: "";
                border-left: 2px solid black;
                border-top: 2px solid black;
                padding: 5px;
                right: 10px;
                top: 20%;
                -moz-transform: rotate(-135deg);
                -ms-transform: rotate(-135deg);
                -o-transform: rotate(-135deg);
                -webkit-transform: rotate(-135deg);
                transform: rotate(-135deg);
            }
            .dropdown-check-list .anchor:active:after {
                right: 8px;
                top: 21%;
            }
            .dropdown-check-list ul.items {
                padding: 2px;
                display: none;
                margin: 0;
                border: 1px solid #ccc;
                border-top: none;
            }
            .dropdown-check-list ul.items li {
                list-style: none;
            }

            .translationText{
                position: absolute;
                z-index: -1;
                top: 25px;
                height: calc(100% - 25px);
                padding-top: 10px;
            }

            .authorInfo {
                font-size: 12px;
                color: #bdbdbd;
                margin-left: 5px;
                vertical-align: baseline;
            }

            label {
                -webkit-user-select: none;
                -khtml-user-select: none;
                -moz-user-select: -moz-none;
                -o-user-select: none;
                user-select: none;
            }
        ` + modalCSS;

        let settings = createModal();
        document.getElementsByTagName("head")[0].appendChild(style);
        let livetlContainer = document.createElement("div");
        livetlContainer.className = "livetl";
        livetlContainer.appendChild(settings);
        document.body.appendChild(livetlContainer);
        let e = document.createElement("div");
        e.className = "translationText";
        // let eee = document.createElement("img");
        // eee.src = "https://fonts.gstatic.com/s/i/materialiconsoutlined/settings/v7/24px.svg";
        let select = document.createElement("input");
        select.dataset.role = "none";
        let datalist = document.createElement("datalist");
        datalist.id = "languages";
        languages.forEach(lang => {
            let opt = document.createElement("option");
            opt.value = lang.name + ` [${lang.code}]`;
            if (lang.code == "en") select.value = opt.value;
            datalist.appendChild(opt);
        });

        let lastLang = select.value;
        select.id = "langSelect";
        select.setAttribute("list", datalist.id);
        select.onblur = () => {
            if (!(select.value in languageConversionTable)) {
                select.value = lastLang;
            }
        }
        select.onfocus = () => select.value = "";
        let navbar = document.createElement("div");
        // sd.appendChild(select);
        navbar.className = "navbar";
        // navbar.appendChild(select);
        // settings svg: "https://fonts.gstatic.com/s/i/materialiconsoutlined/settings/v7/24px.svg";
        // settings.appendChild(navbar);
        settings.appendChild(select);
        livetlContainer.appendChild(e);

        var checklist = document.createElement("div");
        checklist.className = "dropdown-check-list";
        checklist.tabIndex = 1;
        // navbar.appendChild(checklist);
        settings.appendChild(checklist);
        var defaultText = document.createElement("span");
        defaultText.className = "anchor";
        defaultText.textContent = "Select Translators";
        checklist.appendChild(defaultText);
        var items = document.createElement("ul");
        items.id = "items";
        items.className = "items";
        checklist.appendChild(items);

        var allTranslators = {};

        var allTranslatorCheckbox = {};

        checkboxUpdate = () => {
            allTranslators = {};
            var boxes = checklist.querySelectorAll("input");
            boxes.forEach(box => {
                allTranslators[box.id] = box;
                if (box != allTranslatorCheckbox && !box.checked) allTranslatorCheckbox.checked = false;
            });
            if (allTranslatorCheckbox.checked) {
                var boxes = checklist.querySelectorAll("input:not(:checked)");
                boxes.forEach(box => box.checked = true)
            }
        }

        createCheckbox = (name, checked = false, callback = null) => {
            var selectTranslatorMessage = document.createElement("li");
            items.append(selectTranslatorMessage);
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = name;
            checkbox.checked = checked;
            checkbox.onchange = callback || checkboxUpdate;
            selectTranslatorMessage.appendChild(checkbox);
            var person = document.createElement("label");
            person.setAttribute("for", name);
            person.textContent = person.value = name;
            selectTranslatorMessage.appendChild(person);
            checkboxUpdate();
            return checkbox;
        }

        var allTranslatorCheckbox = createCheckbox("All Translators", true, () => {
            var boxes = checklist.querySelectorAll("input:not(:checked)");
            boxes.forEach(box => box.checked = allTranslatorCheckbox.checked);
            checkboxUpdate();
        });

        checklist.getElementsByClassName('anchor')[0].onclick = () => {
            if (items.style.display != "block") items.style.display = "block";
            else items.style.display = "none";
        }

        checklist.onblur = e => {
            if (!e.currentTarget.contains(e.relatedTarget)) items.style.display = "none";
            else e.currentTarget.focus();
        }

        setInterval(() => {
            // if (select.value in languageConversionTable && select.value != lastLang) e.innerHTML = "";
            let messages = document.querySelectorAll("#message");
            messages.forEach(m => {
                let parsed = /^\[(\w+)\] ?(.+)/.exec(m.textContent);
                if (parsed == null) return;
                console.log(parsed);
                if (parsed != null && parsed[1].toLowerCase() == languageConversionTable[select.value].code) {
                    var author = m.parentElement.childNodes[1].textContent;
                    let line = document.createElement("div");
                    line.style.marginBottom = "10px";
                    line.style.marginTop = "10px";
                    line.textContent = parsed[2];
                    var authorInfo = document.createElement("span");
                    authorInfo.className = "authorInfo";
                    line.appendChild(authorInfo);
                    authorInfo.textContent = author;
                    if (!(author in allTranslators)) createCheckbox(author, allTranslatorCheckbox.checked);
                    if (allTranslators[author].checked) e.appendChild(line);
                    // line.onmouseover = () => authorInfo.textContent = `Translated by ${author}`;
                    // line.onmouseleave = () => authorInfo.textContent = "";
                }
            });
            if (select.value in languageConversionTable) lastLang = select.value;
            e.scrollTop = e.scrollHeight;
            messages.forEach(m => m.remove());
        }, 100);
    }, 100);
}

function switchChat() {
    let count = 2;
    document.querySelectorAll(".yt-dropdown-menu").forEach((e) => {
        if (/Live chat/.exec(e.innerText) && count > 0) {
            e.click();
            count--;
        }
    })
};

function parseParams() {
    let s = decodeURI(location.search.substring(1))
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"');
    return s == "" ? {} : JSON.parse('{"' + s + '"}');
}

window.onload = () => {
    if (parent === top) {
        try {
            let params = parseParams();
            if (params.useLiveTL) {
                console.log("Running LiveTL!");
                runLiveTL();
            }
        } catch (e) {
        }
    }
}

function createModal() {
    let settingsButton = document.createElement("div");
    settingsButton.innerHTML = settingsGear;
    settingsButton.id = "settingsGear";
    settingsButton.style.zIndex = 100000;
    settingsButton.style.position = "fixed";
    settingsButton.style.top = 0;
    settingsButton.style.right = 0;
    settingsButton.style.padding = "5px";
    settingsButton.style.width = "5em !important";

    let modalContainer = document.createElement("div");
    modalContainer.className = "modal";
    modalContainer.style.zIndex = 1000000;

    let modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    let closeButton = document.createElement("span");
    closeButton.className = "close";
    closeButton.innerHTML = "&times";

    settingsButton.addEventListener("click", (e) => {
        modalContainer.style.display = "block";
    });

    closeButton.addEventListener("click", (e) => {
        modalContainer.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        modalContainer.style.display = "none";
    });

    modalContent.appendChild(closeButton);
    modalContainer.appendChild(modalContent);

    document.body.appendChild(settingsButton);
    document.body.appendChild(modalContainer);

    return modalContent;
}

const modalCSS = `

#settingsGear {
    stroke: #D1D1D1;
};

 /* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
`;

const settingsGear = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>`;
