const COLOR_RED = "#eb2940";
const COLOR_WHITE = "#f7fafe";
const DURATION_MULTIPLIER = 20;

const button = document.querySelector(".btn-like");

const moTimeline = new mojs.Timeline();
const moScaleCurve = mojs.easing.path("M0 100H15.5C51 54.5 14.5 7.5 100 0");

const moTween1 = new mojs.Burst({
  parent: button,
  angle: { 0: 45 },
  y: -10,
  count: 8,
  radius: 130,
  children: {
    shape: "circle",
    radius: 28,
    fill: [COLOR_RED, COLOR_WHITE],
    duration: 60 * DURATION_MULTIPLIER
  }
});

const moTween2 = new mojs.Tween({
  duration: 90 * DURATION_MULTIPLIER,
  onUpdate: (progress) => {
    const moScaleProgress = moScaleCurve(progress);
    button.style.transform = `translate(-50%, -50%) scale3d(${moScaleProgress}, ${moScaleProgress}, 1)`;
  }
});

moTimeline.add(moTween1, moTween2);

var text = document.querySelector('.text');

button.addEventListener("click", () => {
  if (button.classList.contains("liked")) {
    button.classList.remove("liked");
    text.innerText = "Click my heart to make it yours";
  } else {
    moTimeline.play();
    button.classList.add("liked");
    text.innerText = "You Clicked Yay Love you too";
  }
  
});



window.addEventListener('load', () => {
    textAnim()
    smallHeartAnim()
  });
  

  const total = 13
  const container = document.querySelector('.smallHearts')
  for (var i = 0, span; i < total; i++) {
    span = document.createElement('span')
    span.className = 'smallHeart'
    container.appendChild(span)
  }
  
  function textAnim() {
    const tl = gsap.timeline()
    tl.set('.s', {
      opacity: 1,
    })
      .from('.s', {
      duration: 0.4,
      delay: '3',
      ease: 'power1.inOut',
      scale: 0,
      y: 40,
      stagger: 0.04,
    })
  }
  

  function smallHeartAnim() {
    const tl = gsap.timeline()
    tl.set('.smallHeart', {
      opacity: 1,
    })
      .fromTo(
      '.smallHeart',
      {
        scale: 0,
        rotate: '-=25',
        y: '+=70',
      },
      {
        duration: 3.4,
        delay: '3.6',
        ease: 'slow.out',
        rotate: 'random(-20, 20)',
        scale: 'random(0.5, 1.5)',
        y: '0',
        x: Math.PI * 4,
        modifiers: {
          x: function (x) {
            return Math.sin(parseFloat(x)) * 15 + 'px'
          },
        },
        stagger: {
          each: 0.08,
          from: 'random',
        },
      }
    )
  }

  let icon = document.querySelector('ion-icon');
  icon.onclick = function(){
    icon.classList.toggle('active');
  }

  