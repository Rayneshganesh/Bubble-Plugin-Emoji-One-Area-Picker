function(instance, properties, context) {
var text = properties.text == null ? '' : properties.text

  $(instance.data.divid).data('emojioneArea').setText(text)

}