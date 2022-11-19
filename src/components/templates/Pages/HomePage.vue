<script lang="ts">

import { Options, Vue } from 'vue-class-component';

@Options({
    components: {

    },
})
export default class HomeView extends Vue { }
</script>
<template>
    <div class=" flex justify-center items-center w-full h-full">
        <div class=" m-44" >
            <div class=" p-6 m-10">
                <div class=" text-3xl font-medium">
                    Hello, I'm Mohamed Mostafa.
                </div>
                <div class="text-center mt-2 text-gray-400">
                    Software Engineering
                </div>
                <router-link to="/about">
                    <button class=" bg-second_text text-second_bg p-5 mt-8 w-full rounded-md hover:bg-first_text font-medium text-xl">About me</button>
                </router-link>
                <div class="flex mt-1 justify-center items-center w-full">
                    <div class=" flex justify-between">
                        <div class="m-2 font-medium text-2xl cursor-pointer">
                            <a href="https://github.com/mohamed-elrefai">
                                <gitHub />
                            </a>
                        </div>
                        <div class="m-2 font-medium text-2xl cursor-pointer">
                            <a href="https://twitter.com/CodeElrefai">
                                <Twiter />
                            </a>
                        </div>
                        <div class="m-2 font-medium text-2xl cursor-pointer">
                            <a href="https://www.linkedin.com/in/mohamed-mostafa-b71a31244/">
                                <Linkedin />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>