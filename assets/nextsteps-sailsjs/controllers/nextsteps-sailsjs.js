
steal(
        // List your Controller's dependencies here:
        'appdev',
//        'nextsteps-sailsjs/models/Projects.js',
//        'appdev/widgets/ad_delete_ios/ad_delete_ios.js',
//        'nextsteps-sailsjs/views/nextsteps-sailsjs/nextsteps-sailsjs.ejs',
function(){

    // Namespacing conventions:
    // AD.controllers.[application].[controller]
    if (typeof AD.controllers.nextsteps-sailsjs == 'undefined') AD.controllers.nextsteps-sailsjs = {};
    AD.controllers.nextsteps-sailsjs.nextsteps-sailsjs = AD.classes.UIController.extend({


        init: function (element, options) {
            var self = this;
            options = AD.defaults({
                    templateDOM: 'nextsteps-sailsjs/views/nextsteps-sailsjs/nextsteps-sailsjs.ejs',
            }, options);
            this.options = options;

            // Call parent init
            AD.classes.UIController.apply(this, arguments);


            this.dataSource = this.options.dataSource; // AD.models.Projects;

            this.initDOM();


        },



        initDOM: function () {

            this.element.html(can.view(this.options.templateDOM, {} ));

        },



        '.ad-item-add click': function ($el, ev) {

            ev.preventDefault();
        },


    });


});