import { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useContact } from "../hooks/contactContext";

export const Showdata = ({ setInputdata, setEditData }) => {
  const { data, dispatchData } = useContact();
  const { addContact } = data;
  const [searchInput, setSearchInput] = useState("");

  const editHandler = (item) => {
    const newEditItem = addContact.find((Item) => item.id === Item.id);
    if (newEditItem) {
      setEditData(newEditItem);
      setInputdata({
        name: newEditItem.name,
        number: newEditItem.number,
        id: item.id,
      });
    }
  };
  const searchHandler = (e) => {
    setSearchInput(e.target.value);
  };
  const sortedNameArr = addContact.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
  });
  return (
    <>
      {addContact.length >= 1 ? (
        <div class="search-container">
          <input
            className="search_input"
            placeholder="Search.."
            name="search"
            value={searchInput}
            onChange={(e) => searchHandler(e)}
          />
          <button>
            <i className="fa fa-search"></i>
          </button>
        </div>
      ) : null}

      {[...sortedNameArr]
        .filter(
          ({ name, number }) =>
            name.includes(searchInput) || number.includes(searchInput)
        )
        .map((Item) => {
          return (
            <div className="item_div" key={Item.id}>
              <p className="paragraph">
                {Item.name}
                <span>{Item.number}</span>
              </p>
              <div className="edit_div">
                <p className="icon" onClick={() => editHandler(Item)}>
                  <BsPencilSquare />
                </p>
                <p
                  className="icon"
                  onClick={() =>
                    dispatchData({ type: "DELETE_DATA", payload: Item })
                  }
                >
                  <MdDelete />
                </p>
              </div>
            </div>
          );
        })}
    </>
  );
};
