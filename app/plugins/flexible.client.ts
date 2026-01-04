export default defineNuxtPlugin(() => {
  const docEl = document.documentElement;
  const resizeEvt = 'resize';

  function setRemUnit() {
    const clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    const baseSize = Math.min(clientWidth / 375 * 100, 200);
    docEl.style.fontSize = baseSize + 'px';
  }

  if (document.readyState !== 'loading') {
    setRemUnit();
  } else {
    document.addEventListener('DOMContentLoaded', setRemUnit);
  }

  window.addEventListener(resizeEvt, setRemUnit);
  
  // Clean up on app unmount if necessary, but flexible usually stays for the session
  // window.removeEventListener(resizeEvt, setRemUnit);
})
