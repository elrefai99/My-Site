<script setup lang="ts">

</script>

<template>
    <div text="gray6" dark:text="#e8e8e8" w-full>
        <div flex flex-col md:flex md:flex-col md:text-center md:justify-center md:m10 md:p20> 
            <div justify-start text-center p2>
                <h1 font-bold text="7" md:text="10">Mohamed Mostafa</h1>
            </div>
            <div p3 text-center>
                <p>
                    I'm a software engineer having more than 4 years’ experience in web development as a <span font-bold>Backend developer</span> in addition to dealing with <span font-bold>AWS Lambda</span> and <span font-bold>Node.js</span>. Then I have taken a step forward in my career to be a <span font-bold>Frontend developer</span>, I aspire to reach my goals and develop myself by gaining experience through working in various environments and looking forward to everything new in the world of technology.
                </p>
            </div>
            <div flex items-center justify-center pt5 m2>
                <div text-10 mx1 my1 text-gray5 dark:text="#e8e8e8">
                    <a href="https://github.com/mohamed-elrefai">
                        <div i-akar-icons:github-fill dark:akar-icons:github-outline-fill />
                    </a>
                </div>
                <div text-10 mx3 my1 text-gray5 dark:text="#e8e8e8">
                    <a href="https://www.linkedin.com/in/mohamed-mostafa-b71a31244/">
                        <div i-akar-icons:linkedin-box-fill dark:i-akar-icons:linkedin-fill />
                    </a>
                </div>
            </div>
            <div grid md:grid-cols-2 justify-items-center text-center p5>
                <router-link to="/contact">
                    <div bg-white dark:bg-black p5 w="20rem" my3 rounded-xl>
                        <button text-center>Contact</button>
                    </div>
                </router-link>
                <a href="https://firebasestorage.googleapis.com/v0/b/start-d51cf.appspot.com/o/resume.pdf?alt=media&token=eef12632-054d-47ea-a4e1-5bc2f9a3aa1d" download>
                    <div bg-white dark:bg-black p5 w="20rem" w-full my3 rounded-xl>
                        <button>Download Resume</button>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div>

    </div>
</template>
