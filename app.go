package main

import (
	"fmt"
	"os"

	"net/http"

	log "github.com/sirupsen/logrus"
)

func pingHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "pong")
}

func main() {
	var mux = http.NewServeMux()

	log.Warn("Mounting Ping handler")
	mux.HandleFunc("/ping", pingHandler)

	var port string
	if os.Getenv("PORT") != "" {
		port = ":" + os.Getenv("PORT")
	} else {
		port = ":3000"
	}

	log.Warn("Starting application on port", port)
	http.ListenAndServe(port, mux)
}
