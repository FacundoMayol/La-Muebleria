<template>
    <div class="mx-3 mt-8 mb-5">
        <div ref="slider"></div>
    </div>
</template>

<script>
export default {
    props: {
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        start: {
            type: Number,
            default: function () {
                return this.min 
            }
        },
        end: {
            type: Number,
            default: function () {
                return this.max 
            }
        },
        snaps: {
            type: Array,
            default: function () {
                return []
            }
        },
        step: {
            type: Number,
            default: 1
        },
        prefix: {
            type: String,
            default: ''
        },
        suffix: {
            type: String,
            default: ''
        }
    },
    watch: {
        start: function (value) {
            this.$refs.slider.noUiSlider.set([value, null])
        },
        end: function (value) {
            this.$refs.slider.noUiSlider.set([null, value])
        }
    },
    mounted: function () {
        var options = {
            start: [this.start, this.end],
            connect: true,
            tooltips: true,
            format: wNumb({
                decimals: 3,
                thousand: '.',
                prefix: this.prefix,
                suffix: this.suffix
            })
        }
        var range = {
            'min': this.min,
            'max': this.max
        }
        if(this.snaps.length>0){
            this.snaps.forEach(element => {
                range[element/this.max*100+'%'] = element
            });
            options['snap'] = true
        }else {
            options['step'] = this.step
        }
        options['range'] = range
        noUiSlider.create(this.$refs.slider, options);
        this.$refs.slider.noUiSlider.on('change', this.sliderChange)
    },
    methods: {
        sliderChange: function (value, handle, unencoded) {
            if(handle == 0){
                this.$emit('update:start', unencoded[handle])
            }else{
                this.$emit('update:end', unencoded[handle])
            }
        }
    }
}
</script>

<style lang="scss">
.noUi-target {
    @apply border-none bg-gray-400 shadow-none;
}
.noUi-handle {
    @apply border-none rounded-full bg-orange-500 cursor-pointer shadow-none;
}
.noUi-connect {
    @apply bg-orange-400;
}
.noUi-horizontal {
    height: 3px;    
}
.noUi-horizontal .noUi-handle {
    width: 14px;
    height: 14px;
    right: -7px;
    top: -6px;
}
.noUi-handle:before,
.noUi-handle:after {
    all: initial;
}
.noUi-handle:after {
    all: initial;
}
.noUi-tooltip {
    @apply p-0 bg-transparent text-orange-500 tracking-tighter text-sm rounded-none border-none;
}
</style>