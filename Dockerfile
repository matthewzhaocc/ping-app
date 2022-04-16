FROM golang:latest AS builder

RUN mkdir /build
WORKDIR /build

COPY . .

ENV GOOS=linux
ENV GOARCH=amd64
ENV CGO_ENABLED=0

RUN go build -o pingapp .

FROM alpine:latest

RUN mkdir /app
WORKDIR /app

COPY --from=builder /build/pingapp /app/pingapp

CMD ["./pingapp"]