$(document).ready(function () {
  const languageSwitch = document.getElementById('lang');
  languageSwitch.addEventListener("click", () => toggleLanguage());
  let lan = null;

  const toggleLanguage = () => {
    lan = languageSwitch.innerHTML.toLowerCase();
    languageSwitch.setAttribute('href', `#${lan}`);
      fetch("js/language.json")
        .then(resp => resp.json())
        .then(data => {
          let navlinks = document.getElementsByClassName("navigation");
          Array.from(navlinks).forEach(
            (el, i) => (el.innerHTML = data[0][lan].navlinks[i])
          );
    
          let headers = document.getElementsByClassName("headers");
          Array.from(headers).forEach(
            (el, i) => (el.innerHTML = data[0][lan].headers[i])
          );
    
          let buttons = document.getElementsByClassName("buttons");
          Array.from(buttons).forEach(
            (el, i) => (el.innerHTML = data[0][lan].buttons[i])
          );
    
          let paragraph = document.getElementsByClassName("paragraph");
          Array.from(paragraph).forEach(
            el => (el.innerHTML = data[0][lan].paragraph)
          );
          
          let titles = $('.caption');
          Array.from(titles).forEach((el,i) => el.innerHTML = data[0][lan].titles[i]);

          let form = document.getElementsByClassName("form-label");
          Array.from(form).forEach((el, i) => el.innerHTML = data[0][lan].form[i]);
        
          let copyright = document.getElementsByClassName("copyright");
          Array.from(copyright).forEach(
            (el, i) => (el.innerHTML = data[0][lan].copyright)
        );
      });
    };
});