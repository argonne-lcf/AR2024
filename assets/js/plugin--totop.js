/**
  * To Top
  *
  * @description
  * The quick brown fox jumps over the lazy dog.
  *
  * @param  config 
  *
  * @return quick brown fox jumps over the lazy dog
  */





// Config defaults and init
// ----------------------------------------------------------------------------

var toTop = function (config) {
    this.hook = config.hook || 'js-to-top';
    this.event = config.event || 'click';
}


toTop.prototype.init = function() {
    console.log('init');
    this.modifyHooks(this.hook, this.addListener.bind(this, this.event));
}





// Shared methods
// ----------------------------------------------------------------------------

toTop.prototype.modifyHooks = function(hook, func) {
  var elem = document.getElementsByClassName(hook); 
  func(elem[0]);
}


toTop.prototype.addListener = function(event, elem) {
    console.log('addListener');
    elem.addEventListener(event, function() {
        this.scrollUp();
    }.bind(this), false);
}


toTop.prototype.scrollUp = function() {
    console.log('scrollUp');
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; 
}