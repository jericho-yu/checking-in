<template>
    <div class="q-pa-md q-gutter-md">
        <div class="row q-gutter-md">
            <div class="col">
                <q-uploader url="http://hr.niutoumamian.net:9900/rezip/upload" color="purple" label="选择压缩包"
                    field-name="f" flat bordered style="width: 100%" @uploaded="onUploaded" />
            </div>
        </div>
    </div>
</template>

<script setup>
const onUploaded = function () {
    location.href = "http://hr.niutoumamian.net:9900/upload/rezip/repacked.zip"
}
</script>
