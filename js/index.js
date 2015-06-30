var fs = require('fs');
var xhr = require('xhr');

var _ = {
  template: require('lodash/string/template')
};

var postUrl = 'http://crossorigin-me-gwqynjms41pa.runscope.net/https://docs.google.com/forms/d/1PKyhJ1D06Gh-1ZE5bY4alYpLm6-GQxglJ-4xaSHjXdE/formResponse';
var html = _.template(fs.readFileSync(__dirname + '/modal.html').toString());

var id = window.cmm.id || 'noId';
var roles = window.cmm.roles || ['visitor'];
var showPercentage = window.cmm.showPercentage || 0;

var modal = document.createElement('div');
modal.style.setProperty('position', 'fixed');
modal.style.setProperty('top', '0');
modal.style.setProperty('margin', '0');
modal.style.setProperty('padding', '0');
modal.style.setProperty('background-color', 'rgba(0,0,0,0.4)');
modal.style.setProperty('width', window.innerWidth + 'px');
modal.style.setProperty('min-height', window.innerHeight + 'px');

modal.innerHTML = html({ id: id, roles: roles });
modal.querySelector('button').addEventListener('click', onSubmit);
modal.querySelector('#ccm-close').addEventListener('click', onClose);

show();

function show() {
  document.querySelector('body').appendChild(modal);
}

function onSubmit(e) {
  e.preventDefault();
  e.stopPropagation();

  var m = {
    id: 'entry.336978155',
    name: 'entry.848398114',
    role: 'entry.428872976',
    email: 'entry.147270097'
  };

  var form = document.querySelector('#ccm-modal form');
  var data = {};
  data[m['id']] = form.querySelector('#ccm-id').value;
  data[m['name']] = form.querySelector('#ccm-name').value;
  data[m['role']] = form.querySelector('#ccm-role').value;
  data[m['email']] = form.querySelector('#ccm-email').value;
  data['fbzx'] = '3474659780927381613';

  var requestData = {
    method: 'POST',
    uri: postUrl,
    body: JSON.stringify(data)
  };

  console.log('requestData', requestData);

  xhr(requestData, function(e, r, b) {
    console.log('e', e);
    console.log('r', r);
    console.log('b', b);
  });
}

function onClose(e) {
  e.preventDefault();
  e.stopPropagation();

  modal.style.setProperty('display', 'none');
}
