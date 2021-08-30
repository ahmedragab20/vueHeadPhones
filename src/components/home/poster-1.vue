<template>
  <div class="poster-1 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 order-lg-last">
          <div class="image position-relative">
            <img src="@/assets/statick/1.jpg" class="img-fluid" />
            <img
              src="@/assets/statick/1-1.jpg"
              width="300"
              class="floated position-absolute"
            />
          </div>
        </div>
        <div class="col-lg-6 order-lg-first">
          <div class="context">
            <h2>Amet consectetur adipisicing</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              quasi, cumque in ad recusandae consectetur aspernatur repudiandae
              ipsam maxime.
            </p>
            <div class="info">
              <div>
                <i class="bi bi-app-indicator"></i>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Error rerum necessitatibus, natus pariatur quasi corporis!
                </p>
              </div>
              <div>
                <i class="bi bi-badge-ar"></i>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Error rerum necessitatibus, natus pariatur quasi corporis!
                </p>
              </div>
              <div>
                <i class="bi bi-award"></i>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Error rerum necessitatibus, natus pariatur quasi corporis!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.poster-1 {
  .image {
    .floated {
      right: -5%;
      bottom: -5%;
      box-shadow: 3px 3px 10px rgba(17, 17, 17, 0.5),
        -3px -3px 10px rgba(17, 17, 17, 0.5);
    }
  }

  .context {
    h2 {
      font-size: 3rem;
      letter-spacing: 2px;
    }
    .info {
      margin-top: 30px;

      div {
        margin: 10px 0;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        i {
          padding-right: 30px;
          padding-bottom: 30px;
          font-size: 2rem;
        }
        p {
          width: 60%;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .poster-1 {
    .context {
      margin-top: 50px;
    }
  }
}
@media (max-width: 555px) {
  .poster-1 {
    .image {
      .floated {
        width: 150px;
        right: -5px;
      }
    }
    .context {
      h2 {
        font-size: 2rem;
      }
      .info {
        div {
          p {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
