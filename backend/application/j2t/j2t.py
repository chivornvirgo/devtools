from json2table import convert

def convert_json(json):
    build_direction = "LEFT_TO_RIGHT"
    table_attributes = {"style" : "border:1px solid grey"}
    html = convert(json,build_direction=build_direction, table_attributes=table_attributes)
    return html