import { useEffect, useState } from "react";
import axios from "axios";

function HistoryPage() {

    const [projects,setProjects] = useState([]);

    const [selectedProject,setSelectedProject]
        = useState(null);

    useEffect(() => {

        loadHistory();

    }, []);

    const loadHistory = async () => {

        const response =
            await axios.get(
                "https://project-blueprint-ai-production.up.railway.app/analysis-history"
            );

        setProjects(response.data);
    };

    return (

        <div className="history-page">

            <h1>
                Project History
            </h1>

            <table>

                <thead>

                    <tr>
                        <th>Project Name</th>
                        <th>Complexity</th>
                        <th>Cost</th>
                        <th>Created At</th>
                    </tr>

                </thead>

                <tbody>

                    {projects.map(project => (

                        <tr
                            key={project.id}
                            onClick={() =>
                                setSelectedProject(project)
                            }
                        >

                            <td>
                                {project.project_name}
                            </td>

                            <td>
                                {project.complexity_score}
                            </td>

                            <td>
                                {project.development_cost}
                            </td>

                            <td>
                                {project.created_at}
                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

            {selectedProject && (
                    <div className="details-card">

                        <h2>{selectedProject.project_name}</h2>

                        <p className="summary">
                        {selectedProject.project_summary}
                        </p>

                        <hr />

                        {/* FEASIBILITY */}
                        <div className="section">
                        <h3>Feasibility Analysis</h3>
                        <p>{selectedProject.feasibility_analysis}</p>
                        </div>

                        {/* TECH STACK */}
                        <div className="section">
                        <h3>Tech Stack</h3>
                        <p>{selectedProject.recommended_tech_stack}</p>
                        </div>

                        {/* ARCHITECTURE */}
                        <div className="section">
                        <h3>Architecture</h3>
                        <p>{selectedProject.architecture}</p>
                        </div>

                        {/* DATABASE */}
                        <div className="section">
                        <h3>Database Schema</h3>
                        <p>{selectedProject.database_schema}</p>
                        </div>

                        {/* API */}
                        <div className="section">
                        <h3>API Design</h3>
                        <p>{selectedProject.api_design}</p>
                        </div>

                        {/* USER STORIES */}
                        <div className="section">
                        <h3>User Stories</h3>
                        <p>{selectedProject.user_stories}</p>
                        </div>

                        {/* TEAM */}
                        <div className="section">
                        <h3>Team Recommendation</h3>
                        <p>{selectedProject.team_recommendation}</p>
                        </div>

                        {/* TIMELINE */}
                        <div className="section">
                        <h3>Timeline</h3>
                        <p>{selectedProject.timeline}</p>
                        </div>

                        {/* SCALABILITY */}
                        <div className="section">
                        <h3>Scalability Recommendations</h3>
                        <p>{selectedProject.scalability_recommendations}</p>
                        </div>

                        {/* SCORES GRID */}
                        <div className="score-grid">

                        <div className="score-card">
                            <h4>Innovation</h4>
                            <p>{selectedProject.innovation_score}/10</p>
                        </div>

                        <div className="score-card">
                            <h4>Complexity</h4>
                            <p>{selectedProject.complexity_score}/10</p>
                        </div>

                        <div className="score-card">
                            <h4>Deployment</h4>
                            <p>{selectedProject.deployment_readiness}</p>
                        </div>

                        </div>

                        {/* COST SECTION */}
                        <div className="cost-grid">

                        <div className="cost-card">
                            <h4>Development Cost</h4>
                            <p>{selectedProject.development_cost}</p>
                        </div>

                        <div className="cost-card">
                            <h4>Cloud Cost</h4>
                            <p>{selectedProject.monthly_cloud_cost}</p>
                        </div>

                        <div className="cost-card">
                            <h4>Maintenance Cost</h4>
                            <p>{selectedProject.maintenance_cost}</p>
                        </div>

                        </div>

                    </div>

            )}

        </div>

    );
}

export default HistoryPage;