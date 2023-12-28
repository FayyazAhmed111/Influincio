
gsap.registerPlugin(ScrollTrigger);

// Animation for .section-two 
gsap.fromTo(".content-container ", { y: "200%", opacity: 0 }, {
    y: "-10%", autoAlpha: 1, duration: 1,
    scrollTrigger: {
        trigger: ".section-two", start: "0% 60%", end: "50% 60%", scrub: 3.5
    }
})
gsap.fromTo(".card-right", { y: "500%", opacity: 0 }, {
    y: "0%", autoAlpha: 1, duration: 1,
    scrollTrigger: {
        trigger: ".section-two", start: "0% 60%", end: "50% 60%", scrub: 3.5
    }
})

gsap.fromTo(".card-section-two", { y: "500%", opacity: 0 }, {
    y: "45%", autoAlpha: 1, duration: 1,
    scrollTrigger: {
        trigger: ".section-two", start: "0% 60%", end: "50% 60%", scrub: 3.5
    }
})

gsap.fromTo(".content-section-image img", { y: "300%", opacity: 0 }, {
    y: "0%", autoAlpha: 1, duration: 1,
    scrollTrigger: {
        trigger: ".section-two", start: "0% 60%", end: "50% 60%", scrub: 3.5
    }
})
gsap.fromTo(".section-two .small-card ", { y: "600%", opacity: 0 }, {
    y: "0%", autoAlpha: 1, duration: 1,
    scrollTrigger: {
        trigger: ".section-two", start: "0% 60%", end: "50% 60%", scrub: 3.5
    }
})
gsap.fromTo(".section-two .medium-man ", { x: "-800%", opacity: 0, rotation: 360 }, {
    x: "0%", autoAlpha: 1, duration: 2.5, rotation: 0,
    scrollTrigger: {
        trigger: ".section-two", start: "0% 60%", end: "50% 60%", scrub: 3.5
    }
})
gsap.fromTo(".section-two .medium-woman ", { x: "800%", opacity: 0, rotation: 360 }, {
    x: "0%", autoAlpha: 1, duration: 2.5, rotation: 0,
    scrollTrigger: {
        trigger: ".section-two", start: "0% 60%", end: "50% 60%", scrub: 3.5
    }
});
gsap.fromTo(".section-two .trends  ", { x: "800%", opacity: 0, rotation: 360 }, {
    x: "0%", autoAlpha: 1, duration: 2.5, rotation: 0,
    scrollTrigger: {
        trigger: ".section-two", start: "0% 60%", end: "50% 60%", scrub: 3.5
    }
});
// Animation for .section-three
const tlSectionThree = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-three",
        start: "0% 60%",
        end: "50% 60%",
        scrub: 4,

    },
});

tlSectionThree.fromTo(".center-group-3  .companies-title",
    { y: "100%", autoAlpha: 0 },
    { y: "-10%", autoAlpha: 1, duration: 1, }
)

tlSectionThree.fromTo(".card-1",
    { y: "100%", autoAlpha: 0 },
    { y: "-10%", autoAlpha: 1, duration: 1, }
)
tlSectionThree.fromTo(".sec-3-img",
    { y: "100%", autoAlpha: 0 },
    { y: "-1%", autoAlpha: 1, duration: 1, }
)

// Animation for .section-four
gsap.fromTo(".Influencers-img ul ", { y: "600%", opacity: 0 }, {
    y: "0%", autoAlpha: 1, duration: 1,
    scrollTrigger: {
        trigger: ".section-four", start: "0% 60%", end: "50% 60%", scrub: 3.5
    }
})

gsap.fromTo(".center-group-four-head", { y: "200%", opacity: 0 }, {
    y: "0%", autoAlpha: 1, duration: 1,
    scrollTrigger: {
        trigger: ".section-four", start: "0% 60%", end: "50% 60%", scrub: 3.5
    }
})

gsap.fromTo(".right-img", { y: "300%", opacity: 0 }, {
    y: "0%", autoAlpha: 1, duration: 1,
    scrollTrigger: {
        trigger: ".section-four", start: "0% 60%", end: "50% 60%", scrub: 3.5
    }
})

gsap.fromTo(".small-imgs div:nth-child(1)", { y: "500%", opacity: 0 }, {
    y: "5%", autoAlpha: 1, duration: 1,
    scrollTrigger: {
        trigger: ".section-four", start: "0% 60%", end: "50% 60%", scrub: 3.5
    }
})

gsap.fromTo(".small-imgs div:nth-child(2)", { y: "500%", opacity: 0 }, {
    y: "0%", autoAlpha: 1, duration: .5,
    scrollTrigger: {
        trigger: ".section-four", start: "0% 60%", end: "50% 60%", scrub: 3.5
    }
})

gsap.fromTo(".small-imgs div:nth-child(3)", { y: "500%", opacity: 0 }, {
    y: "0", autoAlpha: 1, duration: .5,
    scrollTrigger: {
        trigger: ".section-four", start: "0% 60%", end: "50% 60%", scrub: 3.5
    }
})

gsap.fromTo(".small-imgs div:nth-child(4)", { y: "600%", opacity: 0 }, {
    y: "10%", autoAlpha: 1, duration: .5,
    scrollTrigger: {
        trigger: ".section-four", start: "0% 60%", end: "50% 60%", scrub: 3.5
    }
})

gsap.fromTo(".small-imgs div:nth-child(5)", { y: "500%", opacity: 0 }, {
    y: "-25%", autoAlpha: 1, duration: .5,
    scrollTrigger: {
        trigger: ".section-four", start: "0% 60%", end: "50% 60%", scrub: 3.5
    }
})

gsap.fromTo(".small-imgs div:nth-child(6)", { y: "500%", opacity: 0 }, {
    y: "5%", autoAlpha: 1, duration: .5,
    scrollTrigger: {
        trigger: ".section-four", start: "0% 60%", end: "50% 60%", scrub: 3.5
    }
})

// Animation for .section-five
gsap.fromTo(".section-five .companies-title", { y: "100%", autoAlpha: 0 }, {
    y: "0%", autoAlpha: 1, duration: 1,
    scrollTrigger: {
        trigger: ".section-five ", start: "0% 60%", end: "50% 60%", scrub: 3.5
    }
})
gsap.fromTo(".section-five .card", { y: "100%", autoAlpha: 0 }, {
    y: "0%", autoAlpha: 1, duration: 1,
    scrollTrigger: {
        trigger: ".section-five ", start: "5% 60%", end: "50% 60%", scrub: 3.5
    }
})

gsap.fromTo(".section-five .sec-5-img img", { y: "100%", autoAlpha: 0 }, {
    y: "0%", autoAlpha: 1, duration: 1,
    scrollTrigger: {
        trigger: ".section-five ", start: "5% 60%", end: "50% 60%", scrub: 3.5
    }
})

gsap.fromTo(".section-five .sec-5-img img", { x: "100%", autoAlpha: 0 }, {
    x: "0%", autoAlpha: 1, duration: 1,
    scrollTrigger: {
        trigger: ".section-five ", start: "5% 60%", end: "50% 60%", scrub: 3.5
    }
})
gsap.fromTo(".section-five .schedule-sec-5", { x: "100%", autoAlpha: 0, rotation: 360 }, {
    x: "0%", autoAlpha: 1, duration: 1, rotation: 0,
    scrollTrigger: {
        trigger: ".section-five ", start: "5% 60%", end: "50% 60%", scrub: 3.5
    }
})


// Animation for .section-six
const tlSectionSix = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-six",
        start: "0% 60%",
        end: "50% 60%",
        scrub: 3,
    },
});

tlSectionSix.fromTo(".section-six .form-wrapper",
    { y: "100%", autoAlpha: 0 },
    { y: "0%", autoAlpha: 1, duration: 1, }
)
