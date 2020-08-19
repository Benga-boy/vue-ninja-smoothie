<template>
<footer class="footer page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text left">Ninja Smoothies</h5>
              </div>
              <div class="col l4 offset-l2 s12">
                <ul>
                  <li><a class="linkedin grey-text text-lighten-3" href="https://www.linkedin.com/in/benga-olasebikan/" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                  <li><a class="github grey-text text-lighten-3" href="https://github.com/Benga-boy" target="_blank"><ion-icon name="logo-github"></ion-icon></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            <p class="center"><strong>Benga Olasebikan</strong> created with Vue.js and Firebase</p>
            </div>
          </div>
        </footer>
            
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {}
  }
}
</script>

<style>
.footer {
  position: static;
  bottom: -2em;
}
.footer div ul li {
  display: inline-block;
}
.footer div ul li:last-child {
  margin-left: 2em;
}
.footer div ul li a {
  font-size: 2.8em;
}
.linkedin ion-icon:hover,
.linkedin ion-icon:active {
  color: #007bb5;
  transition: color 1s;
}
.github ion-icon:hover,
.github ion-icon:active {
  color: #000000;
  transition: color 1s;
}
.footer div p {
  margin-left: 2em;
}
</style>