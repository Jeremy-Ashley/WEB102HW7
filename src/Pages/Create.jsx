import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../SupabaseClient";
import CrewForm from "../Components/CrewForm";

function Create() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [color, setColor] = useState("Red");
    const [speed, setSpeed] = useState(1);

    const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
        .from("Crewmates")
        .insert([
            {
                name,
                color,
                speed
            }
        ]);

    if (error) {
        console.log(error);
    } else {
        navigate("/");
    }
    };

    return (
        <CrewForm
            name={name}
            setName={setName}
            color={color}
            setColor={setColor}
            speed={speed}
            setSpeed={setSpeed}
            onSubmit={handleSubmit}
        />
    );
}

export default Create;