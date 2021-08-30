<template>
  <nav>
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/global/logo.svg" width="40" />
        </router-link>
      </div>
      <div class="links" :class="{ active: isActive }">
        <ul>
          <router-link to="/" exact>Home</router-link>
          <router-link to="/Cart">Cart</router-link>
          <a href="#">Help?</a>
        </ul>
      </div>
      <div
        class="burger"
        @click="isActive = !isActive"
        :class="{ active: isActive }"
      >
        <div class="line-1"></div>
        <div class="line-2"></div>
        <div class="line-3"></div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  min-height: 10vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  backdrop-filter: blur(8px);

  .container {
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      img {
        filter: invert(1);
        opacity: 0.9;
      }
    }

    .links {
      width: 50%;
      min-height: 10vh;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;

      ul {
        width: 50%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        a {
          padding: 7px 14px;
        }

        .router-link-active {
          border: 1px solid currentColor;
        }
      }
    }

    .burger {
      padding: 5px;
      border: 1px solid currentColor;
      display: none;
      cursor: pointer;
      z-index: 3;

      * {
        transition: all 0.3s ease-in-out;
      }

      div {
        width: 25px;
        height: 1px;
        margin: 5px;
        background-color: currentColor;
      }
    }
  }
}

@media (max-width: 768px) {
  nav {
    .container {
      .logo {
        img {
          width: 25px;
        }
      }

      .links {
        position: absolute;
        top: 0vh;
        right: -50vw;
        height: 100vh;
        width: 50vw;
        background-color: currentColor;
        transition: all 0.3s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;

        &.active {
          right: 0;
        }

        ul {
          width: 100%;
          height: 60%;
          flex-direction: column;

          a {
            color: #050505;
          }
        }
      }

      .burger {
        display: inline-block;

        &.active {
          color: #050505;

          .line-1 {
            transform: rotate(45deg) translate(4px, 4px);
          }
          .line-2 {
            opacity: 0;
          }
          .line-3 {
            transform: rotate(-45deg) translateY(-3px) translateX(4px);
          }
        }
      }
    }
  }
}
@media (max-width: 555px) {
  nav {
    .container {
      .links {
        right: -85vw;
        width: 85vw;
      }
    }
  }
}
</style>
