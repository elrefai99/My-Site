<script setup lang="ts">

</script>

<template>
    <div md:flex justify-around >
        <div w-full p="3rem">
            <div >
                <form>
                    <div flex flex-col my2>
                        <label for="username" text-gray-5 mb2 dark:text="#e8e8e8">Username</label>
                        <input type="text" w-full p2 rounded-md text-gray-5 dark:text="#e8e8e8" name="" value="">
                    </div>
                    <div flex flex-col my2>
                        <label for="email" text-gray-5 mb2 dark:text="#e8e8e8">Email</label>
                        <input type="email" w-full p2 rounded-md text-gray-5 dark:bg-black dark:text="#e8e8e8" name="" value="">
                    </div>
                    <div flex flex-col my2>
                        <label for="username" text-gray-5 mb2 dark:text="#e8e8e8">Send Text</label>
                        <textarea w-full p2 rounded-md text-gray-5 dark:bg-black dark:text="#e8e8e8" h="20vh"></textarea>
                    </div>
                    <button w-full my3 text-gray-5 bg-white dark:bg-gray5 h10 rounded-md>Send mail</button>
                </form>
            </div>
        </div>
        <div w-full p="3rem" text="5 gray-5">
            <div>
                <div text="5" p5 font-bold >
                    <h1>Phones And Area:</h1>
                </div>
                <div my3>
                    <div my3 flex >
                        <div flex p2 gap2>
                            <div mt1 i-carbon-phone />
                            <span>Phone:</span>
                        </div>
                        <div mx2 p2 dark:hover:bg-gray5  rounded-md>
                            <a href="tel:+201142314446"> 01142314446</a>
                        </div>
                    </div>
                    <div my3 flex>
                        <div p2 flex gap2>
                            <div mt1 i-carbon-email />
                            <span>E-mail: </span>
                        </div>
                        <div mx2 p2 dark:hover:bg-gray5 rounded-md>
                            <a href="mailto:mohamed.mostafa0699@gmail.com">mohamed.mostafa0699@gmail.com</a>
                        </div>
                    </div>
                    <div my3 grid md:grid-cols-2 grid-cols-1>
                        <div>
                            <div flex gap2>
                                <h1>Country:</h1>
                                <span>Egypt</span>
                            </div>
                        </div>
                        <div>
                            <div flex gap2>
                                <h1>
                                    City:
                                </h1>
                                <span>Banha</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>