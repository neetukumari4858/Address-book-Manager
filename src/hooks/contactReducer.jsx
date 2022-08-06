export const ContactReducer = (data, action) => {
  const { addContact } = data;

  switch (action.type) {
    case "ADD_DATA":
      return {
        ...data,
        addContact: [...addContact, action.payload],
      };
    case "DELETE_DATA":
      const filteredData = addContact.filter(
        (Item) => Item.id !== action.payload.id
      );
      return {
        ...data,
        addContact: filteredData,
      };
    case "EDIT_DATA":
      const editIndexof = addContact.findIndex(
        (item) => item.id === action.payload.id
      );
      const editedcontact = (addContact[editIndexof] = action.payload);
      return {
        ...data,
        editedcontact,
      };
    default:
      return data;
  }
};
