from sanic import Sanic
from sanic import response
from application.j2t.j2t import convert_json

app = Sanic("sanic")

@app.route("/")
async def index(request):
    json_request = request.json
    print(type(json_request))
    return response.html(convert_json(json_request))


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)