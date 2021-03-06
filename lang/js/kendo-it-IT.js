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
    "Locale": "it-IT",
    "Description": "Italiano",
    "Components": {
        "ColumnMenu": {
            "messages": {
                "sortAscending": "Ordina in modo crescente",
                "sortDescending": "Ordina in modo decrescente",
                "filter": "Filtra",
                "columns": "Colonne"
            }
        },
        "Groupable": {
            "messages": {
                "empty": "Trascina qui un'intestazione per raggruppare i dati in base a quella colonna"
            }
        },
        "FilterMenu": {
            "messages": {
                "info": "Mostra elementi il cui valore:",
                "isTrue": "E' Vero",
                "isFalse": "E' Falso",
                "filter": "Filtra",
                "clear": "Rimuovi Filtri",
                "and": "Ed anche",
                "or": "Oppure",
                "selectValue": "-Seleziona-"
            },
            "operators": {
                "string": {
                    "eq": "E' uguale a",
                    "neq": "Non è uguale a",
                    "startswith": "Inizia con",
                    "contains": "Contiene",
                    "doesnotcontain": "Non contiene",
                    "endswith": "Finisce con"
                },
                "number": {
                    "eq": "E' uguale a",
                    "neq": "Non è uguale a",
                    "gte": "E' maggiore di o uguale a",
                    "gt": "E' maggiore di",
                    "lte": "E' minore di o uguale a",
                    "lt": "E' minore di"
                },
                "date": {
                    "eq": "E' uguale a",
                    "neq": "Non è uguale a",
                    "gte": "E' successiva o uguale a",
                    "gt": "E' successiva a",
                    "lte": "E' antecedente o uguale a",
                    "lt": "E' antecedente a"
                },
                "enums": {
                    "eq": "E' uguale a",
                    "neq": "Non è uguale a"
                }
            }
        },
        "Pager": {
            "messages": {
                "display": "{0} - {1} di {2} elementi",
                "empty": "Nessun elemento da visualizzare",
                "page": "Pagina",
                "of": "di {0}",
                "itemsPerPage": "elementi per pagina",
                "first": "Vai alla prima pagina",
                "previous": "Vai alla pagina precedente",
                "next": "Vai alla pagina successiva",
                "last": "Vai all'ultima pagina",
                "refresh": "Aggiorna"
            }
        },
        "Validator": {
            "messages": {
                "required": "{0} è obbligatorio",
                "pattern": "{0} non è valido",
                "min": "{0} dev'essere maggiore di o uguale a {1}",
                "max": "{0} dev'essere minore di o uguale a {1}",
                "step": "{0} non è valido",
                "email": "{0} non è un'indirizzo e-mail valido",
                "url": "{0} non è un'indirizzo web valido",
                "date": "{0} non è una data valida"
            }
        },
        "ImageBrowser": {
            "messages": {
                "uploadFile": "Caricamento file",
                "orderBy": "Ordina per",
                "orderByName": "Nome",
                "orderBySize": "Dimensione",
                "directoryNotFound": "Una cartella con questo nome non è stata trovata.",
                "emptyFolder": "Cartella Vuota",
                "deleteFile": "Sei sicuro di voler cancellare \"{0}\"?",
                "invalidFileType": "Il file selezionato \"{0}\" non è valido. I tipi di file supportati sono {1}.",
                "overwriteFile": "Un file con il nome \"{0}\" esiste già nella cartella corrente. Vuoi sovrascriverlo?",
                "dropFilesHere": "Trascina un file qui per caricarlo"
            }
        },
        "Editor": {
            "messages": {
                "bold": "Grassetto",
                "italic": "Corsivo",
                "underline": "Sottolineato",
                "strikethrough": "Barrato",
                "superscript": "Apice",
                "subscript": "Pedice",
                "justifyCenter": "Centra testo",
                "justifyLeft": "Allinea testo a sinistra",
                "justifyRight": "Allinea testo a destra",
                "justifyFull": "Giustifica testo",
                "insertUnorderedList": "Inserisci lista non ordinata",
                "insertOrderedList": "Inserisci lista ordinata",
                "indent": "Aumenta rientro",
                "outdent": "Riduci rientro",
                "createLink": "Inserisci collegamento",
                "unlink": "Rimuovi collegamento",
                "insertImage": "Inserisci immagine",
                "insertHtml": "Inserisci HTML",
                "fontName": "Seleziona il tipo di caratteri",
                "fontNameInherit": "(tipo ereditato)",
                "fontSize": "Seleziona la dimensione dei caratteri",
                "fontSizeInherit": "(dimensione ereditata)",
                "formatBlock": "Formatta",
                "foreColor": "Colore",
                "backColor": "Colore di sfondo",
                "style": "Stili",
                "emptyFolder": "Cartella Vuota",
                "uploadFile": "Carica file",
                "orderBy": "Ordina per:",
                "orderBySize": "Dimensione",
                "orderByName": "Nome",
                "invalidFileType": "Il file selezionato \"{0}\" non è valido. I tipi di file supportati sono {1}.",
                "deleteFile": "Sei sicuro di voler cancellare \"{0}\"?",
                "overwriteFile": "Un file con il nome \"{0}\" esiste già nella cartella corrente. Vuoi sovrascriverlo?",
                "directoryNotFound": "Una cartella con questo nome non è stata trovata.",
                "imageWebAddress": "Indirizzo Web",
                "imageAltText": "Testo alternativo",
                "dialogInsert": "Inserisci",
                "dialogButtonSeparator": "o",
                "dialogCancel": "Annulla"
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