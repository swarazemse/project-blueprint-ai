import {useState} from 'react';
import BlueprintForm from '../components/BlueprintForm';
import ResultCard from '../components/ResultCard';
import HistoryPanel from '../components/HistoryPanel';
import '../App.css';

function HomePage() {
    const [results, setResults] = useState(null);

    const renderBulletList = (content) => {
    if (!content) return <p>No data available</p>;

    return (
        <ul>
            {content.split(";").map((item, index) => (
                <li key={index}>{item.trim()}</li>
            ))}
        </ul>
    );
};
    return (
        <div className="container">
            <div className="hero">
            <h1>Project Blueprint Generator</h1>
            <p>Transform your project requirements into a comprehensive blueprint with our AI-powered generator.</p>
            </div>

            
             <BlueprintForm setResults={setResults} />
              <div className = "score-grid">
                  <div className="score-card">
                      <h3>Innovation</h3>
                      <p>{results?.innovation_score ? `${results.innovation_score}/10` : "N/A"}</p>
                  </div>
                  <div className="score-card">
                      <h3>Complexity</h3>
                      <p>{results?.complexity_score ? `${results.complexity_score}/10` : "N/A"}</p>
                  </div>
                  <div className="score-card">
                      <h3>Deployment</h3>
                      <p>{results?.deployment_readiness || 'N/A'}</p>
                  </div>
      
                </div>  
             {results && 
                <div className="results">
                     <ResultCard
                      title="Project Summary"
                      content= {renderBulletList(results?.project_summary)}
                    />

                    <ResultCard
                      title="Feasibility Analysis"
                      content={renderBulletList(results?.feasibility_analysis)}
                    />

                    <ResultCard
                      title="Recommended Tech Stack"
                      content={renderBulletList(results?.recommended_tech_stack)}
                    />

                    <ResultCard
                      title="Architecture"
                      content={renderBulletList(results?.architecture)}
                    />

                    <ResultCard
                      title="Database Schema"
                      content={renderBulletList(results?.database_schema)}
                    />

                    <ResultCard
                      title="API Design"
                      content={renderBulletList(results?.api_design)}
                    />

                    <ResultCard
                      title="User Stories"
                      content={renderBulletList(results?.user_stories)}
                    />

                    <ResultCard
                      title="Team Recommendation"
                      content={renderBulletList(results?.team_recommendation)}
                    />

                    <ResultCard
                      title="Timeline"
                      content={renderBulletList(results?.timeline)}
                    />

                    <ResultCard
                      title="Scalability Recommendations"
                      content={renderBulletList(results?.scalability_recommendations)}
                    />
                </div>
             }
              <div className="score-grid1">

                <div className="score-card1">
                  <h3>Development Cost</h3>
                  <p>{results?.development_cost}</p>
                </div>

                <div className="score-card1">
                    <h3>Cloud Cost</h3>
                    <p>{results?.monthly_cloud_cost}</p>
                </div>

                <div className="score-card1">
                    <h3>Maintenance Cost</h3>
                    <p>{results?.maintenance_cost}</p>
                </div>

              </div>

              
        </div>
    );
}

export default HomePage;