def analyze_results(results):
    total = len(results)

    summary = {
        "total": total,
        "positive": {"count": 0, "percentage": 0},
        "neutral" : {"count": 0, "percentage": 0},
        "negative": {"count": 0, "percentage": 0},
    }

    for r in results:
        if r in summary:
            summary[r]["count"] += 1

    for key in ["positive", "neutral", "negative"]:
        summary[key]["percentage"] = round(
            (summary[key]["count"] / total) * 100, 2
        ) if total > 0 else 0

    return summary