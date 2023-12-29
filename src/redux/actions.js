export const addTask = (task)=>({
    type: 'ADD-TASK',
    payload: task,
});

export const completeTask = (taskId)=>({
    type:'COMPLETE-TASK',
    payload: taskId,
});

export const setSearchResults = (results)=>({// Make sure this export is present
    type: 'SET_SEARCH_RESULTS',
    payload: results,
})
