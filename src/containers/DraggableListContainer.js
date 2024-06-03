import React, { useState } from 'react';
import DraggableList from '../components/DraggableList';

const DraggableListContainer = () => {
	const [items, setItems] = useState([
		{ id: '1', content: 'Step 1' },
		{ id: '2', content: 'Step 2' },
		{ id: '3', content: 'Step 3' },
	]);

	const handleDragEnd = (result) => {
		if (!result.destination) return;

		const newItems = Array.from(items);
		const [reorderedItem] = newItems.splice(result.source.index, 1);
		newItems.splice(result.destination.index, 0, reorderedItem);

		setItems(newItems);
	};

	return (
		<DraggableList
			items={items}
			onDragEnd={handleDragEnd}
		/>
	);
};

export default DraggableListContainer;
