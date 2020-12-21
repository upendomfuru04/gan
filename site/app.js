const menu=document.queryselector(#mobile-menu)
const menu-links=document.queryselector('.navbae-menu')
menu addEventlistener('click', function(){
	menu.classlist.toggle('is-active');
	menulinks.classlist.toggle('active');
});