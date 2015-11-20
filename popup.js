// @Leejim

function click(e) {
  chrome.tabs.executeScript(null,
      {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var button = document.querySelectorAll('#saveButton');
  	  img = new Image(),
  	  data = 'url=' + location.href;

  img.src = 'www.baidu.com?'+data;
  document.body.appendChild(img);

});
