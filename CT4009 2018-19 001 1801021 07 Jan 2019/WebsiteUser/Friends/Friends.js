$("#document").ready(loadUserList());

function searchNames(){
  var input, filter, ul, li, a, i, txtValue;
  input = $("#searchNames");
  filter = input.val().toUpperCase();
  ul = $("#findFriendsList");
  li = ul[0].getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    p = li[i].getElementsByTagName("p")[0];
    txtValue = p.textContent || p.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
