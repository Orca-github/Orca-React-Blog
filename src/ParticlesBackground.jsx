import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      await loadFull(engine);
      //   await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  const particlesConfig = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: {
          value: "#ffffff"
          // value: "#0d47a1",

        },
        image: "url(/whact.jfif)",
         position: "50% 50%",
        repeat: "no-repeat",
        size: "cover",
        opacity: 1
      },
      backgroundMask: {
        composite: "destination-out",
        cover: {
          color: {
            value: {
              r: 41,
              g: 48,
              b: 63
            }
          },
          opacity: 0.55
        },
        enable: true
      },
      clear: true,
      fullScreen: {
        enable: true,
        zIndex: 0
      },
      detectRetina: true,
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: {
            enable: true,
            mode: "push"
          },
          onHover: {
            enable: true,
            mode: "bubble"
          },
          resize: {
            delay: 0.5,
            enable: true
          }
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 1,
            size: 50
          },
          push: {
            default: true,
            quantity: 4
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: "#0d47a1"

        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 1,
          width: 1
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out"
          },
          random: false,
          speed: 2,
          straight: false
        },
        number: {
          density: {
            enable: true,
            width: 1920,
            height: 1080
          },
          value: 80
        },
        opacity: {
          value: 1
        },
        shape: {
          type: "circle"
        },
        size: {
          value: {
            min: 1,
            max: 10
          }
        }
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      zLayers: 100,
      name: "Background Mask"
    }), [],);


  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={particlesConfig}
      />
    );
  }

  return <></>;
};
export default ParticlesBackground;


// const options = useMemo(
//   () => ({
//     background: {
//       color: {
//         value: "#0d47a1",
//         // value: "#ffffff",

//       },
//       image: 'url(/pure.jpg)',
//       position: "50% 50%",
//       repeat: "no-repeat",
//       size: "cover",
//       opacity: 1
//     },

//     fpsLimit: 120,
//     interactivity: {
//       events: {
//         onClick: {
//           enable: true,
//           mode: "push",
//         },
//         onHover: {
//           enable: true,
//           mode: "repulse",
//         },
//       },
//       modes: {
//         push: {
//           quantity: 4,
//         },
//         repulse: {
//           distance: 200,
//           duration: 0.4,
//         },
//       },
//     },
//     particles: {
//       color: {
//         value: "#ffffff",
//       },
//       links: {
//         color: "#ffffff",
//         distance: 150,
//         enable: true,
//         opacity: 0.5,
//         width: 1,
//       },
//       move: {
//         direction: "none",
//         enable: true,
//         outModes: {
//           default: "bounce",
//         },
//         random: false,
//         speed: 6,
//         straight: false,
//       },
//       number: {
//         density: {
//           enable: true,
//         },
//         value: 80,
//       },
//       opacity: {
//         value: 0.5,
//       },
//       shape: {
//         type: "circle",
//       },
//       size: {
//         value: { min: 1, max: 5 },
//       },
//     },
//     detectRetina: true,
//   }),
//   [],
// );