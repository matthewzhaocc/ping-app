build:
	go build .

dev: build
	./ping-app

image:
	docker build . -t test:latest

test:
	go test

installdeploydep:
	cd deploy/
	npm install -g aws-cdk
	npm install
	cd ..

deploy:
	cd deploy/ 
	cdk deploy
	cd ..