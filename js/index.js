var fs = require('fs');
var xhr = require('xhr');

var _ = {
  template: require('lodash/string/template')
};

var requestUrl = 'http://crossorigin.me/http://docs.google.com/forms/d/1PKyhJ1D06Gh-1ZE5bY4alYpLm6-GQxglJ-4xaSHjXdE/formResponse';
var html = _.template(fs.readFileSync(__dirname + '/modal.html').toString());
var css = fs.readFileSync(__dirname + '/modal.css').toString();

var id = window.cmm.id || 'noId';
var roles = window.cmm.roles || ['visitor'];
var showPercentage = window.cmm.showPercentage || 0;

var modalStyle = document.createElement('style');
modalStyle.id = "ccm-style";
modalStyle.innerText = css;

var modal = document.createElement('div');
modal.className = 'ccm-modal-wrapper';
modal.innerHTML = html({ id: id, roles: roles });
modal.querySelector('button').addEventListener('click', onSubmit);
modal.querySelector('#ccm-close').addEventListener('click', onClose);

if (Math.floor(Math.random()*101) < showPercentage) {
  document.querySelector('body').appendChild(modalStyle);
  document.querySelector('body').appendChild(modal);
}

function onSubmit(e) {
  e.preventDefault();
  e.stopPropagation();

  // mapping to google form fields
  var m = {
    id: 'entry.336978155',
    name: 'entry.848398114',
    role: 'entry.428872976',
    email: 'entry.147270097'
  };

  var form = document.querySelector('.ccm-modal form');
  var data = {};
  data[m['id']] = form.querySelector('#ccm-id').value;
  data[m['name']] = form.querySelector('#ccm-name').value;
  data[m['role']] = form.querySelector('#ccm-role').value;
  data[m['email']] = form.querySelector('#ccm-email').value;
  data['fbzx'] = '3474659780927381613'; // google form hidden value

  var formEncoded = Object.keys(data).map(function(key) {
    return key + '=' + data[key];
  }).join('&');

  var requestData = {
    method: 'GET',
    uri: requestUrl + '?' + formEncoded
  };

  xhr(requestData, function(err, r, b) {
    if (!err) { onClose(e); }
  });
}

function onClose(e) {
  e.preventDefault();
  e.stopPropagation();

  modal.style.setProperty('display', 'none');
}
