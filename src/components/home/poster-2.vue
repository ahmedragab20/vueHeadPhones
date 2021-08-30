<template>
  <div class="poster-2 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="video">
            <video src="@/assets/statick/storm.mp4" muted autoplay loop>
              Your Browsser doesn't support the videos
            </video>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="context">
            <h2>Amet consectetur adipisicing</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              quasi, cumque in ad recusandae consectetur aspernatur repudiandae
              ipsam maxime.
            </p>
            <div class="info">
              <div>
                <i class="bi bi-headset-vr"></i>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Error rerum necessitatibus, natus pariatur quasi corporis!
                </p>
              </div>
              <div>
                <i class="bi bi-earbuds"></i>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Error rerum necessitatibus, natus pariatur quasi corporis!
                </p>
              </div>
              <div>
                <i class="bi bi-heart-half"></i>
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
.poster-2 {
  .video {
    display: flex;
    justify-content: center;
    align-items: center;

    video {
      width: 80%;
      height: 80%;
      object-fit: cover;
      border-radius: 50%;
      pointer-events: none;
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
  .poster-2 {
    .context {
      margin-top: 50px;
    }
  }
}
@media (max-width: 555px) {
  .poster-2 {
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
