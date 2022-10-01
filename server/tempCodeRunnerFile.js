tasks[source.droppableId].items.filter((task, i) => {
            if (i === source.index) {
                tempTask = deepClone(task);
            }
            return i !== source.index;
        })