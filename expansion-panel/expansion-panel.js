// creates the expansion panel element
createExpansionPanel = (title, titles, contents) => {
  const parent = document.getElementById('expansion-panel');
  if (!parent) {
    console.error('cannot find required element with id "expansion-panel"');
    return;
  }
  // add title if present
  if (title) {
    const titleContainer = document.createElement('h1');
    titleContainer.textContent = title;
    titleContainer.style.textAlign = 'center';
    parent.append(titleContainer);
  }
  titles.forEach((title, i) => {
    const expContainer = document.createElement('div');
    expContainer.classList.add('panel');
    expContainer.setAttribute('index', `${i}`);

    const header = document.createElement('div');
    header.classList.add('panel-header');
    header.textContent = title;
    const content = document.createElement('div');
    content.classList.add('panel-content');
    content.textContent = contents[i];

    expContainer.append(header);
    expContainer.append(content);

    parent.append(expContainer);

    header.onclick = togglePanelHeader;
    content.onclick = closePanelContent;
  });
}

togglePanelHeader = (event) => {
  const panelContent = event.target.nextElementSibling;
  // determine if the panel is being opened or closed
  const isOpen = panelContent.classList.contains('open');
  const nodes = document.getElementsByClassName('panel-content');
  // close all open panels
  for (const node of nodes) {
    node.classList.remove('open');
    node.style.maxHeight = null;
  }
  if (isOpen) {
      panelContent.style.maxHeight = null;
      panelContent.classList.remove('open');
      event.target.classList.remove('open');
    } else {
      panelContent.style.maxHeight = panelContent.scrollHeight + "px";
      panelContent.classList.add('open');
      event.target.classList.add('open');
  }
}

closePanelContent = (event) => {
  const panelContent = event.target;
  panelContent.style.maxHeight = null;
  panelContent.classList.remove('open');
  event.target.previousElementSibling.classList.remove('open');
}
