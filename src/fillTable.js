export const fillTable = ({data, searchData}) => {
    const table = []
    if (searchData.length !== 0)
        searchData.forEach((element, i) => {
            if (element && element.username && element.action && element.action_createad_at) {
                let str = element.action_createad_at;
                table.push(
                  <div className='table-container' key={i}>
                    <div className ='userName'>{element.username}</div>
                    <div className='action'>{element.action}</div>
                    <div className='createAt'>{str.slice(0, str.indexOf('T')) +  "   " + (str.slice(str.indexOf('T')+1, str.indexOf('.')))}</div>
                  </div>
                )
              }
              if (i > 99) return
        })
    else data.forEach((element, i) => {
        if (element && element.username && element.action && element.action_createad_at) {
            let str = element.action_createad_at;
            table.push(
            <div className='table-container' key={i}>
                <div className ='userName'>{element.username}</div>
                <div className='action'>{element.action}</div>
                <div className='createAt'>{str.slice(0, str.indexOf('T')) +  "   " + (str.slice(str.indexOf('T')+1, str.indexOf('.')))}</div>
            </div>)
        }
        if (i > 99) return
    })

    return [...table]
}