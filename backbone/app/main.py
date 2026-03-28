import os

from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from dotenv import load_dotenv
from app.services.scraper import login_instagram
from app.routes import sentiment

load_dotenv()

app = FastAPI(title="Sentiment Analysis API")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def startup_event():
    ig_user = os.getenv("INSTAGRAM_USERNAME")
    ig_pass = os.getenv("INSTAGRAM_PASSWORD")

    if ig_user and ig_pass:
        login_instagram(ig_user, ig_pass)
        print("Instagram login success")
    else:
        print("Instagram credentials not found")

app.include_router(sentiment.router)