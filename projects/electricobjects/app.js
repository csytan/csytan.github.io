// Helper functions
function getJSON(url, callback) {
    // Wrapper that fetches JSON using proxy (https://jsonp.afeld.me/) as
    // JSONP & CORS is not supported on external domains:
    var req = new XMLHttpRequest();
    req.addEventListener('load', function() {
        var data = JSON.parse(this.responseText);
        callback(data);
    });            
    req.open('GET', 'https://jsonp.afeld.me/?url=' + encodeURIComponent(url));
    req.send();
}


// Image pre-loading directive
Vue.directive('img', function(url) {
    var el = this.el;
    
    // Add loading class to container
    var container = el.parentNode;
    container.classList.add('img-loading');
    
    function loaded() {
        el.src = url;
        el._img = null;
        container.classList.remove('img-loading');
    };
    
    // Pre-load image
    var img = new Image();
    img.onload = loaded;
    img.onerror = loaded;
    img.src = url;
    
    // Attach img to dom so it doesn't get garbage collected
    el._img = img;
});


// Initialize components
var gallery = new Vue({
    el: '.gallery',
    data: {
        url: 'https://open-api.electricobjects.com/v4/artworks',
        offset: 0,
        loading: false,
        finished: false,
        images: []
    },
    ready: function() {
        var self = this;
        
        // Load images
        self.load(0);
        
        // Infinite scrolling
        window.addEventListener('scroll', function() {
            var bottom = document.body.scrollHeight - document.body.clientHeight;
            if (!self.loading && window.pageYOffset >= bottom) {                
                self.load(self.offset + 20);
            }
        });
    },
    methods: {
        load: function(offset) {
            // Loads more images
            var self = this;
            var url = self.url + '?offset=' + offset;
            var logo = document.querySelector('.logo');
            
            self.loading = true;
            logo.classList.add('logo-loading');
            
            getJSON(url, function(data) {
                data.forEach(function(image) {
                    self.images.push(image);
                });
                self.offset = offset;
                self.loading = false;
                self.finished = data.length < 15;
                logo.classList.remove('logo-loading');
            });
        },
        showModal: function(image) {
            modal.image = image;
            modal.show();
        },
        imgURL: function(image) {
            return image.static_previews[3].url;
        }
    }
});


var modal = new Vue({
    el: '.modal',
    data: {
        image: null,
        favorites: []
    },
    methods: {
        show: function() {            
            // Disable background scrolling when modal is open
            document.body.style.overflow = 'hidden';            
            
            // Load image favorites
            var self = this;
            self.favorites = [];
            var url = 'https://open-api.electricobjects.com/v4/artworks/'
                + self.image.id + '/users/favorited';
            getJSON(url, function(data) {
                self.favorites = data;
            });
        },
        hide: function() {
            this.image = null;
            document.body.style.overflow = 'auto';
        },
        avatar: function(user) {
            return user.avatar_images[1].url;
        },
        showRecommended: function() {
            gallery.url = 'https://open-api.electricobjects.com/v4/artworks/' +
                this.image.id + '/recommended';
            gallery.images = [];
            gallery.load(0);
            this.hide();
            window.scrollTo(0, 0);
        }
    },
    computed: {
        imgURL: function() {
            var animated = this.image.animated_previews;
            if (animated.length) {
                return animated[2].url;
            }
            return this.image.static_previews[5].url;
        },
        timeAgo: function() {
            var created = new Date(this.image.created_at);
            var now = new Date();
            var seconds = Math.floor((now - created) / 1000);
            var minutes = Math.floor(seconds / 60);
            var hours = Math.floor(minutes / 60);
            var days = Math.floor(hours / 24);
            if (days > 1) {
                return days + ' days ago';
            } else if (hours > 1) {
                return hours + ' hours ago';
            } else if (minutes > 1) {
                return minutes + ' minutes ago';
            }
            return seconds + ' seconds ago';
        }
    }
});

