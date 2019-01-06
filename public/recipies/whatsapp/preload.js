const fixWhatsappSWUAgent = () => {
  window.navigator.serviceWorker.getRegistrations().then(registrations => {
    registrations.forEach(registration => registration.unregister());
  });
};
const main = () => {
  window.addEventListener("load", () => {
    fixWhatsappSWUAgent();
  });
};

main();
