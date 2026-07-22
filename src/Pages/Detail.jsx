import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../SupabaseClient";

function Detail() {
    const { id } = useParams();

    const [crewmate, setCrewmate] = useState(null);

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
            setCrewmate(data);
        }
    };

    if (!crewmate) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <h1>{crewmate.name}</h1>

            <p>
                Color: {crewmate.color}
            </p>

            <p>
                Speed: {crewmate.speed}
            </p>

            <p>
                Created: {crewmate.created_at}
            </p>

            <p>
                ID: {crewmate.id}
            </p>

            <Link to={`/edit/${crewmate.id}`}>
                <button>
                    Edit Crewmate
                </button>
            </Link>

        </div>
    );
}

export default Detail;