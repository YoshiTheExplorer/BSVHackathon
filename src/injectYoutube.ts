import { fetchMapping } from './firebaseMap'

async function tipYouTuber(youtubeID: string, sats: number) {
  youtubeID = "@colinYT"
  const identityKey = await fetchMapping(youtubeID)

  if (!identityKey) {
    alert('No identity key registered for this YouTuber.')
    return
  }

  alert(`✅ Sent ${sats} sats to ${youtubeID}\n TXID: ${identityKey}`)
}

// Global popup element (only one)
const globalTipPopup = document.createElement('div');
globalTipPopup.style.display = 'none';
globalTipPopup.style.position = 'absolute';
globalTipPopup.style.background = '#fff';
globalTipPopup.style.border = '1px solid #ccc';
globalTipPopup.style.padding = '10px';
globalTipPopup.style.borderRadius = '4px';
globalTipPopup.style.boxShadow = '0 2px 6px rgba(0,0,0,0.15)';
globalTipPopup.style.zIndex = '10000';
globalTipPopup.style.fontSize = '14px';
globalTipPopup.style.minWidth = '180px';

// Input field
const satsInput = document.createElement('input');
satsInput.type = 'number';
satsInput.placeholder = 'Satoshis';
satsInput.style.width = '100px';
satsInput.style.marginRight = '6px';
satsInput.min = '1';

// Send button
const sendBtn = document.createElement('button');
sendBtn.textContent = 'Send Tip';
sendBtn.style.cursor = 'pointer';

// Append UI
globalTipPopup.appendChild(satsInput);
globalTipPopup.appendChild(sendBtn);
document.body.appendChild(globalTipPopup);

// Active channel name (set on click)
let activeChannelName: string | null = null;

// Send tip logic
sendBtn.onclick = () => {
  const sats = parseInt(satsInput.value || '0');
  if (!sats || sats <= 0 || !activeChannelName) {
    alert('Please enter a valid amount and select a channel');
    return;
  }
  console.log(sats)
  globalTipPopup.style.display = 'none';
  satsInput.value = '';

  //TODO: Get Wallet Address from the Channel Name


  //TODO: Implement Wallet Integration


};

// Close on outside click
document.addEventListener('click', (e) => {
  if (!globalTipPopup.contains(e.target as Node)) {
    globalTipPopup.style.display = 'none';
  }
});

// Attach $ buttons
function addCustomButtonToChannelNames(): void {
  const channelNameElements = document.querySelectorAll<HTMLElement>('ytd-channel-name');

  channelNameElements.forEach((channelElem) => {
    if (channelElem.querySelector('.custom-channel-button')) return;

    const button = document.createElement('button');
    button.textContent = '$';
    button.className = 'custom-channel-button';
    button.style.marginLeft = '8px';
    button.style.padding = '3px 6px';
    button.style.fontSize = '12px';
    button.style.cursor = 'pointer';

    button.onclick = (e) => {
      e.stopPropagation();

      const rect = button.getBoundingClientRect();
      globalTipPopup.style.top = `${rect.bottom + window.scrollY + 8}px`;
      globalTipPopup.style.left = `${rect.left + window.scrollX}px`;
      globalTipPopup.style.display = 'block';

      activeChannelName = channelElem.textContent?.trim() || 'Unknown';
    };

    channelElem.appendChild(button);
  });
}

// Observe for YouTube DOM changes
const observer = new MutationObserver(() => {
  addCustomButtonToChannelNames();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

addCustomButtonToChannelNames();
