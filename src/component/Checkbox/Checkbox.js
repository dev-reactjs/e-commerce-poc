import React from "react";
import "./../Checkbox/Checkbox.css";
import { Checkbox } from "antd";

const CategoryBox = ({ checkboxFilter, onChange }) => {
  return (
    <div>
      <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
        {checkboxFilter.map((item, index) => (
          <Checkbox className="checkbox" level={2}
            value={item.item}   >
            {item.item}
          </Checkbox>
        ))}
      </Checkbox.Group>
    </div>
  );
};
export default CategoryBox;
