export const readTime = (str) => {
  let time = str.toString().slice(11, 19);
  let twelve = Number(time.slice(0, 2));
  if (twelve > 12) {
    return `${twelve - 12}:${time.slice(3, 5)} PM`;
  } else if (twelve === 12) {
    return `12:${time.slice(3, 5)} PM`;
  } else if (twelve === 0) {
    return `12:${time.slice(3, 5)} AM`;
  } else {
    return `${twelve}:${time.slice(3, 5)} AM`;
  }
};
