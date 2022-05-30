function(instance, properties) {
var box = $('<div>Picker</div>');
 instance.canvas.append(box);
    box.css('background-image', 'url("https://s3.amazonaws.com/appforest_uf/f1567209810566x938432821211803600/img_151507.png")')
    box.css('position', 'absolute')
    box.css('height', properties.bubble.height)
    box.css('width', properties.bubble.width)
    box.css('background-size',  properties.bubble.width+"px "+properties.bubble.height+"px")
    box.css('text-align','center')
    
}