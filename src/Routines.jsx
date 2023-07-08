import React, { useEffect, useState } from 'react'
import { fetchRoutines } from './server'

const Routines = () => {
    const [routines, setRoutines] = useState([])
    useEffect(() => {
        const getRoutines = async ()=>{
            const result = await fetchRoutines()
            setRoutines(result)
        }
        getRoutines()
    }, [])
    return (
        <div>
            <h2>Routines</h2>
            {routines && routines.slice(0,20).map((routine,key) => {
                return (<div key={key} style={{border:'1px solid'}}>
                    <h3>{routine.name}</h3>
                    <p>{routine.goal}</p>
                    <strong>User: {routine.creatorName}</strong>
                    {routine.activities.map((routine,key)=>{
                        return (
                            <div> 
                                <h4> {routine.name} </h4>
                                <p> {routine.description} </p>
                                <p>Duration: {routine.duration} </p>
                                <p>Count: {routine.count} </p>

                            </div>
                        )
                        })}
                </div>
                )
            })}
        </div>
    )
}

export default Routines