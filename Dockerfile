FROM thomasharmon808/nodejs:1.0

# Set correct environment variables
ENV HOME /root

# Use a correct init process to avoid zombie processes
# (we want to avoid our app being PID 1)
CMD ["/sbin/my_init"]

# Copy our application into the Docker image
COPY --chown=app:app . /home/app/backend

# Install dependencies now rather than later
WORKDIR /home/app/backend
RUN npm install

# Back end server will run on port 8080, this exposes the internal 8080 port of the Docker image
EXPOSE 8080

# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
