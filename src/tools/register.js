export const register = (component, type, content, customClasses = []) => {
  const className = `cookbook-components-${component}-${type}`;
  if (!document.getElementsByClassName(className).length) {
    const def = document.createElement(type);
    def.classList.add(className);
    if (customClasses.length) {
      customClasses.forEach((c) => def.classList.add(c));
    }
    def.innerHTML = content;
    document.body.prepend(def);
  }
};
