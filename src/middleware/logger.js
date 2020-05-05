const logger = (store) => (next) => (action) => {
    console.group(action.type)
        const startTime = Date.now()
        console.log('The action: ', action)
        const returnValue = next(action)
        console.log('The new state: ', store.getState())
        const endTime = Date.now()
        let totalTime = endTime - startTime
        totalTime /= 1000
        console.log('Total Run Time: ', totalTime, 'seconds')
    console.groupEnd()
    return returnValue;
}

export default logger