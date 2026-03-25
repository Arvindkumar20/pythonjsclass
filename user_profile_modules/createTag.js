export const createTag = (name, style) => {
  const tag = document.createElement(name);
  //   styling
  tag.style.color = style?.color;
  tag.style.border = style?.border;
  tag.style.background = style?.background;
  tag.style.padding = style?.padding;
  tag.style.margin = style?.margin;
  tag.style.width = style?.width;
  tag.style.height = style?.height;
  tag.style.borderRadius = style?.borderRadius;
  tag.style.display = style?.display;
  tag.style.alighItems = style?.alighItems;
  tag.style.justifyContent = style?.justifyContent;
  return tag;
};