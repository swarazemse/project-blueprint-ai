from pydantic import BaseModel

class RequirementRequest(BaseModel):
    project_name: str
    requirements: str
    
class AnalysisResponse(BaseModel):
    project_name: str
    analysis: str