from fastapi import APIRouter
from app.schemas import RequirementRequest
from app.database import SessionLocal
from app.models import ProjectAnalysis
from datetime import datetime
from app.services.ai_service import (generate_blueprint)
import json
router = APIRouter()

@router.post("/generate-system")
def generate_system(
    request: RequirementRequest
):

    db = SessionLocal()

    result = generate_blueprint(
        request.project_name,
        request.requirements
    )

    analysis = ProjectAnalysis(
        project_name=request.project_name,
        requirements=request.requirements,
        ai_response=result
    )

    db.add(analysis)

    db.commit()

    return result

import json
import ast

@router.get("/analysis-history")
def analysis_history():

    db = SessionLocal()

    history = db.query(ProjectAnalysis).order_by(ProjectAnalysis.id.desc()).all()

    results = []

    for item in history:

        results.append({
            "id": item.id,
            "project_name": item.project_name,
            "created_at": item.created_at.strftime("%d-%m-%Y %I:%M %p"),

            # DIRECT ACCESS (NO PARSING)
            "project_summary": item.ai_response.get("project_summary"),
            "feasibility_analysis": item.ai_response.get("feasibility_analysis"),
            "recommended_tech_stack": item.ai_response.get("recommended_tech_stack"),
            "architecture": item.ai_response.get("architecture"),
            "database_schema": item.ai_response.get("database_schema"),
            "api_design": item.ai_response.get("api_design"),
            "user_stories": item.ai_response.get("user_stories"),
            "team_recommendation": item.ai_response.get("team_recommendation"),
            "timeline": item.ai_response.get("timeline"),
            "scalability_recommendations": item.ai_response.get("scalability_recommendations"),

            "innovation_score": item.ai_response.get("innovation_score"),
            "complexity_score": item.ai_response.get("complexity_score"),
            "deployment_readiness": item.ai_response.get("deployment_readiness"),

            "development_cost": item.ai_response.get("development_cost"),
            "monthly_cloud_cost": item.ai_response.get("monthly_cloud_cost"),
            "maintenance_cost": item.ai_response.get("maintenance_cost"),
       })

    return results