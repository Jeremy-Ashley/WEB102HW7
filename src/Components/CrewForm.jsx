function CrewForm({
    name,
    setName,
    color,
    setColor,
    speed,
    setSpeed,
    onSubmit,
    buttonText = "Create Crewmate"
}) {
    return (
        <form onSubmit={onSubmit}>

            <label>Name</label>
            <br />
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <br /><br />

            <label>Color</label>
            <br />
            <select
                value={color}
                onChange={(e) => setColor(e.target.value)}
            >
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
            </select>

            <br /><br />

            <label>Speed</label>
            <br />
            <input
                type="number"
                min="1"
                max="100"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
            />

            <br /><br />

            <button type="submit">
                {buttonText}
            </button>

        </form>
    );
}

export default CrewForm;