from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Text
from sqlalchemy import TIMESTAMP
from sqlalchemy.sql import func
from app.database import Base
from sqlalchemy import DateTime
from sqlalchemy import JSON


class ProjectAnalysis(Base):
    __tablename__ = "project_analysis"

    id = Column(Integer, primary_key=True, index=True)
    project_name = Column(String(255), nullable=False)
    requirements = Column(Text, nullable=False)
    ai_response = Column(JSON, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())