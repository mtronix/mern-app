DOCKER_COMPOSE_NAME="mern-app"

# Start development
.PHONY: start
start:
	npm start

# Up docker containers (for testing app, use -d in production - daemon)
.PHONY: up
up:
	docker-compose -p $(DOCKER_COMPOSE_NAME) up --build --abort-on-container-exit

# Clear stopped docker containers
.PHONY: clean-containers
clean-containers:
	docker-compose rm $(DOCKER_COMPOSE_NAME)

# Clear environment
.PHONY: clean
clean: clean-containers
	rm -rf node_modules