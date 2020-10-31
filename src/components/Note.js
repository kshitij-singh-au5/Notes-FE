import React from 'react'

const Note = (x) => {
    const { data } = x
    console.log("data", data)
    return (
        <>
            {data
                ?
                <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"500px"}}>
                    <div className="card text-white bg-warning mb-3" style={{minWidth:"300px"}}>
                        <div className="card-header">Your Note</div>
                        <div className="card-body">
                            <p className="card-text"><b>{data["notes"]}</b></p>
                        </div>
                    </div>
                    {/* {data["notes"]} */}
                </div>
                :
                ""
            }
        </>
    )
}

export default Note