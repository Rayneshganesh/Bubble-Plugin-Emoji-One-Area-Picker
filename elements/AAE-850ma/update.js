function(instance, properties, context) {
var divid = '#'+properties.id_attribute
instance.data.divid = divid
var recent = properties.recent == null ? false : {title: properties.recent}
var smiley = properties.smileys == null ? false : {title: properties.smileys}
var animals = properties.animals == null ? false : {title: properties.animals}
var food = properties.food == null ? false : {title: properties.food}
var activity = properties.activity == null ? false : {title: properties.activity}
var travel = properties.travel == null ? false : {title: properties.travel}
var objects = properties.objects == null ? false : {title: properties.objects}
var symbols = properties.symbols == null ? false : {title: properties.symbols}
var flags = properties.flags == null ? false : {title: properties.flags}
var blur = properties.hide_on_blur


    
if (document.getElementById(properties.id_attribute)) {
    //If it found do something run your code as you normally do
    runcar()

} else {
    console.log('Warning! - Not found already', 'The target element is not on the page.  Plugin will wait till element appears');
    let observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type == 'attributes' && mutation.target.id == properties.id_attribute) {
                //When its found do something.  Run your code
                runcar()
                //Disconnect
                observer.disconnect();
            }
        });
    });

    //This config usually works best for Bubble
    let observerConfig = {
        childList: true,
        subtree: true,
        attributes: true
    };

    // Listen to all changes to body and child nodes
    let targetNode = document.body;
    observer.observe(targetNode, observerConfig);
}
    
//
function runcar(){


$(divid).emojioneArea({
    pickerPosition: properties.picker_position,
    inline: null,
    hidePickerOnBlur: blur,
    standalone: false,
    search: properties.show_search_bar,
    searchPlaceholder: properties.search_placeholder,
    searchPosition: properties.search_bar_position,
    buttonTitle: "",
    recentEmojis: properties.show_recent_emojis,
    filtersPosition: properties.filters_position,
    tones: properties.show_tones,
    tonesStyle: properties.tones_style,
    shortnames: properties.shortname,
    saveEmojisAs: properties.save_emoji_as,
    hideSource: true,
    shortcuts: properties.shortcuts,
    autocomplete: properties.autocomplete,
    autocompleteTones: properties.autocomplete_tones,
    //container: divid,
    textcomplete: {
        maxCount  : properties.dropdown_emoji,
        placement : properties.dropdown_placement,
        parent: document.getElementById(divid)
    },
    attributes: {
        dir:"auto"
    },
    filters: {
    tones: { // this tab is hidden, and used for list tones emojis
        title: "Diversity",
    },
    recent: recent,
    smileys_people: smiley,
    animals_nature: animals,
    food_drink: food,
    activity: activity,
    travel_places: travel,
    objects: objects,
    symbols: symbols,
    flags: flags,
    },
    events: {
    keyup: function (editor, event) {
        this.source.val(this.getText());
        instance.publishState('content',this.getText())
        //console.log(this.source.val());
      }, 
    click: function (editor, event) {
        this.source.val(this.getText());
        instance.publishState('content',this.getText())
        //console.log(this.source.val());
      }, 
    blur: function (editor, event) {
        this.source.val(this.getText());
        instance.publishState('content',this.getText())
        //console.log(this.source.val());
      },   
    keydown: function (editor, event) {
        this.source.val(this.getText());
        instance.publishState('content',this.getText())
        //console.log(this.source.val());
      },    
    change: function (editor, event) {
        this.source.val(this.getText());
        instance.publishState('content',this.getText())
        //console.log(this.source.val());
      },        
    keypress: function (editor, event) {
        this.source.val(this.getText());
        instance.publishState('content',this.getText())
        //console.log(this.source.val());
      },
    mousedown: function (editor, event) {
        this.source.val(this.getText());
        instance.publishState('content',this.getText())
        //console.log(this.source.val());
      },
    mouseup: function (editor, event) {
        this.source.val(this.getText());
        instance.publishState('content',this.getText())
        //console.log(this.source.val());
      },   
    picker_show: function (editor, event) {
        this.source.val(this.getText());
        instance.publishState('content',this.getText())
        if(properties.picker_position == "bottom" && properties.rg_attribute_id != "" && properties.rg_attribute_id != null){
        instance.setHeight(310)
        }
       if(properties.picker_position == "top" && properties.rg_attribute_id != "" && properties.rg_attribute_id != null){
        $(divid+'TOP').css("top","280px")
        instance.setHeight(310)
        }
    if(blur == false){
    $('.emojionearea-search>input').focus()
        }
    },
    ready: function () {
        this.source.val(this.getText());
        instance.publishState('content',this.getText())
        console.log("loaded") 
        instance.triggerEvent('initialized')
    },
    picker_hide: function (editor, event) {
        this.source.val(this.getText());
        instance.publishState('content',this.getText())
        if(properties.picker_position == "bottom" && properties.rg_attribute_id != "" && properties.rg_attribute_id != null){
        instance.setHeight(20)
        };
        if(properties.picker_position == "top" && properties.rg_attribute_id != "" && properties.rg_attribute_id != null){
        instance.setHeight(20)
        $(divid+'TOP').css("top","0px")
        }
    if(blur == false){
    $('.emojionearea-search>input').focus()
        }
    },

   }
});
    
    
 // setTimeout(function() {
   var parentid = "#"+properties.id_attribute+"TOP"
   $(divid).parent().attr('id', properties.id_attribute+"TOP")

   $('.emojionearea').css('overflow','initial') 
    
    var editid = parentid+' .emojionearea .emojionearea-editor'
    
    console.log(editid)
    //console.log(properties.bubble.height)
   $(editid).css('min-height',properties.bubble.height +' !important')  
   //$(parentid+' .emojionearea.emojionearea-editor').css('max-height',properties.bubble.height+'px !important')  
    $(parentid+' .emojionearea.emojionearea-editor').css('font-family','fantasy !important')  
      //console.log("check:" + properties.bubble.height)
    
//  }, 12000);
    /*$('.emojionearea-search>input').keyup(function(){
        $(this).val($(this).val().toLowerCase());
    });*/
    
}

    
}