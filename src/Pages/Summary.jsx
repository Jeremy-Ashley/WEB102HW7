import { useEffect, useState } from "react";
import { supabase } from "../SupabaseClient";
import { Link } from "react-router-dom";

function Summary() {
    const [crewmates, setCrewmates] = useState([]);

    useEffect(() => {
        getCrewmates();
    }, []);

    const getCrewmates = async () => {
        const { data, error } = await supabase
            .from("Crewmates")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) {
            console.log(error);
        } else {
            setCrewmates(data);
        }
    };

    return (
        <div className="page">

            <h1>Crewmate Summary</h1>

            <Link to="/create">
                <button>
                    Create Crewmate
                </button>
            </Link>

            {crewmates.map((crew) => (
                <div className="card" key={crew.id} style={{ backgroundColor: crew.color.toLowerCase()}}>

                    <Link to={`/detail/${crew.id}`}>
                        <h2>{crew.name}</h2>
                    </Link>

                    <p>
                        Color: {crew.color}
                    </p>

                    <p>
                        Speed: {crew.speed}
                    </p>

                    <Link to={`/edit/${crew.id}`}>
                        <button>
                            Edit
                        </button>
                    </Link>

                </div>
            ))}

        </div>
    );
}

export default Summary;