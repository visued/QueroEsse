FROM python:3
ADD requirements.txt /app/requirements.txt
WORKDIR /app/
RUN pip install -r requirements.txt
RUN python -m nltk.downloader punkt
RUN python -m nltk.downloader stopwords
ENTRYPOINT ["python"]
CMD ["./app.py","--host=0.0.0.0"]