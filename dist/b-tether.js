(function () {
    window.BTether = document.registerElement('b-tether', {
        prototype: Object.create(HTMLElement.prototype, {
            position: {
                enumerable: true,
                get: function () {
                    return this.getAttribute('position') || 'top left';
                }
            },
            target: {
                enumerable: true,
                get: function () {
                    return this.hasAttribute('target') ? document.querySelector(this.getAttribute('target')) : null;
                }
            },
            createdCallback: {
                enumerable: true,
                value: function () {
                }
            },
            setPosition: {
                enumerable: true,
                value: function () {
                    var target = this.target.getBoundingClientRect(), tip = this.tooltip;
                    tip.style.left = target.left + 'px';
                    tip.style.top = target.top + 'px';
                }
            }
        })
    });
}());