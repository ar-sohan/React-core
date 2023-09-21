import { useState } from "react"

export default function Team() {
    const teamStyle = {
        border: "2px solid orange",
        borderRadius: "20px",
        padding: "20px",
        margin: "20px",
        backgroundColor: "skyblue",
    }
    const [player, setTeam] = useState(11);
    const handleAdd = () => {
        setTeam(player + 1)
    }
    const handleRemove = () => {
        setTeam(player - 1)
    }
    
    return (
        <div style={teamStyle}>
            <h2>Player : {player}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}