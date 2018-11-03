
	Slideshow.prototype = {
		init: function() {
			this.slides = this.el.querySelectorAll( ".slideshow .slide" );
            this.currentSlide = 0;
            this.nbreSlides = this.slides.length;
            this.playing = true;
            this.pauseBtn = document.getElementById("pauseBtn");
            this.nextBtn = document.getElementById("nextBtn");
            this.prevBtn = document.getElementById("prevBtn");
			this.timer = setInterval(next, 5000);
			
			this.autoSlide();
			this.playPause();	
		},
		next: function() {
            goToSlide(this.currentSlide+1);
        },
        nextOnclick = function() {
            pause();
            next();
        },
        prev: function() {
            goToSlide(this.currentSlide-1);
        },
        prevOnclick = function() {
            pause();
            prev();
        },
        goToSlide: function(n) {
            this.slides[this.currentSlide].className = 'slide';
            this.currentSlide = (n + this.nbreSlides) % this.nbreSlides;
            this.slides[this.currentSlide].className = 'slide active';
        },
		autoSlide: function() {
			var self = this;
			self.timer = setInterval(function() {
				self.index++;
				if( self.index == self.slides.length ) {
					self.index = 0;
				}
				self.slideTo( self.index );
				
			}, 5000);
		},
		pause: function() {
            this.pauseBtn.innerHTML = 'Play';
            this.playing = false;
            clearInterval(this.timer);
        },
        play: function() {
            this.pauseBtn.innerHTML = 'Pause';
            this.playing = true;
            this.timer = self.timer();
        },
        playPause = function(){
            if(this.playing){
                pause();
            }else{
                play();
            }
        }		
	};
	
