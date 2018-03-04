/*!
 * FileInput Polish Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function ($) {
    "use strict";

    $.fn.fileinputLocales['pl'] = {
        fileSingle: apartment_plugins.fileSingle,
        filePlural: apartment_plugins.filePlural,
        browseLabel: apartment_plugins.browseLabel,
        removeLabel: apartment_plugins.removeLabel,
        removeTitle: apartment_plugins.removeTitle,
        cancelLabel: apartment_plugins.cancelLabel,
        cancelTitle: apartment_plugins.cancelTitle,
        uploadLabel: apartment_plugins.uploadLabel,
        uploadTitle: apartment_plugins.uploadTitle,
        msgNo: apartment_plugins.msgNo,
        msgNoFilesSelected: apartment_plugins.msgNoFilesSelected,
        msgCancelled: apartment_plugins.msgCancelled,
        msgZoomModalHeading: apartment_plugins.msgZoomModalHeading,
        msgSizeTooLarge: apartment_plugins.msgSizeTooLarge,
        msgFilesTooLess: apartment_plugins.msgFilesTooLess,
        msgFilesTooMany: apartment_plugins.msgFilesTooMany,
        msgFileNotFound: apartment_plugins.msgFileNotFound,
        msgFileSecured: apartment_plugins.msgFileSecured,
        msgFileNotReadable: apartment_plugins.msgFileNotReadable,
        msgFilePreviewAborted: apartment_plugins.msgFilePreviewAborted,
        msgFilePreviewError: apartment_plugins.msgFilePreviewError,
        msgInvalidFileType: apartment_plugins.msgInvalidFileType,
        msgInvalidFileExtension: apartment_plugins.msgInvalidFileExtension,
        msgUploadAborted: apartment_plugins.msgUploadAborted,
        msgUploadThreshold: apartment_plugins.msgUploadThreshold,
        msgValidationError: apartment_plugins.msgValidationError,
        msgLoading: apartment_plugins.msgLoading,
        msgProgress: apartment_plugins.msgProgress,
        msgSelected: apartment_plugins.msgSelected,
        msgFoldersNotAllowed: apartment_plugins.msgFoldersNotAllowed,
        msgImageWidthSmall: apartment_plugins.msgImageWidthSmall,
        msgImageHeightSmall: apartment_plugins.msgImageHeightSmall,
        msgImageWidthLarge: apartment_plugins.msgImageWidthLarge,
        msgImageHeightLarge: apartment_plugins.msgImageHeightLarge,
        msgImageResizeError: apartment_plugins.msgImageResizeError,
        msgImageResizeException: apartment_plugins.msgImageResizeException,
        dropZoneTitle: apartment_plugins.dropZoneTitle,
        dropZoneClickTitle: apartment_plugins.dropZoneClickTitle,
        fileActionSettings: {
            removeTitle: apartment_plugins.removeTitle,
            uploadTitle: apartment_plugins.uploadTitle,
            zoomTitle: apartment_plugins.zoomTitle,
            dragTitle: apartment_plugins.dragTitle,
            indicatorNewTitle: apartment_plugins.indicatorNewTitle,
            indicatorSuccessTitle: apartment_plugins.indicatorSuccessTitle,
            indicatorErrorTitle: apartment_plugins.indicatorErrorTitle,
            indicatorLoadingTitle: apartment_plugins.indicatorLoadingTitle
        },
        previewZoomButtonTitles: {
            prev: apartment_plugins.prev,
            next: apartment_plugins.next,
            toggleheader: apartment_plugins.toggleheader,
            fullscreen: apartment_plugins.fullscreen,
            borderless: apartment_plugins.borderless,
            close: apartment_plugins.close
        }
    };
})(window.jQuery);