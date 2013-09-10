Etherpad Authorship Export
==========================

This plugin attempts to add metadata to the exported
HTML that allows to distinguish between authors, just
like the colours in the Etherpad edit view do.

More concretely, it aims to wrap the parts of the texts
in different spans with a class like

`<span class="authora_tLCCEnNVJ5aXkyVI">`

For an author id of `a.tLCCEnNVJ5aXkyVI`.

It does not yet work quite like I want: I must admit that
the inner workings of apool and attribLine are still
quite opaque to me.

To parse the text,
I copied code that I found in the ep_headings plugin,
very similar code exists in a few other plugins I’ve
checked out. I managed to adapt it to check for authorship
but it works on a by line basis: Now it prints an author
at the beginning of each line.

Clearly, that’s not what I want: I want to be more precise
and mark the different regions in the line that are by different
authors.

There exists an unused implementation of authorship colours
in the Etherpad (lite) source code at src/node/utils/ExportHtml.js
It might offer some hints on how to progress.

