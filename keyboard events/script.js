window.addEventListener("keypress", (event) => {
  const insert = document.getElementById("insert");
  insert.innerHTML = "";

  const keyCodes = {
    "event.key": event.key === " " ? "Space" : event.key,
    "event.keyCode": event.keyCode,
    "event.code": event.code,
  };

  for (let key in keyCodes) {
    const div = document.createElement("div");
    div.className = "key";

    const value = document.createTextNode(keyCodes[key]);
    div.appendChild(value);

    const small = document.createElement("small");
    const keyValue = document.createTextNode(key);
    small.appendChild(keyValue);

    insert.appendChild(div);
  }
});
