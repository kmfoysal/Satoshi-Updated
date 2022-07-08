import React from "react";

const FilterableTab = ({ id, tabIcon, title, active, setSelected }) => {
    return (
        <li className={active ? "portfolioMenu active" : "portfolioMenu"} onClick={() => setSelected(id)}>
            <div>
                <span>{tabIcon}</span> {title}
            </div>
        </li>
    );
};

export default FilterableTab;
