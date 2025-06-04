<template>
    <q-layout view="hHh lpR fFf">
        <q-header bordered class="bg-primary text-white" height-hint="98">
            <q-toolbar>
                <q-btn dense flat round icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" />

                <q-toolbar-title>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
                    </q-avatar>
                    人事阿呆
                </q-toolbar-title>

                <!-- <q-btn dense flat round icon="menu" @click="rightDrawerOpen = !rightDrawerOpen" /> -->
            </q-toolbar>

            <q-tabs align="center"> </q-tabs>
        </q-header>

        <q-drawer v-model="leftDrawerOpen" side="left" overlay bordered>
            <q-list style="min-width: 100px">
                <q-item clickable>
                    <q-item-section>
                        <router-link to="/">考勤预处理</router-link>
                    </q-item-section>
                </q-item>
                <q-item clickable>
                    <q-item-section>
                        <router-link to="/timeCalculator">时间计算器</router-link>
                    </q-item-section>
                </q-item>
                <q-separator />
            </q-list>
            <!-- drawer content -->
        </q-drawer>

        <!-- <q-drawer v-model="rightDrawerOpen" side="right" overlay bordered> -->
        <!-- drawer content -->
        <!-- </q-drawer> -->

        <q-page-container>
            <router-view />
        </q-page-container>

        <q-footer bordered class="bg-grey-8 text-white">
            <q-toolbar>
                <q-toolbar-title>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
                    </q-avatar>
                    <div></div>
                </q-toolbar-title>
            </q-toolbar>
        </q-footer>
    </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)
// const rightDrawerOpen = ref(false)
</script>
