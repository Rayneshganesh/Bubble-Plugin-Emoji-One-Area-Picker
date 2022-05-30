function(instance, properties, context) {
var input = properties.content;
var optionfrom  = properties.from
var optionto = properties.to;
var output = properties.content;

if(optionfrom == "unicode" && optionto == "shortname"){
    output = emojione.toShort(input);
    console.log("Convert unicode to shortcode")
}
if(optionfrom == "unicode" && optionto == "image"){
    output = emojione.toImage(input);
    console.log("Convert unicode to image")
}
if(optionfrom == "shortname" && optionto == "unicode"){
    output = emojione.shortnameToUnicode(input);
    console.log("Convert shortcode to unicode")
}
if(optionfrom == "shortname" && optionto == "image"){
    output = emojione.shortnameToImage(input);
    console.log("Convert shortcode to image")
}

instance.publishState('converted_content',output);

}