from fastapi import APIRouter, HTTPException, Form
from app.services.scraper import scrape_comment
from app.services.inference import predict_sentiment_batch
from app.services.analyzer import analyze_results
from typing import Optional

router = APIRouter()

@router.post("/analyze/instagram")
async def analyze_instagram(
        username: str = Form(...),
        rangeMode: str = Form(...),
        customRange: Optional[str] = Form("")):
    try:
        comments, total_post, selected_post = scrape_comment(
            target_username = username, 
            range_mode      = rangeMode,
            custom_range    = customRange
        )

        if not comments:
            raise HTTPException(status_code=400, detail="Not Found any Comment")
        
        results = predict_sentiment_batch(comments)
        summary = analyze_results(results)

        return {
            "status": "success",
            "total_comments": len(comments),
            "total_post": total_post,
            "selected_post": selected_post,
            "summary": summary
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail="Internal Server Error: " + str(e))