
>　　　　　　　　6//?r=⭐　&d=2024/6/23 10:58:17　&b=lxqylkyd
## How To Create a Dropdown Navigation Bar
https://www.w3schools.com/howto/howto_css_dropdown_navbar.asp

>　　　　　　　　6//?r=⭐　&d=2024/6/23 11:04:05　&b=lxqyt1cc
## How To Create a Subnavigation Menu
https://www.w3schools.com/howto/howto_css_subnav.asp

>　　　　　　　　6//?r=⭐　&d=2024/6/23 11:05:06　&b=lxqyucv8
## How To Create a Dropup Menu
https://www.w3schools.com/howto/howto_css_dropup.asp


>　　　　　　　　6//?r=⭐　&d=2024/6/23 10:59:57　&b=lxqynpq2
## How To Create a Hoverable Dropdown Menu
https://www.w3schools.com/howto/howto_css_dropdown.asp

>　　　　　　　　6//?r=⭐　&d=2024/6/23 11:00:11　&b=lxqyo0t7
## How To Create a Dropdown Menu With CSS and JavaScript
https://www.w3schools.com/howto/howto_js_dropdown.asp

>　　　　　　　　6//?r=⭐　&d=2024/6/23 10:58:25　&b=lxqylr5g
## Search/Filter Dropdown
https://www.w3schools.com/howto/tryhow_css_js_dropdown_filter_ifr.htm
|

>　　　　　　　　6//?r=⭐　&d=2024/6/23 11:03:02　&b=lxqyrp36
## Sidebar Dropdown
https://www.w3schools.com/howto/tryhow_js_sidenav_dropdown_ifr.htm
|

Sidebar Dropdown

>　　　　　　　　6//?r=⭐　&d=2024/6/23 11:06:27　&b=lxqyw2yz
## Toggle Sidepanel
https://www.w3schools.com/howto/tryhow_js_collapse_sidepanel.htm
|

☰ Toggle Sidepanel

>　　　　　　　　6//?r=⭐　&d=2024/6/23 11:08:42　&b=lxqyyyt0
## How To Create a Menu Icon
https://www.w3schools.com/howto/howto_css_menu_icon.asp
|

How TO - Menu Icon

>　　　　　　　　6//?r=⭐　&d=2024/6/23 14:08:15　&b=lxr5dvic
## javascript - How to convert li navbar dropdown with dropUp - Stack Overflow
https://stackoverflow.com/questions/70123466/how-to-convert-li-navbar-dropdown-with-dropup

仅使用js实现，当鼠标指针悬停在页面右下角40px乘以40px的正方形区域时，在距离页面底部40px处生成一个长818px宽40px的div，id为navBar，
当鼠标指针离开navBar所在的范围时，隐藏navBar。

请将下面代码中Dropdown的菜单改为Dropup
<div class="navbar">
  <a href="#home">Home</a>
  <a href="#news">News</a>
  <div class="dropdown">
    <button class="dropbtn">Dropdown
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>
</div>
<style>
/* Navbar container */
.navbar {
  overflow: hidden;
  background-color: #333;
  font-family: Arial;
}

/* Links inside the navbar */
.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* The dropdown container */
.dropdown {
  float: left;
  overflow: hidden;
}

/* Dropdown button */
.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
}

/* Add a red background color to navbar links on hover */
.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: red;
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

/* Add a grey background color to dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}
</style>