<script setup lang="ts">

</script>

<template>
    <div  p10 text="gray5" dark:text="#e8e8e8">
        <div grid grid-cols-1 md:grid-cols-4>
            <div v-for="data in LinksProjects">
                <div font="400" py2 my2 md:mx3 p3 bg="#fff" dark:bg="#101010" rounded>
                    <div text="center 2xl" font-bold m2 border-b-2 my3>
                        <router-link :to="{ name: 'project', params: { id: data.id } }">
                            <h1>{{ data.name }}</h1>
                        </router-link>
                    </div>
                    <div>
                        <div p2 h="80px">
                            <p>{{ data.supDescription }}</p>
                        </div>
                        <router-link :to="{ name: 'project', params: { id: data.id } }">
                            <div w-full bg="#e8e8e8" text-center dark:bg="#202020" my3 p2 rounded>
                                    <p>See Details</p>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
