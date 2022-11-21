export const RenderedName = (item = { name: "Foo", shortname: "" }) =>
    item.shortname.trim().length > 0 ? item.shortname : item.name
;
