FROM python:3.7-alpine
MAINTAINER SRP Labs

ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /requirements.txt
RUN pip install -r /requirements.txt