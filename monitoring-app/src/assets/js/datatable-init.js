function initializeDataTable() {
    setTimeout(() => {
      $('#dataTable').DataTable({
        paging: true,
        searching: true,
        info: true,
        ordering: true,
        dom: 'Bfrtip', // Pour inclure les boutons
        buttons: [
          'copy', 'csv', 'excel', 'pdf', 'print' // Boutons à inclure
        ],
        language: {
          url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/fr-FR.json', // Traduction française
        },
      });
    }, 0);
  }
  