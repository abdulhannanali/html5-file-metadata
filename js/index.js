$(document).ready(function () {

  var files = $("#filesUpload").get(0)
  files.addEventListener("change", handleFilesSelect, false)

  function handleFilesSelect(event) {
    var files = event.target.files

    if (files && files[0]) {
      filesHandler(files)
    }
  }

  function filesHandler(files) {
    var output = $(".output-table-body")
    var progressBar = $("#progressBar")
    output.empty()
    progressBar.show()

    for (var i = 0; i < files.length; i++) {
      var file = files[i]
      var fileData = fileMetaDataViewer(file)
      var fileTableRow = $(fileData)
      output.append(fileTableRow)
    }

    progressBar.hide();

  }

  function fileMetaDataViewer(file) {
    var fileTemplate  = "<tr>"

    var fileName = file.name
    var size = file.size
    var type = file.type


    var lastModified = moment(file.lastModified).format("MMMM DD, YYYY")



    fileTemplate += "<td>" + fileName + "</td>"
    fileTemplate += "<td>" + type + "</td>"
    fileTemplate += "<td>" + Math.round(size/1048576, 3) + " mb </td>"
    fileTemplate += "<td>" + lastModified + "</td>"
    // if (type.match(/image\/*/)) {
    //   fileTemplate += "<td>Yes</td>"
    // }
    // else {
    //   fileTemplate += "<td>No</td>"
    // }

    fileTemplate += "</tr>"

    return fileTemplate

  }

})
