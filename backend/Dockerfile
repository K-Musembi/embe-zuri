# Use an official Python runtime as a base image
FROM python:3.10-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container to current working directory
COPY . .

# To prepare for mysqlclient installation
RUN apt-get update && \
    apt-get install -y \
        gcc \
        default-libmysqlclient-dev \
        libffi-dev \
        pkg-config \
    && rm -rf /var/lib/apt/lists/*

# Install dependencies
RUN pip3 install --upgrade pip
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

# Expose the port the app will run on
EXPOSE 5000

# Run the application
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "app.v2.app:app"]
