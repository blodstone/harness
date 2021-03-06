import enum
from datetime import datetime

from backend.model import db, ma
from backend.model.project_status import ProjectStatus


class ProjectType(enum.Enum):
    ANNOTATION = 'Annotation'
    EVALUATION = 'Evaluation'


class BaseProject(object):
    id = db.Column(db.INTEGER, primary_key=True, nullable=False)
    name = db.Column(db.String(255), nullable=False)
    category = db.Column(db.String(25), nullable=False)

    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    finished_at = db.Column(db.DateTime, nullable=True)
    total_exp_results = db.Column(db.Integer, nullable=False, default=1)
    is_active = db.Column(db.Boolean, nullable=False, default=True)


class EvaluationProject(BaseProject, db.Model):
    __tablename__ = 'evaluation_project'

    highlight = db.Column(db.Boolean, default=True)
    expire_duration = db.Column(db.INTEGER, nullable=False, default=3)
    # proj_statuses = db.relationship('ProjectStatus', backref='project', lazy=True)


class FluencyProject(BaseProject, db.Model):
    __tablename__ = 'fluency_project'

    n_summaries = db.Column(db.Integer, default=5)
    expire_duration = db.Column(db.INTEGER, nullable=False, default=3)
    summary_group_lists = db.relationship('SummaryGroupList', cascade='delete')
    proj_statuses = db.relationship('ProjectStatus', cascade='delete')


class FluencyProjectSchema(ma.ModelSchema):
    class Meta:
        model = FluencyProject


class ClarityProject(BaseProject, db.Model):
    __tablename__ = 'clarity_project'

    n_summaries = db.Column(db.Integer, default=5)
    expire_duration = db.Column(db.INTEGER, nullable=False, default=3)
    summary_group_lists = db.relationship('SummaryGroupList', cascade='delete')
    proj_statuses = db.relationship('ProjectStatus', cascade='delete')


class ClarityProjectSchema(ma.ModelSchema):
    class Meta:
        model = ClarityProject
