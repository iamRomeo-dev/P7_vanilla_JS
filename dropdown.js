export const createDropdown = ({ $button, $list, values, onSelect }) => {
  values.forEach((value) => {
    const $option = document.createElement("button");
    $option.textContent = value;
    $option.addEventListener("click", () => {
      onSelect(value);
    });
    $list.appendChild($option);
  });

  $list.style.display = "none";

  $button.addEventListener("click", () => {
    if ($list.style.display === "none") {
      $list.style.display = "grid";
    } else {
      $list.style.display = "none";
    }
  });
};
