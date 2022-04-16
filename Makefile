build:
	go build .

dev: build
	./ping-app

image:
	docker build . -t test:latest

test:
	go test