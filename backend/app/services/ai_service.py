from groq import Groq
from dotenv import load_dotenv
import json
import os

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

def generate_blueprint(project_name,requirements):
    prompt = f"""
        You are a Senior Solution Architect, Technical Lead, Product Consultant, and Software Project Planner.

        Analyze the project requirement thoroughly and return ONLY valid JSON.

        Project Name:
        {project_name}

        Requirements:
        {requirements}

        Instructions:

        Return ONLY valid JSON.
        Do NOT return markdown.
        Do NOT return explanations outside JSON.
        Do NOT wrap JSON in triple backticks.
        Every field must contain detailed information.
        Each section should contain 8-15 detailed points.
        Separate each point using a semicolon (;).
        Do NOT use bullet symbols (•).
        Do NOT use line breaks inside values.
        Explain reasoning, recommendations, benefits, risks, implementation considerations, and best practices.
        Innovation Score and Complexity Score must be numbers only (1-10).
        Deployment Readiness must be one of: Low, Medium, High.

        Return JSON in this exact format:

        {{
        "project_summary": "",
        "feasibility_analysis": "",
        "recommended_tech_stack": "",
        "architecture": "",
        "database_schema": "",
        "api_design": "",
        "user_stories": "",
        "team_recommendation": "",
        "timeline": "",
        "development_cost":"",
        "monthly_cloud_cost":"",
        "maintenance_cost":"",
        "scalability_recommendations": "",
        "innovation_score": 0,
        "complexity_score": 0,
        "deployment_readiness": ""
        }}

        Content Guidelines:

        project_summary:
        Purpose of project; Target users; Business goals; Core functionality; Business value; Expected outcomes; Competitive advantage; Future scope

        feasibility_analysis:
        Technical feasibility; Resource requirements; Development effort; Risks; Cost considerations; Maintenance requirements; Security considerations; Deployment feasibility

        recommended_tech_stack:
        Frontend technologies with reasons; Backend technologies with reasons; Database recommendation; AI/ML frameworks; Deployment platform; Monitoring tools; Security tools

        architecture:
        System architecture; Frontend layer; Backend layer; AI processing layer; Database layer; Authentication layer; Deployment architecture; Communication flow

        database_schema:
        Main entities; Relationships; Primary keys; Foreign keys; Indexing strategy; Data storage strategy; Audit tracking; Security considerations

        api_design:
        Authentication APIs; CRUD APIs; AI APIs; Reporting APIs; Error handling; Validation; Response standards; Versioning strategy

        user_stories:
        Admin stories; User stories; Manager stories; System stories; Workflow examples; Acceptance criteria

        team_recommendation:
        Project Manager; Frontend Developers; Backend Developers; AI Engineers; QA Engineers; DevOps Engineers; Business Analyst; UI/UX Designer

        timeline:
        Requirement gathering; Architecture design; Development phase; AI integration; Testing phase; Deployment phase; Maintenance phase; Total estimated duration

        Cost Estimation Guidelines:

        Estimate:

        Development Cost
        Monthly Infrastructure Cost
        Maintenance Cost

        Provide realistic values in INR and USD.
        
        scalability_recommendations:
        Horizontal scaling; Load balancing; Database optimization; Caching strategy; Monitoring strategy; Auto scaling; Cloud architecture; Disaster recovery

        Generate a detailed professional analysis suitable for enterprise-level software planning.
        
        
        """

        
    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    result = response.choices[0].message.content

    try:
        data = json.loads(result)
    except json.JSONDecodeError:
        import ast
        data = ast.literal_eval(result)

    return data