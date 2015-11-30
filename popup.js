// @Leejim

function click(e) {
  chrome.tabs.executeScript(null,
      {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
  window.close();
}
function f(id) {
  return document.getElementById(id);
}

document.addEventListener('DOMContentLoaded', function () {
	var	button = f('saveButton');

  chrome.tabs.getSelected(null,function(tab){
    f('webName').value = tab.title;
  })

  button.onclick = function(){
  	var img = new Image();

  	img.style.display = 'none';
  	img.onload = function(){
  		alert('保存成功');
  	}
    chrome.tabs.getSelected(null, function(tab) {
      var url = tab.url,
          wName = f('webName').value || '未命名',
          wTag = f('webTag').value || '',
          data = [];
      data.push(url,wName,wTag);
      var str = data.join('_leejim_');
      img.src = 'http://www.syxxbst.com/webcollect/save/' + str ;
      document.body.appendChild(img);
    });
  	
  }

  

});
