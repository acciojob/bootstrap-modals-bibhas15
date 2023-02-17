//your code here
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})