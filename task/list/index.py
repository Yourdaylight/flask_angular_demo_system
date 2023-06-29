import random
import time
from datetime import datetime

from sqlalchemy import and_

from exts import db
from flask import Blueprint, request, Response, jsonify, render_template, redirect, url_for
import json

from list.model import Student

list = Blueprint('list', __name__)


@list.route('/removeSchool', methods=['POST'])
def remove_school():
    id = request.json.get('id')
    school = Student.query.filter(
        Student.id == id
    ).first()
    db.session.delete(school)
    db.session.commit()
    content = {"code": 0, "msg": "SUCCESS"}
    return json.dumps(content)


@list.route('/updateSchool', methods=['POST'])
def update_school():
    id = request.json.get('id')
    title = request.json.get('title')
    number = request.json.get('number')
    desc = request.json.get('desc')
    score = request.json.get('score')
    school = Student.query.filter(
        Student.id == id
    ).first()
    if school is not None:
        school.title = title
        school.number = number
        school.desc = desc
        school.score = score
        db.session.commit()
    content = {"code": 0, "msg": "SUCCESS"}
    return json.dumps(content)


@list.route('/schoolList', methods=['GET'])
def school_list():
    schoolList = Student.query.filter()
    name = request.args.get("name", None)
    if name not in (None, ""):
        schoolList = schoolList.filter(Student.title.contains(name))
    desc = request.args.get("desc", None)
    if desc not in (None, ""):
        schoolList = schoolList.filter(Student.desc.contains(desc))
    # 根据时间降序排列
    schoolList = schoolList.order_by(Student.create_time.desc())
    content = {"code": 0, "msg": "SUCCESS", "data": [school.instance_to_json() for school in schoolList.all()]}
    return json.dumps(content)


@list.route('/addSchool', methods=['POST'])
def add_school():
    title = request.json.get('title')
    number = request.json.get('number')
    desc = request.json.get('desc')
    score = request.json.get('score')
    # 获取当前时间
    now = time.strftime('%y-%m-%d %H:%M:%S', time.localtime(time.time()))
    end_time = now
    teacher = request.json.get('teacher')
    contact = request.json.get('contact')
    sex = request.json.get('sex')
    now = time.strftime('%y-%m-%d %H:%M:%S', time.localtime(time.time()))
    school = Student(None, number, title, desc, now, end_time, teacher, contact, sex)
    db.session.add(school)
    db.session.commit()
    content = {"code": 0, "msg": "SUCCESS"}
    return json.dumps(content)
