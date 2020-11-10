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
            default: null
        },
        end: {
            type: Number,
            default: null
        },
        disabled: {
            type: Boolean,
            default: false
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
        start: function (newValue) {
            this.$refs.slider.noUiSlider.set([newValue?newValue:this.min, null])
        },
        end: function (newValue) {
            this.$refs.slider.noUiSlider.set([null, newValue?newValue:this.max])
        },
        min: function (newValue, oldValue) {
            if(newValue != oldValue){
                this.$refs.slider.noUiSlider.updateOptions({
                    range: {
                        'min': newValue,
                        'max': this.max
                    },
                })
                this.$emit('update:start', newValue)
                this.$emit('update:end', this.max)
            }
        },
        max: function (newValue, oldValue) {
            if(newValue != oldValue){
                this.$refs.slider.noUiSlider.updateOptions({
                    range: {
                        'min': this.min,
                        'max': newValue
                    },
                })
                this.$emit('update:start', this.min)
                this.$emit('update:end', newValue)
            }
        },
        disabled: function (newValue) {
            if(newValue)
                this.$refs.slider.setAttribute('disabled', true)
            else
                this.$refs.slider.removeAttribute('disabled')
        }
    },
    mounted: function () {
        var options = {
            start: [this.start?this.start:this.min, this.end?this.end:this.max],
            connect: true,
            tooltips: true,
            format: wNumb({
                decimals: 3,
                thousand: '.',
                prefix: this.prefix,
                suffix: this.suffix
            }),
            range: {
                'min': this.min,
                'max': this.max
            },
            step: this.step
        }
        noUiSlider.create(this.$refs.slider, options);
        this.$refs.slider.noUiSlider.on('change', this.sliderChange)
        if(this.disabled) this.$refs.slider.setAttribute('disabled', true)
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