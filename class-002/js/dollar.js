var $ = jQuery = function(selector, context){
    return jQuery.fn.init(selector, context);
}

jQuery.fn = jQuery.prototype = {
    init: function(selector, context){
        selector = selector || document;
        context = context || document;
        if( selector.nodeType ){
            this[0] = selector;
            this.length = 1;
            this.context = selector;
            return this;
        }
        if( typeof selector === "string"){
            var e = context.getElementsByTagName(selector);
            for(var i = 0; i < e.length; i++){
                this[i] = e[i];
            }
            this.length = e.length;
            this.context = context;
            return this;
        }else{
            this.length = 0;
            this.context = context;
            return this;
        }
        return this;
    },
    html: function(val){
        jQuery.each(this, function(val){
            this.innerHTML = val;
        }, val)
    },
    ver: "1.0",
    size: function(){
        return this.length;
    }
}
jQuery.fn.init.prototype = jQuery.fn;

jQuery.each = function( object, callback, args){
    for(var i = 0; i < object.length; i++){
        callback.call(object[i], args);
    }
    return object;
}
