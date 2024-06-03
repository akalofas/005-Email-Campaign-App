import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styles from '../styles/DraggableList.module.css';

const DraggableList = ({ items, onDragEnd }) => {
	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId='droppable'>
				{(provided) => (
					<div
						{...provided.droppableProps}
						ref={provided.innerRef}
						className={styles.list}
					>
						{items.map((item, index) => (
							<Draggable
								key={item.id}
								draggableId={item.id}
								index={index}
							>
								{(provided) => (
									<div
										ref={provided.innerRef}
										{...provided.draggableProps}
										{...provided.dragHandleProps}
										className={styles.item}
									>
										{item.content}
									</div>
								)}
							</Draggable>
						))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
};

export default DraggableList;
