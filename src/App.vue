<template>
  <!-- the main div -->
  <div class="text-white font-text tracking-wide bg-black">
    <!-- header -->
    <header>
      <div class="countainer flex justify-between items-center flex-wrap gap-3">
        <p>Jonathan Specier</p>

        <div class="hidden sm:flex items-center gap-10 md:gap-44">
          <ul class="flex gap-6">
            <li class="nav-link">Article</li>
            <li class="nav-link">Chats</li>
            <li class="nav-link">Awards</li>
          </ul>
          <button class="btn">Get in touch</button>
        </div>

        <div class="sm:hidden">
          <img
            @click="toggleMenu()"
            class="cursor-pointer"
            src="./assets/images/Menu.svg"
            alt=""
          />
        </div>

        <div
          :class="[
            openMenu ? 'navbar' : ''
          ]"
          class="bar w-full h-0 overflow-hidden border-y-2 border-t-primary border-y-primary"
        >
          <ul class="flex flex-col gap-2 mt-1">
            <li @click="closeMenu()" class="nav-link">Article</li>
            <li @click="closeMenu()" class="nav-link">Chats</li>
            <li @click="closeMenu()" class="nav-link">Awards</li>
          </ul>
          <button @click="closeMenu()" class="btn my-2">Get in touch</button>
        </div>
      </div>
    </header>

    <!-- part 1 -->
    <div class="padding">
      <div class="countainer">
        <div class="md:max-w-[90%] lg:max-w-[70%]">
          <h2
            class="font-headings font-extrabold text-4xl leading-[50px] sm:text-5xl sm:leading-[60px] md:text-6xl md:leading-[90px]"
          >
            Helping companies build
            <span class="text-primary font-extrabold">better</span>, scalable
            software.
          </h2>
          <p class="text-secondary">
            Award-winning web developer and author, with over 15+ years of
            working experiene with fortune 500 companies like Apple, Google,
            Facebook, and more.
          </p>
        </div>
      </div>
    </div>

    <!-- part 2 -->
    <div class="padding">
      <div
        class="countainer grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-6"
      >
        <div class="flex justify-center">
          <img src="./assets/images/Logos/JP Morgan.svg" alt="" />
        </div>
        <div class="flex justify-center">
          <img src="./assets/images/Logos/Samsung.svg" alt="" />
        </div>
        <div class="flex justify-center">
          <img src="./assets/images/Logos/Tinder.svg" alt="" />
        </div>
        <div class="flex justify-center">
          <img src="./assets/images/Logos/Verizon.svg" alt="" />
        </div>
        <div class="flex justify-center">
          <img src="./assets/images/Logos/Visa.svg" alt="" />
        </div>
        <div class="flex justify-center">
          <img src="./assets/images/Logos/Walmart.svg" alt="" />
        </div>
      </div>
    </div>

    <!-- part 3 -->
    <div class="padding">
      <div class="countainer grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div class="flex flex-col text-gap">
          <div class="rounded-md overflow-hidden">
            <img src="./assets/images/Spense.png" alt="" />
          </div>
          <div
            class="flex items-center gap-3 hover:gap-5 transition-all ease-linear duration-100 cursor-pointer"
          >
            <a class="font-bold text-lg">Yalpcamp.com </a>
            <i class="fa-solid fa-arrow-right-long text-primary text"></i>
          </div>
          <p class="text-secondary">
            Allowing backpack travelers to perfectly plan their trip through an
            open-source platform similar to TripAdvisor. With over 1m MAU,
            YelpCamp has been the crowd's favourite in 2021.
          </p>
        </div>
        <div class="flex flex-col text-gap">
          <div class="rounded-md overflow-hidden">
            <img src="./assets/images/YelpCamp.png" alt="" />
          </div>
          <div
            class="flex items-center gap-3 hover:gap-5 transition-all ease-linear duration-100 cursor-pointer"
          >
            <a class="font-bold text-lg">Spense.com </a>
            <i class="fa-solid fa-arrow-right-long text-primary text"></i>
          </div>
          <p class="text-secondary">
            Rethinking the way writers get paid, an open-source platform
            designed to help writers focus more on writing, and less on when and
            how thery'll get paid. Project in collaboration with Codewell.cc
          </p>
        </div>
      </div>
    </div>

    <!-- part 4 -->
    <div class="bg-tertiary padding">
      <div class="countainer grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div class="flex flex-col text-gap">
          <h3 class="font-headings text-2xl sm:text-3xl">
            A co-founder at one of the world's largest communities.
          </h3>
          <p class="text-secondary">
            The combined experience I have working at the top Fortune 500
            companies has allowed me to developer a skillset that helps me in
            not just development, but in every aspect of any business.
          </p>
          <p class="text-secondary">
            I'm proud to announce that I am now working at one of the world's
            largest communities teaching young minds about how to sell yourself
            as a developer and open them to a whole new world of opportuinities.
          </p>
        </div>
        <div class="flex flex-col text-gap">
          <p class="text-secondary">
            As a developer, you have everything available to you and all that's
            holding you back is yourself.
          </p>

          <p class="text-secondary">
            A qoute I live by perfectly illustrates what I mean.
          </p>

          <p class="text-secondary">
            "How big would you dream, if you knew you would't fail?" You've
            already gone through the hardest parts being a developer, it's time
            to elevate your skills and become a leader in something you're
            passionate about.
          </p>

          <p class="text-secondary">
            I'm happy to chat over coffee some time about how I can help your
            company.
          </p>
        </div>
      </div>
    </div>

    <!-- part 5  -->
    <div class="padding">
      <div class="countainer flex flex-col text-gap">
        <h3 class="font-headings text-2xl sm:text-3xl">
          Interested in working with me?
        </h3>
        <p class="text-secondary">
          I'm active on all social media platforms listed below, but you can
          also send me an email and I will get back to you within 24-48 hours.
        </p>
        <button class="btn">get in touch</button>
      </div>
    </div>

    <!-- footer -->
    <footer class="bg-tertiary">
      <div class="countainer flex items-center justify-between">
        <p class="font-headings">Jonathan Specier</p>
        <div class="flex gap-4 items-center">
          <i
            class="fa-brands fa-github text-2xl hover:text-primary cursor-pointer"
          ></i>
          <i
            class="fa-brands fa-linkedin text-2xl hover:text-primary cursor-pointer"
          ></i>
          <i
            class="fa-brands fa-twitter text-2xl hover:text-primary cursor-pointer"
          ></i>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const openMenu = ref(false);
const divElement = document.querySelector('.bar');
console.log(divElement);

function toggleMenu() {
  if(openMenu.value) {
    closeMenu();
    
  } else {
    openMenu.value = true;
  }
}
function closeMenu() {
  if (divElement) {
    divElement.classList.add('hidenav');
  }
  openMenu.value = false;
}

const performAction = () => {
  if (window.innerWidth > 640) {
    closeMenu();
  }
  return window.innerWidth > 640;
};

onMounted(() => {
  performAction();
  window.addEventListener("resize", performAction);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", performAction);
});
</script>
