package main

import (
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestPingHander(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "https://google.com", nil)
	w := httptest.NewRecorder()

	pingHandler(w, req)

	if want, got := http.StatusOK, w.Result().StatusCode; want != got {
		t.Fatalf("expected a %d, intead got: %d", want, got)
	}

	if w.Body.String() != "pong" {
		t.Fatalf("this is not very pong")
	}
}
