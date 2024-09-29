const disableHtmlElementsByClassName = (className) => {
  const inputs = document.getElementsByClassName(className);

  for (let i = 0; i < inputs.length; i += 1) {
    inputs[i].disabled = true;
  }
};

export default disableHtmlElementsByClassName;
