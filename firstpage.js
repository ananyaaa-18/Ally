function redirectToPagename(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "ally_page.html";
}