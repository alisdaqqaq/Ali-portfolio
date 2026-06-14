import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 80, 
            density: {
              enable: true,
              value_area: 1200,
            },
          },
          line_linked: {
            enable: true, 
            distance: 150,
            color: "#c084f5", 
            opacity: 0.15,
            width: 1,
          },
          move: {
            direction: "none",
            speed: 0.4, 
            enable: true,
            out_mode: "bounce", 
          },
          size: {
            value: 2,
          },
          opacity: {
            value: 0.3,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "grab", 
            },
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 0.4,
              },
            },
            push: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;