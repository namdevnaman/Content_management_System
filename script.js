function executeCommand(command) {
  document.execCommand(command, false, null);
}

function insertImageFromDevice() {
  var fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'image/*';
  fileInput.onchange = function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function() {
      var image = document.createElement('img');
      image.src = reader.result;
      document.getElementById('content').appendChild(image);
    };
    reader.readAsDataURL(file);
  };
  fileInput.click();
}

function insertVideoFromDevice() {
  var fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'video/*';
  fileInput.onchange = function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function() {
      var video = document.createElement('video');
      video.src = reader.result;
      video.controls = true;
      document.getElementById('content').appendChild(video);
    };
    reader.readAsDataURL(file);
  };
  fileInput.click();
}

function insertImageFromWeb() {
  var url = prompt('Enter the URL of the image:');
  if (url) {
    var image = document.createElement('img');
    image
    image.src = url;
    document.getElementById('content').appendChild(image);
  }
}

function insertVideoFromWeb() {
  var url = prompt('Enter the URL of the video:');
  if (url) {
    var video = document.createElement('video');
    video.src = url;
    video.controls = true;
    document.getElementById('content').appendChild(video);
  }
}

function saveContentAsDoc() {
  var content = document.getElementById('content').innerHTML;
  var fileName = 'document.doc';
  var blob = new Blob(['<html><body>' + content + '</body></html>'], { type: 'application/msword' });
  var downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = fileName;
  downloadLink.click();
}
