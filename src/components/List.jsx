import { useState } from "react";
import check from "../assets/icons/icon-check.svg";
import { Link } from "react-router-dom";

const List = () => {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);
    const [checked, setChecked] = useState({});

    function handleSubmit(event) {
        event.preventDefault();
        const id = Date.now();
        setItems((prev) => [...prev, { id, text: value }]);
        setValue("");
    }

    function handleItems(event) {
        setValue(event.target.value);
    }

    function handleCheck(id) {
        setChecked((prev) => ({ ...prev, [id]: !prev[id] })); 
    }

    const checkedCount = Object.keys(items).length -  Object.keys(Object.values(checked)).length;

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div className="bg-white rounded-[5px] h-16 w-full grid grid-flow-col grid-cols-9 items-center mb-6">
                    <button
                        type="button"
                        className={`p-[1px] h-6 w-6 rounded-full col-span-1 m-auto border border-[#E3E4F1]`}
                    ></button>
                    <input
                        type="text"
                        value={value}
                        onChange={handleItems}
                        className="size-full col-span-7 focus:outline-none font-josefinSans text-[18px] tracking-[-0.25px] placeholder:text-[]#9495A5 rounded-[5px]"
                        placeholder="Create a new todo…"
                    />
                </div>
            </form>
            <div className="shadow-custom">
                <ul className="bg-white rounded-[5px] list-none">
                        {items.map((item) => (
                            <li key={item.id} className="border-b-[1px] border-b-[#E3E4F1] p-0">
                                <div className="bg-white rounded-[5px] h-16 w-full grid grid-flow-col grid-cols-9 items-center">
                                    <button
                                        type="button"
                                        className={`
                                            p-[1px] h-6 w-6 rounded-full col-span-1 m-auto
                                            hover:bg-gradient-to-br from-[#55DDFF] to-[#C058F3] bg-[#E3E4F1]
                                            ${
                                                checked[item.id]
                                                    ? 'bg-gradient-to-br from-[#55DDFF] to-[#C058F3]'
                                                    : ''
                                            }
                                        `}
                                        onClick={() => handleCheck(item.id)}
                                    >
                                        <div
                                            className={`h-full w-full bg-white rounded-full ${
                                                checked[item.id] ? 'bg-transparent' : ''
                                            } flex items-center justify-center`}
                                        >
                                            {checked[item.id] && (
                                                <img src={check} alt="check icon" />
                                            )}
                                        </div>
                                    </button>
                                    <div
                                        className={`
                                            size-full col-span-7 font-josefinSans text-[18px] tracking-[-0.25px]
                                            placeholder:text-[]#9495A5 rounded-[5px] flex items-center ${
                                                checked[item.id]
                                                    ? 'line-through text-[#D1D2DA]'
                                                    : ''
                                            }
                                        `}
                                    >
                                        {item.text}
                                    </div>
                                </div>
                            </li>
                        ))}
                </ul>
                <div className="text-[14px] tracking-[-0.19px] text-[#9495A5] font-josefinSans flex justify-between">
                    <div>{checkedCount} items left</div>
                    <div>
                        <Link to={`#`}>All</Link>
                        <Link to={`#`}>Active</Link>
                        <Link to={`#`}>Completed</Link>
                    </div>
                    <div></div>
                </div>
            </div>          
        </div>
    );
};

export default List;
