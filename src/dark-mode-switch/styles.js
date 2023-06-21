export const styles = `
.css-cookbook-defs {
  display: none;
}

.switch {
  --animation-time: 1000ms;
  --transition-time: 500ms;
  display: flex;
  cursor: pointer;
  background-color: #4d85b6;
  fill: #fff;
}
@media (prefers-reduced-motion) {
  .switch {
    --animation-time: 0;
    --transition-time: 0;
  }
}
@keyframes switchTurnOn {
  from {
    background-color: #4d85b6;
  }
  60% {
    background-color: #191f2f;
  }
  to {
    background-color: #191f2f;
  }
}
@keyframes switchTurnOff {
  from {
    background-color: #191f2f;
  }
  60% {
    background-color: #4d85b6;
  }
  to {
    background-color: #4d85b6;
  }
}
.switch .background {
  position: absolute;
}
.switch .background .background-shades {
  transform: translateX(0);
}
@keyframes shadesTurnOn {
  from {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10.2em);
  }
  to {
    transform: translateX(10em);
  }
}
@keyframes shadesTurnOff {
  from {
    transform: translateX(10em);
  }
  50% {
    transform: translateX(-0.2em);
  }
  to {
    transform: translateX(0);
  }
}
.switch,
.switch .background,
.switch .shadow-container {
  width: 10em;
  height: 4em;
  border-radius: 4em;
}
.switch .handle {
  display: block;
  width: 3em;
  height: 3em;
  margin: 0.5em;
  border-radius: 50%;
  background-color: #eecb55;
  box-shadow: -1px -3px 2px 0px rgba(0, 0, 0, 0.5) inset, 1px 2px 2px 1px rgba(255, 255, 255, 0.69) inset;
}
@keyframes handleTurnOn {
  from {
    transform: translateX(0);
    background-color: #eecb55;
  }
  50% {
    transform: translateX(6.2em);
    background-color: #ccc;
  }
  to {
    transform: translateX(6em);
    background-color: #ccc;
  }
}
@keyframes handleTurnOff {
  from {
    transform: translateX(6em);
    background-color: #ccc;
  }
  50% {
    transform: translateX(-0.2em);
    background-color: #eecb55;
  }
  to {
    transform: translateX(0);
    background-color: #eecb55;
  }
}
.switch .clouds .cloud-outer {
  fill: #dee8f1;
}
.switch .clouds .cloud-inner {
  fill: #fefeff;
}
@keyframes cloudsTurnOn {
  from {
    transform: translateY(0);
  }
  50% {
    transform: translateY(5em);
  }
  to {
    transform: translateY(5em);
  }
}
@keyframes cloudsTurnOff {
  from {
    transform: translateY(5em);
  }
  50% {
    transform: translateY(-0.2em);
  }
  to {
    transform: translateY(0);
  }
}
.switch .craters {
  fill: #999;
  transition: var(--transition-time) opacity;
}
.switch.on {
  background-color: #191f2f;
  animation: switchTurnOn;
  animation-duration: var(--animation-time);
}
.switch.on .handle {
  transform: translateX(6em);
  background-color: #ccc;
  animation: handleTurnOn;
  animation-duration: var(--animation-time);
}
.switch.on .background-shades {
  transform: translateX(10em);
  animation: shadesTurnOn;
  animation-duration: var(--animation-time);
}
.switch.on .clouds {
  transform: translateY(5em);
  animation: cloudsTurnOn;
  animation-duration: var(--animation-time);
}
.switch.off {
  animation: switchTurnOff;
  animation-duration: var(--animation-time);
}
.switch.off .handle {
  transform: translateX(0);
  background-color: #eecb55;
  animation: handleTurnOff;
  animation-duration: var(--animation-time);
}
.switch.off .background-shades {
  animation: shadesTurnOff;
  animation-duration: var(--animation-time);
}
.switch.off .clouds {
  transform: translateY(0);
  animation: cloudsTurnOff;
  animation-duration: var(--animation-time);
}
.switch.off .craters {
  opacity: 0;
}
.switch .shadow-container {
  display: block;
  position: absolute;
  box-shadow: -4px 4px 5px 0px rgba(0, 0, 0, 0.4) inset, 3px -3px 5px -1px rgba(0, 0, 0, 0.17) inset;
}
.switch.init,
.switch.init .handle,
.switch.init .background-shades,
.switch.init .clouds {
  animation-duration: 0ms;
}
`;
