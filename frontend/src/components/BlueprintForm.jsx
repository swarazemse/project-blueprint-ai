import {useState} from 'react';
import api from '../services/api';

function BlueprintForm({setResults}) {
    const[projectName, setProjectName] = useState('');
    const[requirements, setRequirements] = useState('');
    const[loading, setLoading] = useState(false);
    const generateBlueprint = async () => {

        if (!projectName || !requirements) {
            alert('Please fill in all fields');
            return;
        }
        try{
        setLoading(true);
        
            const response = await api.post('/generate-system', {
                project_name: projectName,
                requirements: requirements
            });
            setResults(response.data);
        } catch (error) {
            console.error('Error generating blueprint:', error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="blueprint-form">
            
                <div className="form-container">

                    <input
                        placeholder="Project Name"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                    />
                    <textarea
                        rows={10}
                        placeholder="Project Requirements"
                        value={requirements}
                        onChange={(e) => setRequirements(e.target.value)}
                    />
                    <button onClick={generateBlueprint} disabled={loading}>
                        {loading ? 'Generating...' : 'Generate Blueprint'}
                    </button>
                </div>
        </div>
    );
}
export default BlueprintForm;