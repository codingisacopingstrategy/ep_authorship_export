var Changeset = require("ep_etherpad-lite/static/js/Changeset");

// line, apool,attribLine,text
exports.getLineHTMLForExport = function (hook, context) {
    var author = _analyzeLine(context.attribLine, context.apool);
    if (author) {
        return "<span class=\"author" + author.replace('.','_') + "\">" + context.text + "</span><br/>";
    }
}

function _analyzeLine(alineAttrs, apool) {
  var author = null;
  if (alineAttrs) {
    var opIter = Changeset.opIterator(alineAttrs);
    if (opIter.hasNext()) {
      var op = opIter.next();
      author = Changeset.opAttributeValue(op, 'author', apool);
    }
  }
  return author;
}