import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="page">

            <h1>🚀 Crewmate Creator</h1>

            <p>
                Create and manage your crew!
            </p>

            <Link to="/summary">
                <button>
                    View Crew
                </button>
            </Link>

        </div>
    );
}

export default Home;