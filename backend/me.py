import fire
import uvicorn
def run():
    if __name__ == "__main__":
        uvicorn.run("app:app",host="0.0.0.0",port=3001,log_level="info",reload=True)


fire.Fire()