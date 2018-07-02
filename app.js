new Vue({
    el: '#app',
    data: {
        health: 100,
        ended: false,
        left: true
    },
    methods: {
        punch: function () {
            this.health -= 10;
            if (this.health <= 0 ) {
                this.ended = true;
            }
            const bag = document.querySelector('#bag');
            if (this.left == true) {
                bag.classList.add('swing-left');
                this.left = !this.left;
            } else {
                bag.classList.add('swing-right');
                this.left = !this.left;
            }
            
            bag.addEventListener('transitionend', function () {
                this.classList.remove('swing-left', 'swing-right');
            });
        },
        
        restart: function () {
            this.health = 100;
            this.ended = false;
        }
    },
    computed: {
        
    }
})