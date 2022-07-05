ej.base.enableRipple(true);

// Render the PDF viewer control
var viewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'PDF_Succinctly.pdf',
  serviceUrl: 'http://localhost:18765/api/pdfviewer',
  toolbarSettings: {
    showTooltip: true,
    toolbarItems: [
      'OpenOption',
      'PageNavigationTool',
      'MagnificationTool',
      'PanTool',
      'SelectionTool',
      'SearchOption',
      'PrintOption',
      'DownloadOption',
      'UndoRedoTool',
      'AnnotationEditTool',
      'FormDesignerEditTool',
      'CommentTool',
      'SubmitForm'
    ],
    annotationToolbarItems: [
      'HighlightTool',
      'UnderlineTool',
      'StrikethroughTool',
      'AnnotationDeleteTool',
      'CommentPanelTool'
    ]
  }
});
ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar,
  ej.pdfviewer.Magnification,
  ej.pdfviewer.BookmarkView,
  ej.pdfviewer.ThumbnailView,
  ej.pdfviewer.TextSelection,
  ej.pdfviewer.TextSearch,
  ej.pdfviewer.Print,
  ej.pdfviewer.Navigation,
  ej.pdfviewer.LinkAnnotation,
  ej.pdfviewer.Annotation,
  ej.pdfviewer.FormFields
);
viewer.appendTo('#pdfViewer');
document.getElementById('id').addEventListener('click', function() {
  viewer.serverActionSettings.download = 'SaveDocument';
  viewer.download();
  viewer.serverActionSettings.download = 'Download';
});
