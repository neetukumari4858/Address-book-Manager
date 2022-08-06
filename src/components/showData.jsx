import { BsPencilSquare } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useContact } from "../hooks/contactContext";

export const Showdata = ({setInputdata,setEditData}) => {
  const { data, dispatchData } = useContact();
  const { addContact } = data;
//   const [toggle,setToggle]=useState(true)

  const editHandler = (item) => {
    const newEditItem = addContact.find((Item)=>item.id===Item.id);
    if (newEditItem) {
        setEditData(newEditItem)
        setInputdata({ name:newEditItem.name,number:newEditItem.number,id:item.id})
    }
  };
  return (
    <>
      {addContact.length >= 1 ? (
        <div class="search-container">
          <input
            className="search_input"
            placeholder="Search.."
            name="search"
          />
          <button>
            <i className="fa fa-search"></i>
          </button>
        </div>
      ) : null}

      {addContact?.map((Item) => {
        return (
          <div className="item_div" key={Item.id}>
            <p className="paragraph">
              {Item.name}
              <span>{Item.number}</span>
            </p>
            <div className="edit_div">
              <p className="icon" onClick={()=>editHandler(Item)}>
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
