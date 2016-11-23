(function() {
  if (Discourse.dialect_deprecated) { return; }

  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/www\.amazon\.com\/reviews\/iframe.+/i);




})();
