export default function filterTable(input,table) {
  var input, filter, table, tr, td, i;
  input = document.getElementById(input);
  filter = input.value.toUpperCase();
  table = document.getElementById(table);
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0]; // for column one
    var td1 = tr[i].getElementsByTagName("td")[1]; // for column two
/* ADD columns here that you want you to filter to be used on */
    if (td) {
      if ( (td.innerHTML.toUpperCase().indexOf(filter) > -1) || (td1.innerHTML.toUpperCase().indexOf(filter) > -1) )  {            
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
    // var input, filter, table, tr, td, i, txtValue;
    // input = document.getElementById(input);
    // filter = input.value.toUpperCase();
    // table = document.getElementById(table);
    // tr = table.getElementsByTagName("tr");
    // for (i = 0; i < tr.length; i++) {
    //   td = tr[i].getElementsByTagName("td")[0];
    //   if (td) {
    //     txtValue = td.textContent || td.innerText;
    //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //       tr[i].style.display = "";
    //     } else {
    //       tr[i].style.display = "none";
    //     }
    //   }       
    // }
  }