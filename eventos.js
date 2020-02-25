function Ocultar(elemento){
  document.getElementById(elemento).style.visibility = "hidden"; 
}
function Mostrar(elemento){
    document.getElementById(elemento).style.visibility = "visible"; 
  }
function Repintar(elemento,color){
    document.getElementById(elemento).style.backgroundColor=color;
}
  function OcultarDisplay(elemento){
    document.getElementById(elemento).style.display = "none"; 
  }
  function MostrarDisplay(elemento){
      document.getElementById(elemento).style.display = "block"; 
    }
  function btFoco(bt,img){
    document.getElementById(bt).src=img;
  }
  function Abrir(url){
    window.open(url,"_blank");
  }
 function asignarClase(elemento,clase){
    var elem = document.getElementById(elemento);
    elem.className += clase;
  }
  
  // ___________________ Acordeón _______________________________________
  function iniAcordeon(){
    var acc = document.getElementsByClassName("acordeon");
    var i;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panelAc = this.nextElementSibling;
    if (panelAc.style.maxHeight){
      panelAc.style.maxHeight = null;
    } else {
      panelAc.style.maxHeight = panelAc.scrollHeight + "px";
    } 
  });
}
  }
  /*  <button class="acordeon">Sección 1</button>
      <div class="panelAc">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
      </div>    
  */
//__________________________ ComboBox _______________________________________
  function combobox(valor,idComboBox){
    var cb=document.getElementById(idComboBox);
    cb.innerHTML=valor+" <span class='dropdownSimbolo'> &#9196;</span>";
    cb.value=valor;
  }
  function combobox(valor,texto,idComboBox){
    var cb=document.getElementById(idComboBox);
    cb.innerHTML=texto+" <span class='dropdownSimbolo'> &#9196;</span>";
    cb.value=valor;
    
  }
  /* 
      <div class="dropdown">
      <button class="dropbtn" id="combobox1" value="0">Elemento Cero  &#9196;</button>
      <div class="dropdown-content">
        <a href="#" onclick="combobox(1,'Elemento Uno','combobox1')">Uno</a>
        <a href="#" onclick="combobox(2,'Elemento Dos','combobox1')">Dos</a>
        <a href="#" onclick="combobox(3,'Elemento Tres','combobox1')">Tres</a>
      </div>
      </div>   
  */
  //__________________________ Slider_______________________________________
  function iniSlider(){
  jQuery(document).ready(function ($) {
    //$('#checkbox').change(function(){setInterval(function () {moveRight();}, 3000);});
    setInterval(function () {moveRight();}, 3000);
    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    $('#slider').css({ width: slideWidth, height: slideHeight });
    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
      $('#slider ul li:last-child').prependTo('#slider ul');
      function moveLeft() {
          $('#slider ul').animate({
              left: + slideWidth
          }, 200, function () {
              $('#slider ul li:last-child').prependTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };
      function moveRight() {
          $('#slider ul').animate({
              left: - slideWidth
          }, 200, function () {
              $('#slider ul li:first-child').appendTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };
      $('a.control_prev').click(function () {
          moveLeft();
      });
  
      $('a.control_next').click(function () {
          moveRight();
      });
  });  
}
/*<div id="slider">
<a href="#" class="control_next">&gt;</a>
<a href="#" class="control_prev">&lt;</a>
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>  
</div>
*/