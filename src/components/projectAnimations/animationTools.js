const REBIND_INTERVAL = 2000;

export class BindScroll {
    constructor($container, $car) {
        this.$container = $container;
        this.$car = $car;
        this.fixed = false;
        this.func = this.onScroll.bind(this);
        this.binded = false;

        this.offset = this.countOffset()
        this.height = this.countHeight()
        this.carHeight = this.countCarHeight()

        this.bind();
    }

    countOffset() {
        return Math.round(this.$container.getBoundingClientRect().y)
    }

    countHeight() {
        return Math.round(this.$container.getBoundingClientRect().height)
    }
    countCarHeight() {
        return Math.round(this.$car.getBoundingClientRect().height)
    }

    bind() {
        if (this.binded) {
            this.unbind();
        }
        window.addEventListener('scroll', this.func);
        this.binded = true;
    }

    unbind() {
        window.removeEventListener('scroll', this.func);
        this.binded = false;
    }

    onScroll(e) {
        this.offset = this.countOffset()

        const downBorder = -this.height + this.carHeight

        if (!this.fixed && (this.offset < 0 && this.offset > downBorder)) {
            this.$car.style.position = 'fixed'
            this.$car.style.top = 0
            this.$car.style.bottom = null
            this.fixed = true
        } else if (this.fixed && this.offset > 0) {
            this.$car.style.position = 'absolute'
            this.$car.style.top = 0
            this.$car.style.bottom = null
            this.fixed = false
        } else if (this.fixed && this.offset < downBorder) {
            this.$car.style.position = 'absolute'
            this.$car.style.top = null
            this.$car.style.bottom = 0
            this.fixed = false
        }
    }
}

export class BindScrollTimeline {
    constructor($container, $car, offsetCoefficients, binds) {
        this.$container = $container;
        this.$car = $car;
        this.offsetCoefficients = offsetCoefficients;
        this.binds = binds;

        this.eventsIndex = [];

        this.offset = this.countOffset();
        this.height = this.countHeight();
        this.binded = false;
        this.rebindInterval = null
        this.bind();
    }

    countOffset() {
        return Math.round(this.$container.getBoundingClientRect().top - document.body.getBoundingClientRect().top)
    }

    countHeight() {
        return Math.round(this.$container.getBoundingClientRect().height - this.$car.getBoundingClientRect().height)
    }

    rebind() {
        if (this.offset !== this.countOffset() ||
            this.height !== this.countHeight()
        ) {
            this.offset = this.countOffset();
            this.height = this.countHeight();
            this.bind();
        }
    }

    bind() {
        if (this.binded) {
            this.unbind();
        }
        let offsets = [];
        this.offsetCoefficients.forEach((coefficient) => offsets.push(new CSSUnitValue(this.offset + this.height * coefficient, 'px')))

        let scrollTimeline = new ScrollTimeline({
            source: document.scrollingElement,
            orientation: 'block',
            scrollOffsets: offsets
        })

        this.binds.forEach((bind) =>
            (bind.$elements).forEach(($element) =>
                this.eventsIndex.push(bindAnimation($element, bind.keyframes, scrollTimeline))));
        this.binded = true;
        this.rebindInterval = setInterval(this.rebind.bind(this), REBIND_INTERVAL + Math.floor(Math.random() * 1000));
    }

    unbind() {
        this.eventsIndex.forEach((ind) => document.removeEventListener('scroll', document._fixScrollListeners[ind]))
        if (this.rebindInterval !== null) {
            clearInterval(this.rebindInterval);
            this.rebindInterval = null;
        }
        this.binded = false;
    }
}


function bindAnimation($element, keyframes, scrollTimeLine) {
    $element.animate(
        keyframes,
        {
            duration: 1,
            fill: 'forwards',
            timeline: scrollTimeLine
        }
    )
    return document._fixScrollListeners.length - 1;
}
