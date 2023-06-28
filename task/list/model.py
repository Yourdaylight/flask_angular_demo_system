from exts import db


class EntityBase(object):
    def to_json(self):
        fields = self.__dict__
        if "_sa_instance_state" in fields:
            del fields["_sa_instance_state"]
        return fields


class School(db.Model, EntityBase):
    # 数据表明、字段
    __tablename__ = 'school'
    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    number = db.Column(db.String(255))
    title = db.Column(db.String(255))
    desc = db.Column(db.String(255))
    score = db.Column(db.DECIMAL(10, 2))
    create_time = db.Column(db.DateTime)
    end_time = db.Column(db.DateTime)

    def __init__(self, id, number, title, desc, score, create_time, end_time):
        self.id = id
        self.title = title
        self.desc = desc
        self.number = number
        self.score = score
        self.create_time = create_time
        self.end_time = end_time

    def instance_to_json(self):
        content = {
            "id": self.id,
            "title": self.title,
            "desc": self.desc,
            "number": self.number,
            "score": str(self.score),
            "end_time": self.end_time.strftime("%Y-%m-%d %H:%M:%S"),
            "create_time": self.create_time.strftime("%Y-%m-%d %H:%M:%S")
        }
        return content

class Student(db.Model, EntityBase):
    # 数据表明、字段
    __tablename__ = 'student'
    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    number = db.Column(db.String(255))
    title = db.Column(db.String(255))
    desc = db.Column(db.String(255))
    create_time = db.Column(db.DateTime)
    end_time = db.Column(db.DateTime)
    teacher = db.Column(db.String(255))
    contact = db.Column(db.String(255))
    sex = db.Column(db.String(255))

    def __init__(self, id, number, title, desc,create_time, end_time, teacher, contact, sex):
        self.id = id
        self.title = title
        self.desc = desc
        self.number = number
        self.create_time = create_time
        self.end_time = end_time
        self.teacher = teacher
        self.contact = contact
        self.sex = sex

    def instance_to_json(self):
        content = {
            "id": self.id,
            "title": self.title,
            "desc": self.desc,
            "number": self.number,
            "score": str(0),
            "end_time": self.end_time.strftime("%Y-%m-%d %H:%M:%S"),
            "create_time": self.create_time.strftime("%Y-%m-%d %H:%M:%S"),
            "teacher": self.teacher,
            "contact": self.contact,
            "sex": self.sex
        }
        return content
