#!/usr/bin/env python
#-*-coding:utf-8-*-
from sqlalchemy import create_engine
from sqlalchemy import Column,Integer,String

engine = create_engine("sqlite://mydatabase.db",echo=True)
from sqlalchemy.ext.declarative import declearative_base

Base =  declearative_base()

class User(Base):
    __tablename__ = "users"
    id = Column(Integer,primary_key=True)
    name = Column(String)
    fullname = Column(String)
    password = Column(String)
    
    def __init__(self,name,fullname,password):
        self.name = name
        self.fullname = fullname
        self.password = password
    def __repr__(self):
        return "<User(%s,%s,%s)>" % (self.name,self.fullname,self.password)
users_table = User.__tablename__
metadata = Base.metadata

if __name__ == "__main__":
    metadata.create_all(engine)