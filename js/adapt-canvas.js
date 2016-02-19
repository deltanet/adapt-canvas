define(function(require) {

    var ComponentView = require('coreViews/componentView');
    var Adapt = require('coreJS/adapt');

    //var imported = require('components/adapt-canvas/js/imported');

    var Canvas = ComponentView.extend({

        preRender: function() {
            this.listenTo(Adapt, "audio:changeText", this.replaceText);
        },

        postRender: function() {
            this.setReadyStatus();
            this.$('.component-widget').on('inview', _.bind(this.inview, this));

            if (this.model.get('_reducedText') && this.model.get('_reducedText')._isEnabled) {
                this.replaceText(Adapt.audio.textSize);
            }

            this.draw();
        },

        inview: function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                if (visiblePartY === 'top') {
                    this._isVisibleTop = true;
                } else if (visiblePartY === 'bottom') {
                    this._isVisibleBottom = true;
                } else {
                    this._isVisibleTop = true;
                    this._isVisibleBottom = true;
                }

                if (this._isVisibleTop && this._isVisibleBottom) {
                    this.$('.component-widget').off('inview');
                    this.setCompletionStatus();
                }

            }
        },

        // Reduced text
        replaceText: function(value) {
            // If enabled
            if (this.model.get('_reducedText') && this.model.get('_reducedText')._isEnabled) {
                if(value == 0) {
                    this.$('.component-title-inner').html(this.model.get('displayTitle')).a11y_text();
                    this.$('.component-body-inner').html(this.model.get('body')).a11y_text();
                } else {
                    this.$('.component-title-inner').html(this.model.get('displayTitleReduced')).a11y_text();
                    this.$('.component-body-inner').html(this.model.get('bodyReduced')).a11y_text();
                }
            }
        },

        

        draw: function() {

            //console.log("Draw canvas!");

            console.log(this.model.get('_media').src);

            //var canvas, stage, exportRoot;

            /*
            
          var canvas = document.getElementById(this.model.get('_media').id);

          if (canvas.getContext) {
            var ctx = canvas.getContext("2d");

            ctx.fillStyle = "rgb(200,0,0)";
            ctx.fillRect (10, 10, 55, 50);

            ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
            ctx.fillRect (30, 30, 55, 50);
          }
          */
          /*

            canvas = document.getElementById("canvas");
            exportRoot = new lib.test1();

            stage = new createjs.Stage(canvas);
            stage.addChild(exportRoot);
            stage.update();
            stage.enableMouseOver();

            createjs.Ticker.setFPS(lib.properties.fps);
            createjs.Ticker.addEventListener("tick", stage);
            */

        }

    });



    Adapt.register('canvas', Canvas);

    return Canvas;

});
