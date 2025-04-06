function addCustomButtonToChannelNames(): void {
  const channelNameElements = document.querySelectorAll<HTMLElement>('ytd-channel-name');

  channelNameElements.forEach((channelElem) => {
    // Avoid duplicate buttons
    if (channelElem.querySelector('.custom-channel-button')) return;

    const button = document.createElement('button');
    button.textContent = '$';
    button.className = 'custom-channel-button';
    button.style.marginLeft = '8px';
    button.style.padding = '4px 8px';
    button.style.fontSize = '12px';
    button.style.cursor = 'pointer';

    button.addEventListener('click', (e: MouseEvent) => {
      //TODO: add logic for tipping here
      /*
      
      */
      e.stopPropagation();
      alert(`Button clicked near channel: ${channelElem.textContent?.trim()}`);
    });

    channelElem.appendChild(button);
  });
}

// Set up observer for dynamic YouTube content
const observer = new MutationObserver(() => {
  addCustomButtonToChannelNames();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Initial scan
addCustomButtonToChannelNames();
