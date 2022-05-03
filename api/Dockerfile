FROM python:3.10

WORKDIR /app

EXPOSE 5050

COPY Pipfile Pipfile.lock ./ 

RUN pip install pipenv
RUN pipenv lock -r > requirments.txt
RUN pip install -r requirments.txt

COPY . ./

CMD ["python", "app.py"]