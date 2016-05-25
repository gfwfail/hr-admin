<style lang="scss">

#particles-js {
    float: left;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -99;
}

.login-box-body {
    background: rgba(0, 0, 0, 0.4) !important;
}

.btn {
    transition: all 0.2s ease;
}

</style>

<template>

<div id="particles-js">
</div>
<div class="login-box">
    <div class="login-logo">
        <a href="/">
        </a>
    </div>
    <div class="login-box-body">
        <p class="login-box-msg">Welcome Back!</p>
        <div class="alert alert-danger password-invalid" role="alert" style="display: none;">Incorrect email or password.</div>
        <div class="alert logining" role="alert" style="display: none;">Authenticating...</div>
        <div class="alert not-logined" role="alert">You have not logged in.</div>
        <form method="POST" accept-charset="UTF-8" class="form-signin" _lpchecked="1">
            <div class="form-group has-feedback">
                <input type="email" class="form-control" placeholder="Email" name="email" autofocus="autofocus" autocomplete="off" style="cursor: auto; background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=&quot;);"> <span class="glyphicon glyphicon-envelope form-control-feedback"></span> </div>
            <div class="form-group has-feedback">
                <input type="password" class="form-control" placeholder="Password" name="password" autocomplete="off" style="cursor: auto; background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=&quot;);"> <span class="glyphicon glyphicon-lock form-control-feedback"></span> </div>
            <div class="row">
                <div class="col-xs-6"> <a v:link="/session/forgot" class="forgot">Forgot your password</a> </div>
                <div class="col-xs-6 text-right" style="color:#454545">
                    <input type="checkbox">Remember me </div>
            </div>
            <a v-link="'/app/create-survey'" type="button" class="btn btn-primary btn-block" style="margin-top:55px">Log In</a>
            <div class="text-center" style="margin-top:30px">
                <p style="margin-bottom:0">Don't have a login?</p>
                <div> <a class="reg" href="#!/signup">Try T for free </a> <i class="fa fa-angle-right"></i> </div>
            </div>
        </form>
    </div>
</div>

</template>

<script>

export default {
    replace: false,
    ready() {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
  
    }

}

</script>
