import Item from "./Item";

export default function Accordion({ items }) {
  return (
    <div className="accordion">
      {items.map((item, i) => (
        <Item num={i} title={item.title} key={i}>
          {item.text}
        </Item>
      ))}
    </div>
  );
}
