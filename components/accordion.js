import { useState } from "react";
import classes from "./accordion.module.css";

function Accordion({ title, body }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className={classes.accordion}>
        <div
          className={classes.accordion_header}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div>{title}</div>
          <div>{isOpen ? "-" : "+"}</div>
        </div>
        {isOpen && <div className={classes.accordion_item}>{body}</div>}
      </div>
    </div>
  );
}
export default Accordion;
