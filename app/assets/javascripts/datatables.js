 /*========================================================================
                 DATATABLES 
 ========================================================================*/

$(document).on('turbolinks:load', function() {
	 $('#table-movements').DataTable({
	 });

	 $('#table-index').DataTable({
    	"iDisplayLength": 25,
    	 "order": [[ 0, "asc" ]]
	 });

	 $('#table-cryptos').DataTable({
	 });
})