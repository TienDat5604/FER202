import React, { useState } from 'react';

function DragDropList() {
  // Initial list of items
  const [items, setItems] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5'
  ]);
  
  // State to track the currently dragged item
  const [draggingItem, setDraggingItem] = useState(null);
  // State to track the item being dragged over
  const [dragOverItem, setDragOverItem] = useState(null);

  // Handle drag start event
  const handleDragStart = (index) => {
    setDraggingItem(index);
  };

  // Handle drag over event
  const handleDragOver = (e, index) => {
    e.preventDefault(); // Necessary to allow dropping
    setDragOverItem(index);
  };

  // Handle drop event
  const handleDrop = (dropIndex) => {
    if (draggingItem === null) return;
    
    // Create a new array with the updated order
    const newItems = [...items];
    const draggedItem = newItems[draggingItem];
    
    // Remove the dragged item from its original position
    newItems.splice(draggingItem, 1);
    
    // Insert the dragged item at the drop position
    newItems.splice(dropIndex, 0, draggedItem);
    
    // Update the state with the new order
    setItems(newItems);
    setDragOverItem(null);
  };

  // Handle drag end event
  const handleDragEnd = () => {
    setDraggingItem(null);
    setDragOverItem(null);
  };

  // Handle drag leave event
  const handleDragLeave = () => {
    setDragOverItem(null);
  };

  return (
    <div className="drag-drop-container">
      <h2>Drag and Drop List</h2>
      <ul className="drag-drop-list">
        {items.map((item, index) => (
          <li
            key={index}
            className={`drag-item ${draggingItem === index ? 'dragging' : ''} ${dragOverItem === index ? 'drag-over' : ''}`}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDrop={() => handleDrop(index)}
            onDragEnd={handleDragEnd}
            onDragLeave={handleDragLeave}
          >
            <span className="drag-handle">•</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DragDropList; 