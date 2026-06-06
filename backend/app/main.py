from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import Base, engine
from app.routes.generate_routes import router
from database import engine, Base



app=FastAPI(
    title="Project Blueprint API",
)

@app.on_event("startup")
def startup():
    Base.metadata.create_all(bind=engine)
    
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)


@app.get("/")
def home():
    return {"message": "Welcome to the Project Blueprint API!"}