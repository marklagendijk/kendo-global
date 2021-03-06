/*
 * Kendo UI Localization Project for v2012.3.1114
 * Copyright 2012 Telerik AD. All rights reserved.
 *
 * Project home  : https://github.com/loudenvier/kendo-global
 * Kendo UI home : http://kendoui.com
 *
 * This project is released to the public domain, although one must abide to the
 * licensing terms set forth by Telerik to use Kendo UI, as shown bellow.
 *
 * Telerik's original licensing terms:
 * -----------------------------------
 * Kendo UI Web commercial licenses may be obtained at
 * https://www.kendoui.com/purchase/license-agreement/kendo-ui-web-commercial.aspx
 * If you do not own a commercial license, this file shall be governed by the
 * GNU General Public License (GPL) version 3.
 * For GPL requirements, please review: http://www.gnu.org/copyleft/gpl.html
 */
(function(){
	var labels =
{
    "Locale": "nl-BE",
    "Description": "Nederlands BE",
    "Components": {
        "ColumnMenu": {
            "messages": {
                "sortAscending": "Sorteer Oplopend",
                "sortDescending": "Sorteer Aflopend",
                "filter": "Filteren",
                "columns": "Kolommen"
            }
        },
        "Groupable": {
            "messages": {
                "empty": "Sleep hier een kolomnaam om te groeperen op deze kolom"
            }
        },
        "FilterMenu": {
            "messages": {
                "info": "Laat items zien met een waarde die:",
                "isTrue": "juist is",
                "isFalse": "fout is",
                "filter": "Filteren",
                "clear": "Leegmaken",
                "and": "En",
                "or": "Of",
                "selectValue": "-Selecteer een waarde-"
            },
            "operators": {
                "string": {
                    "eq": "Gelijk is aan",
                    "neq": "Niet gelijk is aan",
                    "startswith": "Start met",
                    "contains": "Bevat",
                    "doesnotcontain": "Niet bevat",
                    "endswith": "Eindigd op"
                },
                "number": {
                    "eq": "Gelijk is aan",
                    "neq": "Niet gelijk is aan",
                    "gte": "Groter dan of gelijk is aan",
                    "gt": "Groter is dan",
                    "lte": "Kleiner dan of gelijk is aan",
                    "lt": "Kleiner is dan"
                },
                "date": {
                    "eq": "Gelijk is aan",
                    "neq": "Niet gelijk is aan",
                    "gte": "Later of gelijk is aan",
                    "gt": "Later is dan",
                    "lte": "Vroeger of gelijk is aan",
                    "lt": "Vroeger is dan"
                },
                "enums": {
                    "eq": "Gelijk is aan",
                    "neq": "Niet gelijk is aan"
                }
            }
        },
        "Pager": {
            "messages": {
                "display": "{0} - {1} van {2} items",
                "empty": "Geen items om weer te geven",
                "page": "Pagina",
                "of": "van {0}",
                "itemsPerPage": "items per pagina",
                "first": "Ga naar de eerste pagina",
                "previous": "Ga naar de vorige pagina",
                "next": "Ga naar de volgende pagina",
                "last": "Ga naar de laatste pagina",
                "refresh": "Vernieuwen"
            }
        },
        "Validator": {
            "messages": {
                "required": "{0} is verplicht",
                "pattern": "{0} is ongeldig",
                "min": "{0} moet groter zijn of gelijk aan {1}",
                "max": "{0} moet kleiner zijn of gelijk aan {1}",
                "step": "{0} is ongeldig",
                "email": "{0} is een ongeldig email adres",
                "url": "{0} is een ongeldige URL",
                "date": "{0} is een foutieve datum"
            }
        },
        "ImageBrowser": {
            "messages": {
                "uploadFile": "Uploaden",
                "orderBy": "Sorteren op",
                "orderByName": "Naam",
                "orderBySize": "Grootte",
                "directoryNotFound": "Kon geen folder vinden met deze naam.",
                "emptyFolder": "Lege folder",
                "deleteFile": "Bent u zeker dat u \"{0}\" wenst te deleten?",
                "invalidFileType": "Het geselecteerde bestand \"{0}\" is ongeldig. Geldige bestandstypes zijn {1}.",
                "overwriteFile": "Een bestand met naam \"{0}\" bestaat reeds in de huidge folder. Wenst u dit te overschrijven?",
                "dropFilesHere": "Sleep hier uw files om te uploaden"
            }
        },
        "Editor": {
            "messages": {
                "bold": "Vet",
                "italic": "Cursief",
                "underline": "Onderlijnen",
                "strikethrough": "Doorstrepen",
                "superscript": "Superscript",
                "subscript": "Subscript",
                "justifyCenter": "Centreren",
                "justifyLeft": "Links uitlijnen",
                "justifyRight": "Rechts uitlijnen",
                "justifyFull": "Uitlijnen",
                "insertUnorderedList": "Ongeordende lijst toevoegen",
                "insertOrderedList": "Geordende lijst toevoegen",
                "indent": "Inspringen",
                "outdent": "Uitspringen",
                "createLink": "Hyperlink toevoegen",
                "unlink": "Hyperlink verwijderen",
                "insertImage": "Afbeelding toevoegen",
                "insertHtml": "HTML toevoegen",
                "fontName": "Selecteer een lettertype",
                "fontNameInherit": "(basis lettertype)",
                "fontSize": "Selecteer grootte van lettertype",
                "fontSizeInherit": "(basis grootte)",
                "formatBlock": "Structuur",
                "foreColor": "Kleur",
                "backColor": "Achtergrondkleur",
                "style": "Stijlen",
                "emptyFolder": "Lege Folder",
                "uploadFile": "Uploaden",
                "orderBy": "Sorteren op:",
                "orderBySize": "Grootte",
                "orderByName": "Naam",
                "invalidFileType": "Het geselecteerde bestand \"{0}\" is ongeldig. Geldige bestandtypes zijn {1}.",
                "deleteFile": "Bent u zeker dat u \"{0}\" wenst te deleten?",
                "overwriteFile": "Een bestand met naam \"{0}\" bestaat reeds in de huidge folder. Wenst u dit te overschrijven?",
                "directoryNotFound": "Kon geen folder vinden met deze naam.",
                "imageWebAddress": "Web adres",
                "imageAltText": "Alternatieve tekst",
                "dialogInsert": "Toevoegen",
                "dialogButtonSeparator": "of",
                "dialogCancel": "Annuleren"
            }
        }
    }
};

	//Set the locale
	kendo.ui.Locale = labels.Description + " (" + labels.Locale + ")";

	// Loop through all Components
	for(var componentName in labels.Components){
		var component = labels.Components[componentName];

		// Loop through all options within that component (eg: 'messages' or 'operators)
		for(var optionName in component){
			var optionLabels = component[optionName];

			// Extend the KendoUI labels for the current option
			$.extend(kendo.ui[componentName].prototype.options[optionName], optionLabels);
		}
	}
})();