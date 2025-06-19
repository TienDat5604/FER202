import React, { useReducer, useState, useEffect } from "react";
import { Button, Form, Container, Row, Col, ListGroup, InputGroup, FormControl, Dropdown, DropdownButton } from "react-bootstrap";

// Define reducer function
function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.item] };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.item.id ? action.item : item
        ),
      };
    case "SORT_ITEMS":
      return {
        ...state,
        items: [...state.items].sort((a, b) => {
          if (action.sortBy === "name") {
            return a.name.localeCompare(b.name);
          } else if (action.sortBy === "time") {
            return a.id - b.id;
          }
          return 0;
        }),
      };
    default:
      return state;
  }
}

const initialState = {
  items: [],
};

function ItemListAdvanced() {
  // useReducer for item list management
  const [state, dispatch] = useReducer(listReducer, initialState);
  
  // useState hooks for form and UI state
  const [newItemName, setNewItemName] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editItemId, setEditItemId] = useState(null);
  const [editName, setEditName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered items based on search term
  const filteredItems = state.items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add a new item
  const handleAddItem = () => {
    if (newItemName) {
      const newItem = { id: Date.now(), name: newItemName };
      dispatch({ type: "ADD_ITEM", item: newItem });
      setNewItemName("");
    }
  };

  // Remove an item
  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  // Start editing an item
  const handleStartEdit = (item) => {
    setEditMode(true);
    setEditItemId(item.id);
    setEditName(item.name);
  };

  // Save edited item
  const handleSaveEdit = () => {
    if (editName) {
      dispatch({ 
        type: "EDIT_ITEM", 
        item: { id: editItemId, name: editName } 
      });
      setEditMode(false);
      setEditItemId(null);
      setEditName("");
    }
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditMode(false);
    setEditItemId(null);
    setEditName("");
  };

  // Sort items
  const handleSort = (sortBy) => {
    dispatch({ type: "SORT_ITEMS", sortBy });
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={8} className="offset-md-2">
          <Form onSubmit={(e) => { e.preventDefault(); handleAddItem(); }}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter item name"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
              />
              <Button variant="primary" onClick={handleAddItem}>
                Add Item
              </Button>
            </InputGroup>
          </Form>

          <InputGroup className="mb-3">
            <InputGroup.Text>Search</InputGroup.Text>
            <FormControl
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>

          <div className="d-flex justify-content-end mb-3">
            <DropdownButton id="sort-dropdown" title="Sort By">
              <Dropdown.Item onClick={() => handleSort("name")}>Name (A-Z)</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSort("time")}>Created Time</Dropdown.Item>
            </DropdownButton>
          </div>

          <h3>Item List:</h3>
          <ListGroup>
            {filteredItems.map((item) => (
              <ListGroup.Item
                key={item.id}
                className="d-flex justify-content-between align-items-center"
              >
                {editMode && editItemId === item.id ? (
                  <InputGroup>
                    <FormControl
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                    />
                    <Button variant="success" onClick={handleSaveEdit}>
                      Save
                    </Button>
                    <Button variant="secondary" onClick={handleCancelEdit}>
                      Cancel
                    </Button>
                  </InputGroup>
                ) : (
                  <>
                    <span>{item.name}</span>
                    <div>
                      <Button
                        variant="outline-primary"
                        className="me-2"
                        onClick={() => handleStartEdit(item)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outline-danger"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
          
          {filteredItems.length === 0 && (
            <p className="text-center mt-3">No items found.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default ItemListAdvanced; 