import { data } from "./data.js";

const array = document.querySelector("#array")

const list = () => {

  data.map(({id, description, url, img}) => {

    const listItem = document.createElement('div');
    listItem.classList.add("list-item");
    listItem.style.backgroundImage =  `url(${img})`

    const link = document.createElement('a')

    link.classList.add("link-item")
    link.href = `${url}`
    link.target = "_blank"
    link.textContent = "Live Demo"

    // const link_2 = document.getElementsByClassName("link-item")
    // link.classList.add("link-item-code")
    // link.href = "https://github.com/ozgeonline/ozgeonline.github.io"
    // link.target = "_blank"
    // link.textContent = "Source Code"

  //  let parentDiv = link_2.parentNode;
  //  parentDiv.insertBefore(link,link_2);

    listItem.appendChild(link);
    // listItem.appendChild(link_2);
    array.appendChild(listItem);
  })
}
list()




