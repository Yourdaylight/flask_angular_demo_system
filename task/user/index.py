
from exts import db
from flask import Blueprint, request, Response, jsonify, render_template, url_for, redirect, session
import json

from user.model import User
from user.utils import get_token

user = Blueprint('user', __name__);


@user.route('/login', methods=['POST'])  # 抖音账号列表
def login():
    username = request.json.get('username')
    password = request.json.get('password')
    # # 查询数据
    user = User.query.filter(
        User.username == username,
        User.password == password
    ).first()
    # 封装格式
    if user:
        token = get_token(user.id)
        content = {"code": 0, "msg": "SUCCESS",
                   "data": {"token": token, "role": user.role}}
    else:
        content = {"code": 1, "msg": "用户数据错误"}
    return json.dumps(content)

@user.route('/login2', methods=['GET'])  # 抖音账号列表
def login2():
    content = {"code": 1, "msg": "用户数据错误"}
    return json.dumps(content)

@user.route('/register', methods=['POST'])
def register():
    username = request.json.get('username')
    password = request.json.get('password')
    # 查询数据
    user = User(None, username, password)
    db.session.add(user)
    db.session.commit()
    content = {"code": 0, "msg": "SUCCESS"}
    return json.dumps(content)
