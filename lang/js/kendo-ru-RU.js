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
    "Locale": "ru-RU",
    "Description": "Russian",
    "Components": {
        "ColumnMenu": {
            "messages": {
                "sortAscending": "По возрастанию",
                "sortDescending": "По убыванию",
                "filter": "Фильтр",
                "columns": "Колонки"
            }
        },
        "Groupable": {
            "messages": {
                "empty": "Перетащите заголовок столбца для группировке по нему"
            }
        },
        "FilterMenu": {
            "messages": {
                "info": "Фильтр:",
                "filter": "Применить",
                "clear": "Отменить",
                "isTrue": "Да",
                "isFalse": "Нет",
                "and": "и",
                "or": "или",
                "selectValue": "-выберите-"
            },
            "operators": {
                "string": {
                    "eq": "Равно",
                    "neq": "Не равно",
                    "startswith": "Начинается с",
                    "contains": "Содержит",
                    "doesnotcontain": "Не содержит",
                    "endswith": "Оканчивается на"
                },
                "number": {
                    "eq": "Равно",
                    "neq": "Не равно",
                    "gte": "Больше или равно",
                    "gt": "Больше",
                    "lte": "Меньше или равно",
                    "lt": "Меньше"
                },
                "date": {
                    "eq": "Равно",
                    "neq": "Не равно",
                    "gte": "Больше или равно",
                    "gt": "Позже",
                    "lte": "Меньше или равно",
                    "lt": "Раньше"
                },
                "enums": {
                    "eq": "Равно",
                    "neq": "Не равно"
                }
            }
        },
        "Pager": {
            "messages": {
                "display": "{0} - {1} из {2} записей",
                "empty": "Нет данных",
                "page": "Страница",
                "of": "из {0}",
                "itemsPerPage": "записей на странице",
                "first": "Первая страница",
                "previous": "Предыдущая",
                "next": "Следующая",
                "last": "Последняя страница",
                "refresh": "Обновить"
            }
        },
        "Validator": {
            "messages": {
                "required": "{0} обазателен",
                "pattern": "{0} не верен",
                "min": "{0} должен быть больше или равен {1}",
                "max": "{0} должен быть меньше или равен {1}",
                "step": "{0} не верен",
                "email": "{0} не корректный email",
                "url": "{0} не корректный URL",
                "date": "{0} не корректная дата"
            }
        },
        "ImageBrowser": {
            "messages": {
                "uploadFile": "Загрузить",
                "orderBy": "Сортировать по",
                "orderByName": "Имя",
                "orderBySize": "Размер",
                "directoryNotFound": "Каталог с указанным именем не существует",
                "emptyFolder": "Каталог пуст",
                "deleteFile": "Вы действительно хотите удалить \"{0}\"?",
                "invalidFileType": "Выбранный файл \"{0}\" не поддерживается. Доступные типы {1}.",
                "overwriteFile": "Файл \"{0}\" уже существует. Заменить?",
                "dropFilesHere": "Перетащите сюда файлы для загрузки"
            }
        },
        "Editor": {
            "messages": {
                "bold": "Жирный",
                "italic": "Курсив",
                "underline": "Подчеркнутый",
                "strikethrough": "Зачеркнутый",
                "superscript": "Верхний индекс",
                "subscript": "Нижний индекс",
                "justifyCenter": "По центру",
                "justifyLeft": "По левому краю",
                "justifyRight": "По правому краю",
                "justifyFull": "По середине",
                "insertUnorderedList": "Вставить маркированный список",
                "insertOrderedList": "Вставить нумерованный список",
                "indent": "Уменьшить отступ",
                "outdent": "Увеличить отступ",
                "createLink": "Втсавить ссылку",
                "unlink": "Убрать ссылку",
                "insertImage": "Вставить изображение",
                "insertHtml": "Вставить HTML",
                "fontName": "Шрифт",
                "fontNameInherit": "(наследовать шрифт)",
                "fontSize": "Размер шрифта",
                "fontSizeInherit": "(наследовать размер)",
                "formatBlock": "Форматирование",
                "foreColor": "Цвет шрифта",
                "backColor": "Цвет фона",
                "style": "Стиль",
                "emptyFolder": "Пустой каталог",
                "uploadFile": "Загрузить файл",
                "orderBy": "Сортировать по:",
                "orderBySize": "Размер",
                "orderByName": "Имя",
                "invalidFileType": "Выбранный файл \"{0}\" не поддерживается. Доступные типы {1}.",
                "overwriteFile": "Файл \"{0}\" уже существует. Заменить?",
                "deleteFile": "Вы уверены что хотите удалить \"{0}\"?",
                "directoryNotFound": "Каталог не найден.",
                "imageWebAddress": "Web адрес",
                "imageAltText": "Альтернативный текст",
                "dialogInsert": "Вставить",
                "dialogButtonSeparator": "или",
                "dialogCancel": "Отменить"
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