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

    
if (document.getElementById(properties.id_attribute)) {
    //If it found do something run your code as you normally do
    runcar()
    console.log("found now")
} else {
    console.log('Warning! - Not found already', 'The target element is not on the page.  Plugin will wait till element appears');
    let observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type == 'attributes' && mutation.target.id == properties.id_attribute) {
                //When its found do something.  Run your code
                runcar()
                console.log("found now")
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
    hidePickerOnBlur: properties.hide_on_blur,
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
    textcomplete: {
        maxCount  : properties.dropdown_emoji,
        placement : properties.dropdown_placement
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
    picker_show: function (editor, event) {
    
    $('.emojionearea-search>input').focus()
    },
    search_keypress: function (picker) {
        //console.log(picker.input);
      //$('.emojionearea-search>input').val($('.emojionearea-search>input').val().toLowerCase())

      
    },
   }
});
    
    
  //setTimeout(function() {
   $('.emojionearea').css('overflow','initial')   
    $('.emojionearea-editor').css('min-height',$(divid).css('height'))   
    $('.emojionearea-editor').css('max-height',$(divid).css('height'))  
  //}, 1000);
    /*$('.emojionearea-search>input').keyup(function(){
        $(this).val($(this).val().toLowerCase());
    });*/
    
}

    
}