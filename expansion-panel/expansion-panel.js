createExpansionPanel = (titles, contents) => {
  const parent = document.getElementById('expansion-panel');
  if (!parent) {
    console.error('cannot find required element with id "gallery"');
    return;
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
    content.onclick = togglePanelContent;
  });
}

function togglePanelHeader(event) {
  const panelContent = event.target.nextElementSibling;
  const isOpen = panelContent.classList.contains('open');
  const nodes = document.getElementsByClassName('panel-content');
  for (const node of nodes) {
    node.classList.remove('open');
    node.style.maxHeight = null;
  }
  
  if (isOpen) {
      panelContent.style.maxHeight = null;
      panelContent.classList.remove('open');
  } else {
      panelContent.style.maxHeight = panelContent.scrollHeight + "px";
      panelContent.classList.add('open');
  }
}

function togglePanelContent(event) {
  const panelContent = event.target;
  panelContent.style.maxHeight = null;
  panelContent.classList.remove('open');
}
