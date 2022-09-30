#!make
MAKEFLAGS += --silent
include .env
export $(shell sed 's/=.*//' .env)

dev:
		act -s GITHUB_TOKEN workflow_dispatch

.PHONY: dev
