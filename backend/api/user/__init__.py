"""
Initialize Flask Blueprint for user api.
"""
from flask import Blueprint
from flask_restful import Api
from .resource.fluency import FluencyResource
from .resource.clarity import ClarityResource

user_api = Blueprint('user_api', __name__, static_folder='../../../instance/dist/static')
user_api.config = {}
api = Api()
api.init_app(user_api)
api.add_resource(FluencyResource, '/fluency', '/fluency/<int:project_id>')
api.add_resource(ClarityResource, '/clarity', '/clarity/<int:project_id>')


@user_api.record
def record_params(setup_state):
    """
    Copy flask app config into the api config
    """
    app = setup_state.app
    user_api.config = dict([(key, value) for (key, value) in app.config.items()])





