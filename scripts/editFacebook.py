import facebook

token = ""
graph = facebook.GraphAPI(access_token=token, version="2.1")

graph.put_object(parent_object='me', connection_name='feed', message='HackRice Demo')