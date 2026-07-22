import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../SupabaseClient";
import CrewForm from "../Components/CrewForm";

function Edit() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [color, setColor] = useState("Red");
    const [speed, setSpeed] = useState(1);

    useEffect(() => {
        getCrewmate();
    }, []);

    const getCrewmate = async () => {
        const { data, error } = await supabase
            .from("Crewmates")
            .select("*")
            .eq("id", id)
            .single();

        if (error) {
            console.log(error);
        } else {
            setName(data.name);
            setColor(data.color);
            setSpeed(data.speed);
        }
    };


    const updateCrewmate = async (e) => {
        e.preventDefault();

        const { error } = await supabase
            .from("Crewmates")
            .update({
                name,
                color,
                speed
            })
            .eq("id", id);

        if (error) {
            console.log(error);
        } else {
            navigate("/");
        }
    };


    const deleteCrewmate = async () => {
        const { error } = await supabase
            .from("Crewmates")
            .delete()
            .eq("id", id);

        if (error) {
            console.log(error);
        } else {
            navigate("/");
        }
    };


    return (
        <div>
            <h1>Edit Crewmate</h1>

            <CrewForm
                name={name}
                setName={setName}
                color={color}
                setColor={setColor}
                speed={speed}
                setSpeed={setSpeed}
                onSubmit={updateCrewmate}
                buttonText="Update Crewmate"
            />

            <button onClick={deleteCrewmate}>
                Delete Crewmate
            </button>
        </div>
    );
}

export default Edit;