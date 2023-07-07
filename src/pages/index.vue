<script setup lang="ts">
import { usePersonifyModalStore } from '@/store/modal/personify'
import avatar10 from '@images/avatars/avatar-10.png'
import discord from '@images/iconify-png/Discord.png'
import laptop from '@images/iconify-png/Laptop.png'
import lightbulb from '@images/iconify-png/Lightbulb.png'
import puzzle2 from '@images/iconify-png/puzzle-2.png'
import puzzle from '@images/iconify-png/puzzle.png'

const modalPersonifyStore = usePersonifyModalStore()
</script>

<template>
  <main>
    <section class="banner">
      <div class="mask">
        <h2>
          your brand.<br>
          your voice.<br>
          your <span>persona.</span><br>
        </h2>
        <div>
          <p>
            Generate content that <b>converts</b>. Content creation<br>
            with Rubi.AI is 10X faster, and it’s your brand and<br>
            your voice <b>every time</b>. Create unique personas to<br>
            identify with your target audiences in <b>less than 5 minutes!</b>
          </p>
          <VBtn
            color="white"
            @click="modalPersonifyStore.showModal = true"
          >
            Set Up Your Persona
          </VBtn>
        </div>
      </div>
    </section>
    <section class="content">
      <VBtn
        id="btn-new-content"
        size="large"
        :to="{ name: 'modules' }"
      >
        Create New Content
      </VBtn>
      <div class="row">
        <div class="card-action">
          <img :src="puzzle2">
          <h5 class="text-h5">
            New Campaign
          </h5>
          <p>
            Whether you're new or you're a power user, this article<br>
            will…
          </p>
          <VBtn
            color="primary"
            elevation="0"
            size="small"
          >
            Create
          </VBtn>
        </div>

        <div class="card-action">
          <img :src="puzzle">
          <h5 class="text-h5">
            Historical Content
          </h5>
          <p>
            Are you a new customer wondering how to get<br>
            started?
          </p>
          <VBtn
            color="primary"
            elevation="0"
            size="small"
          >
            Read More
          </VBtn>
        </div>

        <div class="card-action">
          <img :src="avatar10">
          <h5 class="text-h5">
            Create Persona
          </h5>
          <p>
            This article will show you how to expand the <br>functionality
            of...
          </p>
          <VBtn
            color="primary"
            elevation="0"
            size="small"
          >
            Read More
          </VBtn>
        </div>
      </div>
    </section>
    <section class="section-help">
      <img src="/images/gif/logo_loading.gif">
      <h3 class="text-h3">
        Hi, James! How can I help?
      </h3>
      <div class="ask-input">
        <AppTextField
          placeholder="ask a question.."
          bg-color="white"
          append-inner-icon="tabler-send"
        />
      </div>

      <p>
        Connect with Rubi.ai to tap into a wealth of inspiration and transform
        your ideas into remarkable content.
      </p>
    </section>
    <section class="content">
      <h3
        class="text-h3"
        style="margin-top: 105px"
      >
        What’s New
      </h3>
      <div class="row">
        <div class="card-action">
          <img :src="laptop">
          <h5 class="text-h5">
            NEW Dentist Collection
          </h5>
          <p>
            Expert tips & tools to improve your website or online<br>
            store using blog.
          </p>
          <VBtn
            color="primary"
            elevation="0"
            size="small"
          >
            Read More
          </VBtn>
        </div>

        <div class="card-action">
          <img :src="lightbulb">
          <h5 class="text-h5">
            Inspiration Center
          </h5>
          <p>
            inspiration from experts to help you start and grow<br>
            your big ideas.
          </p>
          <VBtn
            color="primary"
            elevation="0"
            size="small"
          >
            Read More
          </VBtn>
        </div>

        <div class="card-action">
          <img :src="discord">
          <h5 class="text-h5">
            Launch Event July 7th
          </h5>
          <p>
            A group of people living in the same place or having<br>
            a particular.
          </p>
          <VBtn
            color="primary"
            elevation="0"
            size="small"
          >
            Read More
          </VBtn>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
@import "@styles/responsive.scss";

.banner {
  background-image: url("/src/assets/images/pages/auth-background-illustration.png");
  background-size: cover;
  width: 100%;
  height: 568px;

  & .mask {
    background-image: url("/src/assets/images/pages/bubbles.png");
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 75px;

    @include media-query("lg") {
      background-image: none;
      flex-direction: column;
      gap: 0px;
      padding-top: 20px;
    }

    & h2 {
      font-family: "Bebas Neue";
      font-style: normal;
      font-weight: 400;
      font-size: 128px;
      line-height: 105px;

      /* Light/Solid Color/Extra/White */
      color: #ffffff;

      & span {
        color: rgb(var(--v-theme-rubi-red));
      }

      @include media-query("lg") {
        font-size: 80px;
        line-height: 90px;
      }

      @include media-query("md") {
        font-size: 60px;
        line-height: 60px;
      }

      @include media-query("sm") {
        font-size: 60px;
        line-height: 60px;
      }
    }
    & div {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 60px;
      gap: 30px;

      @include media-query("lg") {
        padding-top: 5px;
      }

      @include media-query("md") {
        padding-top: 5px;
      }

      @include media-query("sm") {
        padding-top: 5px;
      }

      & p {
        width: 442px;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #ffffff;
        text-align: center;
        padding-top: 10px;
        @include media-query("lg") {
          font-size: 20px;
        }
        @include media-query("md") {
          font-size: 11px;
          line-height: normal;
        }
      }

      & button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px;

        width: 217px;
        height: 48px;

        /* Light/Solid Color/Extra/White */
        background: #ffffff;

        color: #4b465c !important;

        /* Light/Gray/Gray - SM */
        box-shadow: 0px 2px 4px rgba(165, 163, 174, 0.3);
        border-radius: 6px;
      }
    }
  }
}

.content {
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @include media-query("md") {
    height: auto;
    padding-bottom: 30px;
  }

  .v-theme--light & {
    background-color: white !important;
  }

  & #btn-new-content {
    width: 212px;
    margin-top: 80px;
  }

  & .row {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @include media-query("md") {
      flex-direction: column;
    }

    & .card-action {
      border-color: rgba(var(--v-border-color), var(--v-border-opacity));
      border-style: solid;
      border-width: 1px;
      border-radius: 6px;
      height: 250px;
      width: 28%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;

      @include media-query("md") {
        width: 100%;
      }

      & svg {
        width: 58px;
      }

      & img {
        border-radius: 100%;
        width: 58px;
      }

      & p {
        text-align: center;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 22px;
      }

      & button {
        background: rgba(var(--v-theme-primary), 0.16) !important;
        color: rgba(var(--v-theme-primary)) !important;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 16px;
      }
    }
  }
}

.section-help {
  background-image: url("/src/assets/images/pages/auth-background-illustration.png");
  background-size: cover;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  & img {
    width: 100px;
  }

  & h3 {
    color: rgb(var(--v-theme-rubi-red));
    @include media-query("md") {
      text-align: center;
    }
  }

  & .ask-input {
    width: 500px;
    height: 38px;
    @include media-query("md") {
      width: 100%;
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  & p {
    color: white;
    text-align: center;
  }
}
</style>
