const fetchID = () => Math.random().toString(36).substring(2, 10);
// {
//      source: { index: 0, droppableId: 'pending' },
//      destination: { droppableId: 'pending', index: 1 }
//    }
export const repaceTask = ({ source, destination }) => {
    let tempTask;
    tasks[source.droppableId].items = deepClone(
        tasks[source.droppableId].items.filter((task, i) => {
            if (i === source.index) {
                tempTask = deepClone(task);
            }
            return i !== source.index;
        })
    );
    if (destination.index === 0) {
        tasks[destination.droppableId].items.unshift(tempTask);
    } else if (
        destination.index === tasks[destination.droppableId].items.length
    ) {
        tasks[destination.droppableId].items.push(tempTask);
    } else {
        tasks[destination.droppableId].items = deepClone(
            tasks[destination.droppableId].items.reduce((c, a, i) => {
                if (i === destination.index) {
                    c.push(tempTask);
                }
                c.push(a);
                return c;
            }, [])
        );
    }
    return tasks;
};

const deepClone = (data) => {
    return JSON.parse(JSON.stringify(data));
};

export const tasks = {
    pending: {
        title: 'pending',
        items: [
            {
                id: fetchID(),
                title: 'Send the Figma file to Dima',
                comments: [],
            },
            {
                id: fetchID(),
                title: 'Create auth apis for backend',
                comments: [],
            },
        ],
    },
    ongoing: {
        title: 'ongoing',
        items: [
            {
                id: fetchID(),
                title: 'Review GitHub issues',
                comments: [
                    {
                        name: 'David',
                        text: 'Ensure you review before merging',
                        id: fetchID(),
                    },
                ],
            },
        ],
    },
    completed: {
        title: 'completed',
        items: [
            {
                id: fetchID(),
                title: 'Create technical contents',
                comments: [
                    {
                        name: 'Dima',
                        text: 'Make sure you check the requirements',
                        id: fetchID(),
                    },
                ],
            },
        ],
    },
};
