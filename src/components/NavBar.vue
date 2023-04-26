<script setup lang="ts">
</script>

<template>
    <div w-full p2 >
        <div flex justify-center items-center  m2>
            <div hidden md:flex mx20 p1 text-center>
                <div md:block mx3>
                    <router-link to="/">
                        Home
                    </router-link>
                </div>
                <div md:block mx3>
                    <router-link to="/projects">
                        Project
                    </router-link>
                </div>
                <div text-5 mx1 my1 text-gray5 dark:text="#e8e8e8">
                    <a href="https://github.com/mohamed-elrefai">
                        <div i-akar-icons:github-fill dark:akar-icons:github-outline-fill />
                    </a>
                </div>
                <div text-5 mx3 my1 text-gray5 dark:text="#e8e8e8">
                    <a href="https://www.linkedin.com/in/mohamed-mostafa-b71a31244/">
                        <div i-akar-icons:linkedin-box-fill dark:i-akar-icons:linkedin-fill />
                    </a>
                </div>
                <div text-5 mx3 my1  text-gray5 dark:text="#e8e8e8">
                    <DarkMode />
                </div> 
                          
            </div>
            <div mx20 flex md:hidden >
                <div text-5 m2 text-gray5 dark:text="#e8e8e8">
                    <a href="https://github.com/mohamed-elrefai">
                        <div i-akar-icons:github-fill dark:akar-icons:github-outline-fill />
                    </a>
                </div>
                <div text-5 m2 text-gray5 dark:text="#e8e8e8">
                    <a href="https://www.linkedin.com/in/mohamed-mostafa-b71a31244/">
                        <div i-akar-icons:linkedin-box-fill dark:i-akar-icons:linkedin-fill />
                    </a>
                </div>
                <div text-5 m2 text-gray5 dark:text="#e8e8e8">
                    <DarkMode />
                </div> 
            </div> 
        </div>
    </div>
</template>
