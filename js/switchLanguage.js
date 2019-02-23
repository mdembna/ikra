$(document).ready(function () {
    document.getElementById("pol").addEventListener("click", () => switchLanguage("polish"))
    // document.getElementById("eng").addEventListener("click", () => switchLanguage("english"));

const switchLanguage = (lan) => {
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
        //FORM
        // let form = document.getElementsByClassName("form");
        // Array.from(form).forEach((el, i) => el.innerHTML = data[0][lan].form[i]);
        //COPYRIGHT
        let copyright = document.getElementsByClassName("copyright");
        Array.from(copyright).forEach(
          (el, i) => (el.innerHTML = data[0][lan].copyright)
        );
      });
  };
});